// Font Conversion Logic Library
// Client-side converters for legacy Indic fonts

// Unicode to Shree Lipi character mapping (sample subset)
const unicodeToShreeLipiMap: Record<string, string> = {
  // Vowels
  "अ": "A", "आ": "Aa", "इ": "e", "ई": "Ee", "उ": "u", "ऊ": "Uu",
  "ए": "E", "ऐ": "Ae", "ओ": "Ao", "औ": "AAu", "अं": "A<",
  
  // Consonants
  "क": "k", "ख": "K", "ग": "g", "घ": "G", "ङ": "¼",
  "च": "c", "छ": "C", "ज": "j", "झ": "J", "ञ": "\\",
  "ट": "q", "ठ": "Q", "ड": "f", "ढ": "F", "ण": "R",
  "त": "t", "थ": "T", "द": "d", "ध": "D", "न": "n",
  "प": "p", "फ": "P", "ब": "b", "भ": "B", "म": "m",
  "य": "y", "र": "r", "ल": "l", "व": "v", "श": "S",
  "ष": "Z", "स": "s", "ह": "h",
  
  // Matras (vowel signs)
  "ा": "a", "ि": "i", "ी": "I", "ु": "u", "ू": "U",
  "े": "[", "ै": "]", "ो": "o", "ौ": "O", "ं": "<", "ः": ":",
  "्": "`",
  
  // Numerals
  "०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
  "५": "5", "६": "6", "७": "7", "८": "8", "९": "9",
  
  // Punctuation
  "।": "|", "॥": "||",
}

// Shree Lipi to Unicode mapping (reverse)
const shreeLipiToUnicodeMap: Record<string, string> = Object.fromEntries(
  Object.entries(unicodeToShreeLipiMap).map(([k, v]) => [v, k])
)

// Unicode to AMS character mapping
const unicodeToAMSMap: Record<string, string> = {
  // Vowels
  "अ": "A", "आ": "Aa", "इ": "É", "ई": "Ir", "उ": "C", "ऊ": "D",
  "ए": "E", "ऐ": "E¡", "ओ": "Amo", "औ": "Am¡", "अं": "A§",
  
  // Consonants
  "क": "H$", "ख": "I", "ग": "J", "घ": "K", "ङ": "L",
  "च": "M", "छ": "N", "ज": "O", "झ": "P", "ञ": "Q",
  "ट": "R", "ठ": "S", "ड": "T", "ढ": "U", "ण": "U",
  "त": "V", "थ": "W", "द": "X", "ध": "Y", "न": "Z",
  "प": "[", "फ": "\\", "ब": "]", "भ": "^", "म": "_",
  "य": "`", "र": "a", "ल": "b", "व": "d", "श": "e",
  "ष": "f", "स": "g", "ह": "h",
  
  // Matras
  "ा": "m", "ि": "r", "ी": "r©", "ु": "w", "ू": "y",
  "े": "o", "ै": "¡", "ो": "mo", "ौ": "m¡", "ं": "§", "ः": ":",
  "्": "²",
  
  // Numerals
  "०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
  "५": "5", "६": "6", "७": "7", "८": "8", "९": "9",
}

// Unicode to DevLys mapping
const unicodeToDevLysMap: Record<string, string> = {
  // Vowels
  "अ": "v", "आ": "vk", "इ": "b", "ई": "bZ", "उ": "m", "ऊ": "mQ",
  "ए": ",", "ऐ": ",s", "ओ": "vks", "औ": "vkS", "अं": "va",
  
  // Consonants  
  "क": "d", "ख": "[k", "ग": "x", "घ": "?k", "ङ": "³",
  "च": "p", "छ": "N", "ज": "t", "झ": ">", "ञ": "´",
  "ट": "V", "ठ": "B", "ड": "M", "ढ": "<", "ण": ".k",
  "त": "r", "थ": "Fk", "द": "n", "ध": "/k", "न": "u",
  "प": "i", "फ": "Q", "ब": "c", "भ": "Hk", "म": "e",
  "य": ";", "र": "j", "ल": "y", "व": "o", "श": "'k",
  "ष": "\"k", "स": "l", "ह": "g",
  
  // Matras
  "ा": "k", "ि": "f", "ी": "h", "ु": "q", "ू": "w",
  "े": "s", "ै": "S", "ो": "ks", "ौ": "kS", "ं": "a", "ः": "%",
  "्": "~",
  
  // Numerals (same)
  "०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
  "५": "5", "६": "6", "७": "7", "८": "8", "९": "9",
}

// Kruti Dev mapping (similar to DevLys)
const unicodeToKrutiDevMap: Record<string, string> = { ...unicodeToDevLysMap }

