const btn = document.querySelector('button');
const additional = document.querySelector('.additional');

btn.addEventListener('click',function(e){
  e.preventDefault();
  additional.classList.toggle('show');
})