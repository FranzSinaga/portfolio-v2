import { useRouter } from 'next/navigation'
import { IconArrowLeft } from '@tabler/icons-react'

const GoBackDetailBlog = () => {
  const { push } = useRouter()
  return (
    <p onClick={() => push('/blogs')} className='hover:bg-accent mb-3 flex w-max cursor-pointer items-center gap-x-1 rounded-full px-2 py-1 font-mono'>
      <IconArrowLeft name='ArrowLeft' size={16} />
      Go Back
    </p>
  )
}

export default GoBackDetailBlog
