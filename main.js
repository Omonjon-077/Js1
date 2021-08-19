let ans = prompt('Выберите язык: uz ru en').toLowerCase()

const local = {
    eng:{
        servicies: 'servicies',
        price: 'price'
    },
    ru:{
        servicies: 'Услуги',
        price:'Цена'
    },
    uz:{
        servicies: 'xizmatlar',
        price: 'narx'
    }
}
if (ans == 'eng') {
    console.log(local.eng);
}else if (ans == 'ru'){
    console.log(local.ru);
}else if (ans == 'uz'){
    console.log(local.uz);
}else{
    console.log(local.eng);
}
