const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 const ingredientEl=document.querySelector('ul');
 const ingredient=ingredients.map( option=> {
   const liEl=document.createElement('li');
   liEl.textContent=option;
   return liEl;});
   
ingredientEl.append(...ingredient);