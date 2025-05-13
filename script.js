let data = 
[
  {
    "src": "Assets/casualOutfit.jpg",
    "alt": "Casual Outfit",
    "description": "Comfortable and stylish casual outfit for everyday wear",
    "actualPrice": 49.99,
    "discount": 10,
    "updatedPrice": 44.99
  },
  {
    "src": "Assets/Blezer.jpg",
    "alt": "Men's Blazer",
    "description": "Formal men's blazer perfect for business or events",
    "actualPrice": 89.99,
    "discount": 10,
    "updatedPrice": 80.99
  },
  {
    "src": "Assets/whiteShirt.jpg",
    "alt": "White Shirt",
    "description": "Classic white shirt suitable for both formal and casual occasions",
    "actualPrice": 39.99,
    "discount": 5,
    "updatedPrice": 37.99
  },
  {
    "src": "Assets/kurtaMan.jpg",
    "alt": "Men's Kurta",
    "description": "Traditional men's kurta made with soft, breathable fabric",
    "actualPrice": 59.99,
    "discount": 15,
    "updatedPrice": 50.99
  },
  {
    "src": "Assets/tshirt.jpg",
    "alt": "Men's T-Shirt",
    "description": "Casual round-neck t-shirt made with premium cotton",
    "actualPrice": 29.99,
    "discount": 7,
    "updatedPrice": 27.89
  },
  {
    "src": "Assets/blackTshirt.jpg",
    "alt": "Black T-Shirt",
    "description": "Slim-fit black t-shirt for an everyday modern look",
    "actualPrice": 34.99,
    "discount": 20,
    "updatedPrice": 27.99
  },
  {
    "src": "Assets/jeans.jpg",
    "alt": "Denim Jeans",
    "description": "Comfort-fit denim jeans with classic five-pocket styling",
    "actualPrice": 59.99,
    "discount": 12,
    "updatedPrice": 52.79
  },
  {
    "src": "Assets/jersey.jpg",
    "alt": "Sports Jersey",
    "description": "Breathable athletic jersey perfect for sports or casual wear",
    "actualPrice": 44.99,
    "discount": 18,
    "updatedPrice": 36.89
  },
  {
    "src": "Assets/shorts.jpg",
    "alt": "Men's Shorts",
    "description": "Lightweight and comfortable shorts for summer or workouts",
    "actualPrice": 39.99,
    "discount": 18,
    "updatedPrice": 32.79
  }
];


// thumbArea.addEventListener("click", (e) => {
//   if (e.target.tagName === "IMG"){
//     mainImg.src = e.target.src;
//   }
// });



let mainImg = document.querySelector(".main-img img");
let thumbArea = document.querySelector(".thumb-area");
let productName = document.querySelector(".product-name")
let price1 = document.querySelector(".actualPrice")
const price2 = document.querySelector(".updatedPrice")
let description = document.querySelector(".about")
let span = document.querySelector(".underline")




data.forEach((product)=>{
  const thumbNail = document.createElement("img");
  thumbNail.src = product.src;
  thumbNail.alt = product.alt;

 
  thumbNail.addEventListener("click", () => {
    mainImg.src = product.src;


    productName.textContent = `Name : ${product.alt}`;
    price2.innerHTML = `Price : $${product.updatedPrice} <span class="underline">$${product.actualPrice}</span>`;
    description.textContent = `Description : ${product.description}`;
  });

  thumbArea.appendChild(thumbNail)
})

//Quantity Setup

  let count = 0;
  const qtyDisplay = document.getElementById("qty");

  function increment() {
    count++;
    qtyDisplay.textContent = count;
  }

  function decrement() {
    if (count > 0) {
      count--;
      qtyDisplay.textContent = count;
    }
  }


  //popup setup

  const popup = document.querySelector(".popup")
  const sizeBtn = document.querySelector(".size-button")
  const closePop = document.querySelector(".close-popup")

  sizeBtn.addEventListener("click",()=>{
    popup.style.display = "block"
  })

  closePop.addEventListener("click",()=>{
    popup.style.display = "none"
  })


