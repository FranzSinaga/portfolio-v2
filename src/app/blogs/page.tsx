import NotionList from '@/components/blogs/notion-list'

export const metadata = {
  title: 'Franz | Blogs'
}
export default async function BlogPage() {
  return (
    <div className='mx-auto mt-5 max-w-[1200px]'>
      <h3 className='font-mono font-bold'>{'Blogs'}</h3>
      <NotionList />
    </div>
  )
}
