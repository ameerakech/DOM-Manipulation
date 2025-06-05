//background color
document.body.style.backgroundColor = 'silver';


//homepage image
const img = document.createElement('img')
img.src =  'images/greenkiosk-img.jpg'
img.style.width ='80vw'
img.style.height = '85vh'
img.style.padding = '20px'
img.style.justifyContent ='center'
img.style.paddingLeft = '5cm'
const container = document.getElementById('container')
container.appendChild(img)

document.getElementById('title').style.color = 'green';
document.getElementById('title').style.textAlign = 'center'
document.getElementById('title').style.fontSize = '280%'

const h3Elements = document.getElementsByTagName('h3');
for (let h3 of h3Elements) {
    h3.style.textTransform = 'uppercase';
}

const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click',()=>{
clickButton.textContent = 'Ordered!!'
clickButton.style.backgroundColor = 'purple'
})

