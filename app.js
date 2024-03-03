//function data(n1:number,n2:number )
function data(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return new Error("value is not a number ");
    }
}
var result = data('20', 30);
console.log(result);
