/* eslint-disable @typescript-eslint/no-explicit-any */

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

export interface NotionBlockDetailRes {
  html?: string
  error?: string
}
