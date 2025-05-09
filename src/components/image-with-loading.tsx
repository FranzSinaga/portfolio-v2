'use client'
import { useState } from 'react'
import LucideIcon from './lucide-icon'

interface Props {
  src: string
  alt: string
}

const ImageWithLoading = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setIsError(true)
  }

  return (
    <span className='w-full'>
      {isLoading && (
        <span className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded p-20'>
          <LucideIcon name='LoaderCircle' className='animate-spin' />
        </span>
      )}

      {isError ? (
        <span className='flex items-center justify-center rounded bg-gray-100 p-4 text-red-500'>
          <span>Gagal memuat gambar</span>
        </span>
      ) : (
        <picture>
          <img
            src={src}
            alt={alt}
            className={`w-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </picture>
      )}
    </span>
  )
}

export default ImageWithLoading
