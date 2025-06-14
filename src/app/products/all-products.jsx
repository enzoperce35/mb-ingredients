export const products = [
  { name: "Fried rice solo", type: 'i', id: "friedricesolo", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'fried rice', ingId: "friedrice", recipe: true, quantity: 1, unit: "cup", noNest: true },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Fried egg solo", type: 'i', id: "friedeggsolo", price: 15, quantity: 1, unit: "each", ingredients: [
    { name: 'Fried egg', ingId: "friedegg", recipe: true,  quantity: 1, unit: "each", noNest: true },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 18.5, unit: 'g', alterQuantity: 1, alterUnit: "Tbs" },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Extra bbq sauce", type: 'i', id: "extrabbqsauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'BBQ sauce', ingId: "bbqsauce", recipe: true,  quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra buffalo sauce", type: 'i', id: "extrabuffalosauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true,  quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra coleslaw", type: 'i', id: "extracoleslaw", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'Coleslaw', ingId: "coleslaw", recipe: true,  quantity: 40, unit: "g", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra gravy", type: 'i', id: "extragravy", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'gravy', ingId: "gravy", recipe: true,  quantity: 4.5, unit: "tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra honesoy garlic sauce", type: 'i', id: "extrahonesoygarlicsauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'honesoy garlic sauce', ingId: "honesoygarlicsauce", recipe: true,  quantity: 4.5, unit: "tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra mushroom sauce", type: 'i', id: "extramushroomsauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'gravy', ingId: "gravy", recipe: true,  quantity: 3.5, unit: "tbs", noNest: true },
    { name: 'mushroom', ingId: "mushroomps", recipe: false,  quantity: 15, unit: "g" },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra orange sauce", type: 'i', id: "extraorangesauce", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'orange sauce', ingId: "orangesauce", recipe: true,  quantity: 3.5, unit: "tbs", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Extra veggies", type: 'i', id: "extraveggies", price: 20, quantity: 1, unit: "each", ingredients: [
    { name: 'veggies', ingId: "veggies", recipe: true,  quantity: 60, unit: "g", noNest: true },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Fries regular salt", type: 'i', id: "friesregularsalt", price: 35, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 1, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Fries regular cheese", type: 'i', id: "friesregularcheese", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 5, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
    
  ] },
  { name: "Fries regular bbq", type: 'i', id: "friesregularbbq", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Fries regular sour cream", type: 'i', id: "friesregularsourcream", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'sour cream powder', ingId: "sourcreampowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Fries large salt", type: 'i', id: "frieslargesalt", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 2, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Fries large cheese", type: 'i', id: "frieslargecheese", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 9, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Fries large bbq", type: 'i', id: "frieslargebbq", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 12, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Fries large sour cream", type: 'i', id: "frieslargesourcream", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'sour cream powder', ingId: "sourcreampowder", recipe: false,  quantity: 12, unit: "g" },
    { name: 'fries pouch small', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Empanada 5pcs", type: 'i', id: "empanada5pcs", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'dough', ingId: "empanadadough", recipe: true,  quantity: 5, unit: "each", noNest: true },
    { name: 'filling', ingId: "empanadafilling", recipe: true,  quantity: 5, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 6, unit: "minute" },
  ] },
  { name: "Empanada 10pcs", type: 'i', id: "empanada10pcs", price: 190, quantity: 1, unit: "each", ingredients: [
    { name: 'dough', ingId: "empanadadough", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'filling', ingId: "empanadafilling", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 12, unit: "minute" },
  ] },
  { name: "Maruya set", type: 'i', id: "maruyaset", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'maruya mixture', ingId: "maruyamixture", recipe: true,  quantity: 180, unit: "ml", noNest: true  },
    { name: 'condensed', ingId: "condensed", recipe: false,  quantity: 3, unit: "Tbs"  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 4, unit: "minute" },
  ] },
  { name: "Maruya bites", type: 'i', id: "maruyabites", price: 120, quantity: 1, unit: "each", ingredients: [
    { name: 'maruya mixture', ingId: "maruyamixture", recipe: true,  quantity: 480, unit: "ml", noNest: true  },
    { name: 'condensed', ingId: "condensed", recipe: false,  quantity: 4.5, unit: "Tbs"  },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 8, unit: "minute" },
  ] },
  { name: "Siomai 6pcs", type: 'i', id: "siomai6pcs", price: 45, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 6, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai 8pcs", type: 'i', id: "siomai8pcs", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 8, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai Tub", type: 'i', id: "siomaitub", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 12, unit: "each", noNest: true  },
    { name: 'fried garlic', ingId: "friedgarlic", recipe: true,  quantity: 8, unit: "g", noNest: true  },
    { name: 'toyo', ingId: "siomaitoyomixture", recipe: true,  quantity: 4.5, unit: "Tbs", noNest: true  },
    { name: 'kalamansi', ingId: "kalamansi", recipe: false, quantity: 11, unit: "g" },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Siomai Tub spicy", type: 'i', id: "siomaitubspicy", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 12, unit: "each", noNest: true  },
    { name: 'chili oil', ingId: "chilioil", recipe: true,  quantity: 3, unit: "tsp", noNest: true },
    { name: 'fried garlic', ingId: "friedgarlic", recipe: true,  quantity: 8, unit: "g", noNest: true  },
    { name: 'toyo', ingId: "siomaitoyomixture", recipe: true,  quantity: 4.5, unit: "Tbs", noNest: true  },
    { name: 'kalamansi', ingId: "kalamansi", recipe: false, quantity: 11, unit: "g" },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Beef burger solo", type: 'i', id: "beefburgersolo", price: 55, quantity: 1, unit: "each", ingredients: [
    { name: 'beef burger', ingId: "beefburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken burger solo", type: 'i', id: "chickenburgersolo", price: 55, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken burger', ingId: "chickenburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chaofan solo", type: 'i', id: "chaofansolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofan", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 8, unit: "minute" },
  ] },
  { name: "Chicken fillet regular", type: 'i', id: "chickenfilletregular", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken fillet', ingId: "chickenfillet", recipe: true,  quantity: 100, unit: "g", noNest: true  },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 2.5, unit: "Tbs", noNest: true  },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Chicken fillet large", type: 'i', id: "chickenfilletlarge", price: 135, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken fillet', ingId: "chickenfillet", recipe: true,  quantity: 150, unit: "g", noNest: true  },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 4.5, unit: "Tbs", noNest: true  },
    { name: 'gravy cup', ingId: "gravycup", recipe: false, quantity: 1, unit: "each" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto small 25pcs", type: 'i', id: "putosmall25pcs", price: 200, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 25, unit: "each", noNest: true  },
    { name: 'bilaosmall', ingId: "bilaosmall", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto medium 40pcs", type: 'i', id: "putomedium40pcs", price: 300, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 40, unit: "each", noNest: true  },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto large 50pcs", type: 'i', id: "putolarge50pcs", price: 370, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 50, unit: "each", noNest: true  },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto xl 75pcs", type: 'i', id: "putoxl75pcs", price: 520, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 75, unit: "each", noNest: true  },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Carbonara solo", type: 'i', id: "carbonarasolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Spaghetti solo", type: 'i', id: "spaghettisolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Palabok solo", type: 'i', id: "palaboksolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Pansit bihon solo", type: 'i', id: "pansitbihonsolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'bihon', ingId: "bihon", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Shanghai 12pcs", type: 'i', id: "shanghai12pcs", price: 85, quantity: 1, unit: "each", ingredients: [
    { name: 'shanghai', ingId: "lumpiangshanghai", recipe: true,  quantity: 12, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 46.25, unit: 'g', alterQuantity: 2.5, alterUnit: "Tbs" },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 8, unit: "minute" },
  ] },
  { name: "Shanghai 24pcs", type: 'i', id: "shanghai24pcs", price: 170, quantity: 1, unit: "each", ingredients: [
    { name: 'shanghai', ingId: "lumpiangshanghai", recipe: true,  quantity: 24, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 83.25, unit: 'g', alterQuantity: 4.5, alterUnit: "Tbs" },
    { name: 'gravy cup', ingId: "gravycup", recipe: false, quantity: 1, unit: "each" },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 10, unit: "minute" },
  ] },
  { name: "Shanghai 36pcs", type: 'i', id: "shanghai36pcs", price: 250, quantity: 1, unit: "each", ingredients: [
    { name: 'shanghai', ingId: "lumpiangshanghai", recipe: true,  quantity: 36, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 129.5, unit: 'g', alterQuantity: 7, alterUnit: "Tbs" },
    { name: 'gravy cup', ingId: "gravycup", recipe: false, quantity: 1, unit: "each" },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 16, unit: "minute" },
  ] },
  { name: "Breaded porkchop solo", type: 'i', id: "breadedporkchopsolo", price: 70, quantity: 1, unit: "each", ingredients: [
    { name: 'breaded porkchop', ingId: "breadedporkchop", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'bbq sauce', ingId: "bbqsauce", recipe: true, quantity: 2.5, unit: 'Tbs', noNest: true },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Breaded porkchop with rice", type: 'i', id: "breadedporkchopwithrice", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'breaded porkchop', ingId: "breadedporkchop", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'veggies', ingId: "veggies", recipe: true,  quantity: 40, unit: "g", noNest: true },
    { name: 'bbq sauce', ingId: "bbqsauce", recipe: true, quantity: 2.5, unit: 'Tbs', noNest: true },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
  ] },
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions
