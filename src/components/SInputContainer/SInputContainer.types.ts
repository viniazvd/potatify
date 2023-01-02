export interface InputContainerType {
  label: string
  modelValue: any
  required?: boolean
  appendInnerIcon?: string
  appendOuterIcon?: string
  prependInnerIcon?: string
  prependOuterIcon?: string
  hint?: string
  errorMessage?: string
  persistentHint?: boolean
  rules?: Array<(value: string) => boolean | string>
  eager?: boolean
}