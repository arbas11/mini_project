function detail(num, str) {
  let artist = document.getElementById(`artistName${num}`);
  let title = document.getElementById(`itemTitle${num}`);
  let image = document.getElementById(`itemImg${num}`);
  let price = document.getElementById(`itemPrice${num}`);
  let mdlDetail = document.getElementById("mdl-detail");
  let mdlTitle = document.getElementById("mdl-title");
  let mdlImage = document.getElementById("mdl-img");
  let mdlPrice = document.getElementById("mdl-price");
  mdlTitle.innerHTML = `${title.innerHTML} by ${artist.innerHTML}`;
  mdlImage.innerHTML = image.innerHTML;
  mdlDetail.innerHTML = str;
  mdlPrice.innerHTML = price.innerHTML;
}

let idNum = 10;
const uploadForm = document.getElementById("upload");
uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();
  idNum += 1;
  let artist = document.getElementById("artistUpload").value;
  let picture = document.getElementById("imageUpload").value;
  let title = document.getElementById("titleUpload").value;
  let price = document.getElementById("priceUpload").value;
  let description = document.getElementById("descUpload").value;
  console.log(artist, picture, title, price, description);
  let item = document.createElement("div");
  item.classList.add(
    "item-card",
    "card",
    "col-lg-3",
    "col-md-4",
    "col-sm-6",
    "col-xs-6"
  );
  item.innerHTML = `<div class='item-header'><span id='artistName${idNum}' class='brand-name'>${artist}</span></div><span id='itemImg${idNum}'><img class='item-images img-fluid card-img-top' src='${picture}' alt='images'></span><span class='item-footer'><span id='itemTitle${idNum}' class='item-name'>${title}</span><span id='itemPrice${idNum}'class='price-tag'>$ ${price},-</span></span><button onclick="detail(${idNum}, '${description}')" type='button' class='btn btn-primary item-btn' data-bs-toggle='modal' data-bs-target='#exampleModal'>Detail</button>`;
  let maincontent = document.getElementById("first-card");
  maincontent.insertAdjacentElement("afterend", item);
});

//URL buat percobaan upload
// https://images.unsplash.com/photo-1638290046884-bfbfdfc3af17?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80

// https://images.unsplash.com/photo-1638210574685-e9d0ad824f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

// https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80

//kalo ngga bisa ambil input dari form pake prompt dulu trus onclick yg diajarkan di kelas
// let idNum = 10;
// function upload() {
//   idNum += 1;
//   let artist = prompt('Artist name: ');
//   let picture = prompt('Your painting URL:');
//   let title = prompt('Your painting tittle:');
//   let price = prompt('Name your price: ');
//   let description = prompt('Short description of your painting: ')
//   let item = document.createElement('div');
//   item.classList.add("item-card", "card", "col-lg-3", "col-md-4", "col-sm-6", "col-xs-6");
//   item.innerHTML = `<div class='item-header'><span id='artistName${idNum}' class='brand-name'>${artist}</span><br></div><span id='itemImg${idNum}'><img class='item-images img-fluid card-img-top' src='${picture}' alt='images'></span><br><span class='item-footer'><span id='itemTitle${idNum}' class='item-name'>${title}</span><br><span id='itemPrice${idNum}'class='price-tag'>$ ${price},-</span></span><button onclick="detail(${idNum}, '${description}')" type='button' class='btn btn-primary item-btn' data-bs-toggle='modal' data-bs-target='#exampleModal'>Detail</button>`
//   let maincontent = document.getElementById('main-section');
//   maincontent.prepend(item);
// }

//buat nyoba append tanpa ambil input
// let artist = "ario Baskoro";
// let picture = "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80";
// let title = "girl on field";
// let price = "1.200.000";
// let description = "this is a paimtimg by me";
