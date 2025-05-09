import NotionList from '@/components/blogs/notion-list'

export const metadata = {
  title: 'Franz | Blogs'
}
export default async function BlogPage() {
  return (
    <div className='mx-auto max-w-[1200px]'>
      <div className='mx-auto max-w-4xl px-4 py-8'>
        <div className='mb-3'>
          <h3 className='font-mono font-bold'>Blogs</h3>
          <p>{"This is where I share everything I'm learning."}</p>
        </div>
        <NotionList />
      </div>
    </div>
  )
}
