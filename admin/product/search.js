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
                <tr >
                    <td>${element.id}</td>
                    <td>${element.category.name}</td>
                    <td>${element.name}</td>
                    <td >
                    <img class="ml-12" src="${element.image}" style="width:100px" alt="">
                    <td>${element.detail}</td>
                    <td>${element.price}</td>
                    <td>${element.status == 0 ? "<span>Hết hàng</span>" : "<span>Còn hàng</span>"}</td>
                    </td>
                    <td>
                    <a class="btn btn-success" href="edit.html?editId=${element.id}">Sửa</a>
                    <button class="btn btn-danger" onclick="delProduct(${element.id})">Xóa</button>
                    </td>
                </tr>
                `
            }
        });
        // document.querySelector('#results').innerHTML = resultSearch;
        document.querySelector('#listpro').innerHTML = resultSearch;
        
    })
})