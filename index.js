// . Change document background color to silver
document.body.style.backgroundColor = 'silver';
// 2. Changing the font color for h1 title tag to green
document.getElementById('title').style.color = 'green';

// 3. Changing the font to uppercase
const h3Elements = document.getElementsByTagName('h3');
for (let h3 of h3Elements) {
    h3.style.textTransform = 'uppercase';
}

//Adding one fruit to the list of fruits
const fruitList = document.getElementById('fruList');
const newFruit = document.createElement('li');
newFruit.textContent = 'Apples';
fruitList.appendChild(newFruit);

const fruits = {
    "Mangoes":"images/mangi.jpg",
    "Bananas":"images/banana.jpg",
    "Water Melons": "images/watermelon.jpg"

}

const vegList = document.getElementById('vegList');
const newVeg = document.createElement('li');
newVeg.textContent = 'Carrots';
vegList.appendChild(newVeg);