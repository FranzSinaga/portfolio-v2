export const getOS = () => {
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('windows')) return 'Windows'
    if (userAgent.includes('mac')) return 'MacOS'
    if (userAgent.includes('linux')) return 'Linux'
    if (/android/.test(userAgent)) return 'Android'
    if (/iphone|ipad|ipod/.test(userAgent)) return 'iOS'
    return 'Unknown'
  }
  return 'Server'
}

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return res.json()
}
