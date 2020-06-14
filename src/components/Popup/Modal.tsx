/**
 * 基础弹窗组件
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Modal.scss'

/**
 * props属性
 */
interface IProps {
	/**
	 * 内容区位置 center-居中 bottom-底部
	 */
	positionType: 'center' | 'bottom'
	/**
	 * 标题
	 */
	title: string
	/**
	 * 弹窗是否可见
	 */
	visible: boolean
	/**
	 * 是否展示头部标题
	 */
	showHeader?: boolean
	/**
	 * 是否展示关闭按钮
	 */
	showCloseBtn?: boolean
	/**
	 * 关闭弹窗回调
	 */
	onClose: () => void
	/**
	 * 弹窗容器类名
	 */
	className?: string
	/**
	 * 是否展示遮罩
	 */
	mask: boolean
	/**
	 * 点击蒙层是否允许关闭
	 */
	maskClosable: boolean
	/**
	 * 显示底部
	 */
	showfooter: boolean
	/**
	 * 确认按钮文字
	 */
	okText?: string
	/**
	 * 底部内容
	 */
	footer?: any
	/**
	 * 确认按钮点击回调
	 */
	onOk?: () => void
}

class HdModal extends Component<IProps, {}> {
	static defaultProps: IProps = {
		positionType: 'bottom',
		title: '标题',
		visible: false,
		onClose: () => {
			console.log('handleClose')
		},
		showHeader: true,
		showCloseBtn: true,
		mask: true,
		maskClosable: true,
		okText: '知道了',
		showfooter: false,
	}

	constructor(props) {
		super(props)
	}

	handleClosebtnClick() {
		this.props.onClose()
	}

	render() {
		const {
			positionType,
			children,
			title,
			visible,
			showCloseBtn,
			showHeader,
			className,
			mask,
			maskClosable,
			showfooter,
		} = this.props
		return visible ? (
			<View className={`hd-modal-comp ${className}`}>
				{/* 背景 */}
				{mask && (
					<View
						className='modal-comp-overlay'
						onClick={maskClosable && this.handleClosebtnClick.bind(this)}
					></View>
				)}
				<View className={`modal-comp-main ${positionType}`}>
					{showHeader && (
						<View className='modal-comp-header'>
							<View className='modal-comp-title'>{title}</View>
						</View>
					)}
					{showCloseBtn && (
						<View
							className='modal-comp-close-btn iconfont'
							onClick={this.handleClosebtnClick.bind(this)}
						>
							&#xe608;
						</View>
					)}
					<View className='modal-comp-content'>{children}</View>
					{/* 底部按钮 */}
					{showfooter && (
						<View className='modal-footer' onClick={this.props.onOk}>
							知道了
						</View>
					)}
				</View>
			</View>
		) : null
	}
}

export default HdModal
