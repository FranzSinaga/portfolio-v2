import PageLoader from '@/components/page-loader'

export default function Loading() {
  return (
    <div className='mt-[40dvh] flex w-full flex-col items-center gap-y-2 overflow-hidden p-2 transition-colors duration-0'>
      <PageLoader />
      <p className='font-mono text-lg font-bold text-foreground'>Generating Page...</p>
    </div>
  )
}
