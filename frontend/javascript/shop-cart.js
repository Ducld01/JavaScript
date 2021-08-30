showcart();

function showcart() {
    var a = JSON.parse(sessionStorage.getItem('giohang'));
    var text =''
    a.forEach((element,index) => {
        text+= `
        <tr>
        <td class="cart__product__item">
            <img src="${element.image}" alt="" width="90" height="90">
            <div class="cart__product__item__title">
                <h6>${element.name}</h6>
                <div class="rating">
                    <i class=""></i>
                    <i class=""></i>
                    <i class=""></i>
                    <i class=""></i>
                    <i class=""></i>
                </div>
            </div>
        </td>
        <td class="cart__price">${element.price}</td>
        <td class="cart__quantity">
            <div class="pro-qty">
                <input onclick="updatePrice(${element.id})"  type="number" min="1"
                 id="quantity-order-${element.id}" data-key="${index}" value="${element.quantity === 0 ? 1 : element.quantity}">
            </div>
        </td>
        <td id="sum-price-${element.id}" data-change="0" data="${element.price}" class="cart__total"></td>
        <td class="cart__close"><span class="icon_close" onclick="del(${index})"></span></td>
    </tr>
        `
    });
    document.querySelector("#table-cart").innerHTML = text
}

function del(id) {
    var n = JSON.parse(sessionStorage.getItem('giohang'));
    for(var i in n){
        if (id == i) {
            var remove = n.splice(id, 1);
            sessionStorage.setItem('giohang', JSON.stringify(n));
            showcart();
            load();
        }
    }
}

function updatePrice(id){
    var price = ($('#sum-price-'+ id).attr('data'));
    var quant = document.querySelector("#quantity-order-"+id).value;
     var sum = price * quant;
    //  console.log(sum);

    if($('#quantity-order-'+id).change()){
        var getcart = JSON.parse(sessionStorage.getItem('giohang'));
        var key = ($('#quantity-order-'+id).attr('data-key'))  
        // console.log(key);
        for( var i in getcart) {
            if (key == i) {
                getcart[i]['quantity'] = document.querySelector("#quantity-order-"+id).value;
                    sessionStorage.setItem('giohang',JSON.stringify(getcart))
            }
        }
    }else {
        getcart[i]['quantity'] = document.querySelector("#quantity-order-"+id).value;
                    sessionStorage.setItem('giohang',JSON.stringify(getcart))
    }
    document.querySelector('#sum-price-'+ id).innerHTML = sum
    total()
}

function total() {
    var tong = 0 ;
    var z = document.querySelectorAll('.cart__total')
    for (var i = 0; i < z.length; i++) {
        tong += Number(z[i].innerText)
        
    }
    // console.log(tong);
    
}
total()