/**
 * 卡片组件
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Card.scss'

/**
 * props属性
 */
interface IProps {
	/**
	 * 自定义类名
	 */
	className?: string
}

/**
 * 组件内部属性
 */
interface IState {
	[key: string]: any
}

export default class Card extends Component<IProps, IState> {
	static defaultProps: IProps = {
		className: '',
	}

	render() {
		console.log('this.props', this.props)
		const { children, className } = this.props
		return <View className={`hd-card-comp ${className || ''}`}>{children}</View>
	}
}
