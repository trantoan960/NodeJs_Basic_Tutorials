// Function Express

var dem = function(arrMang) {
    return ' There are ' + arrMang.length + ' element in Array';
};

var tinh = function(a,b) {
    return `Sum is ${a+b}`;
}

var chao = function() {
    console.log("Hello Chao");
}
// module.exposts.(ten muon export) = name function express
// module.exports.demtest = dem;
// module.exports.tinhtest = tinh;
// module.exports.chaotest = chao;

module.exports = {
    demtest: dem,
    tinhtest: tinh,
    chaotest: chao,
}