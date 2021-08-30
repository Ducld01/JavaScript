var orderApi = 'http://localhost:3000/order';

fetch(orderApi)
.then( res => res.json() )
.then(data => {
    var output= '';
    data.forEach( element => {
        output += `
        <tr >
        <td>${element.id}</td>
        <td>${element.productID}</td>
        <td>${element.Quantity}</td>
        <td>${element.dateOder}</td>
        <td>${element.phone}</td>
        <td>${element.address}</td> 
        </td>
        <td>
        <button class="btn btn-danger" onclick="deleteorder(${element.id})">Xóa</button>

    </td>
        </tr>
        `
    });
    document.querySelector('#listorder').innerHTML = output
})

function deleteorder(id) {
    var ok = confirm('Are you sure want to delete this category')
    var urlDeleteorder = `http://localhost:3000/order/${id}`

    if (ok) {
        fetch(urlDeleteorder, {
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