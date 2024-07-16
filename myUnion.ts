let score: number | string = 33

score = 44

score = '55'
type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let hitesh: User | Admin = {name: "Kenneth", id: 334}

const Kenneth = {username: "hc", id: 334}

function getDbId(id: number | string){
    //making some API calls
    console.log(`DB id is: ${id}`);
}

getDbId(3)
getDbId("3")