import { ComponentClass } from 'react'

export interface NoDataProps {
	/**
	 * 缺省文字颜色
	 */
	color: string
	/**
	 * 缺省占位盒子高度
	 */
	height?: number // 高度
	/**
	 * 指定图标 仅支持图片 可传入base64或在线图片
	 */
	icon?: string
	/**
	 * 缺省文字
	 */
	text?: string
}

declare const NoData: ComponentClass<NoDataProps>

export default NoData
