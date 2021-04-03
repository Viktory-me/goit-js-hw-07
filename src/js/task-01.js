 
 const listEl=document.querySelector('ul');
 
console.log(`В списке ${listEl.children.length} категорий`);


const items = document.querySelectorAll('li.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title}, Количество элементов: ${itemsLength}`);
});