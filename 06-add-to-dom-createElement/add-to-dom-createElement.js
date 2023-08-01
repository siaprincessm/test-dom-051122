document.querySelector('#addBtn')
    .addEventListener('click', function() {
        let result = Math.floor(Math.random() * 1000 + 1);
        let randomResult = document.querySelector('#result');
   
        let listElement = document.createElement('li');
        listElement.innerHTML = result;


        randomResult.appendChild(listElement);

    })