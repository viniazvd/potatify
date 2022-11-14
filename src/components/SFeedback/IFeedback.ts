
export interface Feedback {
  id: string
  type: string
  title: string
  message: string
  duration: number
  autoClose: boolean
}

export type CreateNotification = {
  (options: {
    type?: string
    title?: string
    message?: string
    autoClose?: boolean
    duration?: number
  }): void
}