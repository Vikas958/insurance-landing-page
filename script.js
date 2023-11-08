
var mobileList = document.querySelector(".navmob");
var menuopen = document.querySelector("#menuopen");
var menuclose = document.querySelector("#menuclose");

// menuopen.addEventListener("click")

menuopen.addEventListener('click',()=>{
mobileList.classList.remove('none')
// mobileList.classList.toggle('none');
menuopen.classList.add('none');
// menuopen.classList.toggle('none');
menuclose.classList.remove('none');
// menuclose.classList.toggle('none');
})
menuclose.addEventListener('click',()=>{
menuopen.classList.toggle('none');
menuclose.classList.toggle('none');
mobileList.classList.toggle('none');
})
mobileList.addEventListener('click',()=>{
mobileList.classList.toggle('none');
menuopen.classList.toggle('none');
menuclose.classList.toggle('none');

})