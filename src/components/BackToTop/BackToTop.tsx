/**
 * 返回顶部组件
 * 由于taro框架中在组件中无法监听onPageScroll事件，所以需要在页面中监听后控制传入的visible属性
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './BackToTop.scss'

/**
 * props属性
 */
interface IProps {
	/**
	 * 指定图标 可以是base64或网络图片
	 */
	icon?: string
	/**
	 * 图标颜色
	 */
	color: string
	/**
	 * 是否可见
	 */
	visible: boolean
	/**
	 * 点击事件回调
	 */
	onClick: () => void
}

class HdBackToTop extends Component<IProps, {}> {
	static defaultProps: IProps = {
		color: '#45aafa',
		visible: false,
		onClick: Function,
	}

	constructor(props) {
		super(props)
	}

	/**
	 * 点击事件回调
	 */
	handleClick() {
		window && window.scrollTo(0, 0)
		this.props.onClick && this.props.onClick()
	}

	render() {
		const { visible, color, icon } = this.props
		return (
			visible && (
				<View
					className='hd-backtotop-comp fade-in'
					onClick={this.handleClick.bind(this)}
				>
					{icon ? (
						<Image src={icon} />
					) : (
						<svg
							t='1592145080393'
							className='icon'
							viewBox='0 0 1024 1024'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							p-id='5163'
							width='200'
							height='200'
						>
							<path
								d='M969.1136 95.232H54.8864a26.9312 26.9312 0 0 1 0-54.272h914.2272a26.9312 26.9312 0 1 1 0 53.76zM727.04 983.04H296.96a26.8288 26.8288 0 0 1-26.9312-26.9312V581.5296H135.5776a26.9312 26.9312 0 0 1-18.432-46.4896L493.568 181.9648a26.8288 26.8288 0 0 1 36.7616 0l376.5248 352.9728a26.9312 26.9312 0 0 1-18.432 46.4896H753.9712v374.272A26.8288 26.8288 0 0 1 727.04 983.04z m-403.2512-54.272h376.4224V554.5984A26.8288 26.8288 0 0 1 727.04 527.6672h93.3888L512 238.4896 203.5712 527.6672H296.96a26.8288 26.8288 0 0 1 26.9312 26.9312z'
								fill={color}
								p-id='5164'
							></path>
						</svg>
					)}
				</View>
			)
		)
	}
}

export default HdBackToTop
