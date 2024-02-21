// Создаем список покупок
let shoppingList = [
    {
        nameOfProduct: 'Milks',
        quantity: 1,
        purchased: false
    },
    {
        nameOfProduct: 'Apple',
        quantity: 5,
        purchased: true
    },
    {
        nameOfProduct: 'Bread',
        quantity: 1,
        purchased: false
    },
    {
        nameOfProduct: 'Ramen',
        quantity: 1,
        purchased: true
    },
    {
        nameOfProduct: 'Coffee',
        quantity: 1,
        purchased: true
    },
    {
        nameOfProduct: 'Bananas',
        quantity: 5,
        purchased: false
    },
    {
        nameOfProduct: 'Energy Drink',
        quantity: 2,
        purchased: true
    },
    {
        nameOfProduct: 'Python (not snake!!!, just language)',
        quantity: 1,
        purchased: true
    }
]

// Функция для сортировки списка покупок
function sortShoppingList(array){
    array.sort((a, b) => a.purchased - b.purchased)
}

// Функция для добавления продукта в список
function addProducts(list, itemForAdd){
    let index = list.findIndex(item => item.nameOfProduct === itemForAdd.nameOfProduct)

    if (index !== -1){
        array[index].quantity += itemForAdd.quantity
    } else{
        array.push(itemForAdd)
    }
}

// Функция для пометки продукта как купленного
function purchaseItem(list, itemName){
    let item = list.find(item => item.nameOfProduct === itemName)

    if (item){
        item.purchased = true
    } else{
        console.log('Item not found in the shopping list')
    }
}

// Сортируем список покупок
let sortedList = shoppingList.slice()
sortShoppingList(sortedList)
console.log(sortedList)

// Добавляем новый продукт в список
let newProduct = {
    nameOfProduct: 'Oranges',
    quantity: 3,
    purchased: false
}
addProducts(shoppingList, newProduct)
console.log(shoppingList)

// Помечаем продукт "Coffee" как купленный
let itemToPurchase = 'Coffee'
purchaseItem(shoppingList, itemToPurchase)
console.log(shoppingList)