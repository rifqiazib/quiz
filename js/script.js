const baseurl = "https://api-mobilespecs.azharimm.site/v2/";
const brandEndPoin = `${baseurl}brands`;



const contents = document.querySelector("#content-list");
const title = document.querySelector(".title");

function getnamephone (){
    title.innerHTML = "MERK HANDPHONE";
    fetch (brandEndPoin)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson.data);
            let data = "";
            resJson.data.forEach(hp => {
                data += `
                    <li class="collection-item"> 
                        <p>
                            ${hp.brand_name} <br>
                        </p>
                            <a href="#" data-id="${hp.brand_slug}" class="slug">LIST HANDPHONE</a>
                    </li>
                `;
            })
            contents.innerHTML =` <ul class="collection"> ${data} `;
            const detil = document.querySelectorAll('.slug');
            detil.forEach(btn => {
                btn.onclick = (event) => {
                    showListHp(event.target.dataset.id);
                }
            })
        })
}

function showListHp(brand_slug){
    let ListHp = baseurl + "brands/" + brand_slug;
    title.innerHTML = "List HP "; 
    fetch(ListHp)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson.data.phones);
            let x = "";
            resJson.data.phones.forEach( list => {
                x +=`
                <div class="card">
                <div class="card-image">
                <img src="${list.image}">
                 <span class="card-title"></span>
                 </div>
        <div class="card-content">
          <p> 
                Merk    : ${list.brand} <br>
                Tipe Hp : ${list.phone_name} <br>
           </p>
        </div>
        
      </div>   
                `
            })   
            contents.innerHTML =` <ul class="collection"> ${x} `;
            const detail = document.querySelectorAll('.spec');
            detail.forEach(btn => {
                btn.onclick = (event) => {
                    showSpec(event.target.dataset.id);
                }
            })
        })  
}


document.addEventListener('DOMContentLoaded', function(){
    getnamephone();
    
    
});
