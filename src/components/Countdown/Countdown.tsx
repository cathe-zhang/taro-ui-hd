/**
 * 倒计时组件
 * TODO 已结束不展示时间
 * TODO 支持毫秒级别
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Block } from '@tarojs/components'
import dayjs from 'dayjs'

import './Countdown.scss'

/**
 * props属性
 */
interface IProps {
	/**
	 * 最大单位级别 day-天 hour-小时 minute-分 second-秒
	 */
	maxLevel: 'day' | 'hour' | 'minute' | 'second'
	/**
	 * 最小单位级别 预留属性 暂时不对此做逻辑处理 day-天 hour-小时 minute-分 second-秒
	 */
	minLevel: 'day' | 'hour' | 'minute' | 'second'
	/**
	 * 剩余时间 单位毫秒
	 */
	leftTime: number
	/**
	 * 结束时间点的时间戳
	 */
	endTime: number
	/**
	 * 在 endTime 基准上加上的分钟数
	 */
	plusTime?: number
	/**
	 * 分隔符类型 cnWord-中文字 colon-冒号
	 */
	dividerType: 'cnWord' | 'colon' | 'square'
	/**
	 * 倒计时结束抛出事件
	 */
	onTimeout: () => void
	/**
	 * 自定义样式对象
	 */
	customStyle: any
	/**
	 * 迁移老组件的预留属性 字体颜色
	 */
	color?: string
	/**
	 * 迁移老组件的预留属性 分隔符颜色
	 */
	splitColor?: string
	/**
	 * 迁移老组件的预留属性 数字包裹盒子圆角像素值 取设计图上的值
	 */
	borderRadius?: number
	/**
	 * 迁移老组件的预留属性 边框颜色
	 */
	borderColor?: string
	/**
	 * 迁移老组件的预留属性 背景颜色
	 */
	background?: string
	/**
	 * 数字盒子样式
	 */
	countItemStyle?: any
	/**
	 * 分隔符左右间隔 取设计图上的值
	 */
	splitMargin?: number
	/**
	 * 天分隔符类型 inner-在数字盒子内 default-默认 同其他
	 */
	dayDividerType?: 'inner' | 'default'
}

/**
 * 组件内部属性
 */
interface IState {
	/**
	 * 展示时间 单位秒
	 */
	displayTime: number
	/**
	 * 剩余天数
	 */
	day: number
	/**
	 * 剩余小时
	 */
	hour: number
	/**
	 * 剩余分钟
	 */
	minute: number
	/**
	 * 剩余秒
	 */
	second: number
}

class HdCountdown extends Component<IProps, IState> {
	static defaultProps: IProps = {
		leftTime: 0,
		endTime: 0,
		dividerType: 'cnWord',
		maxLevel: 'day',
		minLevel: 'second',
		onTimeout: () => {
			console.log('onTimeout')
		},
		customStyle: {},
	}
	constructor(props) {
		super(props)
		this.state = {
			displayTime: 0,
			day: 0,
			hour: 0,
			minute: 0,
			second: 0,
		}
	}

	componentWillMount() {
		console.log('into componentWillMount', this.props)
		let displayTime = 0
		const { leftTime, endTime, plusTime } = this.props

		// 通过传入的剩余时间或截止时间计算出初始化的剩余秒数
		if (leftTime) {
			displayTime = Math.floor(leftTime / 1000)
		} else if (endTime) {
			let tempEndTime = endTime
			// 附加时间处理
			if (plusTime) {
				tempEndTime = dayjs(endTime).add(plusTime, 'minute').toDate().getTime()
			}
			displayTime = Math.floor((tempEndTime - new Date().getTime()) / 1000)
		}

		// 通过初始化的剩余秒数初始化时间展示格式
		const tempTime = this.calcTime(displayTime)
		this.setState(
			{
				displayTime,
				day: tempTime.day,
				hour: tempTime.hour,
				minute: tempTime.minute,
				second: tempTime.second,
			},
			() => {
				// 初始化完成后开始倒计时
				this.startInterval()
			}
		)
	}

	componentWillReceiveProps(nextProps) {
		clearInterval(this.interval)
		let displayTime = 0
		const { leftTime, endTime, plusTime } = nextProps

		// 通过传入的剩余时间或截止时间计算出初始化的剩余秒数
		if (leftTime) {
			displayTime = Math.floor(leftTime / 1000)
		} else if (endTime) {
			let tempEndTime = endTime
			// 附加时间处理
			if (plusTime) {
				tempEndTime = dayjs(endTime).add(plusTime, 'minute').toDate().getTime()
			}
			displayTime = Math.floor((tempEndTime - new Date().getTime()) / 1000)
		}

		// 通过初始化的剩余秒数初始化时间展示格式
		const tempTime = this.calcTime(displayTime)
		this.setState(
			{
				displayTime,
				day: tempTime.day,
				hour: tempTime.hour,
				minute: tempTime.minute,
				second: tempTime.second,
			},
			() => {
				// 初始化完成后开始倒计时
				this.startInterval()
			}
		)
	}

