const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numsPares = nums.filter((num) => {
    return num % 2 == 0
})
console.log(numsPares);

const dobro = nums.map((num) => {
    return num * 2
})
console.log(dobro);