// Navbar


let div = document.createElement("div")
div.className = "container"
document.body.append(div)
div.innerHTML = `<div class="navhead"><ul class="headd">
<li class="makeup">MakeUp Kit</li>
<li><a href="https://www.fda.gov/cosmetics/paper-registration-voluntary-cosmetic-registration-program-vcrp/cosmetic-product-category-codes" target="_blank" class="redirect">Categories</a></li>
<li><a href="https://www.byrdie.com/best-makeup-brands-5078544" target="_blank" class="redirect">Brands</a></li>
<li><a href="https://www.self.com/story/beauty-editor-best-beauty-tricks" target="_blank" class="redirect">Beauty Advice</a></li>
<li ><i class="bi bi-person-fill icon"></i> Account</li>
<li ><i class="bi bi-cart-fill icon"></i> Store</li>
</ul>
</div>`


//Title //Search input


let div2 = document.createElement("div")
div2.className = "container"
div2.innerHTML = `
<h3 class="text-center my-5 makeup">Makeup Kit Collection</h3>
<form class="d-flex ">
<input class="form-control me-2 inputbar" id="inputbar" type="search" placeholder="Enter Brand Name">
<button class="btn sbtn me-2 " id = "sbtn" type="submit">Search</button>
<button class="btn sbtn" id = "rbtn" type="reset">Clear</button>
</form>
<span class="text-secondary">Example: colourpop/dior/marienatie/nyx/benefit/Clinique</span>`
div.appendChild(div2)
let button = document.querySelector(".sbtn")
let input = document.querySelector(".inputbar")
let reset = document.querySelector("#rbtn")


// Api Fetch


button.addEventListener("click", async function (event) {
  event.preventDefault()
  try {
    let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${input.value}`)
    let data = await response.json()
    console.log(data)
    data.forEach((data) => {


      // Data Cards


      let card = document.createElement("div")
      card.innerHTML = `<div class="card mb-3 pcard">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.api_featured_image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title names">${data.brand}  ${data.name} <span class="badge badg bg-info text-light">Sale</span></h5>
        <h5 class="card-title names">${data.product_type}</h5>
        <h5 class="card-title py-3">$${data.price}<span class="text-secondary">  |  </span><span class="text-success">30% Off</span></h5>
      <p class="card-text text-warning"><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"><i class="fa-solid fa-star-half"></i></i></p>
        <p class="card-text py-3">${data.description}</p>
        <button class ="btn sbtnn" ><a class="btnn" href="${data.product_link}">Buy Now</a></button>
      </div>
    </div>
  </div>
</div>`

      div2.appendChild(card)
      reset.addEventListener("click", () => {
        card.innerHTML = ""
      })
      input.addEventListener("click", () => {
        card.innerHTML = ""
      })

    })
  }
  catch (err) {
    alert("Not Available")
  }
})
  ; ''