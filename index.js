let pas=document.getElementById("pasw");

let but=document.getElementById("hidd");
but.addEventListener("click",function(){
    if(this.checked){

        pasw.type="text";
    }
    else{
        pasw.type="password";
    }
});

console.log();