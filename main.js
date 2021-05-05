let bg = document.getElementById("bg-modal");

window.addEventListener("click", function (e) {

    if(e.target.classList.contains("galeria-img")){
        let cln = e.target.cloneNode();
        document.getElementById("clns").append(cln);
        cln.classList.add("opened");
        cln.classList.remove("galeria-img");
        bg.classList.add("modalcnt");
        bg.style.opacity = "1";
        bg.style.visibility = "visible";
        cln.id = "clon";
        
        window.onclick = function(e){
            let clicky = e.target
            if(clicky === bg){
                
                setTimeout(function(){
                   cln.remove();
                   bg.style.visibility = "hidden";
                   bg.style.opacity = "0";
                },100)

            }

           
        };
    }
    

});