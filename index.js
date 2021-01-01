const express = require('express');
const app = express();


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine', 'ejs');








//  / slash isareti anasayfayi belirtir
app.get('/',function(req, res){

  res.sendFile(__dirname+"/index.html");

});


app.get("/iletisim", function(req,res){

  res.sendFile(__dirname+"/iletisim.html");
});


app.get("/giris",function(req,res){

  res.sendFile(__dirname+"/giris.html");

});

app.get("/profil" , function(req,res){

    res.send("Su anda get yöntemi ile bu sayfaya geldin")
})



app.post("/profil" , function(req,res){

    if(req.body.kullaniciadi==="hamza" && req.body.sifre==="1234"){

      res.send("Hosgeldin "+ req.body.kullaniciadi);
    }else{
      res.send("Basarisiz Giris")
    }
})

//urun sayfasi için bir tane istek oluşturun.
// urun sayfasina bağlanmak isteyen kişi için
// urun.ejs dosyasını render edin ve urun sayfasında
// da ürünün başlığı ve yorumsayisi olsun.

app.get("/yazi",function(req,res){

var gonderilecekler={baslik : 'Almanya Hükümetinden Aciklama',
                    yorumsayisi:'30',
                    yazar: 'Recep Bey'}

  res.render('yazi',gonderilecekler)
});

app.get("/urun", function(req,res){

var bilgiler = {baslik: "Elma",
                yorumsayisi:'50'}

  res.render('urun',bilgiler)
})



app.get("*",function(req,res){
  res.send("HATA! Yanlis sayfa talebi");
});


app.listen(8000);
