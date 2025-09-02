function updateProgressBar(index, total) {
  const progressBar = document.querySelector('.progress-bar');
  const progressPercent = ((index + 1) / total) * 100; 
  progressBar.style.width = `${progressPercent}%`;

  // ✅ 新增几分之几
  const progressText = document.getElementById('progressText');
  progressText.textContent = `${index + 1} / ${total}`;
}



//幻灯片监听
document.addEventListener("DOMContentLoaded", function () {
  const secondImages = [
    "PPT/slide1.png",
    "PPT/slide2.jpg",
    "PPT/slide3.jpg",
    "PPT/slide4.jpg",
    "PPT/slide5.jpg"
  ];

  let secondCurrentIndex = 0;
  let secondIsAnimating = false;

  let secondCurrentSlide = document.querySelector(".second-slide.current");
  let secondNextSlide = document.querySelector(".second-slide.next");
  const indicatorButtons = document.querySelectorAll('.indicator-btn');

  function updateIndicators(index) {
    indicatorButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  function showSecondSlide(nextIndex, direction = 'right') {
    if (secondIsAnimating || nextIndex === secondCurrentIndex) return;
    secondIsAnimating = true;

    secondNextSlide.querySelector('.second-img').src = secondImages[nextIndex];
    secondNextSlide.style.transition = 'none';
    secondNextSlide.style.transform = (direction === 'right') ? 'translateX(100%)' : 'translateX(-100%)';

    requestAnimationFrame(() => {
      secondNextSlide.style.transition = 'transform 0.6s ease';
      secondCurrentSlide.style.transition = 'transform 0.6s ease';
      secondCurrentSlide.style.transform = (direction === 'right') ? 'translateX(-100%)' : 'translateX(100%)';
      secondNextSlide.style.transform = 'translateX(0%)';
    });

    setTimeout(() => {
      secondCurrentSlide.classList.remove("current");
      secondNextSlide.classList.remove("next");

      secondCurrentSlide.style.transition = 'none';
      secondCurrentSlide.style.transform = 'translateX(100%)';

      const temp = secondCurrentSlide;
      secondCurrentSlide = secondNextSlide;
      secondNextSlide = temp;

      secondCurrentSlide.classList.add("current");
      secondNextSlide.classList.add("next");

      secondCurrentIndex = nextIndex;
      updateIndicators(secondCurrentIndex);
      secondIsAnimating = false;
    }, 600);
  }

  indicatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index'));
      showSecondSlide(index, index > secondCurrentIndex ? 'right' : 'left');
    });
  });

  // 初始化第一张
  secondCurrentSlide.querySelector('.second-img').src = secondImages[secondCurrentIndex];
  updateIndicators(secondCurrentIndex);



  // 幻灯片轮播代码
    function startAutoPlay() {
      setInterval(() => {
        const nextIndex = (secondCurrentIndex + 1) % secondImages.length;
        showSecondSlide(nextIndex, 'right');
      }, 5000);
    }
    startAutoPlay();
});

// 导航栏弹窗监听
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contactModal");
  const trigger = document.getElementById("contactTrigger");
  const closeBtn = document.querySelector(".close-button");

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
