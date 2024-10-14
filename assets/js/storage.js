// Função para salvar a lista de compras no LocalStorage
export function saveList(shoppingList) {
    const items = [];
    shoppingList.querySelectorAll('li label').forEach(label => {
        items.push(label.textContent);
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

// Função para carregar a lista de compras do LocalStorage
export function loadList() {
    return JSON.parse(localStorage.getItem('shoppingList')) || [];
}
