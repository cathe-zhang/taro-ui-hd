import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import HdBackToTop from '~/components/BackToTop/BackToTop'
import HdCard from '~/components/Card/Card'
import HdCountdown from '~/components/Countdown/Countdown'
import HdNoData from '~/components/Nodata/Nodata'
import HdPaging from '~/components/Paging/Paging'
import HdModal from '~/components/Popup/Modal'
import HdTabs from '~/components/Tabs/Tabs'
import './index.scss'

type PageStateProps = {
	counter: {
		counter: number
		increment: Function
		decrement: Function
		incrementAsync: Function
	}
}

type PageState = {
	mobileText: string // 手机号归属地展示文字
	modalVisible: boolean
}

interface Index {
	props: PageStateProps
	state: PageState
}

@inject('counter')
@observer
class Index extends Component {
	state = {
		mobileText: '',
		modalVisible: true,
	}

	/**
	 * 指定config的类型声明为: Taro.Config
	 *
	 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
	 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
	 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
	 */
	config: Config = {
		navigationBarTitleText: '首页',
	}

	handleTabChange(e) {
		console.log('handleTabChange', e)
	}

	render() {
		const { mobileText, modalVisible } = this.state
		console.log('mobileText', mobileText)
		return (
			<View className='index'>
				<HdBackToTop visible />
				<HdCard />
				<HdCountdown leftTime={5000} />
				<HdNoData text='暂无数据' height={800} color='#ccc' />
				<HdPaging hasMore />
				<HdModal
					visible={modalVisible}
					onClose={() => this.setState({ modalVisible: false })}
				>
					这是弹窗内容
				</HdModal>
				<HdTabs
					currentTab={1}
					list={[
						{
							text: 'tab1',
							id: 0,
						},
						{
							text: 'tab2',
							id: 1,
						},
					]}
					onChange={this.handleTabChange.bind(this)}
				/>
			</View>
		)
	}
}

export default Index as ComponentType
