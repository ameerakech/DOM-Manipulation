//background color
document.body.style.backgroundColor = 'silver';


//homepage image
const img = document.createElement('img')
img.src =  'images/greenkiosk-img.jpg'
img.style.width ='50vw'
img.style.height = '65vh'
img.style.padding = '20px'
img.style.justifyContent ='center'
img.style.paddingLeft = '2cm'
img.style.marginTop = '1cm'
const container = document.getElementById('container')
container.appendChild(img)

document.getElementById('title').style.color = 'green';
document.getElementById('title').style.textAlign = 'center'
document.getElementById('title').style.fontSize = '50px'

const h2Element = document.querySelector ('h2')
h2Element.style.fontSize = '280%'
h2Element.style.marginLeft = '30cm'
h2Element.style.marginTop = '5cm'
h2Element.style.position = 'absolute'

const shopButton = document.getElementById('shop-button');
shopButton.addEventListener('click',()=>{
})

document.getElementById('fruitsveggies').style.color = 'green'
document.getElementById('fruitsveggies').style.fontSize = '150%'
document.getElementById('fruitsveggies').style.marginTop ='2cm'

const h3Elements = document.getElementsByTagName('h3');
for (let h3 of h3Elements) {
    h3.style.textTransform = 'uppercase';
    h3.style.fontSize = "200%"
    h3.style.marginTop = "2cm"
}



const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
fruitList.style.display = "flex";
fruitList.style.listStyle = 'none'
fruitList.style.marginTop = "1cm"
fruitList.style.justifyContent = "space-between";
const  fruitImages = {
  "Mangoes": "images/mangi-removebg-preview.png",
  "Bananas": "images/banana-removebg-preview.png",
  "Water Melons": "images/watermelon-removebg-preview.png",
  "Apples": "images/apples-removebg-preview.png"
}
document.querySelectorAll("#fruList li").forEach(li => {
    const fruitName = li.firstChild.textContent.trim();
    if (fruitImages[fruitName]) {
      const img = document.createElement("img");
      img.src = fruitImages[fruitName];
      img.alt = fruitName;
      img.className = "fruit-image";
      img.style.width = "10vw"
      img.style.height = "4cm"
      li.appendChild(img);
    }
  });

const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
vegList.style.display = "flex";
vegList.style.listStyle = "none"
vegList.style.marginTop = "1cm"
vegList.style.justifyContent = "space-between";

const  vegImages = {
  "Onions": "images/onions-removebg-preview.png",
  "Tomatoes": "images/tomatoes-removebg-preview.png",
  "Kales": "images/kales-removebg-preview.png",
  "Eggplant": "images/eggplant-removebg-preview.png"
}
document.querySelectorAll("#vegList li").forEach(li => {
    const vegName = li.firstChild.textContent.trim();
    if (vegImages[vegName]) {
      const img = document.createElement("img");
      img.src = vegImages[vegName];
      img.alt = vegName;
      img.className = "veg-image";
      img.style.width = "10vw"
      img.style.height = "4cm"
      li.appendChild(img);
    }
  });



