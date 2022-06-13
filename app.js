const ekle = document.querySelector("#todo-button");
const gir = document.querySelector("#todo-input");
const liste = document.querySelector("#todo-ul");
let list=[];
ekle.onclick = function () {
list.push(gir.value)
göster()
};

const göster = () => {
  if (gir.value.length == 0) {
    alert("Please Enter a Todo");
  } else {
    liste.innerHTML += `
   <li class="unchecked"><i class="fa fa-check" style="font-size:30px" id=ico></i><p>${gir.value}</p>
  <i class="far fa-trash-alt" style="font-size:30px"></i></li>`;
  }  
 
  let bitti = document.querySelectorAll(".fa-trash-alt");
  for (let i in bitti) {
    bitti[i].onclick = function () {
      bitti[i].parentNode.remove();
    }
    
  }
  let done = document.querySelectorAll(".fa-check");
  for (let i in done) {
    done[i].onclick = function () {
      done[i].parentElement.setAttribute("class", "checked");
      
    }
  }
  
  
  
  
    
   
  
    
};

