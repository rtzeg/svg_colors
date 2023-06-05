let d = document

let btn2 = d.querySelector('.btn2')
let btn = d.querySelector('.btn')
let c = d.querySelector('.color')

let color = (clr) => {
        c.setAttribute('fill', clr)
        console.log(c);
        console.log('hello');
}


btn.addEventListener('click', ()=>{
    color('blue')
})
btn2.addEventListener('click', ()=>{
    color('red')
})