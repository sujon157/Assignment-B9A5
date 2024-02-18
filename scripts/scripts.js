

document.getElementById('seat-container').addEventListener('click',function(event){
    const targetKbd=event.target;
    // const expectedKbd=targetKbd.value;
    console.log(targetKbd);
    if(targetKbd.kbd==='kbd'){
        targetKbd.classList.toggle('selected');
    }
})