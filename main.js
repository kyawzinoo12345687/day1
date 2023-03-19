let bars = document.querySelector("#bars");
let nav_links = document.querySelector(".nav-links");
bars.addEventListener("click", function () {
    // alert("hello")
    nav_links.classList.toggle("show");
    console.log(this.src);
    if (this.src === "http://127.0.0.1:5500/blog/bars.svg"){
        this.src = "http://127.0.0.1:5500/blog/cross.svg";
    }else{
        this.src = "http://127.0.0.1:5500/blog/bars.svg";
    }
});

