var proApi = 'http://localhost:3000/products?_expand=category';

document.querySelector('#search-input').addEventListener('keyup', function(){
    var keyWord = document.querySelector('#search-input').value;
    fetch(proApi)
    .then(res => res.json())
    .then(data => {
        var resultSearch = ''
        data.forEach(element => {
            if(element.name.search(keyWord)>(-1)||element.price.search(keyWord)>(-1)){
                resultSearch += `
                <div class="col-lg-4 col-md-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg">
                        <a href="product-details.html?id=${element.id}">
                        <img src="${element.image}" alt="{element.name}"></a>
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
                            <div class="product__price">${element.price}</div>
                        </div>
                    </div>
                </div>
                `
            }
        });
        // document.querySelector('#results').innerHTML = resultSearch;
        document.querySelector('#list_product').innerHTML = resultSearch;
        
    })
})


document.querySelector('#search-input').addEventListener('keyup', function(){
    var keyWord = document.querySelector('#search-input').value;
    fetch(proApi)
    .then(res => res.json())
    .then(data => {
        var resultSearch = ''
        data.forEach(element => {
            if(element.name.search(keyWord)>(-1)||element.price.search(keyWord)>(-1)){
                resultSearch += `
                <div class="col-lg-4 col-md-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg">
                        <a href="product-details.html?id=${element.id}">
                        <img src="${element.image}" alt="{element.name}"></a>
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
            }
        });
        document.querySelector('#results').innerHTML = resultSearch;
        // document.querySelector('#list_product').innerHTML = resultSearch;
        
    })
})
