const teaArr = [
    {
        name : 'Green Tea',
        strength: 'Medium',
        price : 20
    },
    {
        name : 'Oolong Tea',
        strength: 'Strong',
        price : 15
    },
    {
        name : 'Cucumber Tea',
        strength: 'Medium',
        price : 10
    },
    {
        name : 'Jasmine Tea',
        strength: 'Strong',
        price : 10
    },
    {
        name : 'Black Tea',
        strength: 'Strong',
        price : 20
    },
    {
        name : 'English Tea',
        strength: 'Medium',
        price : 15
    },
    {
        name : 'Passion Fruit Tea',
        strength: 'Light',
        price : 20
    },
    {
        name : 'Herbal Tea',
        strength: 'Strong',
        price : 15
    },
    {
        name : 'Peppermint Tea',
        strength: 'Medium',
        price : 20
    },
    {
        name : 'Ginger Tea',
        strength: 'Light',
        price : 15
    },
    {
        name : 'Milk Tea',
        strength: 'Light',
        price : 20
    },
    {
        name : 'Oshi Tea',
        strength: 'Medium',
        price : 15
    }
]

console.log(teaArr[this.name]);

const filter = teaArr.filter((arr) => {

    return arr.price >= 15;

})

console.log(filter);