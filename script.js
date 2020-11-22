const noti = document.querySelector('h1');
const select =document.querySelector('.select');
const button = document.querySelectorAll('button');
button.forEach(but=>{
    but.addEventListener('click',(e)=>{
        
        let add = Number(noti.getAttribute('data-count')||0);
        noti.setAttribute('data-count',add+1);
        noti.classList.add('zero')
        //kopiuje i wkleja element//    
        const parent = e.target.parentNode;
        const clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerHTML="Buy-now";
        if (clone){
            noti.onclick=()=>{
                select.classList.toggle('display')
            }
        }
        const image =e.target.parentNode.querySelector('img');
      
        const span =e.target.parentNode.querySelector('span');
        
        const s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout( ()=>{
            span.removeChild(s_image);
            span.classList.remove('active');
        }, 500)


        })
})