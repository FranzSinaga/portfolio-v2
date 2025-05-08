import { parseNotionItem } from '@/lib/notion'
import { MyNotionItem, NotionDatabaseItem } from '@/types/notion.type'
import { Client } from '@notionhq/client'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  items?: MyNotionItem[]
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY!
  })

  const databaseId = process.env.NOTION_DATABASE_ID

  try {
    if (req.method === 'GET') {
      const response = await notion.databases.query({
        database_id: databaseId!,
        filter: {
          property: 'Published',
          checkbox: { equals: true }
        },
        sorts: [{ property: 'Created', direction: 'descending' }]
      })
      const items = response.results.map(item => parseNotionItem(item as NotionDatabaseItem))
      res.status(200).json({ items })
    } else {
      res.status(405).json({ error: 'Method Not Allowed' })
    }
  } catch (error) {
    console.error('Error querying Notion database:', error)
    res.status(500).json({ error: 'Failed to query Notion database' })
  }
}
