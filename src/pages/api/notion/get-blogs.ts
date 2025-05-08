import { parseNotionItem } from '@/lib/notion'
import { MyNotionItem, NotionDatabaseItem } from '@/types/notion.type'
import { Client } from '@notionhq/client'
import { NextApiResponse } from 'next'

type Data = {
  items?: MyNotionItem[]
  error?: string
}

export default async function handler(res: NextApiResponse<Data>) {
  // Inisialisasi Notion client
  const notion = new Client({
    auth: process.env.NOTION_API_KEY!
  })

  const databaseId = process.env.NOTION_DATABASE_ID

  try {
    // Query database
    const response = await notion.databases.query({
      database_id: databaseId!,
      filter: {
        property: 'Published',
        checkbox: { equals: true }
      },
      sorts: [{ property: 'Created', direction: 'descending' }]
    })
    console.log(response)
    const items = response.results.map(item => parseNotionItem(item as NotionDatabaseItem))
    res.status(200).json({ items })
  } catch (error) {
    console.error('Error querying Notion database:', error)
    res.status(500).json({ error: 'Failed to query Notion database' })
  }
}
