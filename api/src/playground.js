let str = 'japón';

//ESTÁ EN LA RUTA GET DE COUNTRIES///FORMAS DE NORMALIZAR CARACTERES ESPECIALES PARA EL FILTRADO///

// Two things are happening here:

// normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è of Crème ends up expressed as e +  ̀.
// Using a regex character class to match the U+0300 → U+036F range, it is now trivial to globally get rid of the diacritics, which the Unicode standard conveniently groups as the Combining Diacritical Marks Unicode block.
// As of 2021, one can also use Unicode property escapes:

// str.normalize("NFD").replace(/\p{Diacritic}/gu, "")
console.log (str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

console.log (str.normalize("NFD").replace(/\p{Diacritic}/gu, ""))