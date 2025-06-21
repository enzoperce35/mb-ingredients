export const products = [
  { name: "Plain rice", type: 'i', id: "plainrice", price: 15, quantity: 1, unit: "each", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 2, unit: "minute" }, //for re-heating
  ] },
  { name: "Fried rice solo", type: 'i', id: "friedricesolo", price: 25, quantity: 1, unit: "each", ingredients: [
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
  { name: "Fries salt regular", type: 'i', id: "friesregularsalt", price: 35, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 1, unit: "g" },
    { name: 'small pouch', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries salt large", type: 'i', id: "frieslargesalt", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 2, unit: "g" },
    { name: 'large pouch', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries salt with iced tea(J1)", type: 'i', id: "friesregularsaltwithicedtea", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 1, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'icedtea', ingId: "icedtea", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries salt with orange juice(J2)", type: 'i', id: "friesregularsaltwithorangejuice", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false,  quantity: 1, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'orange juice', ingId: "orangejuice", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries cheese regular", type: 'i', id: "friesregularcheese", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 5, unit: "g" },
    { name: 'small pouch', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries cheese large", type: 'i', id: "frieslargecheese", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 9, unit: "g" },
    { name: 'large pouch', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries cheese with iced tea(J3)", type: 'i', id: "friesregularcheesewithicedtea", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 5, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'icedtea', ingId: "icedtea", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries cheese with orange juice(J4)", type: 'i', id: "friesregularcheesewithorangejuice", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'cheese powder', ingId: "cheesepowder", recipe: false,  quantity: 5, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'orange juice', ingId: "orangejuice", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries bbq regular", type: 'i', id: "friesregularbbq", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'small pouch', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries bbq large", type: 'i', id: "frieslargebbq", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 12, unit: "g" },
    { name: 'large pouch', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries bbq with iced tea(J5)", type: 'i', id: "friesregularbbqwithicedtea", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'icedtea', ingId: "icedtea", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries bbq with orange juice(J6)", type: 'i', id: "friesregulabbqewithorangejuice", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "bbqpowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'orange juice', ingId: "orangejuice", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries sour cream regular", type: 'i', id: "friesregularsourcream", price: 40, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'sour cream powder', ingId: "sourcreampowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'small pouch', ingId: "frenchfriespouchsmall", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries sour cream large", type: 'i', id: "frieslargesourcream", price: 65, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 180, unit: "g" },
    { name: 'sour cream powder', ingId: "sourcreampowder", recipe: false,  quantity: 12, unit: "g" },
    { name: 'large pouch', ingId: "frenchfriespouchlarge", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries sour cream with iced tea(J7)", type: 'i', id: "friesregularsourcreamwithicedtea", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "sourcreampowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'icedtea', ingId: "icedtea", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Fries sour cream with orange juice(J8)", type: 'i', id: "friesregulasourcreamewithorangejuice", price: 50, quantity: 1, unit: "each", ingredients: [
    { name: 'french fries', ingId: "frenchfries", recipe: false,  quantity: 100, unit: "g" },
    { name: 'bbq powder', ingId: "sourcreampowder", recipe: false,  quantity: 8, unit: "g" },
    { name: 'fries cup', ingId: "friescup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'orange juice', ingId: "orangejuice", recipe: true,  quantity: 200, unit: "ml", noNest: true },
    { name: 'kerimo cup', ingId: "kerimocup", recipe: false,  quantity: 1, unit: "each" },
    { name: 'straw', ingId: "bendingstraw", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
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
  { name: "Siomai steamed 6pcs", type: 'i', id: "siomai6pcssteamed", price: 45, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 6, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai steamed 8pcs", type: 'i', id: "siomai8pcssteamed", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 8, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai fried 6pcs", type: 'i', id: "siomai6pcsfried", price: 45, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 6, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" },
  ] },
  { name: "Siomai fried 8pcs", type: 'i', id: "siomai8pcsfried", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 8, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai plate', ingId: "siomaiplate", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" },
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
  { name: "Siomai bilao small 30pcs", type: 'i', id: "siomaibilaosmall30pcs", price: 250, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 30, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 5, unit: "each", noNest: true  },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 4, unit: "each" },
    { name: 'bilaosmall', ingId: "bilaosmall", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai bilao medium 50pcs", type: 'i', id: "siomaibilaomedium50pcs", price: 400, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 50, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false,  quantity: 6, unit: "each" },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai bilao large 75pcs", type: 'i', id: "siomaibilaolarge75pcs", price: 600, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 75, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 15, unit: "each", noNest: true  },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false, quantity: 8, unit: "each" },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Siomai bilao xl 100pcs", type: 'i', id: "siomaibilaoxl100pcs", price: 800, quantity: 1, unit: "each", ingredients: [
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 100, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 20, unit: "each", noNest: true  },
    { name: 'Gravy cup', ingId: "gravycup", recipe: false, quantity: 10, unit: "each" },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Beef burger solo(B1)", type: 'i', id: "beefburgersolo", price: 55, quantity: 1, unit: "each", ingredients: [
    { name: 'beef burger', ingId: "beefburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Beef burger with fries(B2)", type: 'i', id: "beefburgerwithfries", price: 75, quantity: 1, unit: "each", ingredients: [
    { name: 'beef burger', ingId: "beefburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'fries', ingId: "frenchfries", recipe: false,  quantity: 60, unit: "g" },
    { name: 'burger box', ingId: "burgerbox", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Beef burger with spaghetti(B3)", type: 'i', id: "beefburgerwithspaghetti", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'beef burger', ingId: "beefburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 0.5, unit: "each", noNest: true   },
    { name: 'lb2', ingId: "lb2", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Beef burger with carbonara(B4)", type: 'i', id: "beefburgerwithcarbonara", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'beef burger', ingId: "beefburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 0.5, unit: "each", noNest: true   },
    { name: 'lb2', ingId: "lb2", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Beef burger with palabok(B5)", type: 'i', id: "beefburgerwithpalabok", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'beef burger', ingId: "beefburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 0.5, unit: "each", noNest: true   },
    { name: 'lb2', ingId: "lb2", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Chicken burger solo(C1)", type: 'i', id: "chickenburgersolo", price: 55, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken burger', ingId: "chickenburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken burger with fries(C2)", type: 'i', id: "chickenburgerwithfries", price: 75, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken burger', ingId: "chickenburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'fries', ingId: "frenchfries", recipe: false,  quantity: 60, unit: "g" },
    { name: 'burger box', ingId: "burgerbox", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Chicken burger with spaghetti(C3)", type: 'i', id: "chickenburgerwithspaghetti", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken burger', ingId: "chickenburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 0.5, unit: "each", noNest: true   },
    { name: 'lb2', ingId: "lb2", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Chicken burger with carbonara(C4)", type: 'i', id: "chickenburgerwithcarbonara", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken burger', ingId: "chickenburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 0.5, unit: "each", noNest: true   },
    { name: 'lb2', ingId: "lb2", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Chicken burger with palabok(C5)", type: 'i', id: "chickenburgerwithpalabok", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken burger', ingId: "chickenburger", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 0.5, unit: "each", noNest: true   },
    { name: 'lb2', ingId: "lb2", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 1, unit: "minute" }, //for re-heating
  ] },
  { name: "Chaofan solo(F1)", type: 'i', id: "chaofansolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofan", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'parchment paper', ingId: "parchmentpaper", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 8, unit: "minute" },
  ] },
  { name: "Chaofan with 4pcs steamed siomai(F2)", type: 'i', id: "chaofanwith4pcssteamedsiomai", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofan", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 4, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 8, unit: "minute" },
  ] },
  { name: "Chaofan with 4pcs fried siomai(F3)", type: 'i', id: "chaofanwith4pcsfriedsiomai", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofan", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 4, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 11, unit: "minute" },
  ] },
  { name: "Chaofan with breaded porkchop(F4)", type: 'i', id: "chaofanwithbreadedporkchop", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofan", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'breaded porkchop', ingId: "breadedporkchop", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 37, unit: 'g', alterQuantity: 2, alterUnit: "Tbs" },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 8, unit: "minute" },
  ] },
  { name: "Chaofan with 4pcs shanghai(F5)", type: 'i', id: "chaofanwith4pcsshanghai", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofan", recipe: true, quantity: 1, unit: "each", noNest: true  },
    { name: 'shanghai', ingId: "lumpiangshanghai", recipe: true,  quantity: 4, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 37, unit: 'g', alterQuantity: 2, alterUnit: "Tbs" },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
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
  { name: "Chicken fillet bilao small", type: 'i', id: "chickenfilletbilaosmall", price: 300, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken fillet', ingId: "chickenfillet", recipe: true,  quantity: 300, unit: "g", noNest: true  },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 9, unit: "Tbs", noNest: true  },
    { name: 'gravy cup', ingId: "gravycup", recipe: false, quantity: 2, unit: "each" },
    { name: 'bilaosmall', ingId: "bilaosmall", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken fillet bilao medium", type: 'i', id: "chickenfilletbilaomedium", price: 550, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken fillet', ingId: "chickenfillet", recipe: true,  quantity: 600, unit: "g", noNest: true  },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 18, unit: "Tbs", noNest: true  },
    { name: '3.5oz cup', ingId: "plasticcupmedium", recipe: false, quantity: 2, unit: "each" },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken fillet bilao large", type: 'i', id: "chickenfilletbilaolarge", price: 850, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken fillet', ingId: "chickenfillet", recipe: true,  quantity: 900, unit: "g", noNest: true  },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 27, unit: "Tbs", noNest: true  },
    { name: '3.5oz cup', ingId: "squaretub", recipe: false, quantity: 3, unit: "each" },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken fillet bilao xl", type: 'i', id: "chickenfilletbilaoxl", price: 1100, quantity: 1, unit: "each", ingredients: [
    { name: 'chicken fillet', ingId: "chickenfillet", recipe: true,  quantity: 1200, unit: "g", noNest: true  },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 36, unit: "Tbs", noNest: true  },
    { name: '3.5oz cup', ingId: "plasticcupmedium", recipe: false, quantity: 4, unit: "each" },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings 6pcs buffalo", type: 'i', id: "chickenwings6pcsbuffalo", price: 145, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 6, unit: "each", noNest: true },
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true, quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings 6pcs honey soy", type: 'i', id: "chickenwings6pcshoneysoy", price: 145, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 6, unit: "each", noNest: true },
    { name: 'honey soy', ingId: "honesoygarlicsauce", recipe: true, quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings 6pcs orange", type: 'i', id: "chickenwings6pcsorange", price: 145, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 6, unit: "each", noNest: true },
    { name: 'orange sauce', ingId: "orangesauce", recipe: true, quantity: 4.5, unit: "Tbs", noNest: true },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings 10pcs buffalo", type: 'i', id: "chickenwings10pcsbuffalo", price: 235, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 10, unit: "each", noNest: true },
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true, quantity: 8, unit: "Tbs", noNest: true },
    { name: 'lb1', ingId: "lb1", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings 10pcs honey soy", type: 'i', id: "chickenwings10pcshoneysoy", price: 235, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 10, unit: "each", noNest: true },
    { name: 'honey soy', ingId: "honesoygarlicsauce", recipe: true, quantity: 8, unit: "Tbs", noNest: true },
    { name: 'lb1', ingId: "lb1", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings 10pcs orange", type: 'i', id: "chickenwings10pcsorange", price: 235, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 10, unit: "each", noNest: true },
    { name: 'orange sauce', ingId: "orangesauce", recipe: true, quantity: 8, unit: "Tbs", noNest: true },
    { name: 'lb1', ingId: "lb1", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings bilao medium(30pcs)", type: 'i', id: "chickenwingsbilaomedium", price: 730, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 30, unit: "each", noNest: true },
    { name: 'honey soy', ingId: "honesoygarlicsauce", recipe: true, quantity: 8, unit: "Tbs", noNest: true },
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true, quantity: 8, unit: "Tbs", noNest: true },
    { name: 'orange sauce', ingId: "orangesauce", recipe: true, quantity: 8, unit: "Tbs", noNest: true },
    { name: 'medium bilao', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings bilao large(40pcs)", type: 'i', id: "chickenwingsbilaolarge", price: 900, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 40, unit: "each", noNest: true },
    { name: 'honey soy', ingId: "honesoygarlicsauce", recipe: true, quantity: 11, unit: "Tbs", noNest: true },
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true, quantity: 11, unit: "Tbs", noNest: true },
    { name: 'orange sauce', ingId: "orangesauce", recipe: true, quantity: 11, unit: "Tbs", noNest: true },
    { name: 'large bilao', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Chicken wings bilao xl(50pcs)", type: 'i', id: "chickenwingsbilaoxl", price: 1100, quantity: 1, unit: "each", ingredients: [
    { name: 'wings', ingId: "chickenwings", recipe: true,  quantity: 50, unit: "each", noNest: true },
    { name: 'honey soy', ingId: "honesoygarlicsauce", recipe: true, quantity: 11, unit: "Tbs", noNest: true },
    { name: 'Buffalo sauce', ingId: "buffalosauce", recipe: true, quantity: 11, unit: "Tbs", noNest: true },
    { name: 'orange sauce', ingId: "orangesauce", recipe: true, quantity: 11, unit: "Tbs", noNest: true },
    { name: 'xl bilao', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto small 25pcs", type: 'i', id: "putosmall25pcs", price: 200, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 25, unit: "each", noNest: true  },
    { name: 'bilaosmall', ingId: "bilaosmall", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto medium 40pcs", type: 'i', id: "putomedium40pcs", price: 300, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 40, unit: "each", noNest: true  },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto large 50pcs", type: 'i', id: "putolarge50pcs", price: 370, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 50, unit: "each", noNest: true  },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Puto xl 75pcs", type: 'i', id: "putoxl75pcs", price: 520, quantity: 1, unit: "each", ingredients: [
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 75, unit: "each", noNest: true  },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: .50, unit: "each" },
    { name: 'cling wrap', ingId: "clingwrap12x300", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Carbonara solo", type: 'i', id: "carbonarasolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Carbonara with 2pcs puto", type: 'i', id: "carbonarawith2pcsputo", price: 75, quantity: 1, unit: "each", ingredients: [
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 2, unit: "each", noNest: true  },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Carbonara medium", type: 'i', id: "carbonaramediumbilao", price: 550, quantity: 1, unit: "each", ingredients: [
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Carbonara large", type: 'i', id: "carbonaralargebilao", price: 750, quantity: 1, unit: "each", ingredients: [
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 15, unit: "each", noNest: true  },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Carbonara xl", type: 'i', id: "carbonaraxlbilao", price: 950, quantity: 1, unit: "each", ingredients: [
    { name: 'carbonara', ingId: "carbonara", recipe: true,  quantity: 20, unit: "each", noNest: true  },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Spaghetti solo", type: 'i', id: "spaghettisolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Spaghetti with 2pcs puto", type: 'i', id: "spaghettiwith2pcsputo", price: 75, quantity: 1, unit: "each", ingredients: [
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 2, unit: "each", noNest: true  },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Spaghetti medium", type: 'i', id: "spaghettimediumbilao", price: 550, quantity: 1, unit: "each", ingredients: [
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Spaghetti large", type: 'i', id: "spaghettilargebilao", price: 750, quantity: 1, unit: "each", ingredients: [
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 15, unit: "each", noNest: true  },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Spaghetti xl", type: 'i', id: "spaghettixlbilao", price: 950, quantity: 1, unit: "each", ingredients: [
    { name: 'spaghetti', ingId: "spaghetti", recipe: true,  quantity: 20, unit: "each", noNest: true  },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Palabok solo", type: 'i', id: "palaboksolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Palabok with 2pcs puto", type: 'i', id: "palabokwith2pcsputo", price: 75, quantity: 1, unit: "each", ingredients: [
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 2, unit: "each", noNest: true  },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Palabok medium", type: 'i', id: "palabokmediumbilao", price: 500, quantity: 1, unit: "each", ingredients: [
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Palabok large", type: 'i', id: "palaboklargebilao", price: 700, quantity: 1, unit: "each", ingredients: [
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 15, unit: "each", noNest: true  },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Palabok xl", type: 'i', id: "palabokxlbilao", price: 850, quantity: 1, unit: "each", ingredients: [
    { name: 'palabok', ingId: "palabok", recipe: true,  quantity: 20, unit: "each", noNest: true  },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Pancit bihon solo", type: 'i', id: "pancitbihonsolo", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'bihon', ingId: "bihon", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Pancit bihon with 2pcs puto", type: 'i', id: "pancitbihonwith2pcsputo", price: 75, quantity: 1, unit: "each", ingredients: [
    { name: 'bihon', ingId: "bihon", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'puto', ingId: "puto", recipe: true,  quantity: 2, unit: "each", noNest: true  },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" }, //for re-heating
  ] },
  { name: "Pancit bihon medium", type: 'i', id: "pancitbihonmediumbilao", price: 600, quantity: 1, unit: "each", ingredients: [
    { name: 'bihon', ingId: "bihon", recipe: true,  quantity: 10, unit: "each", noNest: true  },
    { name: 'bilaomedium', ingId: "bilaomedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Pancit bihon large", type: 'i', id: "pancitbihonlargebilao", price: 850, quantity: 1, unit: "each", ingredients: [
    { name: 'bihon', ingId: "bihon", recipe: true,  quantity: 15, unit: "each", noNest: true  },
    { name: 'bilaolarge', ingId: "bilaolarge", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Pancit bihon xl", type: 'i', id: "pancitbihonxlbilao", price: 1050, quantity: 1, unit: "each", ingredients: [
    { name: 'bihon', ingId: "bihon", recipe: true,  quantity: 20, unit: "each", noNest: true  },
    { name: 'bilaoxl', ingId: "bilaoxl", recipe: false, quantity: 1, unit: "each" },
    { name: 'aluminum foil', ingId: "aluminumfoil300m", recipe: false, quantity: 1, unit: "each" },
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
  { name: "Breaded porkchop(A1)", type: 'i', id: "breadedporkchopsolo", price: 70, quantity: 1, unit: "each", ingredients: [
    { name: 'breaded porkchop', ingId: "breadedporkchop", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'bbq sauce', ingId: "bbqsauce", recipe: true, quantity: 2.5, unit: 'Tbs', noNest: true },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Breaded porkchop with rice(M1)", type: 'i', id: "breadedporkchopwithrice", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'breaded porkchop', ingId: "breadedporkchop", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'veggies', ingId: "veggies", recipe: true,  quantity: 40, unit: "g", noNest: true },
    { name: 'bbq sauce', ingId: "bbqsauce", recipe: true, quantity: 2.5, unit: 'Tbs', noNest: true },
    { name: 'sauce cup', ingId: "saucecup", recipe: false, quantity: 1, unit: "each" },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Burger steak in mushroom sauce with rice(M2)", type: 'i', id: "burgersteakinmushroomsaucewithrice", price: 100, quantity: 1, unit: "each", ingredients: [
    { name: 'beef patty', ingId: "beefpatty", recipe: true, quantity: 2, unit: "each", noNest: true },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 6, unit: "Tbs", noNest: true  },
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'mushroom', ingId: "mushroomps", recipe: false,  quantity: 5, unit: "g" },
    { name: 'lb2', ingId: "lb2", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 6, unit: "minute" },
  ] },
  { name: "Burger steak in mushroom sauce(A2)", type: 'i', id: "burgersteakinmushroomsauce", price: 80, quantity: 1, unit: "each", ingredients: [
    { name: 'beef patty', ingId: "beefpatty", recipe: true, quantity: 2, unit: "each", noNest: true },
    { name: 'gravy', ingId: "gravy", recipe: true, quantity: 6, unit: "Tbs", noNest: true  },
    { name: 'mushroom', ingId: "mushroomps", recipe: false,  quantity: 5, unit: "g" },
    { name: 'spaghettibox', ingId: "spaghettibox", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 6, unit: "minute" },
  ] },
  { name: "Rice bowl with 5pcs shanghai(R1)", type: 'i', id: "ricebowlwith5pcsshanghai", price: 55, quantity: 1, unit: "each", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'shanghai', ingId: "lumpiangshanghai", recipe: true,  quantity: 5, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 37, unit: 'g', alterQuantity: 2, alterUnit: "Tbs" },
    { name: 'Ricebowl cup', ingId: "ricebowlcup", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Rice bowl with 5pcs steamed siomai(R2)", type: 'i', id: "ricebowlwith5pcssteamedsiomai", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 5, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true },
    { name: 'Ricebowl cup', ingId: "ricebowlcup", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Rice bowl with 5pcs fried siomai(R3)", type: 'i', id: "ricebowlwith5pcsfriedsiomai", price: 60, quantity: 1, unit: "each", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'siomai', ingId: "siomai", recipe: true,  quantity: 5, unit: "each", noNest: true  },
    { name: 'condiments', ingId: "siomaicondiments", recipe: true,  quantity: 1, unit: "each", noNest: true },
    { name: 'Ricebowl cup', ingId: "ricebowlcup", recipe: false, quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 3, unit: "minute" },
  ] },
  { name: "Porksilog", type: 'i', id: "porksilog", price: 90, quantity: 1, unit: "each", ingredients: [
    { name: 'fried rice', ingId: "friedrice", recipe: true, quantity: 1, unit: "cup", noNest: true },
    { name: 'breaded porkchop', ingId: "breadedporkchop", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'fried egg', ingId: "friedegg", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 37, unit: 'g', alterQuantity: 2, alterUnit: "Tbs" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
  ] },
  { name: "Malingsilog", type: 'i', id: "malingsilog", price: 70, quantity: 1, unit: "each", ingredients: [
    { name: 'fried rice', ingId: "friedrice", recipe: true, quantity: 1, unit: "cup", noNest: true },
    { name: 'luncheon meat', ingId: "luncheonmeat", recipe: false,  quantity: 55, unit: "g"  },
    { name: 'fried egg', ingId: "friedegg", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 37, unit: 'g', alterQuantity: 2, alterUnit: "Tbs" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
  { name: "Hotsilog", type: 'i', id: "hotsilog", price: 70, quantity: 1, unit: "each", ingredients: [
    { name: 'fried rice', ingId: "friedrice", recipe: true, quantity: 1, unit: "cup", noNest: true },
    { name: 'hotdog', ingId: "hotdog", recipe: false,  quantity: 2, unit: "each"  },
    { name: 'fried egg', ingId: "friedegg", recipe: true,  quantity: 1, unit: "each", noNest: true  },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 37, unit: 'g', alterQuantity: 2, alterUnit: "Tbs" },
    { name: 'lb1', ingId: "lb1", recipe: false,  quantity: 1, unit: "each" },
    { name: 'LPG', ingId: "lpg11kgs", recipe: false, quantity: 5, unit: "minute" },
  ] },
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions
