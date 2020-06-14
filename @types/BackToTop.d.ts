import { ComponentClass } from 'react'

export interface BackToTopProps {
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

declare const BackToTop: ComponentClass<BackToTopProps>

export default BackToTop
