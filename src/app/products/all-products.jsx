export const products = [
  { name: "Fried rice solo", type: 'i', id: "friedricesolo", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'fried rice', ingId: "friedrice", recipe: true, quantity: 1, unit: "cup" },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Fried egg solo", type: 'i', id: "friedeggsolo", price: 15, quantity: 1, unit: "each", ingredients: [
    { name: 'Fried egg', ingId: "friedegg", recipe: true,  quantity: 1, unit: "each" },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Extra bbq sauce", type: 'i', id: "extrabbqsauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'BBQ sauce', ingId: "bbqsauce", recipe: true,  quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra buffalo sauce", type: 'i', id: "extrabuffalosauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true,  quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra coleslaw", type: 'i', id: "extracoleslaw", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'Coleslaw', ingId: "coleslaw", recipe: true,  quantity: 40, unit: "g", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra gravy", type: 'i', id: "extragravy", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'gravy', ingId: "gravy", recipe: true,  quantity: 4.5, unit: "tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra honesoy garlic sauce", type: 'i', id: "extrahonesoygarlicsauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'honesoy garlic sauce', ingId: "honesoygarlicsauce", recipe: true,  quantity: 4.5, unit: "tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra mushroom sauce", type: 'i', id: "extramushroomsauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'gravy', ingId: "gravy", recipe: true,  quantity: 3.5, unit: "tbs", noNest: true },
    { name: 'mushroom', ingId: "mushroomps", recipe: false,  quantity: 15, unit: "g" },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra orange sauce", type: 'i', id: "extraorangesauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'orange sauce', ingId: "orangesauce", recipe: true,  quantity: 3.5, unit: "tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Extra veggies", type: 'i', id: "extraveggies", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'veggies', ingId: "veggies", recipe: true,  quantity: 60, unit: "g", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries regular salt", type: 'i', id: "friesregularsalt", price: 35, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 1, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries regular cheese", type: 'i', id: "friesregularcheese", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 5, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries regular bbq", type: 'i', id: "friesregularbbq", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries regular sour cream", type: 'i', id: "friesregularsourcream", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'sour cream powder', ingId: "sourcreampowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
  ] },
  
  
  { name: "Fries large salt", type: 'i', id: "frieslargesalt", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 2, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries large cheese", type: 'i', id: "frieslargecheese", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 9, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries large bbq", type: 'i', id: "frieslargebbq", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 12, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Fries large sour cream", type: 'i', id: "frieslargesourcream", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'sour cream powder', ingId: "sourcreampowder", recipe: false,  quantity: 12, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Empanada 5pcs", type: 'i', id: "empanada5pcs", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'dough', ingId: "empanadadough", recipe: true,  quantity: 5, unit: "each", noNest: true },
    { name: 'filling', ingId: "empanadafilling", recipe: true,  quantity: 5, unit: "each", noNest: true  },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Empanada 10pcs", type: 'i', id: "empanada10pcs", price: 190, quantity: 1, unit: "each", ingredients: [
    { name: 'dough', ingId: "empanadadough", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'filling', ingId: "empanadafilling", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
  ] },
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions
