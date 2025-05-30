export const products = [
  { name: "Fried rice solo", type: 'i', id: "friedricesolo", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'fried rice', ingId: "friedrice", recipe: true, quantity: 1, unit: "cup" },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" }
  ] },
  { name: "Fried egg solo", type: 'i', id: "friedeggsolo", price: 15, quantity: 1, unit: "each", ingredients: [
    { name: 'fried egg', ingId: "friedegg", recipe: true,  quantity: 1, unit: "each" },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions
