var proApi = 'http://localhost:3000/products';
var cateApi = 'http://localhost:3000/categories';


var urlParam = new URL(document.URL);
var editId = urlParam.searchParams.get('id');
fetch(proApi, {
    method: 'GET',
})
    .then(response => response.json())
    .then(data => {
        var list = document.querySelector('#list_product');
        var products = '';
        data.forEach(element => {
            products += `
        <div class="col-lg-3 col-md-4 col-sm-6 mix ${element.name}">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${element.image}" style="background-image: ${element.image}">
                <a href="product-details.html?id=${element.id}">
                <img src="${element.image}" alt="${element.name}" width="270px" height="360px" /></a>
                <ul class="product__hover">
                    <li><a href="${element.image}" class="image-popup"><span
                                class="arrow_expand"></span></a></li>
                    <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                    <li><a href="shop-cart.html?id=${element.id}"><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="product-details.html?id=${element.id}">${element.name}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">${element.price}</div>
            </div>
        </div>
    </div>
        `
        });
        list.innerHTML = products
    })