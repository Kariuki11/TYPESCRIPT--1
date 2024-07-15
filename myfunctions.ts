function addTwo(num): number{
    return num + 2;
    //return "hello"
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {} 

let myValue = addTwo(5)
getUpper("Ken")

signUpUser("Ken", "ken@254", false)
loginUser("K", "kk@f.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heroes = ["Ronald", "sideman", "iranian"]
//const heroes = [1, 2, 3]

heroes.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);

}

function handleError(errmsg: string): void{
    console.log(errmsg);
    
}






export {}