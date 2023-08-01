// const teaArr = [
//     {
//         name : "Green Tea",
//         strength: "Medium",
//         price : 20
//     },
//     {
//         name : "Oolong Tea",
//         strength: "Strong",
//         price : 15
//     },
//     {
//         name : "Cucumber Tea",
//         strength: "Medium",
//         price : 10
//     },
//     {
//         name : "Jasmine Tea",
//         strength: "Strong",
//         price : 10
//     },
//     {
//         name : "Black Tea",
//         strength: "Strong",
//         price : 20
//     },
//     {
//         name : "English Tea",
//         strength: "Medium",
//         price : 15
//     },
//     {
//         name : "Passion Fruit Tea",
//         strength: "Light",
//         price : 20
//     },
//     {
//         name : "Herbal Tea",
//         strength: "Strong",
//         price : 15
//     },
//     {
//         name : "Peppermint Tea",
//         strength: "Medium",
//         price : 20
//     },
//     {
//         name : "Ginger Tea",
//         strength: "Light",
//         price : 15
//     },
//     {
//         name : "Milk Tea",
//         strength: "Light",
//         price : 20
//     },
//     {
//         name : "Oshi Tea",
//         strength: "Medium",
//         price : 15
//     }
// ]

// console.log(teaArr[this.name]);

// const filter = teaArr.filter((arr) => {

//     return arr.price >= 15;

// })

// console.log(filter);

var fs = require('fs');
var readlineSync = require('readline-sync');

let teaArr = [];


function loadData(){
    let fileContent = fs.readFileSync("./tea.json");
    teaArr = JSON.parse(fileContent); //JSON.parse will convert from string in package.json to object.
}

function showMenu(){
    console.log("1. Show all tea");
    console.log("2. Create new tea");
    console.log("3. Save and exit");

    let option = readlineSync.question("> ");
    switch(option){
        case '1':
            showAllTeas();
            showMenu();
            break;
        case '2':
            createTea();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Please choose something');
            showMenu();
            break;
    }
    console.log(teaArr);
}

function showAllTeas(){
    let tea = teaArr.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    console.log(tea);
}

function createTea(){
    let name = readlineSync.question('What is the name of this tea ?');
    let price = readlineSync.question('How much would you want to sell ?');
    let strength = readlineSync.question('How strong is it ?');
    let tea = {
        name: name,
        price: parseInt(price),
        strength: strength,
    }
    console.log(tea);
    teaArr.push(tea);
    
}

function saveAndExit(){
    let content = JSON.stringify(teaArr);
    fs.writeFileSync('./tea.json', content, { encoding: 'utf8'});
}

function main(){
    loadData();
    showMenu();
}

// main();

fetch('./tea.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const allNames = data.map(name => name.name);
    console.log(allNames);
})
.catch(error => {
    console.log(error);
})




// fs.readFile('./tea.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.error('Error reading JSON file:', err);
//     return;
//   }

//   try {
//     const data = JSON.parse(jsonString);
//     // Use the 'data' here, which is a JavaScript object parsed from the JSON
//     console.log(data);
//     const allNames = data.map(name => name.name);
//     console.log(allNames);
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//   }
// });
