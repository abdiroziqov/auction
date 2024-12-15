export interface IBreadcrumb {
  title: string
  link: string
}

export interface IFaq {
  question: string
  answer: string
}

type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[]

export type TClassName = TClass | TClass[]

export type TButtonVariants = 'border' | 'orange' | 'disabled'

export type TButtonSizes = 'sm' | 'md'
