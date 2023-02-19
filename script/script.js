const input = document.getElementById('input');
const Submit = document.getElementById('btn');
Submit.addEventListener('click',()=>{
    const value = input.value;
    if(value>=18){
        alert('You are eligible');
    }
    else{
        alert('You are not eligible');
    }
})