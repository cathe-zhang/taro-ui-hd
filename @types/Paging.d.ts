import { ComponentClass } from 'react'

export interface PagingProps {
	/**
	 * 是否还有更多数据
	 */
	hasMore: boolean
}

declare const Paging: ComponentClass<PagingProps>

export default Paging
