export interface BaseRes<T> {
  error?: string
  message?: string
  data?: T
}
