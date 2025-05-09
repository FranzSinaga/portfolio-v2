import { MyNotionItem, NotionDatabaseItem } from '@/types/notion.type'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

// Fungsi helper untuk mengekstrak data dari respons Notion
export function parseNotionItem(item: NotionDatabaseItem): MyNotionItem {
  return {
    id: item.id,
    title: item.properties.Title?.title?.[0]?.plain_text || 'Untitled',
    created: item.properties.Created?.created_time || '',
    tags: item.properties.Tags?.multi_select || []
  }
}

interface BookmarkMetadata {
  url: string
  title: string
  description?: string
  favicon?: string | null
  thumbnail?: string | null
}

export const extractBookmarkMetadata = (block: BlockObjectResponse): BookmarkMetadata | null => {
  // For a bookmark block from Notion API
  if (block.type === 'bookmark' && 'bookmark' in block) {
    const bookmarkBlock = block as BlockObjectResponse & {
      bookmark: {
        url: string
        caption?: Array<{ plain_text: string }>
        description?: string
        favicon?: string
        thumbnail?: string
      }
    }

    return {
      url: bookmarkBlock.bookmark.url,
      title: bookmarkBlock.bookmark.caption?.[0]?.plain_text || bookmarkBlock.bookmark.url,
      description: bookmarkBlock.bookmark.description || '',
      favicon: bookmarkBlock.bookmark.favicon || null,
      thumbnail: bookmarkBlock.bookmark.thumbnail || null
    }
  }

  return null
}
