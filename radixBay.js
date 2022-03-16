const isBalanced = string =>{
    if(string.length % 2 !== 0) return false;

    while(string.includes('{}') || string.includes('()') || string.includes('[]') || string.includes('""')){
        string = string.replace('{}', '').replace('()', '').replace('[]', '').replace('""', '')
    }
    return string === '';
}

console.log(isBalanced("([])[]({})"));
console.log(isBalanced("([)]"));
console.log(isBalanced("((()")); 