// console.log('connect');
const h1Collection = document.getElementsByTagName('h1')

for(const h1 of h1Collection){
    console.log(h1);
    h1.style.color = "blue"
    h1.style.fontStyle= 'italic'
    h1.style.textDecoration= 'underline'
    h1.style.textDecorationColor= 'red'
    h1.style.textShadow= '2px 2px 2px gray'



}





// console.log(h1Collection);

// first you have to get parent field
const container = document.getElementById('container')
const ulcontainer = document.createElement('ul')
const Li1 = document.createElement('li')
const Li2 = document.createElement('li')
const Li3 = document.createElement('li')
Li1.innertext= 'Saint Martin';
Li2.innerText= 'Rangamati';
Li3.innerText= 'Sundarban';

ulcontainer.appendChild(Li1)
ulcontainer.appendChild(Li2)
ulcontainer.appendChild(Li3)
container.appendChild(ulcontainer)

// shortcut

const sectionContainer = document.getElementById('container2')

const ul = document.createElement('ul')
ul.innerHTML = `
    <li>Saint Martin</li>
    <li>Rangamati</li>
    <li>Sundarban</li>

`
sectionContainer.appendChild(ul)


