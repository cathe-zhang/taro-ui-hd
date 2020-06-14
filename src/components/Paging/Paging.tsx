/**
 * 分页组件
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Paging.scss'

/**
 * props属性
 */
interface IProps {
	/**
	 * 是否还有更多数据
	 */
	hasMore: boolean
}

/**
 * 组件内部属性
 */
interface IState {
	[key: string]: any
}

export default class Paging extends Component<IProps, IState> {
	static defaultProps: IProps = {
		hasMore: false,
	}

	render() {
		const { hasMore } = this.props
		console.log('hasMore, showPaging', hasMore)
		return (
			<View className='hd-paging-comp'>
				{hasMore ? (
					<View className='hd-paging-comp-status-loading'>正在加载更多...</View>
				) : (
					<View className='hd-paging-comp-status-finished'>
						—— 我是有底线的 ——
					</View>
				)}
			</View>
		)
	}
}
