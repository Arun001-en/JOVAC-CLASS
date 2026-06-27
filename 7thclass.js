const searchInput = document.getElementById("searchInput")
const serachBtn = document.getElementById("searchBtn")
const producutGrid = document.getElementById('productGrid')
const loadingIndicator = document.getElementById('loadingIndicator')
const errorMessage = document.getElementById('errorMessage')

const API_Url = 'https://dummyjson.com/products/search?q='

function showLoading(){
    loadingIndicator.classList.remove('hidden')
    producutGrid.innerHTML = '',
    errorMessage.classList.add('hidden')
}

function hideLoading(){
    loadingIndicator.classList.add('hidden')
}

function shwoError(message){
    hideLoading()
    errorMessage.textContent=`opps:${message}`
    errorMessage.classList.remove('hidden')
}

function renderProducts(productsArray){
    // console.log(productsArray)
    hideLoading();
    producutGrid.innerHTML ='';

    if(productsArray.length === 0){
        producutGrid.innerHTML= '<h2>No prdouct found! try another search</h2>'
           return   
    }
    productsArray.forEach(product=>{
        console.log(product)
        const card = document.createElement('div')
        card.className= 'product-card'
        card.innerHTML=
        `
        
        <img src="${product.thumbnail}" alt="${product.title}" width='100%'>
    
        <h3>${product.title}</h3>
        <p>Price:$${product.price}</p>
        <p>.${product.rating}</p>
        `;
        producutGrid.appendChild(card)
    })
}


async function fetchProducts(searchQuery = ''){
    showLoading();
    try {
       const response = await fetch(`${API_Url}${searchQuery}`) 
       if(!response.ok){
        throw new Error(`Server returned status:${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    renderProducts(data.products)
    } catch (error) {
        console.log("fetch process failed:" , error)
        shwoError("failed to fecth product")
    }
}

searchBtn.addEventListener('click' , ()=>{
    const query = searchInput.value.trim()
    fetchProducts(query)
})
searchBtn.addEventListener('keyup' , (event)=>{
     if(event.key === 'Enter'){
        fetchProducts(searchInput.value.trim())
    }
})

fetchProducts('')

//here is the code of today class and jo error tha vo yhe tha ki image tag me jo width hai usme quote missing tha phle ese likha tha width = '100%  isme quote open toh hua lekin close nahi