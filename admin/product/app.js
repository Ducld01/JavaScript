var urlProduct = "http://localhost:3000/products?_expand=category";
var cateApi = 'http://localhost:3000/categories';

fetch(urlProduct)
.then( res => res.json() )
.then(data => {
    var output= '';
    data.forEach( product => {
        output += `
        <tr data-id = '${product.id}'>
        <td>${product.id}</td>
        <td>${product.category.name}</td>
        <td>${product.name}</td>
        <td >
        <img class="ml-12" src="${product.image}" style="width:100px" alt="">
        <td>${product.detail}</td>
        <td>${product.price}</td>
        <td>${product.status == 0 ? "<span>Hết hàng</span>" : "<span>Còn hàng</span>"}</td>
        </td>
        <td>
        <a class="btn btn-success" href="edit.html?editId=${product.id}">Sửa</a>
        <button class="btn btn-danger" onclick="delProduct(${product.id})">Xóa</button>

    </td>
        </tr>
        `
    });
    document.querySelector('#listpro').innerHTML = output
})

function delProduct(id) {
    var ok = confirm("Bạn có chắc chắn muốn xóa không");
    var urlDel = `http://localhost:3000/products/${id}`;
    if (ok) {
        fetch(urlDel, {
            method: "DELETE",
            headers: {
                'Content-Type': 'aplication/json'
                }
        })
            .then( res => res.json())
            .then( data => {
                window.location.href= 'index.html'
            })
    }
    return false;
}
 var url = 'http://localhost:3000/products'
fetch(cateApi)
.then(res => res.json())
.then(data => {
    var outputCate =''
    data.forEach( element => {
        outputCate += `
            <option value="${element.id}">${element.name}</option>
        `
    });
    document.querySelector('#listcate').innerHTML = outputCate
})
    document.querySelector('#create').addEventListener ('click', e => {
        fetch(url,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryId: document.querySelector('select[name="cate_id"]').value,
                name : document.querySelector('input[name="name"]').value,
                image : document.querySelector('input[name="image"]').value,
                detail : document.querySelector('textarea[name="detail"]').value,
                price : document.querySelector('input[name="price"]').value,
                quantity: 0,
                status: 1
            })
        })
        .then( res => res.json())
        .then(data  =>{
            var arrData = [];
            arrData.push(data)
        })
    })
