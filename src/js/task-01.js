 
 const listEl=document.querySelectorAll('.item');
 
console.log(`В списке ${listEl.length} категорий`);



const categoriesAr= [...listEl]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesAr);