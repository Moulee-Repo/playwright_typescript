const { log } = require("node:console")
const readline = require('readline/promises');
const process = require('process');

// async function userInput() {
//     const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
//     let age = await rl.question('Enter your age : ');
//     if (age < 18) {
//         console.log('he or she is minor')
//         if (age > 60) {
//             console.log('he or she is senoir cez')
//         } else {
//             console.log('he or she is not a senoir cez')
//         }
//     } else {
//         console.log(' he or she is major')
//     }
//     rl.close();
// }

// userInput()

// const array = [12, 'anme' , true ]

// for (item of array) {
//     switch(item){
//         case 'anme' : {  
//             log(` this ${item}`)
//         }
//         break;
//         case true : {  
//             log(` this ${item}`)
//         }
//         break;
//         default : log('nothing workes')
//     }
// }

// const array = [12, 'anme' , true ]
// Iterator()
// next()  

//     return obj{
//         value: 'last element value'
//         done : false
//     }

function print(message){
    log(message)
}

const number = function (x = 2,y = 3) { return x + y}

const selfin = (function(){
    return "self invocking"
})()

const arrow = () => "arrow"

print('this is from function')
log(number())
log(selfin)
log(arrow())

