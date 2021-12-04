
function detail(num, str) {
  let artist = document.getElementById(`artistName${num}`);
  let title = document.getElementById(`itemTitle${num}`);
  let image = document.getElementById(`itemImg${num}`);
  let price = document.getElementById(`itemPrice${num}`);
  let mdlDetail = document.getElementById('mdl-detail');
  let mdlTitle = document.getElementById('mdl-title');
  let mdlImage = document.getElementById('mdl-img');
  let mdlPrice = document.getElementById('mdl-price');
  mdlTitle.innerHTML = `${title.innerHTML} by ${artist.innerHTML}`
  mdlImage.innerHTML = image.innerHTML;
  mdlDetail.innerHTML = str;
  mdlPrice.innerHTML = price.innerHTML;
  console.log(image.innerHTML)
}

function upload() {
  let artist = prompt('Artist name: ');
  let picture = prompt('Your painting URL:');
  let title = prompt('Your painting tittle:');
  let price = prompt('Name your price: ');
  let description = prompt('Short description of your painting: ')
  let item = document.createElement('div');
  item.classList.add("item-card", "card", "col-lg-3", "col-md-4", "col-sm-6", "col-xs-6");
  item.innerHTML = `<div class='item-header'><span id='artistName2' class='brand-name'>${artist}</span><br></div><span id='itemImg2'><img class='item-images img-fluid card-img-top' src='${picture}' alt='images'></span><br><span class='item-footer'><span id='itemTitle2' class='item-name'>${title}</span><br><span id='itemPrice2'class='price-tag'>$ ${price},-</span></span><button onclick="detail(2, '${description}')" type='button' class='btn btn-primary item-btn' data-bs-toggle='modal' data-bs-target='#exampleModal'>Detail</button>`
  let maincontent = document.getElementById('main-section');
  maincontent.prepend(item);
}

// https://images.unsplash.com/photo-1638290046884-bfbfdfc3af17?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80

// https://images.unsplash.com/photo-1638210574685-e9d0ad824f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

// https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80