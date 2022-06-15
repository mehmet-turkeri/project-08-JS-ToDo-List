const ekle = document.querySelector("#todo-button");
const gir = document.querySelector("#todo-input");
const liste = document.querySelector("#todo-ul");
let list=[];
const tdspan = document.querySelector("#td");
const dnspan = document.querySelector("#dn");
let tdsayac;
let dnsayac = 0;
gir.focus();

ekle.onclick = function () {
list.push(gir.value);
tdsayac = list.length;
tdspan.innerHTML = tdsayac;
göster();
};

const göster = () => {
  if (gir.value.length == 0) {
    alert("Please Enter a Todo");
    list.pop(); //Boş tıklamalarda artan dizinin son elemanını sil.
    tdspan.innerHTML = tdsayac - 1; // bos tiklama sebebiyle artan sayaci azalt
  } else {
    liste.innerHTML += `
   <li class="unchecked"><i class="fa fa-check" style="font-size:30px" id=ico></i><p>${gir.value}</p>
  <i class="far fa-trash-alt" style="font-size:30px"></i></li>`;
  gir.value = "";  
  }
   
  let bitti = document.querySelectorAll(".fa-trash-alt");
  for (let i in bitti) {
    bitti[i].onclick = function () {      
      list.shift(); //Ekrandan silinen li ye karşılık listeninde bir elemanını sil         
      bitti[i].parentNode.remove();
      durum = Number(tdspan.innerHTML);
      durum = durum - 1;
      tdspan.innerHTML = durum;// silinen li lerin sayisini toplamdan dus          
            
    }  
    
  } 


  let done = document.querySelectorAll(".fa-check");  
  for (let i in done) {
    done[i].onclick = function () {
      if(done[i].parentElement.className != ("unchecked")) {
        done[i].parentElement.className = "unchecked";
        dnsayac -= 1;

      }else{
        done[i].parentElement.className = ("checked");
        dnsayac += 1
      }
      dnspan.innerHTML = dnsayac;
            
    }
  }   
      
};

gir.onkeydown = (enter) => {
  if (enter.keyCode === 13) {
    ekle.click();
  }
}




   
  

  
  





 











