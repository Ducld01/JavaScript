var cateApi = 'http://localhost:3000/categories';
function start() {
    laycate(function (user) {
        var create = document.querySelector("#create");
        create.onclick = function () {
            var Ipname = document.querySelector("#name");
            var Ipimage = document.querySelector("#image");
            var vlname = Ipname.value;
            var vlimage = Ipimage.value;
            var kiemtra = ""
            var ht = user.map(function (cate) {
                var showErr = document.querySelector("#showErr");
                console.log(cate);
                if (vlname == cate.name) {
                    kiemtra = "1";
                    showErr.innerHTML = "<span style='color:red'>" + "Danh mục đã tồn tại" + "</span>";
                } else if (vlname == "" || vlimage == "") {

                    showErr.innerHTML = "<span style='color:red'>" + "Không được để trống dữ liệu" + "</span>";
                    kiemtra = 1;

                }
            });
            if (kiemtra != 1) {
                var name = document.querySelector('input[name="name"]').value;
                var image = document.querySelector('input[name="image"]').value;
                var formData = {
                    name: name,
                    image: image
                }
                themdanhmuc(formData, function () {
                    laydanhmuc(function (danhmuc) {
                        hienthidanhmuc(danhmuc);
                    });
                });
            }
        }

    });
};
start();
function laycate(callback) {
    fetch(cateApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
};

