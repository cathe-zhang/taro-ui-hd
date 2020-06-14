import { ComponentClass } from 'react'

export interface TabsProps {
	/**
	 * 子元素
	 */
	children?: any
	/**
	 * 当前tab索引
	 */
	currentTab: number
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
