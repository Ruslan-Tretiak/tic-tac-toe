// const userInput = prompt ('Введить число')
// const toNum = Number(userInput)

// if (!isNaN(toNum) && userInput) {
//     if (!toNum) {
//         console.log('Це нуль');
//     } else if (toNum > 0) {
//         console.log('Це позитивне число');
//     }
//     else {
//         console.log('Це негативне цисло');
//     }
// } else {
//     alert ('Я прочив число')
// }
// const deadline = 0
// ;
// if (deadline === 1){
//     console.log('Завтра');
// } else if (deadline === 2) {
//     console.log('Післязавтра');
// } else if (deadline >= 3) {
//     console.log('Дата у майбутньому');
// } else {
//     console.log('Сьогодні');
// }
//  console.log(deadline);


// const userInput = prompt('Введіть число');
// const toNum = Number(userInput);

// if (!isNaN(toNum) && userInput) {
//     if (!toNum) { // toNum === 0
//         console.log("Це нуль");
//     } else if (toNum > 0) {
//         console.log("Це позитивне число");
//     } else {
//         console.log("Це негативне число");
//     }
// } else {
//     alert('Я просив число')
// }





// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"


// const userInput = prompt('Введи логін');
// const password = userInput ;
// const password = promt('Який пароль?');


// if (!userInput) {
//     console.log('Я вас не знаю');
// } else if (userInput === 'Admin') {
    
// }
// const result = [true, 1, 'str', [4, 5], {}, 55, 'hello'];

// console.log(result[4]);
// console.log(result[result.length-1]);

// for (const item of result) {
//     console.log(item);
// }
// for (let i = 0; i < result.length; i+= 1) {
//     console.log(`index - ${i}`, result[i]);

// }
// const arr = [1, 2, 3, 4];
// const c = arr;
// const idx = arr.indexOf(2);
// console. log(idx);
// arr.push(5, 6, 7, 8);

// arr[idx] = 44;

// arr.splice(idx, 1, 55, 66);

// arr.splice(idx, 0, 55, 66);
// arr.splice(idx)
// console.log(arr);
// console.log(arr.length);

// console.log(len)
// arr.pop();
// console.log('arr',arr);
// console.log('c',c)
// console.log(!!)
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres[0]);
// console.log(genres[genres.length -1])
// console.log(genres)
// const first = genres.shift();
// console.log(genres)
// console.log(first)
// genres.unshift('Country', 'Reggie')
// console.log(genres)

// genres.splice(genres.length, 0, 'Рок-н-рол');
// console.log(genres.splice(0, 1))
// genres.splice(0, 0, 'Country', 'Reggie')


// const values = '8 11';
// const arr = values.split(" ");
// const result = arr[0] * arr[1];
// console.log(arr);
// console.log(result);


// const names = 'Jacob,William,Solomon';
// const phones = '89001234567, 89001112233 , 890055566377, 890055566300';
// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',');
// console.log(namesToArr);
// console.log(phonesToArr);

// for (let i = 0; i < namesToArr.length && i < phonesToArr.length; i +=1) {
//     console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
// }
 
// const string = 'Welcome, -to the - future';
// const arr = string.split(' ');
// arr.shift();
// arr.pop();
// const result = arr.join(' ')
// console.log(result);
// const separators = ['-', ','];
// const SEPARATOR = '';
// const result = string.split(SEPARATOR);
// for (let i = 0; i < result.length; i += 1) {
//     if (separators.includes(result[i])) {
//         result.splice(i, 1)
//     }
// }
// const arr = result.join(SEPARATOR).replaceAll('  ', ' ').split(' ');
// for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i].split(SEPARATOR).reverse().join(SEPARATOR)
//     arr[i]=item;  
// }
// console.log(arr);


// const user = {
//     name: 'test',
//     age: '28',
//     skils: ['html', 'CS', 'js'],
// }
// const test = user;
// console.log(test === user);
// const copyUser = { ...user };


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
// for (let product of products) {
//   if (product[propName]){
//     array.push(product[propName]);
//   }
// }
// console.log(array)
// return array;
//   // Change code above this line
// }




// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");
// const basket = [
//   {
//     name: 'Apple',
//     price: 20
//   },
//   {
//     name: 'Milk',
//     price: 30
//   }
// ]

// function add(arr) {
//   let total = 0;
//   const products = [];

//   for (const { name,price} of arr) {
//     products.push(name);
//     total += price;
//   }
//   return {total, products}

// } 

// function logger(callback, arr) {
//   const result = callback(arr);

//   return `${result.products.join(', ')} total sum ${result.total}`
// }
// console.log(logger(add, basket));

// const selectors = {
//   box: document.querySelector('.js-item'),
//   left: document.querySelector('.js-step-left'),
//   down: document.querySelector('.js-step-down'),
//   input: document.querySelector('.js-input')
// }
// console.log(selectors.input.value);
// box.addEventListener('click', handlerClick);
// let step = 0;
 
// selectors.left.addEventListener('click', handlerStepLeft);
// selectors.down.addEventListener('click', handlerStepDown);

// let stepLeft = 0;
// let stepDown = 0;

// function handlerStepLeft() {
//   stepLeft += 50;
//   selectors.box.style.marginLeft = `${stepLeft}px`;
// }


// function handlerStepDown() {
//   stepDown += 50;
//   selectors.box.style.marginTop = `${stepDown}px`
//   selectors.input.addEventListener('change', handlerQuery)
// }Produce nasty just assisting that he should meet up unexpected pleasure
// selectors.input.addEventListner('input', hendlerQuery)

// function hendlerQuery(evt){
//   console.log(evt.currentTarget)
// }

// ..................lesson 7
const content = document.querySelector('.content')

let player = 'X';
const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
const historyX = [];
const historyO = [];

function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i+=1){
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}




content.addEventListener('click', handlerClick)
createMarkup()
function handlerClick(evt) {
  console.log(evt.target.textContent);''||'X'||'O'
  if (evt.target === evt.currentTarget || evt.target.textContent) {
    return;
  }
  const id = Number(evt.target.dataset.id);
  let isWinner = false;

  if (player === 'X') {
    historyX.push(id);
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
      <div class="box">
        <h1>Player - ${player} is winner</h1>
        </div>`
    )
    console.log(instance);
    instance.show();
    resetGame();
    return;
  }


  evt.target.textContent = player;
  player = player === 'X' ? 'O' : 'X';
}
function checkWinner(arr) {
  return combination.some( item =>item.every(id => arr.includes(id)))
}
function resetGame() {
  createMarkup();
  player = 'X';
  historyO.splice(0);
  historyX.splice(0);
}

