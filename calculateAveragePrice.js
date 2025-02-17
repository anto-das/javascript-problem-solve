const calculateAveragePrice = phones =>{
    if(phones.length === 0){
        return 0;
    }
    let phonePrice = 0;
    phones.forEach(phone =>{
        phonePrice += phone.price;
    })
    const averagePrice = phonePrice/phones.length;
    return averagePrice;
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const result = calculateAveragePrice(phones);
console.log(Math.round(result))