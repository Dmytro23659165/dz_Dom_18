const categories = document.querySelectorAll('.categorias > ul');
console.log(categories.length);
categories.forEach((category) => {
    const categoryTitle = category.previousElementSibling.textContent;
    const itemCount = category.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${itemCount}`);
});



const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
let ingredientsLi = document.querySelector('ul[id="ingredients"]');
console.log(ingredientsLi);
function ingredientsFunkLi(ingredients){
    for (let i = 0; i < ingredients.length; i++) {
        const li = document.createElement('li');
        li.textContent = ingredients[i];
        console.log(li);
        ingredientsLi.appendChild(li);
    }
}
ingredientsFunkLi(ingredients);



const images = [
    {
     url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];
let imagesImgL = document.querySelector('ul[id="gallery"]');
console.log(imagesImgL);
function imagesImgLFunk(images) { 
    for (let i = 0; i < images.length; i++) { 
        const li = document.createElement('li'); 
        const img = document.createElement('img'); 
        img.src = images[i].url; 
        img.alt = images[i].alt; 
        console.log(img); 
        li.appendChild(img); 
        imagesImgL.appendChild(li); 
    } 
} 
imagesImgLFunk(images);



let counterValue = 0;
function increment() {
    counterValue += 1;
    updateUI();
}
function decrement() {
    counterValue -= 1;
    updateUI();
}
function updateUI() {
    document.getElementById('value').textContent = counterValue;
}
document.querySelector('button[data-action="increment"]').addEventListener('click', increment);
document.querySelector('button[data-action="decrement"]').addEventListener('click', decrement);
