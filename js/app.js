var box=document.querySelectorAll(".box");
var banner=document.querySelectorAll(".middle-part");

for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',function(){
        for(let i=0;i<box.length;i++){
            box[i].className="box";
            this.className="box active";
        }
        
        for(let i=0;i<banner.length;i++){
            banner[i].className="middle-part";
        }
        document.getElementById(this.dataset.id).className="middle-part active";
    })
}

