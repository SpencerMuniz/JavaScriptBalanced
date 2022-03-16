// const isBalanced = string =>{
//     if(string.length % 2 !== 0) return false;

//     while(string.includes('{}') || string.includes('()') || string.includes('[]') || string.includes('""')){
//         string = string.replace('{}', '').replace('()', '').replace('[]', '').replace('""', '')
//     }
//     return string === '';
// }

// console.log(isBalanced("([])[]({})"));
// console.log(isBalanced("([)]"));
// console.log(isBalanced("((()")); 


const validParen = str =>{
    let stack = [];
    for(i = 0; i < stack.length; i++){
        let character = stack[stack.length - 1]
        if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            stack.push(str[i])
        }
        else if((character == "(" && str[i] == ")") || 
        (character == "{" && str[i] == "}") ||
        (character == "[" && str[i] == "]")){
            stack.pop()
        }
        else{
            return false;
        }
    }
    return stack.length ? false : true
}

let test = "{}[]()((()))({)}"
console.log(validParen(test));