	componentWillUnmount() {
		console.error(this.interval)
		console.error('倒计时结束组件是否执行卸载')
		clearInterval(this.interval)
	}

	interval: any

	/**
	 * 开始倒计时逻辑
	 */
	startInterval() {
		this.interval = setInterval(() => {
			// console.log('into interval', this.state.displayTime)
			const displayTime = this.calcTime(this.state.displayTime)
			if (this.state.displayTime - 1 < 0) {
				// 倒计时结束后抛出事件给父组件并清除定时器
				clearInterval(this.interval)
				this.setState({
					displayTime: 0,
					day: 0,
					hour: 0,
					minute: 0,
					second: 0,
				})
				this.props.onTimeout()
				return
			} else {
				this.setState({
					displayTime: this.state.displayTime - 1,
					day: displayTime.day,
					hour: displayTime.hour,
					minute: displayTime.minute,
					second: displayTime.second,
				})
			}
		}, 1000)
	}

	/**
	 * 计算时间
	 * @param seconds 剩余秒数
	 */
	calcTime(seconds) {
		const { maxLevel } = this.props
		let day = Math.floor(seconds / (60 * 60 * 24))
		let hour = Math.floor(seconds / (60 * 60)) - day * 24
		let minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60
		let second =
			Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60

		if (seconds <= 0) {
			day = 0
			hour = 0
			minute = 0
			second = 0
		}
		const formattedTimeObj = {
			day: day,
			hour: maxLevel === 'hour' ? day * 24 + hour : hour,
			minute:
				maxLevel === 'minute'
					? day * 24 * 60 * 60 + hour * 60 + minute
					: minute,
			second:
				maxLevel === 'second'
					? day * 24 * 60 * 60 + hour * 60 * 60 + minute * 60 + second
					: second,
		}
		return formattedTimeObj
	}

	/**
	 * 渲染倒计时counter box
	 * @param level couter级别
	 * @param value couter值
	 */
	renderCounter(level: 'day' | 'hour' | 'minute' | 'second', value: number) {
		const { countItemStyle, dayDividerType } = this.props
		return (
			<View className='counter-item' style={{ ...countItemStyle }}>
				{value > 9 ? value : `0${value}`}
				{dayDividerType === 'inner' && level === 'day' ? '天' : ''}
			</View>
		)
	}

	/**
	 * 渲染分隔符
	 * @param level 分隔符级别
	 */
	renderDivider(level: 'day' | 'hour' | 'minute' | 'second') {
		const levelMap = {
			day: '天',
			hour: '时',
			minute: '分',
			second: '秒',
		}
		const { dividerType, splitColor, dayDividerType, splitMargin } = this.props
		return (
			<View
				className='counter-divider'
				style={{
					color: splitColor || '#FE504D',
					margin:
						dayDividerType === 'inner' && level === 'day'
							? `0 ${Taro.pxTransform(splitMargin || 5)} 0 0`
							: `0 ${Taro.pxTransform(splitMargin || 5)}`,
				}}
			>
				{dividerType === 'cnWord' ? (
					levelMap[level]
				) : level === 'second' ||
				  (dayDividerType === 'inner' && level === 'day') ? (
					''
				) : dividerType === 'square' ? (
					<View className='square-divider'>
						<View
							className='square-divider-item'
							style={{ backgroundColor: splitColor || '#333' }}
						></View>
						<View
							className='square-divider-item'
							style={{ backgroundColor: splitColor || '#333' }}
						></View>
					</View>
				) : (
					':'
				)}
			</View>
		)
	}

	render() {
		const { day, hour, minute, second } = this.state
		const { maxLevel, countItemStyle } = this.props
		return (
			<View
				className='hd-countdown-comp'
				style={
					countItemStyle
						? {
								height: countItemStyle ? countItemStyle.height : '',
						  }
						: {}
				}
			>
				{maxLevel === 'day' ? (
					<Block>
						{this.renderCounter('day', day)}
						{this.renderDivider('day')}
					</Block>
				) : null}
				{['day', 'hour'].includes(maxLevel) && (
					<Block>
						{this.renderCounter('hour', hour)}
						{this.renderDivider('hour')}
					</Block>
				)}
				{['day', 'hour', 'minute'].includes(maxLevel) && (
					<Block>
						{this.renderCounter('minute', minute)}
						{this.renderDivider('minute')}
					</Block>
				)}
				{this.renderCounter('second', second)}
				{this.renderDivider('second')}
			</View>
		)
	}
}

export default HdCountdown
