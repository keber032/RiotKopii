

baris_produk.innerHTML =""

var data_mentah = {
    "Arabica": [
        {
            "nama": "Arabica Gayo",
            "foto": "images/produk/product_capuchino.jpg",
            "harga": "15.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Arabica Papua",
            "foto": "images/produk/product_espresso.jpg",
            "harga": "15.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Robusta": [
        {
            "nama": "Kopi Susu",
            "foto": "images/produk/product_kopi_susu.jpg",
            "harga": "10.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Minuman": [
        {
            "nama": "Es Teh Manis",
            "foto": "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
            "harga": "10.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
        
    ]

}

console.log("data mentah:", data_mentah)

function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>'
    Object.keys(data_mentah).forEach(function (opsi) {
        select_kopi.innerHTML += '<option value="' + opsi + '">' + opsi + '</option>'
    })
    console.log("Melakukan Update Select")
}
updateSelect();

var data_kopi = []
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-success fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-success w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`
    })
}






var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json"

$.getJSON(sumber2).then(data => {
    console.log("Data dari getJSON ", data)
    data_mentah = data
    updateSelect()
})