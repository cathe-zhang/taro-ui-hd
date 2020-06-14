import { ComponentClass } from 'react'

export interface CardProps {
	/**
	 * 自定义类名
	 */
	className?: string
}

declare const Card: ComponentClass<CardProps>

export default Card
