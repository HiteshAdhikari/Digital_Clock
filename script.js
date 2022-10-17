let time_date = () => {
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let session = "AM"

    if (hour == 0) {
        hour = 12;
    }

    else if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    let date = new Date()
    let d = date.getDate()
    let m = date.getMonth()
    let year = date.getFullYear()
    let day = date.getDay()

    let newMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    let month = newMonth[m]
    let todayDay = days[day]

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    let showDate = (`${todayDay}, ${month} ${d}, ${year} `)
    document.getElementById("hour").innerHTML = hour.pad(2)
    document.getElementById("minute").innerHTML = minute.pad(2)
    document.getElementById("write").innerHTML = session
    document.getElementById("date").innerHTML = showDate

    let box = document.getElementsByClassName("container")

}

setInterval(time_date, 1000)