function checkMobile(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    setTimeout(scrollTo, 0, 0, 1);
    alert("가로모드로 전환 후 시청해주세요.");
  };
}
window.onload = checkMobile;
window.addEventListener("resize",checkMobile)

// aos
AOS.init();

const snowBG = document.querySelector('.snowbg');

function getRandomValue() {
    return Math.floor(Math.random() * 10000) + 5000;
  }

function animateElement(element, startTime) {
    let duration = getRandomValue();

    function step(timestamp) {
        let elapsedTime = timestamp - startTime;
        let progress = Math.min(elapsedTime / duration, 1);

        element.style.top = progress * 100 + '%';
        element.style.opacity = 1 - (0.9 * progress); // 0.2로 가는데 0.8을 곱하여 0.2에서 1의 범위로 변환

        if (progress < 1) {
            requestAnimationFrame(step);
        }else{
            element.remove();
        }
    }

    requestAnimationFrame(step);
}

function createSnow() {
    const snowflake = document.createElement('span');
    snowflake.classList.add('fa', 'fa-snowflake-o', 'snowflake');
    snowflake.setAttribute('aria-hidden', 'true');
    snowflake.style.transform = `scale(${Math.random()*0.7+1})`;
    snowflake.style.left = `${Math.random() * 100}%`;
    snowBG.appendChild(snowflake);

    const snowball = document.createElement('span');
    snowball.classList.add('snowball');
    snowball.textContent = '●';
    snowball.style.transform = `scale(${Math.random()*0.7+1})`;
    snowball.style.left = `${Math.random() * 100}%`;
    snowBG.appendChild(snowball);
    
    animateElement(snowflake, performance.now());
    animateElement(snowball, performance.now());
}

setInterval(()=>{
    createSnow();
},500);

// aniText
let typed = new Typed('#aniText', {
	strings: [
		'Welcome to Portfolio',
		'Web Frontend',
		'Web Publisher',
		'Have a nice day!!',
	  ],
	fadeOut:true, //true: 사라지기, false: 한글자씩 지우기
	fadeOutDelay:1000, //사라지는 타이밍
	loop:false, //반복 유무
  showCursor:false,
	// cursorChar:"◀", //깜박거리는 문자열 = 기본값은 "|"
	autoInsertCss:true, //fade같이 css 사용하는거 자동조절 x
	// backSpeed:50, //한글자씩 지워지는 속도
	smartBackspace:true,
});

// live holdem
const Lswiper = new Swiper('.L-swiper', {
    loop:true,
    // autoplay:true,
    pagination: {
      el: '.live .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.live .swiper-next',
      prevEl: '.live .swiper-prev',
    },
  });
  
  // bada holdem
  const Bswiper = new Swiper('.B-swiper', {
    loop:true,
    // autoplay:true,
    pagination: {
      el: '.bada .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.bada .swiper-next',
      prevEl: '.bada .swiper-prev',
    },
  });
  // ace holdem
  const Aswiper = new Swiper('.A-swiper', {
    loop:true,
    // autoplay:true,
    pagination: {
      el: '.ace .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.ace .swiper-next',
      prevEl: '.ace .swiper-prev',
    },
  });
  // gamble master
  const Gswiper = new Swiper('.G-swiper', {
    loop:true,
    // autoplay:true,
    pagination: {
      el: '.gamble .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.gamble .swiper-next',
      prevEl: '.gamble .swiper-prev',
    },
  });
  // evolution
  const Eswiper = new Swiper('.E-swiper', {
    loop:true,
    // autoplay:true,
    pagination: {
      el: '.evolution .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.evolution .swiper-next',
      prevEl: '.evolution .swiper-prev',
    },
  });