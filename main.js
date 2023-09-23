let faq = document.querySelectorAll(".faq > div");

faq.forEach((ele) => {
  ele.onclick = function(){
    ele.lastElementChild.classList.toggle("hidden")
    ele.firstElementChild.classList.toggle("font-bold")
    ele.firstElementChild.classList.toggle("pb-[10px]")
    ele.childNodes[1].lastElementChild.classList.toggle("rotate-[180deg]")
  }
})
