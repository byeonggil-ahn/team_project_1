$(document).ready(function() {
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change',
    function(e) {
        update_amounts();
    });
});

function update_amounts() {
    let sum = 0.0;
    $('#myTable > tbody > tr').each(function() {
        let qty = $(this).find('.qty').let();
        let price = $(this).find('.price').let();
        let amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('총합').text(sum);
}



var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this).parent(".button-container").find(".qty");
    $n.val(Number($n.val()) + 1);
    update_amounts();
});

var decrementQty = minusBtn.click(function() {
    var $n = $(this).parent(".button-container").find(".qty");
    var QtyVal = Number($n.val());
    if(QtyVal > 0) {
        $n.val(QtyVal-1)
    }
    update_amounts();
});