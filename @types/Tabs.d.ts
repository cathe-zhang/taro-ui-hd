import { ComponentClass } from 'react'

export interface TabsProps {
	/**
	 * 子元素
	 */
	children?: any
	/**
	 * 初始选中的tab id
	 */
	initTab: number
	/**
	 * tab数组
	 */
	list: Array<{
		/**
		 * 标签文字
		 */
		text: string
		/**
		 * 标签id
		 */
		id: number
	}>
	/**
	 * tab切换事件
	 */
	onChange: (e: any) => void
}

declare const Tabs: ComponentClass<TabsProps>

export default Tabs
