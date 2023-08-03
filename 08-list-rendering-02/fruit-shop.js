let fruits = [
    {
        'value': 'pear',
        'name': 'Pear'
    },
    {
        'value': 'apple',
        'name': 'Apple',
    },
    {
        'value': 'orange',
        'name': 'Orange'
    }
]

let selecFruit = document.querySelector('#selectedFruit');
for (let eachFruit of fruits){
    selectedFruit.innerHTML += `
        <option value=" ${eachFruit.value}">${eachFruit.name}</option>    
    `
}