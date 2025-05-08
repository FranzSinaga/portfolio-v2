import { MyNotionItem, NotionDatabaseItem } from '@/types/notion.type'

// Fungsi helper untuk mengekstrak data dari respons Notion
export function parseNotionItem(item: NotionDatabaseItem): MyNotionItem {
  return {
    id: item.id,
    title: item.properties.Title?.title?.[0]?.plain_text || 'Untitled',
    created: item.properties.Created?.created_time || '',
    tags: item.properties.Tags?.multi_select || []
  }
}
