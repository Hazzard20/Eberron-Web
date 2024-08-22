class ItemData {

    constructor(name, originalName, rarity, type, description = null) {
        this.name = name;
        this.originalName = originalName;
        this.rarity = rarity;
        this.type = type;
        this.description = description;
    }
}

// Itens
const itensData = [
    new ItemData("Braço de Propulsão Arcano", "Arcane Propulsion Arm", "Muito Raro", "Especial"),
    new ItemData("Armblade", "Armblade", "Comum", "Arma"),
    new ItemData("Pedra da Limpeza", "Cleansing Stone", "Comum", "Especial"),
    new ItemData("Verme de Ouvido", "Earworm", "Incomum", "Especial"),
    new ItemData("Laterna Brilho Eterno", "Everbright Lantern", "Comum", "Especial"),
    new ItemData("Orbe do Escudo", "Orb of Shielding", "Comum", "Especial"),
    new ItemData("Armadura Viva", "Living Armor", "Muito Raro", "Armadura")
]

let itensObjects = []

document.addEventListener('DOMContentLoaded', () => {
    const itensSection = document.getElementById('itens-sec');

    function createItemObject(itemData) {
        const item = document.createElement('div');
        const nameText = document.createElement('p');
        const rarityText = document.createElement('p');
        const typeText = document.createElement('p')

        nameText.innerHTML = itemData.name;
        rarityText.innerHTML = itemData.rarity;
        typeText.innerHTML = itemData.type;

        item.appendChild(nameText);
        item.appendChild(rarityText);
        item.appendChild(typeText);

        return item;
    }

    function initializeItens() {
        itensData.forEach((itemData) => {
            itemObject = createItemObject(itemData);

            itensSection.appendChild(itemObject);
        })
    }

    initializeItens();

})