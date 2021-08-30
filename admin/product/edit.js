var urlProduct = "http://localhost:3000/products";
var urlCate = "http://localhost:3000/categories";
//
var urlParam = new URL(document.URL);
var editId = urlParam.searchParams.get('editId');

fetch(urlCate)
.then(res=>res.json())
.then(data=>{
    var output = "";
    data.forEach(element => {
        output +=`
            <option value='${element.id}'>${element.name}</option>

        `;
    });
    document.querySelector("#cate_id").innerHTML = output;
})
 var editForm = document.querySelector('#edit-car-form');
 fetch(`${urlProduct}/${editId}`)
.then(res => res.json())
.then(data=>{
    console.log(data);
     editForm.name.value = data.name ,
     editForm.categoryId.value = data.categoryId ,
     editForm.price.value= data.price ,
      editForm.detail.value =data.detail,
    editForm.image.value = data.image 
})
editForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Cap Nhat thanh cong');
    fetch(`${urlProduct}/${editId}`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name : editForm.name.value,
            categoryId : editForm.categoryId.value,
            price : editForm.price.value,
            detail : editForm.detail.value,
            image : editForm.image.value
        })
    })
    .then(res=>res.json()) 
    .then(data=> {
        window.location.href ='index.html'
    })
})