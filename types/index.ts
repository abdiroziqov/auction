export interface IBreadcrumb {
  title: string
  link: string
}

type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[]

export type TClassName = TClass | TClass[]

export type TButtonVariants = 'border' | 'orange'

export type TButtonSizes = 'sm' | 'md'
