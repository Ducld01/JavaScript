function load() {
    var x = JSON.parse(sessionStorage.getItem('giohang'));
    var count = x.length;
    // console.log(count);

    if (sessionStorage.getItem('giohang') == null) {
        count = 0;
    }
    document.querySelector('#spn-cart').innerHTML = count
}
load();
function totalprice() {
        var t = JSON.parse(sessionStorage.getItem('giohang'));
        var results = t.map((item) => {
            return item.price
        })
        var tol = results.reduce((x,y) => x + y)
        document.querySelector('.total_price').innerHTML = `<li>Total <span>${tol}</span></li>`;
}
totalprice();