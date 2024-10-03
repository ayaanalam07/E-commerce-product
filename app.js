const div = document.querySelector("#div");


axios('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    
    console.log(res.data)
     res.data.map((item)=>{
        div.innerHTML +=`
        
      
      <div class="card bg-base-100 border border-black w-96 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Name: ${item.name}</h2>
        <h2 class="card-title">Username: ${item.username}</h2>
    <p>Email: ${item.email}</p>
        <p>Phone: ${item.phone}</p>
        <p>Website: ${item.website}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
      
        
       `
     })
})
.catch((err)=>{
    console.log(err);
})