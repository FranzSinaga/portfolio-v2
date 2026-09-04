export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function truncate(value: string, length = 10) {
  return value.length > length ? value.slice(0, length) + '...' : value
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

interface formatTextParam {
  format: string
  text: string
  isLink?: boolean
  linkFields?: { linkType: string; newTab: string; url: string; [k: string]: string }
  index?: number
}

export const formatText = ({ format, text, isLink, linkFields, index }: formatTextParam) => {
  const classes = []

  if (Number(format) & 1) classes.push('font-bold') // Bold
  if (Number(format) & 2) classes.push('italic') // Italic
  if (Number(format) & 4) classes.push('line-through') // Strikethrough
  if (Number(format) & 8) classes.push('underline') // Underline

  const isCode = (Number(format) & 16) > 0

  if (isLink)
    return (
      <span key={index}>
        <a href={linkFields?.url} target={linkFields?.newTab ? '_blank' : '_self'} className='text-sm text-blue-400 hover:underline'>
          {text}
        </a>
      </span>
    )

  if (isCode)
    return (
      <code className='rounded bg-slate-700 p-0.5 text-white' key={index}>
        {text}
      </code>
    )

  return (
    <span key={index} className={classes.join(' ')}>
      {text}
    </span>
  )
}
