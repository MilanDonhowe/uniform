// textModifier: file with the "logical" non-react-related helper function


/**
  Function Name: letterCasing 
  Description: Takes in a single character and returns a string indicating its state:
    - "upper" -> signifies upper case
    - "lower" -> signifies lower case
    - "misc" - > signifies non-alphabetic character
 */
export function letterCasing(letter){
    const codePoint = letter.codePointAt(0);
    if (codePoint < 91 && codePoint > 64){
        return "upper";
    } else if (codePoint > 96 && codePoint < 123){
        return "lower";
    } else {
        return "misc";
    }
}

// Object for modifying text into an upside down state.
export const upsideDownText = {
    upsideDownTextMap: new Map([
        [65, 8704],//A
        [67, 390],//C
        [68, 593],//D
        [69, 398],//E
        [70, 8498],//F
        [71, 1508],//G
        [74, 383],//J
        [76, 741],//L
        [77, 87],//M
        [80, 1280],//P
        [84, 9524],//T
        [85, 8745],//U
        [86, 923],//V
        [87, 77],//W
        [89, 8516],//Y
        [97, 592],//a
        [98, 113],//b
        [99, 596],//c
        [100,112],//d
        [101,477],//e
        [102,607],//f
        [103,387],//g
        [104,613],//h
        [105,7433],//i
        [106,638],//j
        [107,670],//k
        [109,623],//m
        [110,117],//n
        [112,100],//p
        [113,98],//q
        [114,633],//r
        [116,647],//t
        [117,110],//u
        [118,652],//v
        [119,653],//w
        [121,654],//y
        [63, 191],//?
        [33, 161]//!
    ]),
    convertText: function(text){
        // Dear function gods, I have sinned.
        let flippedText = text.split('').reverse().map(chr => chr.codePointAt(0)).map(code => {
            let correspondingChar = this.upsideDownTextMap.get(code);
            if (correspondingChar !== undefined){
                return correspondingChar; 
            } else {
                return code;
            }
        }).map(code => String.fromCodePoint(code)).join('');
        return flippedText;
    }
};


/**
 Function Name: formatText
 Parameters: text, numeric upper-case offset, numeric lower-case offset
 Description: Takes text and some offsets and returns modified unicode text at shifted code points
 */
export function formatText(text, upper_offset, lower_offset=upper_offset){
    return text.split('').map(letter => {
        if (letterCasing(letter) === "upper"){
            return String.fromCodePoint(letter.codePointAt(0) + upper_offset);
        } else if (letterCasing(letter) === "lower") {
            return String.fromCodePoint(letter.codePointAt(0) + lower_offset);
        } else {
            return letter;
        }
    }).join('');
}