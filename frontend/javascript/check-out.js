function showOrder() {
    var show = JSON.parse(sessionStorage.getItem('giohang'));
    console.log(show);
        var text= ''
    show.forEach((element) => {
        text+= `
            <ul>
                <li> ${element.name} x ${element.quantity}  <span class="total-product">
                ${element.quantity === 1 ?(element.price) : (element.price * element.quantity)}
                </span></li>
            </ul>
        `
    });
    document.querySelector('.checkout__order__products').innerHTML = text
}
showOrder();
function sumtotal() {
    var tong = 0;
    var total = document.querySelectorAll('.total-product')
    for (var i = 0; i < total.length; i++) {
        tong += Number(total[i].innerText);
    }
    document.querySelector('.result-checkout').innerHTML = `<li>Total <span>${tong}</span></li>`;
}
sumtotal();

var formCheckkout = document.querySelector('.checkout__form');
document.querySelector('.site-btn').addEventListener('click', e => {
    e.preventDefault();
    var x = JSON.parse(sessionStorage.getItem('giohang'))
    var productid = x.map( element => {
        return element.id
    })
    var productquantity = x.map( element => {
        return element.quantity
    })
    
    fetch((`http://localhost:3000/order`),{
        
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productID: productid,
                Quantity: productquantity,
                dateOder: new Date(),
                phone: formCheckkout.phone.value,
                address: formCheckkout.address.value
            })
    })
.then(res => res.json())
.then(data => {
    alert('Thank you')
})
.then(() => {
    sessionStorage.removeItem('giohang')
})
})

