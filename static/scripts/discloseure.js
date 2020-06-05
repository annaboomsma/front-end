function form(){
    const nextbutton = document.querySelectorAll(".nextbutton")

    nextbutton.forEach((next,index) => {
        next.addEventListener('click', () => {
            const input = next.previousElementSibling;
            const parent = next.parentElement;
            const nextField = parent.nextElementSibling;

            if(index === 0){
                valueGender();
            }else{
                valueSexuality();
            }
            nextSlide(parent,nextField);
            
        })
    })
}

function nextSlide(parent,nextField){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextField.classList.add('active');
}

form();
