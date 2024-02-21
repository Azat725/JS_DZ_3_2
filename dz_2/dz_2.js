let cheque = [ // Определение массива с покупками
    {
        nameOfProduct: 'Яблоки',
        price: 122,
        quantity: 1
    },
    {
        nameOfProduct: 'Чай',
        price: 500,
        quantity: 1
    },
    {
        nameOfProduct: 'Гречка',
        price: 50,
        quantity: 1
    },
    {
        nameOfProduct: 'Хлеб',
        price: 35,
        quantity: 1
    }
]

function printReciept(reciept){ // Функция для печати чека
    console.log("Ваш чек: ")
    reciept.forEach(item => { // Ошибка: неверно использован array, должно быть reciept
        console.log(`${item.nameOfProduct} - ${item.quantity} шт. По цене: ${item.price}`)
    })
}

function getTotalPrice(reciept){ // Функция для подсчета общей суммы покупки
    let totalPrice = reciept.reduce((totalPrice, item) => item.quantity * item.price, 0)
    return totalPrice
}

function getMostExpensivePurchase(reciept){ // Функция для определения самой дорогой покупки
    let mostExpensive = reciept.reduce((prev, current) => (prev.price > current.price) ? prev : current)
    return mostExpensive
}

function getAveragePrice(reciept){ // Функция для вычисления средней стоимости товара
    let totalQuantity = reciept.reduce((total, item) => total + item.quantity, 0)
    let totalPrice = reciept.reduce((totalPrice, item) => item.quantity * item.price, 0)
    let averagePrice = totalPrice / totalQuantity
    return averagePrice
}

printReciept(cheque) // Вывод чека
console.log("Общая сумма покупки: $" + getTotalPrice(receipt).toFixed(2)) // Вывод общей суммы
console.log("Самая дорогая покупка: ", getMostExpensivePurchase(receipt)) // Вывод самой дорогой покупки
console.log("Средняя стоимость товара в чеке: $" + getAveragePrice(receipt).toFixed(2)) // Вывод средней стоимости товара в чеке
