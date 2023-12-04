

(function(){
    const buttons = document.querySelectorAll('.btn')
    let count = 0
    buttons.forEach(function(button){
        button.addEventListener('click', ()=>{ 
            // let count = 0
            if(button.classList.contains('prevBtn')){
                count--
            }else if(button.classList.contains('nextBtn')){
                count++
            }
            let result=document.querySelector('#number');
            result.textContent= count
            console.log(count)
            if(count<0){
                result.style.color = 'red'
            }else if(count>0){
                result.style.color = 'green'
            }
        })
    })
}) ()