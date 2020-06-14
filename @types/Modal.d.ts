import { ComponentClass } from 'react'

export interface ModalProps {
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

declare const Modal: ComponentClass<ModalProps>

export default Modal
