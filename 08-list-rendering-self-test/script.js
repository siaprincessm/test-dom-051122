let seriesToWatch = [
    {
        'value':'how to getaway with murder',
        'name':'How to Getaway with Murder'
    },
    {
        'value':'Game of thrones',
        'name':'Game of Thrones'
    },
    {
        'value':'friends',
        'name':'Friends'
    },
    {
        'value':'How I met your mother',
        'name':'How I met your Mother'
    },
    {
        'value':'love is blind',
        'name':'Love is Blind'
    }
]

let selectSeries = document.querySelector('#selectedSeries');
    for(let eachSeries of seriesToWatch){
        selectedSeries.innerHTML += `
            <option value="${eachSeries.value}"> ${eachSeries.name}</option>
            `
    }