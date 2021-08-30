
var cateApi = 'http://localhost:3000/categories';

fetch(cateApi,{
    method: 'GET',
})
.then( response => response.json())
.then( data => {
    var output =''
    data.forEach(element => {
        output += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td >
            <img class="ml-12" src="${element.image}" style="width:100px" alt="">
            </td>
            <td>
            <a class="btn btn-success" href="edit.html?editId=${element.id}">Sửa</a>
            <button class="btn btn-danger" onclick="deleteCate(${element.id})">Xóa</button>
            </td>
        </tr>
        `
    });
    document.querySelector('#listcate').innerHTML = output;
})

function deleteCate(id) {
    var ok = confirm('Are you sure want to delete this category')
    var urlDeleteCate = `http://localhost:3000/categories/${id}`

    if (ok) {
        fetch(urlDeleteCate, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( res => res.json())
        .then( data => {
            window.location.href= 'index.html'
        })
    }else {
        window.location.href= 'index.html'
    }
}

document.querySelector('#create').addEventListener('click',e => {
    fetch(cateApi, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : document.querySelector('input[name="name"]').value,
            image : document.querySelector('input[name="image"]').value,
        })
    })
    .then(res => res.json())
    .then( data => {
        var arrdata =[];
        arrdata.push(data)
    })
})
