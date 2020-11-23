const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsRef = document.getElementById('ingredients')
  console.log(ingredientsRef);

const itemIngridients = document.createElement('li');
itemIngridients.textContent = 'Картошка';
ingredientsRef.appendChild(itemIngridients);

ingredients.forEach((item) => {
     const itemIngridients = document.createElement('li');
     itemIngridients.textContent = item;
     ingredientsRef.appendChild(itemIngridients);
 })