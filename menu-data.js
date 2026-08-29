const MENU_DATA = {
  campaigns: [
    { name: "Menü 1", title: "2 Adet Büyük Boy Ekonomik Pizza + 1 LT Kola", price: "600 TL" },
    { name: "Menü 2", title: "2 Adet Orta Boy Ekonomik Pizza + 1 LT Kola", price: "500 TL" },
    { name: "Menü 3", title: "1 Adet Orta Boy Ekonomik Pizza + Kutu Kola", price: "280 TL" },
    { name: "Menü 4", title: "3 Adet Orta Boy Ekonomik Pizza", price: "650 TL" }
  ],
  pizzaSections: [
    {
      id: "ekonomik",
      title: "Ekonomik Pizzalar",
      prices: { orta: "230 TL", buyuk: "280 TL" },
      items: [
        { name: "Ekonomik Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, mantar, mısır" },
        { name: "Üç Malzemeli Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, mantar" },
        { name: "Sucuk Sever Pizza", ingredients: "Pizza sosu, mozzarella, sucuk" },
        { name: "Margarita Pizza", ingredients: "Pizza sosu, mozzarella" }
      ]
    },
    {
      id: "sevilen",
      title: "En Sevilen Pizzalar",
      prices: { orta: "250 TL", buyuk: "310 TL" },
      items: [
        { name: "Sosyetik Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, mantar, mısır, domates, kekik" },
        { name: "Sevilen Dörtlü Pizza", ingredients: "Pizza sosu, mozzarella, sosis, sucuk, mantar, mısır" },
        { name: "Sevilen Chef Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, mantar, jambon, zeytin" },
        { name: "Benim Karışık Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, sosis, mantar, yeşil biber, mısır" },
        { name: "Chef Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, sosis, zeytin" },
        { name: "Sosislim Pizza", ingredients: "Pizza sosu, mozzarella, sosis, mısır, mantar, domates" }
      ]
    },
    {
      id: "bol",
      title: "Bol Malzemeli Pizzalar",
      prices: { orta: "290 TL", buyuk: "340 TL" },
      items: [
        { name: "Karışık Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, sosis, mantar, mısır, domates, zeytin" },
        { name: "Tavuklu Pizza", ingredients: "Pizza sosu, mozzarella, sosis, tavuk döner, domates" },
        { name: "Dört Peynirli Pizza", ingredients: "Pizza sosu, mozzarella, kaşar, beyaz peynir, parmesan" },
        { name: "Sebzeli Pizza", ingredients: "Pizza sosu, mozzarella, soğan, mantar, yeşil biber, mısır, domates" }
      ]
    },
    {
      id: "chef",
      title: "Chef Özel Pizzalar",
      prices: { orta: "330 TL", buyuk: "390 TL" },
      items: [
        { name: "Bol Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, sosis, jambon, mantar, yeşil biber, soğan, mısır, domates, kekik, susam" },
        { name: "Chef Süperos Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, sosis, mantar, mısır, zeytin, köz biber, jalapeno, domates" },
        { name: "Etlim Pizza", ingredients: "Pizza sosu, mozzarella, et döner, soğan, domates" },
        { name: "Acılı Chef Pizza", ingredients: "Pizza sosu, mozzarella, küp sucuk, mantar, jalapeno, zeytin, köz biber, kekik" },
        { name: "İtalyan Chef Pizza", ingredients: "Pizza sosu, mozzarella, küp sucuk, mantar, zeytin, köz biber, kekik" },
        { name: "Chef Et Dolusu Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, sosis, jambon, pastırma, jalapeno biber" },
        { name: "Chef Pastırmalı Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, pastırma, mantar, yeşil biber" },
        { name: "Balıklı Pizza", ingredients: "Pizza sosu, mozzarella, ton balığı, mısır, soğan" },
        { name: "Turkishim Pizza", ingredients: "Pizza sosu, mozzarella, sucuk, pastırma, mantar, yeşil biber, beyaz peynir" },
        { name: "Kavurmalı Pizza", ingredients: "Pizza sosu, mozzarella, kavurma, soğan, köz biber, yöresel baharat" }
      ]
    }
  ],
  otherSections: [
    {
      id: "icecek",
      title: "İçecekler",
      items: [
        { name: "Kutu İçecek 330 ml", price: "70 TL" },
        { name: "1 Litre İçecek", price: "90 TL" }
      ]
    },
    {
      id: "yan",
      title: "Yan Ürünler",
      items: [
        { name: "Patates", price: "130 TL" },
        { name: "Sufle", price: "120 TL" },
        { name: "Sarımsaklı Ekmek", price: "250 TL" },
        { name: "Sucuklu Ekmek", price: "300 TL" }
      ]
    },
    {
      id: "ekstra",
      title: "Ekstra Malzemeler",
      items: [
        { name: "Mozzarella", price: "150 TL" },
        { name: "Sucuk", price: "100 TL" },
        { name: "Sosis", price: "100 TL" },
        { name: "Jambon", price: "100 TL" },
        { name: "Tavuk Döner", price: "100 TL" },
        { name: "Pastırma", price: "170 TL" },
        { name: "Et Döner", price: "120 TL" },
        { name: "Kavurma", price: "200 TL" },
        { name: "Sebze Ürünleri", price: "90 TL" }
      ]
    },
    {
      id: "kenar",
      title: "Kenar Seçenekleri",
      items: [
        { name: "Bol Peynir Kenar — Orta", price: "100 TL" },
        { name: "Simit Kenar — Orta", price: "100 TL" },
        { name: "Bol Peynir Kenar — Büyük", price: "130 TL" },
        { name: "Simit Kenar — Büyük", price: "130 TL" },
        { name: "Sarımsak Kenar — Orta", price: "100 TL" },
        { name: "Sarımsak Kenar — Büyük", price: "120 TL" }
      ]
    }
  ]
};
