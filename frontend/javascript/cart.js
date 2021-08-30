function addtocart() {
    var url =  `http://localhost:3000/products?id=`;

    var urlParam = new URL(document.URL);
    var editId = urlParam.searchParams.get('id');
     

    var checks = 1;
    var result = [];
    fetch(`${url}${editId}`,{
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            result.push(data[0])
            
            if (sessionStorage.getItem('giohang') == undefined) {
                sessionStorage.setItem('giohang', JSON.stringify(result));
                
                alert('Them mat hang thanh cong')
               
            } else {
                var cart = JSON.parse(sessionStorage.getItem('giohang'));
                cart.map((item) => {
                    if (item.id == result[0].id) {
                        checks= 0;
                    }
                })
                if (checks == 0) {
                    alert("Sản phẩm đã được thêm vào giỏ hàng trước đó")
                    window.location.href = 'shop.html'
                } else {
                    cart.push(result[0])
                    sessionStorage.setItem('giohang', JSON.stringify(cart));
                    alert("Them mat hang thanh cong", "", " success");
                    load();


                    checks = 0;
                    // window.location.href = 'shop-cart.html'
                }
            }
        })
}
addtocart()


