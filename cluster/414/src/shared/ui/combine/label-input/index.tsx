'use client'

import { FC, useId } from 'react'
import {
	Input,
	InputProps,
	Label,
	LabelError,
} from 'cluster/microfrontends/src/shared/ui/index'

interface LabelInputProps extends InputProps {
	required?: boolean
	label: string
	error?: string
	variant?: 'field' | 'password'
}

export const LabelInput: FC<LabelInputProps> = ({
	required,
	label,
	error,
	...rest
}) => {
	const id = useId()

	return (
		<>
			<Label htmlFor={id} required={required}>
				{label}
			</Label>
			<Input id={id} required={required} {...rest} />
			{error && <LabelError>{error}</LabelError>}
		</>
	)
}
