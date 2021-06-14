function isA(char){
    return ((char >= 'a' && char <= "z") ||(char >= 'A' && char <= "Z"));
}
function replaceA(str, index, newChar){
    return str.replace(/./g, (c, i) => i == index ? newChar : c);
}
exports.firstUpper = (str) => {
    if (!str){
        return "";
    }
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if (i === 0 && isA(str[i]))
        if (str.charAt(i) != str.charAt(i).toUpperCase)
        str = replaceA(str, i, str.charAt(i).toUpperCase());
    }
    return str;
};