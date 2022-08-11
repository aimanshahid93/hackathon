document.body.innerHTML=`<div class="heading-container">
<h1>BOOKS</h1>
<img src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image" id="img"</img>
</div>
<div class="searchbar" id="searching">
<form action="https://anapioficeandfire.com/api/books" method="get" class="searchbar">
<input class="booksearch" id="search1" placeholder="search the book" onkeyup="search()",></input>
<button class='btn btn-primary'id="btn">submit</button>
</form>  
</div>
<div class="maincontainer" id="main">
</div>;
`
let getdata=async()=>{
  try{
    let data=await fetch("https://anapioficeandfire.com/api/books")
    let newdata=await data.json();
    console.log(newdata);
    newdata.forEach((element)=>{
      displaydata(element); 
  })
}catch(error){
    console.log("oops!there was an error")
  }
}
getdata();
const displaydata=(obj)=>{
  main.innerHTML +=
  `<div class="container">
  <h3>Name:${obj.name}</h3> 
  <p class="isbn">isbn No:${obj.isbn}</p><br>
  <p class="Pages">Publisher Name:${obj.publisher}</p><br>
  <p class="Pages">Number of pages:${obj.numberOfPages}</p><br>
  <p class="Author">Author:${obj.authors}</p><br>
  <p class="released Date">Date of release:${obj.released}</p>
  <p class="released Date">Characters:${obj.characters}</p>
  </div>
  
   </div>`
}

const search=()=>{
  const searchbox=document.getElementById("search1").value.toUpperCase()
  const storeitems=document.getElementById("main");
  const book=document.querySelectorAll("container");
  const bookname=storeitems.getElementsByTagName("h3")

for (var i=0; i<bookname.length; i++){
  let match=book[i].getElementsByTagName("h3")[0];
  if(match){
    let textvalue=match.textContent||match.innerHTML
    if(textvalue.toUpperCase().indexOf(searchbox)>-1){
      product[i].style.display="";
    }else{
      product[i].style.display="none";
    }
  }
}
}


document.addEventListener('DOMContentLoaded',()=>{
const selectdrop=document.getElementById("chars");
//to print characters in the console
fetch("https://anapioficeandfire.com/api/books").then(res=>{
  return res.json();
}).then(datas=>{
  let output="";
  datas.forEach((book)=>{
    output +=`<option>${book.characters}</option>`
  console.log(book.characters);
  })
  selectdrop.innerHTML=output;
}).catch(error=>{
  console.log(error);
})

});