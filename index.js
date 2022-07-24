/* Tanımlama */
const http = require('http')
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require ('cookie-parser')
const fs = require('fs')
const app = express()
const port = 3000;
const server = http.createServer(app)
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
);
/*
fName
lName
iinfo
guest
*/
app.listen(port,()=>{
  console.log("3000 Portunda Dinleniyor")
})
/* Server Bağlantı*/

app.get('/',function(req,res){
  res.render(`${__dirname}/views/index.ejs`)
})
app.get('/about',function(req,res){
  res.render(`${__dirname}/views/about.ejs`)
})
app.get('/contact',function(req,res){
  let neden = req.body.fName
  let isim = req.bodylName
  let bilgi = req.body.iinfo
  let yas = req.body.guest
  res.render(`${__dirname}/views/contact.ejs`)
})

app.post('/success',function(req,res){
  let neden = req.body.fName
  let isim = req.body.lName
  let bilgi = req.body.iinfo
  let yas = req.body.guest
  res.render(`${__dirname}/views/contact.ejs`)
fs.writeFile(`./iletisim/${isim}.txt`, `{
    İletişim Nedeni : ${neden}
    İsim : ${isim}
    Kullanıcı Bilgiler: ${bilgi}
    Yaş:${yas}
  }` ,function (err, data) {

  if (err) throw err;

  console.log('Veri başarıyla yazıldı.');

})
})
