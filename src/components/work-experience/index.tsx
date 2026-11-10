'use client'
import BlurFade from '@/components/magicui/blur-fade'
import { Tabs } from '@/components/aceternity/tabs'
import { RichText } from '@/components/rich-text'
import { AsyncState } from '@/components/async-state'
import { fetcher, PAYLOAD_API_URL, slugify, truncate } from '@/lib'
import useSWR from 'swr'
import { FranzWorkExperience } from '@/types/payload.types'
import dayjs from 'dayjs'

interface Res {
  docs: FranzWorkExperience[]
}

export const WorkExperience = () => {
  const {
    data: workExperience,
    isLoading,
    error,
    mutate,
    isValidating
  } = useSWR<Res>(`${PAYLOAD_API_URL}/api/franz-work-experience?depth=1`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const docs = workExperience?.docs

  const tabClass = 'relative mt-4 h-full w-full overflow-hidden rounded-2xl bg-content-background border p-10 text-foreground'
  const tabs = (docs ?? []).map(item => ({
    title: truncate(item.organization),
    value: `${slugify(item.organization)}-${item.id}`,
    content: (
      <div className={tabClass}>
        <BlurFade inView delay={0.2}>
          <p className='text-xl font-bold md:text-2xl'>{item.organization}</p>
          <p className='text-foreground mb-2'>
            <strong className='font-bold'>{item.position}</strong> | {dayjs(item.startDate).format('MMMM YYYY')} -{' '}
            {item.untilNow ? 'Present' : dayjs(item.endDate).format('MMMM YYYY')}
          </p>
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <article className='space-y-3 font-mono'>
            <RichText content={item.description} />
          </article>
        </BlurFade>
      </div>
    )
  }))

  return (
    <AsyncState isLoading={isLoading || isValidating} error={!!error || !docs} onRetry={() => mutate()}>
      <div className='my-5 flex h-190 w-full flex-col items-start justify-start perspective-[1000px] md:h-124 lg:h-110'>
        <Tabs activeTabClassName='text-blue-600' tabs={tabs} containerClassName='font-mono' contentClassName='mt-10' />
      </div>
    </AsyncState>
  )
}
