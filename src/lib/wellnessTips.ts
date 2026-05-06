export const wellnessTips = [
  "Drink warm water with lime first thing in the morning to alkalize your body and kickstart digestion.",
  "Sea moss contains 92 of the 102 minerals the human body needs. It supports thyroid function, skin health, and immune system.",
  "Bladderwrack is rich in iodine, which supports thyroid health and helps regulate metabolism naturally.",
  "Burmese grape is a powerful alkaline herb that supports blood circulation and overall cellular health.",
  "Start your alkaline journey by eliminating dairy, meat, and processed foods. Replace with fruits, vegetables, and sea vegetables.",
  "Soursop is known as 'graviola' and supports immune function, reduces inflammation, and promotes cellular health.",
  "Moringa is one of the most nutrient-dense plants on earth. It supports energy, immunity, and alkaline balance.",
  "Drinking at least half your body weight in ounces of water daily supports alkalinity and cellular hydration.",
  "Spring water is the most alkaline water source. Avoid distilled and reverse osmosis water which can be acidic.",
  "Eating raw foods preserves natural enzymes and supports better digestion and cellular absorption.",
  "Black seed oil is known as the 'cure for everything but death.' It supports immune function, digestion, and alkaline balance.",
  "Copper helps the body absorb iron and supports the production of red blood cells. Found in sea moss and dark leafy greens.",
  "The alkaline diet is not about what you eat — it is about what your body absorbs. Cellular absorption is key.",
  "Fasting gives your digestive system a rest and allows your body to focus on cellular repair and detoxification.",
  "Green bananas are rich in resistant starch, which feeds good gut bacteria and supports alkaline digestion.",
  "Irish moss and sea moss are the same thing — Chondrus crispus. It is a powerful alkaline superfood.",
  "Eating seasonal fruits and vegetables supports your body's natural rhythms and provides optimal nutrition.",
  "Meditation and deep breathing reduce stress, which is a major cause of acidity in the body.",
  "Castor oil packs support liver detoxification, lymphatic drainage, and overall temple cleansing.",
  "Wild-crafted herbs grown in their natural environment contain more minerals and life force than cultivated herbs.",
]

export function getRandomWellnessTip() {
  const randomIndex = Math.floor(Math.random() * wellnessTips.length)
  return wellnessTips[randomIndex]
}
