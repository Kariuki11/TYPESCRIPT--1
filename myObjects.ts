const User = {
    name: "Ken",
    email: "K@dev.com",
    isActive: true
}

// function createUser({name: string, isPaid: boolean}) {}


// createUser()

function createCourse():{}{
    return {}
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}) {
    // console.log(`User: ${name}, Paid: ${isPaid}`);
  }
  
  // Correct call with an argument
  createUser({name: "Ken", isPaid: false});
  


export {}