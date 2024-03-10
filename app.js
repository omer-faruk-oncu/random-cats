const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

const randomCats = () =>{

fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
.then((res)=>{
    if(!res.ok){
        throw new Error (`Something went wrong ${res.status}`)
    }
    return res.json()
})
.then((data)=>{
    showImage(data)
})
.catch((err)=>displayError(err))
}

randomCats()

const showImage = (data) => {

    data.forEach(item => {
        cardDiv.innerHTML += ` 
            <div class="col-12 col-sm-6 col-lg-4">
                <div style="height:200px;" class="m-2 border border-2 rounded-2 text-center p-3" >
                    <img src="${item.url}" class="w-100 h-100 rounded-2">
                </div>
            </div>     
        ` 
    })
}

const displayError = (err) => {
    cardDiv.innerHTML = ` 
    <div class="col-12 col-sm-6 col-lg-4">
        <div style="height:200px;" class="d-flex justify-content-center align-items-center">
            <img src="./img/error.gif" alt="error">
        </div>
    </div>     
` 
}
  
btn.addEventListener("click",()=>{
    cardDiv.innerHTML=""
    randomCats()
})

tarih.innerText = new Date().toLocaleString() 

window.addEventListener("load", () => {
    containerDiv.style = "display:none"
    const timeoutId = setTimeout(()=>{
        loadingDiv.style = "display:none;"
        containerDiv.style = "display:flex"
    },3000)
});
  
