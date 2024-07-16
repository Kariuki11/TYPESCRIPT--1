// const User = {
//     name: "Ken",
//     email: "K@dev.com",
//     isActive: true
// }

// // function createUser({name: string, isPaid: boolean}) {}


// // createUser()

// function createCourse():{}{
//     return {}
// }

// function createUser({name, isPaid}: {name: string, isPaid: boolean}) {
//     // console.log(`User: ${name}, Paid: ${isPaid}`);
//   }
  
//   // Correct call with an argument
//   createUser({name: "Ken", isPaid: false});


//   type User = {
//     name: string;
//     email: string;
//     isPaid: boolean;
//   }

//   function createUser(user: number){}



type User = {
 readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser: User = {
  _id: "12345",
  name: "Ken",
  email: "K@dev.com",
  isActive: false
}

myUser.email =  "kkdev@gmail.com"
//myUser._id = "asa"
  


export {}