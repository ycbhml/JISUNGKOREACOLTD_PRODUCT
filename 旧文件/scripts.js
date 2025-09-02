document.addEventListener("DOMContentLoaded", function() {
    // 判断设备是手机还是电脑
    function isMobileDevice() {
        return (window.innerWidth <= 768);
    }

    if (isMobileDevice()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.add('desktop');
    }





    // 为产品图片添加点击事件
    document.getElementById("product-dongman").addEventListener("click", function() {
        window.location.href = "dongman.html";
    });
    document.getElementById("product-xianman").addEventListener("click", function() {
        window.location.href = "xianman.html";
    });
    document.getElementById("product-huoman").addEventListener("click", function() {
        window.location.href = "huoman.html";
    });
    document.getElementById("product-shengjiang").addEventListener("click", function() {
        window.location.href = "shengjiang.html";
    });
    document.getElementById("product-kaoman").addEventListener("click", function() {
        window.location.href = "kaoman.html";
    });




    

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
    }

    // 自动播放
    let slideIndexAuto = 0;
    autoSlides();

    function autoSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndexAuto++;
        if (slideIndexAuto > slides.length) {slideIndexAuto = 1} 
        slides[slideIndexAuto-1].style.display = "block"; 
        setTimeout(autoSlides, 5000); // 更改图片切换的时间
    }

    function showPopup(id) {
        document.getElementById(id).style.display = 'block';
    }

    function hidePopup(id) {
        document.getElementById(id).style.display = 'none';
    }

    // 将plusSlides和currentSlide函数绑定到全局
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
    window.showPopup = showPopup;
    window.hidePopup = hidePopup;
});