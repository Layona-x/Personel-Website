let day = document.getElementById("gün")
let month = document.getElementById("ay")
let year = document.getElementById("yil")
let i = 0
const z = new Date()
setInterval(()=>{
  day.innerHTML = z.getDate()
  month.innerHTML = z.getMonth()
  year.innerHTML = z.getFullYear()
},1000)
