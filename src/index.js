const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {
   let words = expr.split('**********'); //разбиваем строку на слова
   let word_letter = [];
   let res = '';

   // Переводим бинарник в морзянку:
   for (let i = 0; i < words.length; i++) {  //перебираем слова
      let str = words[i].match(/.{1,10}/g);    //отщипываем буквы
      for (let j = 0; j < str.length; j++) {   //декодируем буквы в морзянку
         str[j] = str[j].replace(/(00)|(10)|(11)/g, function (match) { return (match == "00") ? '' : (match == "10") ? '.' : '-'; });
      }
      word_letter[i] = str;                    //складываем в массив слова с декодированными буквами
   }

   //Декодируем морзянку в текст, слепляем в строку:
   for (let i = 0; i < word_letter.length; i++) {
      for (let j = 0; j < word_letter[i].length; j++) {
         word_letter[i][j] = MORSE_TABLE[word_letter[i][j]];
      }
      res += word_letter[i].join('') + ' ';
   }
   return res.trim();
}

module.exports = {
   decode
}