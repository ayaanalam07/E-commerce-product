const div = document.querySelector("#div");


axios('https://fakestoreapi.com/products')
.then((res)=>{
    
    console.log(res.data)
     res.data.map((item)=>{
        div.innerHTML +=`
        
      
      <div class="card border border-dark border-redius rounded" style="width: 18rem;">
      <img src="${item.image}" class="img mt-2 p-3" alt="image">
      <div class="card-body parent">
        <h5 class="card-title">Title: ${item.title}</h5>
        <p class="card-text">Category: ${item.category}</p>
        <h3>Price: ${item.price}</h3>
      </div>
    </div>
      
        
       `
     })
})
.catch((err)=>{
    console.log(err);
})