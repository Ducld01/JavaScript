var url = `http://localhost:3000/products?id=`

var urlParam = new URL(document.URL);
var editId = urlParam.searchParams.get('id');
console.log(editId);

fetch(`${url}${editId}`, {
    method: 'GET',
})
.then( res => res.json())
.then( data => {
    var show = document.querySelector('#show');
    var detail = ''
    data.forEach(element => {
        detail+= `
        <div class="col-lg-6">
        <div class="product__details__pic">
            <div class="product__details__pic__left product__thumb nice-scroll">
                
            </div>
            <div class="product__details__slider__content">
                <img src="${element.image}" >
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="product__details__text">
            <h3>${element.name}<span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span></span>
            </div>
            <div class="product__details__price">${element.price}</div>
            <p>${element.detail}</p>
            <div class="product__details__button">
                <div class="quantity">
                    <span>Quantity:</span>
                    <div class="pro-qty">
                        <input type="text" value="1">
                    </div>
                </div>
                <a href="shop-cart.html?id=${element.id}" class="cart-btn"><span class="icon_bag_alt"></span> Add to cart</a>
                <ul>
                    <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                    <li><a href="#"><span class="icon_adjust-horiz"></span></a></li>
                </ul>
            </div>
        </div>
    </div>    
        `
    });
    show.innerHTML= detail
})