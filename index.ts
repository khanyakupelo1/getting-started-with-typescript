console.log("Defining Interface");
interface User{
    name: string;
    age: number;
}

const user: User = {
    name: "John",
    age: 30
}

console.log('Working types as params')

const displayUserName = (user: User) => {
    console.log(user.name);
}

displayUserName(user);


console.log('Working types as return')

const getAge = (user: User): number => {
    return user.age;
}

const getUser = (): User => user;





