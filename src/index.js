module.exports.calendarWeek = function calendarWeek(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));

    return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}

module.exports.currentCalendarWeek = function currentCalendarWeek(date = new Date()) {
    return calendarWeek(date)
}

module.exports.currentGB1Week = function currentGB1Week() {
    const initDate = new Date('April 21, 2022 12:00:00')
    const initGBWeek = 13
    const initCalWeek = calendarWeek(initDate)
    const gbWeekModulus = 16

    const currentWeek = currentCalendarWeek()
    const totalWeekOffset = currentWeek - initCalWeek

    return (initGBWeek + totalWeekOffset) % gbWeekModulus
}