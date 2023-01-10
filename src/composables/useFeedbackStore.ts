import { defineStore } from 'pinia'
import { useUUID } from './useUUID'
import {FeedbackAvatar} from "@/components/SFeedbackStore/interfaces/FeedbackAvatar.interface";

const { generateUUID } = useUUID();

const createUUID = (): string => generateUUID()

// type Type = 'info' | 'error' | 'warning' | 'success'

interface Options {
  message: string
  avatar?: FeedbackAvatar
  title?: string
  description?: string
  duration?: number
  autoClose?: boolean
  xPosition?: "left" | "right" | "center"
  yPosition?: "top" | "bottom" | "middle"
}


export interface Feedback extends Options {
  id: string
}

export type CreateFeedback = { (options: Options): void }

export const useFeedbackStore = defineStore("feedbacks", {
  state: () => ({
    feedbacks: [] as Feedback[]
  }),

  actions: {
    applyDelay(id: string, duration: number = 1000) {
      setTimeout(() => {
        this.removeFeedbacks(id);
      }, duration)
    },
    createFeedback (options: Options) {
      options.yPosition = options.yPosition ?? "top";
      options.xPosition = options.xPosition ?? "right";

      const id = createUUID();

      this.feedbacks.push({ ...options, id });

      if (this.feedbacks.length > 5) {
        this.feedbacks.pop();
      }

      this.applyDelay(id, options.duration)
    },
    removeFeedbacks(id: string) {
      this.feedbacks = this.feedbacks.filter(item => item.id !== id)
    }
  }
})