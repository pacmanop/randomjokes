let btn=document.getElementById('btn');

async function getjokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();
    return joke;
}
let a= getjokes();
a.then((data) => console.log(data));
window.addEventListener('load', async function(){
    let a= await getjokes();
    document.getElementById('jokearea').innerText=a.value;
});
btn.addEventListener('click', async function(){
    let a= await getjokes();
    console.log(a.value)
    document.getElementById('jokearea').innerText=a.value;
});