export interface httpResponse<T> {
    statusCode: number,
    body: T | string
}