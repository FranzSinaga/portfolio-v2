import NotionDetail from '@/components/blogs/notion-detail'

export default async function BlogDetailPage() {
  return (
    <div className='mx-auto mt-5 max-w-[1200px]'>
      <h3 className='font-mono font-bold'>{'Blogs'}</h3>
      <NotionDetail />
    </div>
  )
}
