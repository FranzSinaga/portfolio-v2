import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

const SocialList = () => {
  return (
    <div className='flex flex-row flex-wrap items-center gap-3'>
      <a
        href='mailto:sinagafranz12@gmail.com'
        className='flex cursor-pointer items-center gap-x-2 rounded-full px-6 py-2.5 transition-colors duration-200 border hover:shadow bg-muted-foreground/15 hover:bg-muted-foreground/40'
      >
        <IconMail size={20} />
        <span className='tracking-wider'>sinagafranz12@gmail.com</span>
      </a>
      <a
        href='https://github.com/FranzSinaga'
        target='_BLANK'
        className='flex cursor-pointer items-center rounded-full p-2.5 transition-colors duration-200 bg-muted-foreground/15 hover:bg-muted-foreground/40 border'
      >
        <IconBrandGithub size={20} />
      </a>
      <a
        href='https://www.linkedin.com/in/franzsng/'
        target='_BLANK'
        className='flex cursor-pointer items-center rounded-full p-2.5 transition-colors duration-200 bg-muted-foreground/15 hover:bg-muted-foreground/40 border'
      >
        <IconBrandLinkedin size={20} />
      </a>
    </div>
  )
}

export default SocialList
