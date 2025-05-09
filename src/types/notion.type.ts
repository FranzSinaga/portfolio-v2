/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { BaseRes } from './api.type'
export interface NotionPropertyValueMap {
  [key: string]: any
}

// Tipe untuk item database
export interface NotionDatabaseItem {
  id: string
  created_time: string
  last_edited_time: string
  properties: NotionPropertyValueMap
  url: string
}

export interface MyNotionItem {
  id: string
  title: string
  created?: string
  tags?: {
    id: string
    color: string
    name: string
  }[]
}

export interface NotionItemsRes extends BaseRes<{ items: MyNotionItem[] }> {}

export interface NotionBlockDetailRes {
  html?: string
  error?: string
}
