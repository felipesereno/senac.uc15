// Selecionar os elementos do DOM
const shoppingList = document.getElementById('shoppingList');

// Função para adicionar um item ao DOM com animação
export function addItemToDOM(itemText) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = itemText;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    shoppingList.appendChild(listItem);

    // Aplica a animação para o item aparecer suavemente
    setTimeout(function() {
        listItem.classList.add('show');
    }, 10);
}

// Função para remover os itens selecionados da DOM com animação
export function removeSelectedItemsFromDOM() {
    const listItems = shoppingList.querySelectorAll('li');

    listItems.forEach(function(item) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.classList.add('remove');
            setTimeout(function() {
                shoppingList.removeChild(item);
            }, 500); // Espera a animação terminar
        }
    });
}

// Exportar a lista de compras para uso em outros módulos
export const shoppingListElement = shoppingList;
