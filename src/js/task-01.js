 
const listEl=document.querySelectorAll('.item');
 
console.log(`В списке ${listEl.length} категорий`);

const listAr= [...listEl]
  .map(list => `Категория: ${list.children[0].textContent}
Количество элементов: ${list.children[1].children.length}`
  )
  .join("\n");

console.log(listAr);