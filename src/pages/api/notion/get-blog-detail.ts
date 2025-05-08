import { NotionBlockDetailRes } from '@/types/notion.type'
import { Client } from '@notionhq/client'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NextApiRequest, NextApiResponse } from 'next'
import { NotionToMarkdown } from 'notion-to-md'

export default async function handler(req: NextApiRequest, res: NextApiResponse<NotionBlockDetailRes>) {
  // Inisialisasi Notion client
  const notion = new Client({
    auth: process.env.NOTION_API_KEY!
  })
  const n2m = new NotionToMarkdown({ notionClient: notion })

  try {
    const { pageId } = req.query
    const _pageId = pageId!.toString()

    const blocks = await notion.blocks.children
      .list({
        block_id: _pageId,
        page_size: 100
      })
      .then(res => res.results as BlockObjectResponse[])

    const mdBlocks = await n2m.blocksToMarkdown(blocks as BlockObjectResponse[])
    const markdown = n2m.toMarkdownString(mdBlocks)

    res.status(200).json({ html: markdown.parent })
  } catch (error) {
    console.error('Error querying Notion database:', error)
    res.status(500).json({ error: 'Failed to query Notion database' })
  }
}
