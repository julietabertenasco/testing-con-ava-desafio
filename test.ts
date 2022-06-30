import test from "ava";
import {Product, User} from "./index"



test("Testeo la clase User", (t) => {
    const user = new User("Pepe")
    const computer = new Product("computer", 1000)
    const mouse = new Product("mouse", 20)
    user.addProduct(computer)
    user.addProduct(mouse)
    t.is(user.name, "Pepe")
    t.is(user.products[0].name, "computer")  
});

test("Testeo la clase Product y sus métodos", (t) => {
    const computer = new Product("computer", 1000)
    const mouse = new Product("mouse", 20)
    t.is(computer.name, "computer")
    t.is(mouse.price, 20)
});
