let a= new Date()
let month=["January", "February", 
"March", "April", "May", 
"June", "July", "August",
"September", "October", 
"November", "December"]
let monthName=month[a.getMonth()]
let date=a.getDate()
let year=a.getFullYear()
let days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day=days[a.getDay()]
let header=document.querySelector('#day')
header.innerHTML=`${day}, ${monthName} ${date}, ${year}`
setInterval(()=>
{let a= new Date()
    let minute=a.getMinutes()
    let second=a.getSeconds()
    let hours=a.getHours()
    let am='AM'
    if(hours>12)
    {
        hours=hours-12
        am='PM'
    }
    if(hours==12){
        hours=12
    }
    if(second<10)
    {
        second='0'+second
    }
    if(minute<10)
    {
        minute='0'+minute
    }
    if(hours <10)
    {
        hours='0'+hours
    }
    tm=document.getElementById('time')
    tm.innerHTML=hours + ':' + minute + ':' + second + " " + am
})
