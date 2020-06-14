import { ComponentClass } from 'react'

export interface NoDataProps {
	height: number
	icon: string
	text: string
}

declare const NoData: ComponentClass<NoDataProps>

export default NoData
