const person1 = {
    name: "Name1",
    age: 991,
    city: 'City1',
}

const person2 = {
    name: 'Name2',
    age: 142,
    get city() {
        return 'Roma';
    },
    set city(value) {
        console.log('Name2 remains in roma')
    }
};

person2.city = 'call SETTER';
console.log(person2);

for (const key in person2) {
    const value = person[key];
    console.dir({key, value});
}