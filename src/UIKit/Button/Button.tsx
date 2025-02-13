import React, { ReactNode, useRef, useState } from 'react'
import Loader from '../Loader/Loader'

interface ButtonData extends React.ComponentProps<'button'> {
	title: any
	clickHandler: any
	buttonType?: string
	svg?: any
}

function Button(props: ButtonData) {
	const { title, buttonType, clickHandler, svg, ...buttonProps } = props
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const [loader, setLoader] = useState<ReactNode>(
		<div>
			<Loader />
		</div>
	)

	const loadOnClick = async () => {
		setIsLoading(true)
		const buttonWidth = (buttonRef.current?.getBoundingClientRect().width ?? 40) - 40
		console.log(buttonRef.current)
		const loaderElement = (
			<div style={{ width: buttonWidth + 'px' }}>
				<Loader />
			</div>
		)
		setLoader(loaderElement)
		await clickHandler()
		setIsLoading(false)
	}

	const buttonContent = isLoading ? loader : title

	return (
		<button
			className={buttonType ? `button button_${buttonType}` : `button`}
			disabled={isLoading}
			onClick={loadOnClick}
			ref={buttonRef}
			{...buttonProps}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				{svg && <div style={{ marginRight: '5px' }}>{svg}</div>}
				{buttonContent}
			</div>
		</button>
	)
}

export default Button
