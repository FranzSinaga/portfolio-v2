import LucideIcon from './lucide-icon'

const SocialList = () => {
  return (
    <div className='mt-5 flex flex-row flex-wrap items-center gap-[10px]'>
      <a
        href='mailto:sinagafranz12@gmail.com'
        className='flex cursor-pointer items-center gap-x-2 rounded-full bg-gray-400 bg-opacity-40 px-6 py-2 transition-opacity hover:bg-opacity-50'
      >
        <LucideIcon name='Mail' size={16} />
        <span className='tracking-wider'>sinagafranz@gmail.com</span>
      </a>
      <a
        href='https://github.com/FranzSinaga'
        target='_BLANK'
        className='flex cursor-pointer items-center rounded-full bg-gray-400 bg-opacity-40 p-2.5 transition-opacity duration-200 hover:bg-opacity-50'
      >
        <LucideIcon name='Github' size={16} />
      </a>
      <a
        href='https://www.linkedin.com/in/franz-sinaga/'
        target='_BLANK'
        className='flex cursor-pointer items-center rounded-full bg-gray-400 bg-opacity-40 p-2.5 transition-opacity duration-200 hover:bg-opacity-50'
      >
        <LucideIcon name='Linkedin' size={16} />
      </a>
    </div>
  )
}

export default SocialList
