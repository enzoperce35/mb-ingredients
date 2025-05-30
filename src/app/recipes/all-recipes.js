export const recipes = [
  { name: "Rice", type: 'e', id: "rice", quantity: 17, unit: "cup", ingredients: [
    { name: 'bigas', ingId: "bigas", recipe: false, quantity: 1818, unit: "g" }
  ] },
  { name: "orangejuice", type: 'e', id: "orangejuice", quantity: 1, unit: "l", ingredients: [
    { name: 'orange powder', ingId: "powderedorangejuice", recipe: false, quantity: 19, unit: "g" }
  ] },
  { name: "palamig", type: 'e', id: "palamig", quantity: 1, unit: "l", ingredients: [
    { name: 'palamig powder', ingId: "powderedpalamig", recipe: false, quantity: 60, unit: "g" }
  ] },
  { name: "Fried rice", type: 'e', id: "friedrice", quantity: 1, unit: "cup", ingredients: [
    { name: 'rice', ingId: "rice", recipe: true, quantity: 1.5, unit: "cup" },
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
  }
]

// quantity and unit are market units they will be used for price computations
// alterQuantity and alterunit are recipe units they will be used in the menu instructions

const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];