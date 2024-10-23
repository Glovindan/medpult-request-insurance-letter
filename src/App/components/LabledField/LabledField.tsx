import React, { useState } from 'react'

function LabledField({ children, label }: { children?: any, label: string }) {

	return (
		<div className="labled-field">
			<div className="labled-field__label">
				{label}
			</div>
			<div className="labled-field__input">
				{children && children}
			</div>
		</div>
	)
}

export default LabledField
