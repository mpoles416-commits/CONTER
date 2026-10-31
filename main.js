// const x = "mena mena";
// let y = 13;
// console.log(`my name is ${x}`);
// document.write(`my age is ${++y}`);
// window.alert("okey");

// console.log(Math.abs(-39));
// document.write(Math.ceil(12.5));
// document.write(Math.floor(12.9));
// console.log(Math.round(10.5))
// document.write(x.lastIndexOf("a"))
// document.write(x.length)
// let x = prompt("what is your name")
// document.write(x.trim())

// let x = [10,20,30, 'mena' ,'boles', 'handy', 40,90]

// document.write(x[x.length-1])
// let y = [10,20,39,[40,50,60,[70,80,90]]];
// document.write(y[3][3][1]);


// let ses = prompt("ايه فصلك المفضل");
// switch(ses){5
//     case"summer":
//     console.log("is very hot")
//     break
//     case"winter":
//     console.log("is very cold")
//     break
//     default:
//         console.log("i dont know ")
// }

// const name = "mena boles ";
// let age = 14;
// let work = "don't work "
// console.log(`my name is ${name} , i'm ${age} years old and i'm ${work}`)


// let height = 12;
// let width = 7;

// let area = height * width;
// let perimeter = 2 * (height + width);
// let number = area % 2;
// // console.log(`The area of the rectangle ${hight}`)
// console.log("The area of the rectangle = "+ area
//     ,", The perimeter of the rectangle "+ perimeter
// )
// if(number === 0){
//     console.log("even number")
// }else{console.log("odd number")}

    // let password = prompt("Enter your password");
    // if(password.length <= 8){
    //     console.log("رقم سري ضعيففف")
    // }else if(password.length > 8 && password.length <=11){
    //     console.log("رقم سري متوسط")
    // }else{console.log("رقم سري قوييي")

    // }

// for(let x = 1; x <= 10; x++){
//     let password = prompt("Enter your password");

//     if(password.length <= 8){
//         console.log("ضعيف");
//     }
//     else if(password.length > 8 && password.length <= 11){
//         console.log("متوسط");
//     }
//     else{
//         console.log("قوي");
//     }
// // }
// let week =Number(prompt("اختار رقم اليوم"))
// switch(week){
//     case 1:
//     console.log("السبت")
//     break
//     case 2:
//     console.log("الاحد")
//     break
//     case 3:
//     console.log("الاثنين")
//     break
//     case 4:
//     console.log("الثلاثاء")
//     break
//     case 5:
//     console.log("الاربعاء")
//     break
//     case 6:
//     console.log("الخميس")
//     break
//     case 7:
//     console.log("الجمعه")
//     break
//     default:
//         console.log("رقم خلط")
// }

// for(let x = 1; 1 <= 12; x++){
//     console.log(`5 * ${x} = ${5 * x}`)
// }
// for(let x = 1; x <= 12; x++){
//     console.log(`5 * ${x} = ${5 * x}`)
// }


// for(let x = 1; x <= 30; x++){

//     if(x % 3 ===0 && x % 5 ===0){
//         console.log(x +" is FizzBuzz")
//     }
//     else if(x % 3 === 0){
//         console.log(x +" is Fizz")
//     }else if(x % 5 ===0){
//         console.log(x +" is Buzz")
//     }
//     else{
//         console.log(x +" i don't know ")
//     }
// }
let conter = 0
let cont = document.getElementById("cont")
let plus = document.getElementById("plus")
let mines = document.getElementById("maunes")

plus.onclick = function () {
    conter++;
    cont.innerHTML = conter;
};
mines.onclick = function(){
    conter--;
    cont.innerHTML = conter
}