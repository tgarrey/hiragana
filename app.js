// https://en.wikipedia.org/wiki/Hiragana#Table_of_hiragana
// http://www.lexilogos.com/keyboard/japanese.php

var words = [

  // { word: '', translations: ['', ''] },

  { word: 'もちろん', translations: ['of course', 'certainly', 'naturally'] },
  { word: 'かんじ', translations: ['kanji'] },
  { word: 'おおさか', translations: ['Osaka'] },
  { word: 'とうきょう', translations: ['Tokyo'] },
  { word: 'きょう', translations: ['today'] },
  { word: 'ひなげし', translations: ['poppy'] },
  { word: 'おしめ', translations: ['diaper'] },
  { word: 'わたし', translations: ['I', 'me'] },
  { word: 'すみません', translations: ['excuse me', 'I\'m sorry'] },
  { word: 'あご', translations: ['chin'] },
  { word: 'くらげ', translations: ['jellyfish'] },
  { word: 'すすめます', translations: ['to recommend'] }

]

var yoonSpecialChars = ['ゃ', 'ゅ', 'ょ'];

var yoons = [

  { character: 'きゃ', mora: 'kya' },
  { character: 'きゅ', mora: 'kyu' },
  { character: 'きょ', mora: 'kyo' },

  { character: 'しゃ', mora: 'sha' },
  { character: 'しゅ', mora: 'shu' },
  { character: 'しょ', mora: 'sho' },

  { character: 'ちゃ', mora: 'cha' },
  { character: 'ちゅ', mora: 'chu' },
  { character: 'ちょ', mora: 'cho' },

  { character: 'にゃ', mora: 'nya' },
  { character: 'にゅ', mora: 'nyu' },
  { character: 'にょ', mora: 'nyo' },

  { character: 'ひゃ', mora: 'hya' },
  { character: 'ひゅ', mora: 'hyu' },
  { character: 'ひょ', mora: 'hyo' },

  { character: 'みゃ', mora: 'mya' },
  { character: 'みゅ', mora: 'myu' },
  { character: 'みょ', mora: 'myo' },

  { character: 'りゃ', mora: 'rya' },
  { character: 'りゅ', mora: 'ryu' },
  { character: 'りょ', mora: 'ryo' },

  { character: 'ぎゃ', mora: 'gya' },
  { character: 'ぎゅ', mora: 'gyu' },
  { character: 'ぎょ', mora: 'gyo' },

  { character: 'じゃ', mora: 'ja' },
  { character: 'じゅ', mora: 'ju' },
  { character: 'じょ', mora: 'jo' },

  { character: 'ぢゃ', mora: 'ja' },
  { character: 'ぢゅ', mora: 'ju' },
  { character: 'ぢょ', mora: 'jo' },

  { character: 'びゃ', mora: 'bya' },
  { character: 'びゅ', mora: 'byu' },
  { character: 'びょ', mora: 'byo' },

  { character: 'ぴゃ', mora: 'pya' },
  { character: 'ぴゅ', mora: 'pyu' },
  { character: 'ぴょ', mora: 'pyo' }

]

