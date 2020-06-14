import { ComponentClass } from 'react'

export interface CountdownProps {
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

declare const Countdown: ComponentClass<CountdownProps>

export default Countdown
