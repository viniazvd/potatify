import { ref } from 'vue'

const createUUID = (): string => Math.floor(Math.random() * 9999999).toString()

type Type = 'info' | 'error' | 'warning' | 'success'

export interface Feedback {
  id: string
  type: Type
  title?: string
  message: string
  duration?: number
  autoClose?: boolean
}

type Options = {
  id?: string
  type: Type
  title?: string
  message: string
  duration?: number
  autoClose?: boolean
}

export type CreateFeedback = { (options: Options): void }
// export const CREATE_FEEDBACK: InjectionKey<Options> = Symbol('create-feedback')

export default function useFeedbacks() {
  const feedbacks = ref<Feedback[]>([])

  const createFeedback: CreateFeedback = (options: Options) => {
    feedbacks.value.push({ ...options, id: createUUID() })
  }

  const removeFeedbacks = (id: string) => {
    feedbacks.value = feedbacks.value.filter(item => item.id !== id)
  }

  return { feedbacks, createFeedback, removeFeedbacks }
}