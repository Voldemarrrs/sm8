let button1 = document.querySelector('.button1')
button1.addEventListener('click',function(){
    console.log('Нажата и отжата кнопка')
})

let box = document.querySelector('.box')
box.addEventListener('mouseover', function(){
    console.log('Наведение курсора')
    box.style.background = 'yellow'
})

box.addEventListener('mouseout', function(){
    console.log('Уход курсора')
    box.style.background = 'black'
})

let button2 = document.querySelector('.button2')
button2.addEventListener('dblclick', function(){
    console.log('Двойное нажатие')
    button2.style.background = 'red'
    button2.style.border = 'none'
})
// let button3 = document.querySelector('.button3')

function rand(max){
    return Math.floor(Math.random()* max);
}
let box2 = document.querySelector('.box2')
box2.addEventListener('mousemove', function(){
    console.log(rand(255))
    box2.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
})

let button3 = document.querySelector('.button3')
button3.addEventListener('mousedown', function(){
    console.log('Нажата кнопка')
})

let button4 = document.querySelector('.button4')
button4.addEventListener('mouseup', function(){
    console.log('Отжата кнопка')
})