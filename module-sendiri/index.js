function pangkatDua(angka) {
    return angka * angka
}

function pangkatTiga(angka) {
    return angka * angka * angka
}
// kalai mau export satu module saja, bisa gunakan module.export = namaModulenya


// kalau mau export beberapa file dalam satu kali eksport, gunakan module.export = {module1, module2}
// CommonJS
module.exports = {pangkatDua, pangkatTiga}