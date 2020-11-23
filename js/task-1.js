const itemRef = document.querySelectorAll('.item')
const amountCategori = categoriRef.length;
console.log(`В списке ${amountCategori} категории.`)

categoriRef.forEach(element => {
    const titleText = element.firstElementChild.textContent;
    const quantityOfElements = element.lastElementChild.children.length;
    console.log(`Категория: ${titleText}\nКоличество элементов: ${quantityOfElements}`)
});
