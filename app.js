function reveal() {
    var elements = document.querySelectorAll(".reveal, .scroll-left, .scroll-right");
    for (let i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      
      if (position < windowHeight) {
        elements[i].classList.add("visible");
      } else {
        elements[i].classList.remove("visible");
      }
    }
  }
  window.addEventListener("scroll", reveal);