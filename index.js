        //synatx for object destruturing in javascript
// const person = {
//     name : "daniel",
//     age : 23,
//     gender: "female"
// }
// function printDetails ({name, age}){
//     console.log(`the name is ${name} and the is ${age}`)
// }
// printDetails(person)

//spread syntax in object
// const user = {
//     name : "damini",
//     age: 30
// }
// const copied = { ...user,age:70, occupation:"artist"}
// const {name,age, ...other} = copied
// const copied2 = Object.assign({},copied,{
//     age: 70,
//     occupation: "artist"
// // })
// console.log(copied)
// console.log(copied2)

// let {name, age, gender= " "} = person
// console.log(name);
// console.log(age)
// console.log(gender)

// let Nmaa = ['dann','gift','faith']
// console.log(Nmaa)
// console.log(...Nmaa)

// let fruits = ["mango","apple","orange","strawbery"]
// let newFruits = ["pinaple","pawpaw",...fruits]
// console.log(newFruits)

// let Students = ["mina","oche","pato"]
// let[a,b,c]= Students
// console.log(c)
 const nexBtn = document.getElementById("nextBtn")
 const previousBtn = document.getElementById("preBtn")
 const imgCont = document.getElementById("imgslider")
 let mmm = imgCont.src
let unk = 0

    
    const thisImg = ["./imgfol/-unsplash - Copy.jpg","./imgfol/mappo.png","./imgfol/pro2.png","./imgfol/pro1.png"]


// nexBtn.addEventListener("click",()=>{

//     unk >= thisImg.length ? unk = thisImg.length : unk++
//     thisImg.map((image,index)=>{
//         index === unk ? imgCont.src : image= imgCont.src
//     })
// })















    nexBtn.addEventListener("click",()=>{
        unk >= thisImg.length ? unk = thisImg.length : unk++
        thisImg.map((und,omg)=>{
            omg ===  unk ? imgCont.src = und : imgCont.src
        })
    })
    // previousBtn.addEventListener("click",()=>{
    //     unk <= 0 ? unk= 0 : unk--
    //     thisImg.map((und,omg)=>{
    //         omg === unk ? imgCont.src = und : imgCont.src
    //     })
    // })





let imgdrip = document.getElementById("imgChange")
let mimi = imgdrip.src
let initalcount = 10

setInterval(()=>{
    initalcount = initalcount > 0 ? initalcount +=1 : 0
let disImg = initalcount % 2 === 0 ? "./imgfol/pro5.png" : "./imgfol/pro4.png" 
imgdrip.src = disImg
},1000)






  function functionWithArgs(){
    console.log([1,2],[7,9])
  }















    
// let imgDrop = document.getElementById("imgcount")
// let imgDopper = imgDrop.src 
// console.log(imgDopper)
//  setInterval(()=>{
//     initialCount = initialCount > 0 ? initialCount-1 : 0
// count.innerHTML= initialCount
// let changeImg = initialCount % 2 === 0 ? "./img/blu.jpeg" : "./img/baking.webp"

// imgDrop.src = changeImg
//  },1000)


// function prev(){
// if(i < 0 ) i= imgDon.length ; i--
// return setImg()
// }
// function (){
// if(i >= imgDon.length-1) i =-1
// }
// function setImg(){
//     return sliding.setAttribute('src','imgfol/' + imgDon[i])
// }