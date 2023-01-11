import { ref, InjectionKey } from 'vue'

const createUUID = (): string => Math.floor(Math.random() * 9999999).toString()

type Type = 'info' | 'error' | 'warning' | 'success'

export interface IFeedback {
  id: string
  type: Type
  title?: string
  message: string
  duration?: number
  autoClose?: boolean
  prependIcon?: string
}

export interface IOptions {
  id?: string
  type: Type
  title?: string
  message: string
  duration?: number
  autoClose?: boolean
  prependIcon?: string
}

export type CreateFeedback = { (options: IOptions): void }
// export const CREATE_FEEDBACK: InjectionKey<Options> = Symbol('create-feedback')

export function useFeedback() {
  const feedbacks = ref<IFeedback[]>([])

  const createFeedback: CreateFeedback = (options: IOptions) => {
    feedbacks.value.push({ ...options, id: createUUID() })
  }

  const removeFeedbacks = (id: string) => {
    feedbacks.value = feedbacks.value.filter(item => item.id !== id)
  }

  return { feedbacks, createFeedback, removeFeedbacks }
}