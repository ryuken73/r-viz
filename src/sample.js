var wrap = document.getElementById('wrap');

wrap.addEventListener("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    console.log('>147')
    wrap.classList.add("fix-search");
  } else {
    console.log('<147')
    wrap.classList.remove("fix-search");
  }
  
});