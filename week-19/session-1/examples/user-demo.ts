interface User {
    id: number,
    name: string,
    email: string,
    password:string
}

const user1:User={
    id:1,
    name:"sonam",
    email: "sonam@gmail.com",
    password: "sonam@123"
}

// let's see how Partial helps here

const updateUser:Partial<User>={
    name: "New Name"
}

const user2: Readonly<User>={
    id:2,
    name:"Test User",
    email: "test@gmail.com", password:"sonam@123"
}

// user2.name = " Change Name" // Error we can't change

type UserPreview = Pick<User, "id" | "name">

const user: UserPreview = {
    id:1,
    name:"test"
}

type SafeUser= Omit<User, "password">

const safeuser1:SafeUser ={
    id:2,
    name:"Test User",
    email: "test@gmail.com"
}