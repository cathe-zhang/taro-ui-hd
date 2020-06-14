/**
 * tab标签页
 * TODO 底部边框要做平滑过渡动画
 */

import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Tabs.scss'

/**
 * props属性
 */
interface IProps {
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

/**
 * 组件内部属性
 */
interface IState {
	[key: string]: any
}

interface Tabs {
	props: IProps
	state: IState
}

class Tabs extends Component {
	/**
	 * tab切换
	 */
	handleTabItemClick(e) {
		console.log('e', e)
		this.props.onChange && this.props.onChange(e)
	}

	render() {
		const { list, currentTab } = this.props
		return (
			<View className='hd-tabs-comp'>
				{list.map((item, index) => {
					return (
						<View
							className={`tabs-comp-item ${
								currentTab === index ? 'selected' : ''
							}`}
							onClick={this.handleTabItemClick.bind(this, item)}
							key={item.id}
						>
							{item.text}
						</View>
					)
				})}
			</View>
		)
	}
}

export default Tabs as ComponentClass<IProps, IState>
