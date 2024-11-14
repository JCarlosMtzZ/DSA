// Time: O(n)
// Space: O(n)
function reverse(str) {
    // La concatenación de strings puede implicar crear un
    // nuevo string en cada iteración, llevando a O(n^2)
        //let reversed = '';
        //
        //for (let i=str.length-1; i>=0; i--) {
        //    reversed += str[i];
        //}
        //
        //return reversed;

    let reversed = [];

    for (let i=str.length-1; i>=0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join('');
};

console.log(reverse('Hi My name is Carlos'));