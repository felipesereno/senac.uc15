import { addItemToDOM, removeSelectedItemsFromDOM, shoppingListElement } from './dom.js';
import { saveList, loadList } from './storage.js';

// Selecionar os elementos do DOM
const inputField = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');

// Função para verificar se o item já existe
function itemExists(itemText) {
    const listItems = shoppingListElement.querySelectorAll('li label');
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent.toLowerCase() === itemText.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Carregar a lista ao iniciar a página
loadList().forEach(item => addItemToDOM(item));

// Função para adicionar um novo item à lista
addItemBtn.addEventListener('click', function() {
    const itemText = inputField.value.trim();

    // Verifica se o item já existe
    if (itemExists(itemText)) {
        inputField.style.border = '2px solid red';
        alert('O item já existe na lista de compras!');
    } else if (itemText !== '') {
        inputField.style.border = '';

        // Adiciona o item ao DOM
        addItemToDOM(itemText);

        // Salva a lista no LocalStorage
        saveList(shoppingListElement);

        inputField.value = '';
    }
});

// Função para remover os itens selecionados
removeItemBtn.addEventListener('click', function() {
    removeSelectedItemsFromDOM();

    // Salva a lista no LocalStorage após a remoção
    setTimeout(function() {
        saveList(shoppingListElement);
    }, 500); // Espera a animação terminar
});