// Calligraphy style transformations
const calligraphyStyles = {
  cursive: {
    upper: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
    lower: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
  },
  bold: {
    upper: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    lower: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
  },
  italic: {
    upper: "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍",
    lower: "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧",
  },
  fraktur: {
    upper: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
    lower: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
  },
  doubleStruck: {
    upper: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    lower: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
  },
  script: {
    upper: "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
    lower: "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
  },
}

export type CalligraphyStyle = keyof typeof calligraphyStyles

// Core conversion functions
export function convertUnicodeToShreeLipi(text: string): string {
  let result = ""
  for (const char of text) {
    result += unicodeToShreeLipiMap[char] || char
  }
  return result
}

export function convertShreeLipiToUnicode(text: string): string {
  let result = ""
  let i = 0
  while (i < text.length) {
    // Check for two-character sequences first
    const twoChar = text.slice(i, i + 2)
    if (shreeLipiToUnicodeMap[twoChar]) {
      result += shreeLipiToUnicodeMap[twoChar]
      i += 2
    } else if (shreeLipiToUnicodeMap[text[i]]) {
      result += shreeLipiToUnicodeMap[text[i]]
      i++
    } else {
      result += text[i]
      i++
    }
  }
  return result
}

export function convertUnicodeToAMS(text: string): string {
  let result = ""
  for (const char of text) {
    result += unicodeToAMSMap[char] || char
  }
  return result
}

export function convertUnicodeToDevLys(text: string): string {
  let result = ""
  for (const char of text) {
    result += unicodeToDevLysMap[char] || char
  }
  return result
}

export function convertUnicodeToKrutiDev(text: string): string {
  let result = ""
  for (const char of text) {
    result += unicodeToKrutiDevMap[char] || char
  }
  return result
}

export function generateCalligraphy(text: string, style: CalligraphyStyle = "cursive"): string {
  const styleMap = calligraphyStyles[style]
  let result = ""
  
  for (const char of text) {
    if (char >= "A" && char <= "Z") {
      const index = char.charCodeAt(0) - 65
      result += [...styleMap.upper][index] || char
    } else if (char >= "a" && char <= "z") {
      const index = char.charCodeAt(0) - 97
      result += [...styleMap.lower][index] || char
    } else {
      result += char
    }
  }
  
  return result
}

// Converter registry for dynamic tool pages
export type ConverterType = 
  | "unicode-to-ams"
  | "ams-font-converter"
  | "unicode-to-shree-lipi"
  | "unicode-to-ams-calligraphy"
  | "unicode-to-ams-marathi"
  | "unicode-to-anu-telugu"
  | "unicode-to-shree-lipi-marathi"
  | "unicode-to-infinity"
  | "unicode-to-infinity-marathi"
  | "shree-lipi-to-unicode"
  | "unicode-to-devlys"
  | "shree-lipi-marathi-fonts"
  | "shree-dev-unicode"
  | "kruti-dev-generator"
  | "arabic-calligraphy-generator"
  | "hindi-calligraphy-generator"
  | "stylish-hindi-fonts"
  | "happy-birthday-calligraphy"
  | "calligraphy-quotes"
  | "arabic-calligraphy-art"

export function getConverter(type: ConverterType) {
  switch (type) {
    case "unicode-to-ams":
    case "unicode-to-ams-calligraphy":
    case "unicode-to-ams-marathi":
    case "ams-font-converter":
      return convertUnicodeToAMS
    case "unicode-to-shree-lipi":
    case "unicode-to-shree-lipi-marathi":
    case "shree-lipi-marathi-fonts":
      return convertUnicodeToShreeLipi
    case "shree-lipi-to-unicode":
    case "shree-dev-unicode":
      return convertShreeLipiToUnicode
    case "unicode-to-devlys":
      return convertUnicodeToDevLys
    case "kruti-dev-generator":
      return convertUnicodeToKrutiDev
    case "unicode-to-infinity":
    case "unicode-to-infinity-marathi":
      return convertUnicodeToShreeLipi // Similar mapping
    case "unicode-to-anu-telugu":
      return (text: string) => text // Placeholder for Telugu-specific logic
    case "arabic-calligraphy-generator":
    case "hindi-calligraphy-generator":
    case "stylish-hindi-fonts":
    case "happy-birthday-calligraphy":
    case "calligraphy-quotes":
    case "arabic-calligraphy-art":
      return (text: string) => generateCalligraphy(text, "cursive")
    default:
      return (text: string) => text
  }
}

export const availableCalligraphyStyles = Object.keys(calligraphyStyles) as CalligraphyStyle[]
