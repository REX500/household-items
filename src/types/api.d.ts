export interface IApiRes {
	result: unknown
	page: number
	pageSize: number
	pages: number
	total: number
}

export type IApiError = {
	error: string
	message: string
	statusCode: number
}
