// var cards=[];
// let imgagename=prompt("Enter image src:");
// let Price=prompt("Enter its price");
// let Brand=prompt("Enter it's Brand");
// let cards = {
//   imagename:imagename,
//   Price: parseInt(Price),
//   Brand:Brand;
// };
// console.log(cards)
// Initial card data
var cards = [
  { Image: '../images/king.png', Price: 5000, name: 'King' },
  { Image: '../images/car.jpeg', Price: 8000,name: 'car' },
  { Image: '../images/birds.jpeg', Price: 15000, name: 'birds' },
  { Image: '../images/sig.png', Price: 4000, name: 'wifi' }
];
function renderCards() {
  var myc = cards.map((ele) => {
    return `
      <div class="card">
        <div class="card-image">
          <img src="${ele.Image}" alt="">
        </div>
        <div class="info">
          <div class="price">Price: ${ele.Price}</div>
          <div class="brand">Name: ${ele.name}</div>
        </div>
      </div>
    `;
  }).join("");
  
  document.getElementsByClassName('card-container')[0].innerHTML = myc;
}
function addCard() {
  var brand = document.getElementById("brandInput").value;
  var price = document.getElementById("priceInput").value;
  var image = document.getElementById("imageInput").value;

  if (brand && price && image) {
    cards.push({ Image: image, Price: price, Brand: brand });
    renderCards(); // Refresh card view
  } else {
    alert("Please fill all fields!");
  }
}
renderCards();