var gojuons = [

  { character: 'あ', mora: 'a' },
  { character: 'い', mora: 'i' },
  { character: 'う', mora: 'u' },
  { character: 'え', mora: 'e' },
  { character: 'お', mora: 'o' },  

  { character: 'か', mora: 'ka' },
  { character: 'き', mora: 'ki' },
  { character: 'く', mora: 'ku' },
  { character: 'け', mora: 'ke' },
  { character: 'こ', mora: 'ko' },

  { character: 'さ', mora: 'sa'},  
  { character: 'し', mora: 'shi' },
  { character: 'す', mora: 'su' },
  { character: 'せ', mora: 'se' },
  { character: 'そ', mora: 'so' },

  { character: 'た', mora: 'ta' },
  { character: 'ち', mora: 'chi' },
  { character: 'つ', mora: 'tsu' },
  { character: 'て', mora: 'te' },
  { character: 'と', mora: 'to' },

  { character: 'な', mora: 'na' },
  { character: 'に', mora: 'ni' },
  { character: 'ぬ', mora: 'nu' },
  { character: 'ね', mora: 'ne' },
  { character: 'の', mora: 'no' },

  { character: 'は', mora: 'ha ([wa] as a particle)' },
  { character: 'ひ', mora: 'hi' },
  { character: 'ふ', mora: 'fu' },
  { character: 'へ', mora: 'he' },
  { character: 'ほ', mora: 'ho' },

  { character: 'ま', mora: 'ma' },
  { character: 'み', mora: 'mi' },
  { character: 'む', mora: 'mu' },
  { character: 'め', mora: 'me' },
  { character: 'も', mora: 'mo' },

  { character: 'や', mora: 'ya' },
  { character: 'ゆ', mora: 'yu' },
  { character: 'よ', mora: 'yo' },

  { character: 'ら', mora: 'ra' },
  { character: 'り', mora: 'ri' },
  { character: 'る', mora: 'ru' },
  { character: 'れ', mora: 're' },
  { character: 'ろ', mora: 'ro' },

  { character: 'わ', mora: 'wa' },
  { character: 'ゐ', mora: 'i/wi' },
  { character: 'ゑ', mora: 'w/we' },
  { character: 'を', mora: 'o/wo' },

  { character: 'ん', mora: 'n' },

  { character: 'っ', mora: 'indicates a geminate consonant' },
  { character: 'ゝ', mora: 'reduplicates and unvoices syllable' },
  { character: 'ゞ', mora: 'reduplicates and voices syllable' },

  { character: 'が', mora: 'ga' },
  { character: 'ぎ', mora: 'gi' },
  { character: 'ぐ', mora: 'gu' },
  { character: 'げ', mora: 'ge' },
  { character: 'ご', mora: 'go' },

  { character: 'ざ', mora: 'za' },
  { character: 'じ', mora: 'ji' },
  { character: 'ず', mora: 'zu' },
  { character: 'ぜ', mora: 'ze' },
  { character: 'ぞ', mora: 'zo' },

  { character: 'だ', mora: 'da' },
  { character: 'ぢ', mora: 'ji' },
  { character: 'づ', mora: 'zu' },
  { character: 'で', mora: 'de' },
  { character: 'ど', mora: 'do' },
  
  { character: 'ば', mora: 'ba' },
  { character: 'び', mora: 'bi' },
  { character: 'ぶ', mora: 'bu' },
  { character: 'べ', mora: 'be' },
  { character: 'ぼ', mora: 'bo' },

  { character: 'ぱ', mora: 'pa' },
  { character: 'ぴ', mora: 'pi' },
  { character: 'ぷ', mora: 'pu' },
  { character: 'ぺ', mora: 'pe' },
  { character: 'ぽ', mora: 'po' }

]

var getRandom = function (min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function(){

  var current;

  var random = function () {

    $('#word').html('');
    $('#mora').html('');
    $('#translations').html('');

    current = words[getRandom(0, words.length - 1)];

    var word = '';

    var yoonFound = false;

    for (var i = 0, len = current.word.length; i < len; i++) {

      if (yoonFound) {

        yoonFound = false;

      } else {

        try {

          if ($.inArray(current.word.charAt(i + 1), yoonSpecialChars) != -1) {
            yoonFound = true;
          }

        }
        catch(err) { }

        if (yoonFound) {
          word += '<span class="yoon">' + current.word.charAt(i) + current.word.charAt(i + 1) + '</span>&nbsp;';  
        } else {
          word += '<span class="gojuon">' + current.word.charAt(i) + '</span>&nbsp;';  
        }

      }

    }
   
    $('#word').html(word);
   
    $('.yoon, .gojuon').hover(function(){
    
      var source = gojuons;

      if ($(this).hasClass('yoon')) {
        source = yoons;
      }

      var mora = '?';

      for (var i = 0, len = source.length; i < len; i++) {
        if (source[i].character == $(this).html()) {
          mora = source[i].mora;
          break;
        }
      }

      $('#mora').html(mora + ' (' + $(this).html() + ')');

    });

    $('#translate').click(function(){

      var translations = '';

      for (var i = 0, len = current.translations.length; i < len; i++) {
        translations += '<li>' + current.translations[i] + '</li>';
      }

      if (translations.length == 0) {
        translations = '<li>???</li>';
      }

      $('#translations').html(translations);

    });

  }

  $('#random').click(function(){
    random();  
  });

  random();

});