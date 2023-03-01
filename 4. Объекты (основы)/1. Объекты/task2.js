function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
let user = {};

console.log(isEmpty(user));