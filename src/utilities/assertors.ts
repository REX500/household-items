// interfaces
import { SelectOption } from '../types/select'
import { IApiError } from '../types/api'

export function assertValueIsObject(
	value: unknown
): asserts value is Record<string, unknown> {
	if (typeof value !== 'object') {
		throw new Error('Expected value to be an object!')
	}
}

export function assertValueIsString(value: unknown): asserts value is string {
	if (typeof value !== 'string') {
		throw new Error('Expected value to be a string!')
	}
}

export function assertValueIsSelectOption(
	object: Record<string, unknown>
): asserts object is SelectOption {
	const hasValue = 'value' in object
	const hasLabel = 'label' in object

	const hasKeys = hasValue && hasLabel

	if (!hasKeys) throw new Error('Expected object to be of type SelectOption')
}

export function assertValueIsApiError(
	object: Record<string, unknown>
): asserts object is IApiError {
	const hasError = 'error' in object
	const hasMessage = 'message' in object
	const hasStatusCode = 'statusCode' in object

	const hasKeys = hasError && hasMessage && hasStatusCode

	if (!hasKeys) throw new Error('Expected object to be of type IApiError')
}
