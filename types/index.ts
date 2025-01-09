export interface IBreadcrumb {
  title: string
  link: string
}

export interface IProduct {
  id: number
  label: string
  title: string
  price: number | string
  bid: number | string
  image: string
  time: string
  time_remaining: string
  current_bid: number | string
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

export type TButtonVariants = 'border' | 'orange' | 'disabled' | 'grayBorder'

export type TButtonSizes = 'sm' | 'md'
