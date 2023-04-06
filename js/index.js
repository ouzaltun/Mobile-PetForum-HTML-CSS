/*var list = document.querySelectorAll('.list');
var par = 0;
var homepage = document.getElementById('homepage');
var profile = document.getElementById('profile');
var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var pages = [homepage, profile];
var tabs = [tab1, tab2];
console.log(tab1.classList)
function activeLink() {
    //console.log(par)
    for(let i in list){
        if(list[i].classList.contains('active')== false && par == i){
            list[i].classList.add('active');
            for (let page in pages) {
                if (page == par) {
                    pages[page].style.display = 'visible !important';
                }
                else {
                    pages[page].style.display = 'none !important';
                }
            }
        }
        else if (list[i].classList.contains('active')==1 && par != i){
            list[i].classList.remove('active');
        }
    }*/
// console.log('remove list', list)
// let x = 'tab'+(par+1);
// document.getElementById(x).classList.add('active')
// for (let i = 0; i < tabs.length; i++) {
//     console.log(tabs[i].classList.value)
//     if (tabs[i].classList.value.indexOf('active') > -1) {
//         activeIndex = i;
//     }
// }

//console.log('xxxxxxxxxxx', list[activeIndex].classList, activeIndex);



// list.forEach((item)=> 
// item.classList.remove('active'));
// this.classList.add('active');
// console.log(list);

//document.addEventListener('click', activeLink);

$('#ulLink li').click(function () {
    $('#ulLink li').removeClass('active');
    $(this).addClass('active');
    $('.indicator').css({ "-webkit-transform": "translate(calc(70px*" + $(this).index() + "), 0)" });
    var pages = ['#homepage', '#profile'];
    $('section').css('display', 'none');
    $(pages[$(this).index()]).css('display', 'block');
})