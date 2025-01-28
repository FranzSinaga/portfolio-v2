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
