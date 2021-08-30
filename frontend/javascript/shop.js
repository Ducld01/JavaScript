var proApi = 'http://localhost:3000/products?_expand=category';
var cateApi = 'http://localhost:3000/categories';

var urlParam = new URL(document.URL);
var editId = urlParam.searchParams.get('id');
fetch(proApi, {
    method: 'GET',
})
    .then(res => res.json())
    .then(data => {
        var show = document.querySelector('#results')
        var products = ''
        data.forEach(element => {
            products += `
            <div class="col-lg-4 col-md-6">
            <div class="product__item">
                <div class="product__item__pic set-bg">
                <a href="product-details.html?id=${element.id}">
                <img src="${element.image}" alt="{element.name}" width="270px" height="360px"></a>
                    <ul class="product__hover">
                        <li><a href="${element.image}" class="image-popup"><span class="arrow_expand"></span></a></li>
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
                    <div class="product__price">$ ${element.price}</div>
                </div>
            </div>
        </div>
        `
        });
        show.innerHTML = products
    })

fetch(cateApi, {
    method: 'GET',
})
    .then(res => res.json())
    .then(data => {
        var showcate = document.querySelector('.form-select')
        var cate = ''
        data.forEach(item => {
            cate += `
            <option value="${item.id}" width="150px">${item.name}</option>
        `
        });
        showcate.innerHTML = cate
    });
document.querySelector('.form-select').addEventListener("change", () => {
    var id = document.querySelector('.form-select').value;
    fetch(`http://localhost:3000/products?categoryId=${id}&_expand=category`)
        .then(res => res.json())
        .then(data => {
            var outputs = ''
            data.forEach(element => {

                    outputs += `
            <div class="col-lg-4 col-md-6">
            <div class="product__item">
                <div class="product__item__pic set-bg">
                <a href="product-details.html?id=${element.id}">
                <img src="${element.image}" alt="{element.name}" width="270px" height="360px"></a>
                    <ul class="product__hover">
                        <li><a href="${element.image}" class="image-popup"><span class="arrow_expand"></span></a></li>
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
                    <div class="product__price">$ ${element.price}</div>
                </div>
            </div>
        </div>
            `
            });
            document.querySelector('#results').innerHTML = outputs
        })
})

/// search



