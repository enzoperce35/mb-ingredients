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
  { name: "Fried garlic", type: 'e', id: "friedgarlic", quantity: 200, unit: "g", ingredients: [
    { name: 'bawang', ingId: "bawang", recipe: false, quantity: 300, unit: "g", alterQuantity: 5, alterUnit: 'bulb' },
  ] },
  { name: "Siomai toyo mixture", type: 'e', id: "siomaitoyomixture", quantity: 34, unit: "fl-oz", ingredients: [
    { name: 'tubig', ingId: "water", recipe: false, quantity: 2, unit: "cup" },
    { name: 'asukal', ingId: "sugarwhite", recipe: false, quantity: 37.8, unit: "g", alterQuantity: 3, alterUnit: "Tbs" },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 15, unit: "g", alterQuantity: 1, alterUnit: "Tbs" },
    { name: 'toyo', ingId: "toyo", recipe: false, quantity: 17, unit: "fl-oz", alterQuantity: 2, alterUnit: "cup" },
  ] },
  { name: "siomai", type: 'e', id: "siomai", quantity: 1, unit: "each", ingredients: [
    { name: 'siomai mixture', ingId: "siomaimixture", recipe: true, quantity: 1, unit: "each" },
    { name: 'molo', ingId: "molo", recipe: false, quantity: 1, unit: "each" },
  ] },
  { name: "Beef burger", type: 'e', id: "beefburger", quantity: 1, unit: "each", ingredients: [
    { name: 'beef patty', ingId: "beefpatty", recipe: true, quantity: 1, unit: "each" },
    { name: 'burger buns', ingId: "burgerbuns", recipe: false,  quantity: 1, unit: "each" },
    { name: 'coleslaw', ingId: "coleslaw", recipe: true,  quantity: 20, unit: "g" },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 11, unit: "g" },
    { name: 'mayonnaise', ingId: "mayonnaise", recipe: false, quantity: 2, unit: 'tsp' },
    { name: 'pipino', ingId: "pipino", recipe: false, quantity: 5, unit: 'g' },
    { name: 'kamatis', ingId: "kamatis", recipe: false, quantity: 5, unit: 'g' },
  ] },
  { name: "Chicken burger", type: 'e', id: "chickenburger", quantity: 1, unit: "each", ingredients: [
    { name: 'chicken patty', ingId: "chickenpatty", recipe: true, quantity: 1, unit: "each" },
    { name: 'burger buns', ingId: "burgerbuns", recipe: false,  quantity: 1, unit: "each" },
    { name: 'coleslaw', ingId: "coleslaw", recipe: true,  quantity: 20, unit: "g" },
    { name: 'mayonnaise', ingId: "mayonnaise", recipe: false, quantity: 4, unit: 'tsp' },
    { name: 'eggmedium', ingId: "eggmedium", recipe: false, quantity: 0.33, unit: 'each' },
    { name: 'evap', ingId: "evap", recipe: false, quantity: 2, unit: 'tsp' },
    { name: 'breading', ingId: "breading", recipe: true, quantity: 2, unit: 'tsp' },
    { name: 'bread crumbs', ingId: "breadcrumbs", recipe: false, quantity: 10, unit: 'g' },
  ] },
  { name: "Fried rice", type: 'e', id: "friedrice", quantity: 1, unit: "cup", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true, quantity: 1.5, unit: "cup", noNest: true },
    { name: 'mantika', ingId: "mantika", recipe: false, quantity: 2, unit: "Tbs" },
    { name: 'bawang', ingId: "bawang", recipe: false, quantity: 5, unit: "g" },
    { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 7.5, unit: "g", alterQuantity: 1.5, alterUnit: 'tsp' },
    { name: 'rock salt', ingId: "saltrock", recipe: false, quantity: 2, unit: "g" },
  ] },
  { name: "Fried egg", type: 'e', id: "friedegg", quantity: 1, unit: "each", ingredients: [
    { name: 'egg', ingId: "eggxs", recipe: false, quantity: 1, unit: "each" },
    { name: 'mantika', ingId: "mantika", recipe: false, quantity: 1, unit: "Tbs" },
    { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 18.5, unit: 'g', alterQuantity: 1, alterUnit: "Tbs" }
  ] },
  { name: "Siomai condiments", type: 'e', id: "siomaicondiments", quantity: 1, unit: "each", ingredients: [
    { name: 'chili oil', ingId: "chilioil", recipe: true,  quantity: 2, unit: "tsp"  },
    { name: 'toyo', ingId: "siomaitoyomixture", recipe: true,  quantity: 2, unit: "Tbs" },
    { name: 'fried garlic', ingId: "friedgarlic", recipe: true,  quantity: 5, unit: "g" },
    { name: 'kalamansi', ingId: "kalamansi", recipe: false, quantity: 6, unit: "g" },
  ] },
  { name: "Chicken fillet", type: 'e', id: "chickenfillet", quantity: 100, unit: "g", ingredients: [
    { name: 'chicken fillet marinate', ingId: "chickenfilletmarinate", recipe: true,  quantity: 100, unit: "g"  },
    { name: 'breading', ingId: "breading", recipe: true, quantity: .25, unit: 'cup' },
    { name: 'breadcrumbs', ingId: "breadcrumbs", recipe: false,  quantity: 65.7, unit: "g" },
  ] },






  { name: "Coleslaw", type: 'g', id: "coleslaw", quantity: 250, unit: "g", ingredients: [
    { name: 'repolyo', ingId: "repolyo", recipe: false, quantity: 125, unit: "g" },
    { name: 'carrot', ingId: "carrot", recipe: false, quantity: 10, unit: "g" },
    { name: 'rock salt', ingId: "saltrock", recipe: false, quantity: 1.5, unit: 'g', alterQuantity: 0.2, alterUnit: "tsp" },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 0.6, unit: "g", alterQuantity: 0.25, alterUnit: "tsp" },
    { name: 'white sugar', ingId: "sugarwhite", recipe: false, quantity: 2.1, unit: 'g', alterQuantity: 0.5, alterUnit: "tsp" },
    { name: 'mayonnaise', ingId: "mayonnaise", recipe: false, quantity: 0.5, unit: 'cup' }
  ] },
  { name: "Maruya mixture", type: 'g', id: "maruyamixture", quantity: 651, unit: "ml", ingredients: [
    { name: 'harina', ingId: "harina", recipe: false, quantity: 120, unit: "g", alterQuantity: 1, alterUnit: "cup" },
    { name: 'asukal', ingId: "sugarwhite", recipe: false, quantity: 100, unit: "g", alterQuantity: 1, alterUnit: "cup" },
    { name: 'saba', ingId: "sagingsaba", recipe: false, quantity: 440, unit: 'g', alterQuantity: '4-5', alterUnit: "pcs" },
    { name: 'egg xs', ingId: "eggxs", recipe: false, quantity: 1, unit: "each" },
    { name: 'evap', ingId: "evap", recipe: false, quantity: 120, unit: 'ml'},
  ] },
  { name: "Siomai mixture", type: 'g', id: "siomaimixture", quantity: 131, unit: "each", ingredients: [
    { name: 'ground pork', ingId: "groundpork", recipe: false, quantity: 1, unit: "kg" },
    { name: 'bawang', ingId: "bawang", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'bulb' },
    { name: 'carrot', ingId: "carrot", recipe: false, quantity: 113, unit: "g", alterQuantity: 1, alterUnit: 'each' },
    { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 0.25, unit: "cup" },
    { name: 'oyster sauce', ingId: "oystersauce", recipe: false, quantity: 192, unit: "g", alterQuantity: 1/4, alterUnit: 'cup' },
    { name: 'asukal', ingId: "sugarwhite", recipe: false, quantity: 12.6, unit: "g", alterQuantity: 1, alterUnit: "Tbs" },
    { name: 'harina', ingId: "harina", recipe: false, quantity: 60, unit: "g", alterQuantity: 1/2, alterUnit: "cup" },
    { name: 'medium egg', ingId: "eggmedium", recipe: false, quantity: 1, unit: "each" },
    { name: 'bread crumbs', ingId: "breadcrumbs", recipe: false, quantity: 78, unit: "g", alterQuantity: 1, alterUnit: "cup" },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 2.3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 5, unit: "g", alterQuantity: 1, alterUnit: "tsp" },
  ] },
  
  { name: "Chili oil", type: 'g', id: "chilioil", quantity: 2, unit: "cup", ingredients: [
    { name: 'mantika', ingId: "mantika", recipe: false, quantity: 2, unit: "cup" },
    { name: 'asukal', ingId: "sugarwhite", recipe: false, quantity: 6.3, unit: "g", alterQuantity: 0.5, alterUnit: "Tbs" },
    { name: 'chili powder', ingId: "chilipowder", recipe: false, quantity: 3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 2.5, unit: "g", alterQuantity: 0.5, alterUnit: "tsp" },
    { name: 'sili', ingId: "sili", recipe: false, quantity: 38, unit: "g" },
  ] },
  { name: "Beef patty", type: 'g', id: "beefpatty", quantity: 28, unit: "each", ingredients: [
    { name: 'ground beef', ingId: "groundbeef", recipe: false,  quantity: 1, unit: "kg"  },
    { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 0.25, unit: "cup" },
    { name: 'oyster sauce', ingId: "oystersauce", recipe: false, quantity: 70, unit: "g", alterQuantity: 1/4, alterUnit: 'cup' },
    { name: 'bawang (pino)', ingId: "bawang", recipe: false, quantity: 40, unit: "g", alterQuantity: 1/4, alterUnit: 'cup' },
    { name: 'sibuyas (pino)', ingId: "sibuyas", recipe: false, quantity: 55, unit: "g", alterQuantity: 1/3, alterUnit: 'cup' },
    { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 15, unit: "g", alterQuantity: 1, alterUnit: 'Tbs' },
    { name: 'paprika', ingId: "paprika", recipe: false, quantity: 15, unit: "g", alterQuantity: 1, alterUnit: 'Tbs' },
    { name: 'medium egg', ingId: "egg medium", recipe: false, quantity: 1, unit: "each" },
    { name: 'breadcrumbs', ingId: "breadcrumbs", recipe: true,  quantity: 100, unit: "g", alterQuantity: 1.25, alterUnit: 'cup' },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 2.3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 5, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
  ] },
  { name: "Chicken patty", type: 'g', id: "chickenpatty", quantity: 19, unit: "each", ingredients: [
    { name: 'chicken breast', ingId: "chickenbreast", recipe: false,  quantity: .50, unit: "kg"  },
    { name: 'hot sauce', ingId: "hotsauce", recipe: false, quantity: 50, unit: "g", alterQuantity: 1/2, alterUnit: 'bottle' },
    { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 0.25, unit: "cup" },
    { name: 'paprika', ingId: "paprika", recipe: false, quantity: 3.75, unit: "g", alterQuantity: '1/4', alterUnit: 'Tbs' },
    { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 5, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'chili powder', ingId: "chilipowder", recipe: false, quantity: 3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'chiliflakes', ingId: "chiliflakes", recipe: false, quantity: 3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'asin', ingId: "saltrock", recipe: false, quantity: 6, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 2.5, unit: "g", alterQuantity: 1/2, alterUnit: 'tsp' },
  ] },
  { name: "Chaofan", type: 'g', id: "chaofan", quantity: 1, unit: "each", ingredients: [
    { name: 'chaofan', ingId: "chaofanmixture", recipe: true,  quantity: 40, unit: "g", noNest: true  },
    { name: 'rice', ingId: "rice", recipe: true,  quantity: 1, unit: "cup", noNest: true  },
    { name: 'eggxs', ingId: "eggxs", recipe: false,  quantity: 1, unit: "each"  },
    { name: 'mantika', ingId: "mantika", recipe: false,  quantity: 1, unit: "Tbs"  },
    { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 1, unit: "Tbs" },
    { name: 'oyster sauce', ingId: "oystersauce", recipe: false, quantity: 17.5, unit: "g", alterQuantity: 1, alterUnit: 'Tbs' },
  ] },
  { name: "Chicken fillet marinate", type: 'g', id: "chickenfilletmarinate", quantity: 4.5, unit: "kg", ingredients: [
    { name: 'chicken breast', ingId: "chickenbreast", recipe: false,  quantity: 5, unit: "kg" },
    { name: 'paprika', ingId: "paprika", recipe: false, quantity: 90, unit: "g", alterQuantity: 6, alterUnit: 'Tbs' },
    { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 60, unit: "g", alterQuantity: 6, alterUnit: 'Tbs' },
    { name: 'kalamansi', ingId: "kalamansi", recipe: false, quantity: 49, unit: "g", alterQuantity: 7, alterUnit: 'pcs' },
    { name: 'asin', ingId: "saltrock", recipe: false, quantity: 60, unit: "g", alterQuantity: 3, alterUnit: 'Tbs' },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 10.5, unit: "g", alterQuantity: 1.5, alterUnit: 'Tbs' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 22.5, unit: "g", alterQuantity: 1.5, alterUnit: 'Tbs' },
  ] },
  { name: "Puto", type: 'f', id: "puto", quantity: 1, unit: "each", ingredients: [
    { name: 'puto mixture', ingId: "putomixture", recipe: true,  quantity: 0.125, unit: "cup" },
    { name: 'cheese', ingId: "cheese", recipe: false, quantity: 1.25, unit: "g" },
  ] },


  
  
  
  
  
  { name: "BBQ sauce", type: 'f', id: "bbqsauce", quantity: 40, unit: "Tbs", prepTime: '8 mins',
    ingredients: [
      { name: 'tubig', ingId: "water", recipe: false, quantity: 1, unit: "cup" },
      { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 0.25, unit: "cup" },
      { name: 'ketchup', ingId: "bananaketchup", recipe: false, quantity: 80, unit: "g", alterQuantity: 0.25, alterUnit: 'cup' },
      { name: 'toyo', ingId: "toyo", recipe: false, quantity: 0.125, unit: "cup" },
      { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 2.5, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp' },
      { name: 'brown Sugar', ingId: "sugarbrown", recipe: false, quantity: 110, unit: "g", alterQuantity: 0.5, alterUnit: 'cup' },
      { name: 'worcestershire sauce', ingId: "worcestershiresauce", recipe: false, quantity: 0.125, unit: "cup" },
      { name: 'cornstarch', ingId: "cornstarch", recipe: false, quantity: 120, unit: "g", alterQuantity: 1, alterUnit: 'cup' },
      { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 3, unit: "g" }
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
      { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 2.5, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp' },
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
      { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 1, unit: "g" },
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
      { name: 'honey', ingId: "honey", recipe: false, quantity: 320, unit: "g", alterQuantity: '320g', alterUnit: 'bottle' },
      { name: 'toyo', ingId: "toyo", recipe: false, quantity: 0.5, unit: "cup" },
      { name: 'white sugar', ingId: "sugarwhite", recipe: false, quantity: 50, unit: "g", alterQuantity: 0.25, alterUnit: 'cup'},
      { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 1, unit: "g" },
      { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 1, unit: "g" },
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
      { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 1.2, unit: "g", alterQuantity: 0.5, alterUnit: 'tsp'},
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
      { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 2, unit: "g" },
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
      { name: 'patatas (diced)', ingId: "patatas", recipe: false, quantity: 315, unit: "g", alterQuantity: 2, alterUnit: 'each' },
      { name: 'carrot (diced)', ingId: "carrot", recipe: false, quantity: 225, unit: "g", alterQuantity: 2, alterUnit: 'each' },
      { name: 'green peas', ingId: "greenpeas", recipe: false, quantity: 155, unit: "g", alterQuantity: 1, alterUnit: 'can' },
      { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 2.5, unit: "g", alterQuantity: 1/2, alterUnit: "tsp" },
      { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 1.15, unit: "g", alterQuantity: 1/2, alterUnit: "tsp" },
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
  { name: "Breading", type: 'f', id: "breading", quantity: 26, unit: "cup", ingredients: [
    { name: 'harina', ingId: "harina", recipe: false,  quantity: 2, unit: "kg"  },
    { name: 'cornstarch', ingId: "cornstarch", recipe: true,  quantity: 1, unit: "kg" },
    { name: 'garlic powder', ingId: "garlicpowder", recipe: false, quantity: 105, unit: "g", alterQuantity: 7, alterUnit: 'Tbs' },
    { name: 'paprika', ingId: "paprika", recipe: false, quantity: 105, unit: "g", alterQuantity: 7, alterUnit: 'Tbs' },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false, quantity: 60, unit: "g", alterQuantity: 3, alterUnit: 'Tbs' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 45, unit: "g", alterQuantity: 3, alterUnit: 'Tbs' },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 20.7, unit: "g", alterQuantity: 3, alterUnit: 'Tbs' },
  ] },

  { name: "Chaofan mixture", type: 'f', id: "chaofanmixture", quantity: 2.625, unit: "kg", ingredients: [
    { name: 'giniling', ingId: "groundpork", recipe: false, quantity: 2, unit: "kg" },
    { name: 'liquid seasoning', ingId: "liquidseasoning", recipe: false, quantity: 125, unit: "ml", alterQuantity: 1/2, alterUnit: 'cup' },
    { name: 'oyster sauce', ingId: "oystersauce", recipe: false, quantity: 280, unit: "g", alterQuantity: 1, alterUnit: 'cup' },
    { name: 'carrot (diced)', ingId: "carrot", recipe: false, quantity: 230, unit: "g", alterQuantity: 2, alterUnit: 'each' },
    { name: 'patatas (diced)', ingId: "patatas", recipe: false, quantity: 316, unit: "g", alterQuantity: 2, alterUnit: 'each' },
    { name: 'bawang', ingId: "bawang", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'bulb' },
    { name: 'sibuyas', ingId: "sibuyas", recipe: false, quantity: 60, unit: "g", alterQuantity: 1, alterUnit: 'each' },
    { name: 'paminta', ingId: "groundblackpepper", recipe: false, quantity: 2.3, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'vetsin', ingId: "vetsin", recipe: false, quantity: 5, unit: "g", alterQuantity: 1, alterUnit: 'tsp' },
    { name: 'green peas', ingId: "greenpeas", recipe: false, quantity: 155, unit: "g", alterQuantity: '155g', alterUnit: 'can' },
  ],
  instructions: {
    steps: [
      "Igisa ang bawang, sibuyas, patatas at carrots.",
      "Ilagay ang giniling, haluin hanggang sa maluto at maiga ng bahagya ang sabaw.",
      "Ilagay ang liquid seasoning, oyster sauce, paminta at vetsin.",
      "Kapag malambot na ang carrots at patatas, ilagay na ang green peas(walang sabaw).",
      ],
    },
  },
  { name: "Puto mixture", type: 'f', id: "putomixture", quantity: 3.75, unit: "cup", ingredients: [
    { name: 'all purpose flour', ingId: "allpurposeflour", recipe: false,  quantity: 272, unit: "g", alterQuantity: 2, alterUnit: 'cup' },
    { name: 'white sugar', ingId: "sugarwhite", recipe: false, quantity: 200, unit: "g", alterQuantity: 1, alterUnit: 'cup'},
    { name: 'egg', ingId: "eggxs", recipe: false, quantity: 2, unit: "each" },
    { name: 'baking powder', ingId: "bakingpowder", recipe: false, quantity: 25, unit: "g", alterQuantity: 2, alterUnit: 'Tbs' },
    { name: 'tubig', ingId: "water", recipe: false, quantity: 1.75, unit: "cup" },
    { name: 'butter', ingId: "butter", recipe: false, quantity: 56, unit: "g", alterQuantity: '1/4', alterUnit: 'cup' },
    { name: 'iodized salt', ingId: "saltiodized", recipe: false, quantity: 1.63, unit: "g", alterQuantity: '1/4', alterUnit: 'tsp' },
  ],
  instructions: {
    steps: [
      "Paghalu-haluing mabuti ang apf, white sugar, baking powder, at iodized salt.",
      "Ilagay ang itlog, tubig at butter.",
      "Lutuin sa steamer ang mixture ng 15 minutes. Iwasan matuluan ng tubig na galing sa takip ng steamer.",
      ],
    },
  },
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions


// ^ = measured personally
// groundblackpepper 1tsp = 2.3g 1tbsp = 6.9g
// rock salt 1tsp = 6g 1tbsp = 20g
// vetsin 1tsp = 5g 1tbsp = 15g
// white sugar 1tsp = 4.17g^ 1tbsp = 12.5g^ 1cup = 200g^
// bawang 1 bulb = 60g clove = 6g
// bawang 1 whole = 60g
// harina 1 cup = 120g
// hot sauce 2tbs = 34g
// iodized salt 1tsp = 6.5g 1tbsp = 20g
// butter 1tbsp = 14g 1/4cup = 56g
// banana catsup 1tbsp = 17g 1tsp = 5g
// mayonnaise 1tbsp = 17g
// oyster 1/8cup = 35g^ 1tbsp = 17.5g^ 1/2cup = 140g 1cup = 280g^
// chili flakes 1tsp = 3g 1tbsp = 15g
// chili powder 1tsp = 3g 1tbsp = 8g
// garlic powder 1tsp = 5g 1tbsp = 15g
// paprika powder 1tsp = 3g 1tbsp = 15g
// breadcrumbs 1cup = 80g^ 1tbsp = 5g^
// kalamansi = 6g
// liquid seasonong 1cup = 250g^
// harina 1cup = 136g^
// baking powder 1cup = 125g 1tbsp = 12.5g 1tsp = 4.2g

//chicken fillet reg = 65.7g breadcrumbs

const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];
