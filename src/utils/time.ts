/** 时间格式化(用于展示) `2000/02/08 00:00:00` */ 
export const formatTimeForSee = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

/** 时间格式化(用于传递) `2000-02-08T00:00:00` */ 
export const formatTimeForSend = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('-') +
    'T' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

/** 格式化数字 */
const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}