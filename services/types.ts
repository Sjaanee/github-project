export interface ErrorItem {
  msg: string
  errorCode: number
}

export interface Response<T = any> {
  response: T
  success: boolean
  message?: string
  httpCode: number
}

export * from './member/types'