var urlCate = "http://localhost:3000/categories";
//
var urlParam = new URL(document.URL);
var editId = urlParam.searchParams.get('editId');

var editForm = document.querySelector('#edit-car-form');
fetch(`${urlCate}/${editId}`)
.then(res => res.json())
.then(data => {
    editForm.name.value = data.name,
    editForm.image.value = data.image
})
editForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Cap nhat thanh cong');
    fetch(`${urlCate}/${editId}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: editForm.name.value,
            image: editForm.image.value
        })
    })
    .then(res => res.json())
    .then(data =>{
        window.location.href = 'index.html'
    })
})