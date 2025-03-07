import PageLoader from '@/components/page-loader'

const GlobalLoading = () => {
  return (
    <div className='mt-[40dvh] flex w-full flex-col items-center gap-y-2 overflow-hidden p-2 transition-colors duration-0'>
      <PageLoader />
      <p className='text-foreground font-mono text-lg font-bold'>Generating Page...</p>
    </div>
  )
}

export default GlobalLoading
