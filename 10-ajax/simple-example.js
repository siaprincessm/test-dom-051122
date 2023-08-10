async function run (){

let a = await axios.get('data.txt') // asynchronous function call
console.log(a.data);
}
run();
console.log('Hello World');