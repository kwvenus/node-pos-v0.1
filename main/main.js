module.exports = function main(inputs) {
//    console.log("Debug Info");
//    return 'Hello World!';

    var counted_item = [];
    var count = 0;
    var total = 0;
    var item;
    var expectTest = '***<store earning no money>Receipt ***\n';

    inputs.forEach(function (itemLoop1){
        if (counted_item.includes(itemLoop1.Name))
            break;
        else
            item = itemLoop1.Name;
            counted_item.push(itemLoop1);
            inputs.forEach(function (itemLoop2) {
                if (itemLoop2 == itemLoop1){
                    count++;
                }
            });
            if (itemLoop1.Unit != 'a')
                expectTest += 'Name: ' + itemLoop1.Name + ', Quantity: ' + itemLoop1.count + ' ' + itemLoop1.Unit + 's, Unit price: ' + itemLoop1.Price + ' (yuan), Subtotal: ' + itemLoop1.Price*count + ' (yuan)\n';
            else
                expectTest += 'Name: ' + itemLoop1.Name + ', Quantity: ' + itemLoop1.count + ', Unit price: ' + itemLoop1.Price + ' (yuan), Subtotal: ' + itemLoop1.Price*count + ' (yuan)\n';
            total += itemLoop1.Price*count;
    });
    expectTest += '----------------------\n' +
    'Total: ' + total + ' (yuan)\n' +
    '**********************\n'
    console.log(expectTest);
    return expectTest;
};