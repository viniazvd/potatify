type StepOptions = {
  title: string,
  icon?: string,
  error?: boolean
}

export type Step = {
  [key: string]: StepOptions
}
