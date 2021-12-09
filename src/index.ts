const name = "Nicolas",
    age = 24,
    gender = "male";

const sayHi = (name: String, age: Number, gender: String): String => {
    let str: String =`Hello ${name}, you are ${age}, you are a ${gender}`; 
    console.log(str);
    return str
}

sayHi(name, age, gender);

export { name }
