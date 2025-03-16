// 高考日期 (2027年6月7日)
const targetDate = new Date('June 7, 2027 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

// 每秒更新倒计时
setInterval(updateCountdown, 1000);

// 初始化倒计时
updateCountdown();

// 轮播图功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// 每4秒换一张图片
setInterval(showNextImage, 4000);

// 初始化第一张图片
images[currentIndex].classList.add('active');