var cateApi = 'http://localhost:3000/categories';


document.querySelector('#search-input').addEventListener('keyup', function(){
    var keyWord = document.querySelector('#search-input').value;
    fetch(cateApi)
    .then(res => res.json())
    .then(data => {
        var resultSearch = ''
        data.forEach(element => {
            if(element.name.search(keyWord)>(-1)){
                resultSearch += `
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
            }
        });
        // document.querySelector('#results').innerHTML = resultSearch;
        document.querySelector('#listcate').innerHTML = resultSearch;
        
    })
})