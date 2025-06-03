export const recipes = [
  { name: "Rice", type: 'e', id: "rice", quantity: 17, unit: "cup", ingredients: [
    { name: 'bigas', ingId: "bigas", recipe: false, quantity: 1818, unit: "g" }
  ] },
  { name: "Orange juice", type: 'e', id: "orangejuice", quantity: 1, unit: "l", ingredients: [
    { name: 'orange powder', ingId: "powderedorangejuice", recipe: false, quantity: 19, unit: "g" }
  ] },
  { name: "Palamig", type: 'e', id: "palamig", quantity: 1, unit: "l", ingredients: [
    { name: 'palamig powder', ingId: "powderedpalamig", recipe: false, quantity: 60, unit: "g" }
  ] },
  { name: "Fried rice", type: 'e', id: "friedrice", quantity: 1, unit: "cup", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true, quantity: 1.5, unit: "cup", noNest: true },
    { name: 'mantika', ingId: "mantika", recipe: false, quantity: 2, unit: "Tbs" },
    { name: 'bawang', ingId: "bawang", recipe: false, quantity: 5, unit: "g" },
    { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 4.6, unit: "g", alterQuantity: 1.5, alterUnit: 'tsp' },
    { name: 'rock salt', ingId: "saltrock", recipe: false, quantity: 2, unit: "g" },
  ] },
  { name: "Fried egg", type: 'e', id: "friedegg", quantity: 1, unit: "each", ingredients: [
    { name: 'egg', ingId: "eggxs", recipe: false, quantity: 1, unit: "each" },
    { name: 'mantika', ingId: "mantika", recipe: false, quantity: 1, unit: "Tbs" },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 18.5, unit: 'g', alterQuantity: 1, alterUnit: "Tbs" }
  ] },
  { name: "Coleslaw", type: 'e', id: "coleslaw", quantity: 250, unit: "g", ingredients: [
    { name: 'repolyo', ingId: "repolyo", recipe: false, quantity: 125, unit: "g" },
    { name: 'carrot', ingId: "carrot", recipe: false, quantity: 10, unit: "g" },
    { name: 'rock salt', ingId: "saltrock", recipe: false, quantity: 1.5, unit: 'g', alterQuantity: 0.2, alterUnit: "tsp" },
    { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 0.6, unit: "g", alterQuantity: 0.25, alterUnit: "tsp" },
    { name: 'white sugar', ingId: "sugarwhite", recipe: false, quantity: 2.1, unit: 'g', alterQuantity: 0.5, alterUnit: "tsp" },
    { name: 'mayonnaise', ingId: "mayonnaise", recipe: false, quantity: 0.5, unit: 'cup' }
  ] },
  
  
  
  
  
  
  
  
  
  
  
  { name: "BBQ sauce", type: 'f', id: "bbqsauce", quantity: 40, unit: "Tbs", prepTime: '8 mins',
    ingredients: [
      { name: 'tubig', ingId: "water", recipe: false, quantity: 1, unit: "cup" },
      { name: 'liquid Seasoning', ingId: "liquidseasoning", recipe: false, quantity: 0.25, unit: "cup" },
      { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 80, unit: "g", alterQuantity: 0.25, alterUnit: 'cup' },
      { name: 'toyo', ingId: "toyo", recipe: false, quantity: 0.125, unit: "cup" },
      { name: 'garlic Powder', ingId: "garlicpowder", recipe: false, quantity: 1.5, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp' },
      { name: 'brown Sugar', ingId: "sugarbrown", recipe: false, quantity: 110, unit: "g", alterQuantity: 0.5, alterUnit: 'cup' },
      { name: 'worcestershire sauce', ingId: "worcestershiresauce", recipe: false, quantity: 0.125, unit: "cup" },
      { name: 'cornstarch', ingId: "cornstarch", recipe: false, quantity: 120, unit: "g", alterQuantity: 1, alterUnit: 'cup' },
      { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 3, unit: "g" }
    ],
    instructions: {
      steps: [
        "Paghalu-haluin ang tubig, liquid seasoning, ketchup, toyo, garlic powder, brown sugar, worcestershire sauce at paminta.",
        "Pakuluan",
        "Tunawin ang cornstach sa tubig at ihalo ng paunti-unti hanggang sa makuha ang tamang lapot."
      ],
    },
  },
  { name: "Buffalo sauce", type: 'f', id: "buffalosauce", quantity: 36, unit: "Tbs", prepTime: '8 mins',
    ingredients: [
      { name: 'butter', ingId: "butter", recipe: false, quantity: 50, unit: "g", alterQuantity: 0.25, alterUnit: 'each' },
      { name: 'hot sauce', ingId: "hotsauce", recipe: false, quantity: 100, unit: "g", alterQuantity: 1, alterUnit: 'bottle' },
      { name: 'chili powder', ingId: "chilipowder", recipe: false, quantity: 3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
      { name: 'paprika', ingId: "paprika", recipe: false, quantity: 1.5, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp' },
      { name: 'chili flakes', ingId: "chiliflakes", recipe: false, quantity: 3.5, unit: "g", alterQuantity: 0.5, alterUnit: 'Tbs'},
      { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 2.84, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp' },
      { name: 'brown sugar', ingId: "sugarbrown", recipe: false, quantity: 12, unit: "g", alterQuantity: 1, alterUnit: 'Tbs' },
      { name: 'suka', ingId: "vinegar", recipe: false, quantity: 7.4, unit: "ml", alterQuantity: 0.5, alterUnit: 'Tbs' },
      { name: 'banana ketchup', ingId: "bananaketchup", recipe: false, quantity: 120, unit: "g", alterQuantity: 0.5, alterUnit: 'cup' }
    ],
    instructions: {
      steps: [
        "Paghalu-haluin ang butter, hot sauce, chili powder, paprika, chili flakes, garlic powder, brown sugar at ketchup.",
        "Pakuluan",
        "Huling ilagay ang suka at mag-intay ng ilang minuto bago haluin."
      ],
    },
  },
  { name: "Orange sauce", type: 'f', id: "orangesauce", quantity: 2, unit: "cup", prepTime: '8 mins',
    ingredients: [
      { name: 'butter', ingId: "butter", recipe: false, quantity: 50, unit: "g", alterQuantity: 0.25, alterUnit: 'each' },
      { name: 'bawang', ingId: "bawang", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'bulb' },
      { name: 'sweet chili sauce', ingId: "sweetchilisauce", recipe: false, quantity: 5.8, unit: "oz", alterQuantity: '1/2', alterUnit: 'bottle' },
      { name: 'orange powder', ingId: "powderedorangejuice", recipe: false, quantity: 10, unit: "g", alterQuantity: '1/2', alterUnit: 'pack' },
      { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 1, unit: "g" },
      { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 1, unit: "g" },
      { name: 'hot sauce', ingId: "hotsauce", recipe: false, quantity: 34, unit: "g", alterQuantity: 2, alterUnit: 'Tbs' },
    ],
    instructions: {
      steps: [
        "Timplahin ang orange powder sa isang basong tubig.",
        "Paghalu-haluin ang butter, bawang, sweet chili sauce, hot sauce at pakuluan.",
        "Ihalo ang tinimplang orange powder tapos ilagay ang paminta at vetsin."
      ],
    },
  },
  { name: "Honesoy garlic sauce", type: 'f', id: "honesoygarlicsauce", quantity: 40, unit: "Tbs", prepTime: '10 mins',
    ingredients: [
      { name: 'butter', ingId: "butter", recipe: false, quantity: 50, unit: "g", alterQuantity: 0.25, alterUnit: 'each' },
      { name: 'bawang', ingId: "bawang", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'bulb' },
      { name: 'honey', ingId: "honey", recipe: false, quantity: 320, unit: "g" },
      { name: 'toyo', ingId: "toyo", recipe: false, quantity: 0.5, unit: "cup" },
      { name: 'white sugar', ingId: "whitesugar", recipe: false, quantity: 50, unit: "g", alterQuantity: 0.25, alterUnit: 'cup'},
      { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 1, unit: "g" },
      { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 1, unit: "g" },
      { name: 'cornstarch', ingId: "cornstarch", recipe: false, quantity: 30, unit: "g", alterQuantity: 0.25, alterUnit: "cup" },
    ],
    instructions: {
      steps: [
        "Paghalu-haluin ang butter, bawang, honey, toyo at asukal.",
        "Pakuluan",
        "Huling ilagay ang paminta at sunod ang vetsin.",
        "Tunawin ang cornstach sa tubig at ihalo ng paunti-unti hanggang sa makuha ang tamang lapot."
      ],
    },
  },
  { name: "Gravy", type: 'f', id: "gravy", quantity: 651, unit: "ml", prepTime: '10 mins',
    ingredients: [
      { name: 'tubig', ingId: "water", recipe: false, quantity: 5, unit: "cup" },
      { name: 'butter', ingId: "butter", recipe: false, quantity: 50, unit: "g", alterQuantity: 0.25, alterUnit: 'each' },
      { name: 'harina', ingId: "harina", recipe: false, quantity: 120, unit: "g", alterQuantity: 1, alterUnit: 'cup' },
      { name: 'beef cube', ingId: "beefcube", recipe: false, quantity: 2, unit: "each" },
      { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 80, unit: "ml" },
      { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 1.2, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp'},
    ],
    instructions: {
      steps: [
        "Tunawin ang butter kasama ng beef cubes at haluing mabuti.",
        "Ilagay ang harina.",
        "Ilagay ang tubig.",
        "Haluin mabuti hanggang wala ng buo-buong harina.",
        "Ilagay ang liquid seasoning at paminta.",
        "Haluin hanggang sa lumapot"
      ],
    },
  },
  { name: "Veggies", type: 'f', id: "veggies", quantity: 180, unit: "g", prepTime: '10 mins',
    ingredients: [
      { name: 'repolyo', ingId: "repolyo", recipe: false, quantity: 125, unit: "g" },
      { name: 'carrot', ingId: "carrot", recipe: false, quantity: 50, unit: "g" },
      { name: 'sibuyas', ingId: "sibuyas", recipe: false, quantity: 15, unit: "g" },
      { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 1, unit: "Tbs" },
      { name: 'sesame oil', ingId: "sesameoil", recipe: false, quantity: 1, unit: "tsp" },
      { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 2, unit: "g" },
      { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 1, unit: "g" },
      { name: 'asin', ingId: "saltrock", recipe: false, quantity: 1, unit: "g" },
      { name: 'mantika', ingId: "mantika", recipe: false, quantity: 3, unit: "Tbs" },
    ],
    instructions: {
      steps: [
        "Igisa ang sibuyas.",
        "Ilagay ang carrots at repolyo.",
        "Lagyan ng liquid seasoning.",
        "Timplahan ng asin paminta at vetsin.",
        "Ilagay ang sesame oil at haluin ng ilang segundo.",
      ],
    },
  },
  
  
  
  
  { name: "Empanada dough", type: 'f', id: "empanadadough", quantity: 73, unit: "each", prepTime: '30 mins',
    ingredients: [
      { name: 'tubig', ingId: "water", recipe: false, quantity: 5, unit: "Tbs" },
      { name: 'harina', ingId: "harina", recipe: false, quantity: 480, unit: "g", alterQuantity: 4, alterUnit: 'cup' },
      { name: 'baking powder', ingId: "bakingpowder", recipe: false, quantity: 4.8, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
      { name: 'iodized salt', ingId: "saltiodized", recipe: false, quantity: 11.5, unit: "g", alterQuantity: 0.50, alterUnit: 'Tbs' },
      { name: 'butter', ingId: "butter", recipe: false, quantity: 56, unit: "g", alterQuantity: 4, alterUnit: 'Tbs' },
      { name: 'evap', ingId: "evap", recipe: false, quantity: 1, unit: "cup" },
      { name: 'medium egg', ingId: "eggmedium", recipe: false, quantity: 1, unit: "each" },
    ],
    instructions: {
      steps: [
        "Palamigin muna ng mabuti ang tubig at evap.",
        "Paghalu-haluin lahat ng ingredients.",
        "Masahin ng mabuti, magdagdag ng harina kung kailangan hanggang hindi na moisted.",
        "Ilagay sa ref ng at least 2 oras.",
      ],
    },
  },
  { name: "Empanada filling", type: 'f', id: "empanadafilling", quantity: 73, unit: "each", prepTime: '30 mins',
    ingredients: [
      { name: 'ground pork', ingId: "groundpork", recipe: false, quantity: 1, unit: "kg" },
      { name: 'sibuyas', ingId: "sibuyas", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'each' },
      { name: 'bawang', ingId: "bawang", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'bulb' },
      { name: 'patatas', ingId: "patatas", recipe: false, quantity: 315, unit: "g", alterQuantity: 2, alterUnit: 'each' },
      { name: 'carrot', ingId: "carrot", recipe: false, quantity: 225, unit: "g", alterQuantity: 2, alterUnit: 'each' },
      { name: 'green peas', ingId: "greenpeas", recipe: false, quantity: 155, unit: "g", alterQuantity: 1, alterUnit: 'can' },
      { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 2.5, unit: "g", alterQuantity: 1/2, alterUnit: "tsp" },
      { name: 'pamintang durog', ingId: "groundblackpepper", recipe: false, quantity: 1.15, unit: "g", alterQuantity: 1/2, alterUnit: "tsp" },
      { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: .50, unit: "cup" },
      { name: 'pasas', ingId: "pasas", recipe: false, quantity: 125, unit: "g" },
    ],
    instructions: {
      steps: [
        "Igisa ang bawang at sibuyas.",
        "Ilagay ang giniling at intayin maluto.",
        "Ilagay ang patatas, carrots, pasas, liquid seasoning, paminta at vetsin.",
        "Palambutin ang patatas at carrots bago ilagay ang green peas(walang sabaw).",
      ],
    },
  },
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions

// groundblackpepper 1tsp = 2.3g
// rock salt 1tsp = 6g
// vetsin 1tsp = 5g
// white sugar 1tsp = 4.2g
// bawang 1 bulb = 60g clove = 6g
// bawang 1 whole = 60g
// harina 1 cup = 120g
// hot sauce 2tbs = 34g
// iodized salt 1tsp = 6g 1tbsp = 23g
// butter 1tbsp = 14g

const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];