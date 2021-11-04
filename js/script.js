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
    title.innerHTML = "List HP " + brand_slug + ListHp; 
    fetch(ListHp)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson.data.phones);
            let phone = "";
            resJson.data.phones.forEach( list => {
                let phone = "";
                phone +=`
                 nama : ${list.brand}
                `
            })
            
            
        })
        contents.innerHTML =` <ul class="collection"> ${phone} `;
    
}

document.addEventListener('DOMContentLoaded', function(){
    getnamephone();
    
    
});
