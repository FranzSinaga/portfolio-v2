import NotionDetail from '@/components/blogs/notion-detail'

export default async function BlogDetailPage() {
  return (
    <div className='mx-auto max-w-[1200px]'>
      <div className='mx-auto max-w-4xl px-4 py-8'>
        <NotionDetail />
      </div>
    </div>
  )
}
