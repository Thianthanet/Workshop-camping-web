const calNight = (checkIn, checkOut) => {
    const milliDay = checkOut.getTime() - checkIn.getTime()
    console.log(milliDay)
  
    const diffDay = milliDay / (1000 * 60 * 60 * 24)
    return diffDay
  }
  
export const calTotal = (checkIn, checkOut, price) => {
    if (!checkIn || !checkOut) return
    const totlaNights = calNight(checkIn, checkOut)
    const total = totlaNights * price
    console.log("Front-End",total, totlaNights)
    return { total, totlaNights }
  }