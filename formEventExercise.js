// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements['product'];
    const quantityInput = form.elements['qty'];
    addList(productInput.value, quantityInput.value);

    productInput.value = '';
    quantityInput.value = '';
});

const addList = (product, qty) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${qty} ${product}`;
    list.appendChild(newLi);
}