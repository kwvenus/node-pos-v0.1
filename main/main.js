module.exports = function main(inputs) {
//    console.log("Debug Info");
//    return 'Hello World!';

    var counted_item = [];
    var count = 0;
    var total = 0;

    var expectTest = '***<store earning no money>Receipt ***\n';

    inputs.forEach(function (itemLoop1){
        if (counted_item.includes(itemLoop1.Name)){
        }
        else{
            counted_item.push(itemLoop1.Name);
            inputs.forEach(function (itemLoop2) {
                if (itemLoop2.Name == itemLoop1.Name){
                    count += 1;
                }
            });
            if (itemLoop1.Unit != 'a')
                expectTest += 'Name: ' + itemLoop1.Name + ', Quantity: ' + count + ' ' + itemLoop1.Unit + 's, Unit price: ' + itemLoop1.Price.toFixed(2) + ' (yuan), Subtotal: ' + ((itemLoop1.Price)*count).toFixed(2) + ' (yuan)\n';
            else
                expectTest += 'Name: ' + itemLoop1.Name + ', Quantity: ' + count + ', Unit price: ' + itemLoop1.Price.toFixed(2) + ' (yuan), Subtotal: ' + ((itemLoop1.Price)*count).toFixed(2) + ' (yuan)\n';
            total += (itemLoop1.Price)*count;
            count = 0;
            }
    });
    expectTest += '----------------------\n' +
    'Total: ' + total.toFixed(2) + ' (yuan)\n' +
    '**********************\n'
    console.log(expectTest);
    return expectTest;
};