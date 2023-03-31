const list= document.querySelectorAll('.list');
console.log(list);
function activeLink(){
    list.forEach((item)=> 
    item.classList.remove('active'));
    this.classList.add('active');
    console.log(list);
}
list.forEach((item)=> item.addEventListener('click', activeLink));