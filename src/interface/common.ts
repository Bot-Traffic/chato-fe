import type { Component } from 'vue'
export interface IResponse<T> {
  [x: string]: any
  code?: number
  message?: string
  data: T
  pagination?: IPage
  meta?: {
    pagination?: IPage
  }
}

export interface IPage {
  page: number
  total: number
  page_count: number
  page_size?: number
  size?: number
}

export type IPageFilter<T> = Pick<IPage, 'page' | 'page_size'> & {
  [key in keyof T]?: T[key]
}

export interface IMenuItem {
  title?: string
  activeKey?: string
  routeName?: string
  icon?: Component
  children?: IMenuItem[]
}

export interface TPagingList {
  fields?: string
  filter?: string
  page?: number
  size?: number
  total?: number
}
