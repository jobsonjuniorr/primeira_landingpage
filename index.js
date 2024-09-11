const controls = document.querySelectorAll('.control');

let  currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;


controls.forEach(controls =>{
    controls.addEventListener('click',()=>{
        const isLeft =  controls.classList.contains('arrow-left');
        
        if(isLeft){
            currentItem -=1;
        } else{
            currentItem +=1;
        }
        if(currentItem  >= maxItems){
            currentItem = 0
        }
        if(currentItem < 0){
            currentItem = maxItems - 1;
        }
        items.forEach(item => item.classList.remove('current-item'))

       // items[currentItem].scrollIntoView({
  
          //  inline:"center",
        //    behavior: "smooth"
      //  });
        items[currentItem].classList.add("current-item");
        })

})


const changeThemeBtn = document.querySelector("#change-theme");


function toggleDarkMode(){
    document.body.classList.toggle("dark");
    
}


function loadTheme(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){
        toggleDarkMode()
    }
   
}
 
loadTheme()

changeThemeBtn.addEventListener("click",function(){
    toggleDarkMode();

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark",1);
          
    }
})

