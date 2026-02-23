<script setup>
import { computed, nextTick, onBeforeMount, onMounted, ref, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import button_play from "./assets/button_play.webp";
import start from "./assets/start.webp";
import lystra from "./assets/lystra.webp";
import photo1 from "./assets/photo1.webp";
import photo2 from "./assets/photo2.webp";
import photo3 from "./assets/photo3.webp";
import ysadba1 from "./assets/ysadba1.webp";
import ysadba2 from "./assets/ysadba2.webp";
import circle from "./assets/circle.webp";
import button from "./assets/button.webp";
import flower from "./assets/flower.webp";
import cake from "./assets/cake.webp";
import ecremonia from "./assets/ecremonia.webp";
import banket from "./assets/banket.webp";
import black1 from "./assets/black1.webp";
import black2 from "./assets/black2.webp";
import black3 from "./assets/black3.webp";
import convert from "./assets/convert.webp";
import bant from "./assets/bant.webp";
import hand from "./assets/hand.webp";
import end from "./assets/end.webp";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useCountdown } from "./hooks/useCountdown";
import { getDeclension } from "./utils/utils";
import { SplitText } from "gsap/SplitText";

ScrollTrigger.config({ ignoreMobileResize: true });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const init = ref(false);
const windowWidth = ref(1920);
const mobile = computed(() => windowWidth.value <= 425);
const startAnimations = () => {
  ScrollTrigger.refresh();

  gsap.fromTo(
    ".kirill",
    {
      alpha: 0,
      x: -400,
    },
    {
      alpha: 1,
      x: 0,
      duration: 1,
      ease: "sine.out",
    },
  );
  gsap.fromTo(
    ".liza",
    {
      alpha: 0,
      x: 400,
    },
    {
      alpha: 1,
      x: 0,
      duration: 1,
      ease: "sine.out",
    },
  );

  const animsSecond = [
    ".anim-second-1",
    ".anim-second-2",
    ".anim-second-3",
    ".anim-second-4",
  ];

  const buttons = [".third__button", ".six__button", ".seven__button"];

  gsap.to(buttons, {
    repeat: -1,
    yoyo: true,
    scale: 1.1,
    duration: 1,
    ease: "sine.inOut",
  });

  animsSecond.forEach((elem) => {
    gsap.fromTo(
      elem,
      { y: 20 },
      {
        scrollTrigger: {
          trigger: elem,
          start: "270px bottom",
        },
        y: 0,
        alpha: 1,
      },
    );
  });

  gsap.from(".third__flower", {
    scrollTrigger: {
      trigger: ".third__flower",

      endTrigger: ".third__flower",
      toggleActions: "restart none none none",
      start: "-20px bottom",
      end: "bottom start",
    },
    repeat: -1,
    yoyo: true,
    rotation: 5,
    duration: 2,
    x: -10,
    ease: "sine.inOut",
  });

  const fourth__grid_divs = [
    ".fourth__grid_div_1",
    ".fourth__grid_div_2",
    ".fourth__grid_div_3",
    ".fourth__grid_div_4",
    ".fourth__grid_div_5",
    ".fourth__grid_div_6",
    ".fourth__grid_div_7",
    ".fourth__grid_div_8",
  ];

  fourth__grid_divs.forEach((elem, index) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        endTrigger: elem,
        toggleActions: "restart none none none",
        start: "-5px bottom",
        end: "bottom start",
      },
      duration: 1,
      x: index % 2 ? 100 : -100,
      ease: "back.out(1.2)",
      alpha: 0,
      scale: 0.5,
    });
  });

  const animsFifth = [
    ".anim-fifth-1",
    ".anim-fifth-2",
    ".anim-fifth-3",
    ".anim-fifth-4",
    ".anim-fifth-5",
  ];

  animsFifth.forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        endTrigger: elem,
        toggleActions: "restart none none none",
        start: "-20px bottom",
        end: "bottom start",
      },
      y: 20,
      alpha: 0,
      onComplete: () => {
        if (elem === ".anim-fifth-4") {
          gsap.to(".anim-fifth-4", {
            repeat: -1,
            scale: 1.2,
            yoyo: true,
            ease: "sine.inOut",
            duration: 0.5,
          });
        }
      },
    });
  });

  const animsSix = [
    ".anims-six-1",
    ".anims-six-2",
    ".anims-six-3",
    ".anims-six-4",
    ".anims-six-5",
  ];

  animsSix.forEach((elem) => {
    if (elem === ".anims-six-4") {
      let split = SplitText.create(".anims-six-4-text", {
        type: "words, chars",
      });

      gsap.fromTo(
        elem,
        { y: 20 },
        {
          scrollTrigger: {
            trigger: elem,

            endTrigger: elem,
            start: "270px bottom",
          },
          y: 0,
          alpha: 1,

          onStart: () => {
            gsap.from(split.chars, {
              duration: 1,
              y: 50, // animate from 100px below
              autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
              stagger: 0.05, // 0.05 seconds between each
            });
          },
        },
      );

      // now animate the characters in a staggered fashion
    } else {
      gsap.fromTo(
        elem,
        {
          y: 20,
          scrollTrigger: {
            trigger: elem,
            toggleActions: "restart none none none",
            start: "start bottom",
          },
        },
        {
          scrollTrigger: {
            trigger: elem,
            toggleActions: "restart none none none",
            start: "start bottom",
          },
          y: 0,
          alpha: 1,
        },
      );
    }
  });

  gsap.to(".second__lystra", {
    rotate: 10,
    ease: "sine.inOut",
    duration: 2,
    yoyo: true,
    repeat: -1,
  });

  gsap.from(".seven__hand", {
    scrollTrigger: {
      trigger: ".seven__hand",

      endTrigger: ".seven__hand",
      toggleActions: "restart none none none",
      start: "-20px bottom",
      end: "bottom start",
    },
    repeat: -1,
    yoyo: true,
    rotation: 5,
    duration: 2,
    x: -10,
    ease: "sine.inOut",
  });
  ScrollTrigger.refresh();
};

// watch(video, () => {
//   const loader = document.getElementById("loader");
//   const video = document.getElementById("video");

//   // Показываем лоудер при загрузке видео
//   video.addEventListener("loadstart", () => {
//     loader.style.display = "block";
//   });

//   // Скрываем лоудер, когда видео загружено
//   video.addEventListener("canplaythrough", () => {
//     loader.style.display = "none";
//   });

//   // Скрываем лоудер, если произошла ошибка
//   video.addEventListener("error", () => {
//     loader.style.display = "none";
//     alert("Ошибка загрузки видео. Вы можете запросить видео у Сабины!");
//   });
// });

const handleClickByVideo = () => {};

const handleClickOpenMap = () => {
  window.open(
    "https://yandex.ru/maps/org/kompleks_bogdanovichey_dvor_stayki/163626036730/?ll=27.432636%2C54.479137&z=7",
    "_blank",
  );
};

const handleClickOpenContact = () => {
  window.open("https://t.me/yablokova_evgeniya", "_blank");
};

const handleClickChat = () => {
  window.open("https://t.me/+vJ1mOfxxF6tjMzYy", "_blank");
};

const date = ref("12.08.2026 00:00:00");
const { countdown } = useCountdown(date);

const isLoaded = ref(false);

const swiper1 = ref(null);
const swiper2 = ref(null);
const swiper3 = ref(null);

const updateSwipers = () => {
  [swiper1, swiper2, swiper3].forEach((swiperRef) => {
    if (swiperRef?.update) {
      swiperRef.update();
      swiperRef.loopCreate?.();
    }
  });
};

const play = ref(false);
const videoRef = ref(null);

const handleClickStop = () => {
  play.value = false;
};

const handleClickPlay = () => {
  play.value = true;

  const myVideo = videoRef.value;

  if (myVideo.paused) {
    // if (myVideo.requestFullscreen) {
    //   myVideo.requestFullscreen();
    // } else if (myVideo.msRequestFullscreen) {
    //   myVideo.msRequestFullscreen();
    // } else if (myVideo.mozRequestFullScreen) {
    //   myVideo.mozRequestFullScreen();
    // } else if (myVideo.webkitRequestFullScreen) {
    //   myVideo.webkitRequestFullScreen();
    // } else if (video.webkitEnterFullScreen) {
    //   myVideo.webkitEnterFullScreen();
    // }
    myVideo.play();
  } else {
    myVideo.pause();
  }
};

onMounted(() => {
  if (document.readyState === "complete") {
    isLoaded.value = true;
    nextTick(() => {
      updateSwipers();
      startAnimations();
    });
  } else {
    window.addEventListener("load", () => {
      isLoaded.value = true;
      nextTick(() => {
        updateSwipers();
        startAnimations();
      });
    });
  }
});
</script>

<template>
  <div v-if="!isLoaded" class="loader-wrapper">
    <span class="loader"></span>
    <p>Загружаем приглашение</p>
  </div>
  <div class="main" :class="{ main_loaded: !isLoaded }">
    <div class="main__container first">
      <!-- <img :src="start" alt="" /> -->
      <!-- <img :src="button_play" alt="" @click="handleClickPlay" /> -->
      <video
        class="video"
        :class="{ video_play: play }"
        preload
        autoplay
        loop
        muted
        playsinline
        id="video"
        ref="videoRef"
        @pause="handleClickStop"
      >
        <source src="./assets/video.webm" type="video/webm" />
      </video>
      <p class="kirill first__text fz70 vibe">Кирилл</p>
      <p class="liza first__text fz70 vibe">Елизавета</p>
    </div>
    <div class="main__container second">
      <img class="second__lystra" :src="lystra" alt="" />
      <Swiper
        v-if="isLoaded"
        @swiper="(swiper) => (swiper1 = swiper)"
        class="swiper"
        centeredSlides
        slidesPerView="auto"
        :slidesPerGroup="1"
        :spaceBetween="5"
        :loop="isLoaded"
      >
        <SwiperSlide>
          <img class="swiper-img center" :src="photo2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="photo3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="photo1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="photo2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="photo3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="photo1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="photo2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="photo3" alt="" />
        </SwiperSlide>
      </Swiper>
      <div class="second__content">
        <p class="anim-second-1 vibe fz36">Дорогие родные и близкие</p>
        <p class="anim-second-2" style="max-width: 300px">
          Приглашаем вас разделить <br />
          этот особенный и важный для нас день <br />
          и стать частью семейной истории
        </p>
        <div class="anim-second-3">
          <table>
            <thead>
              <tr>
                <th>Вторник</th>
                <th>Среда</th>
                <th>Четверг</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p class="vibe">август</p>
                  <p class="vibe1 fz46">11</p>
                </td>
                <td>
                  <p class="vibe">август</p>
                  <p class="vibe1 fz46">12</p>
                  <img :src="circle" alt="" />
                </td>
                <td>
                  <p class="vibe">август</p>
                  <p class="vibe1 fz46">13</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="anim-second-4 second__content_calendar">
          <p>Ждём вас на нашей свадьбе через:</p>
          <div class="calendar">
            <div>
              <p>{{ countdown.days }}</p>
              <p>
                {{ getDeclension(countdown.days, ["день", "дня", "дней"]) }}
              </p>
            </div>
            <div>
              <p>{{ countdown.hours }}</p>
              <p>
                {{ getDeclension(countdown.hours, ["час", "часа", "часов"]) }}
              </p>
            </div>
            <div>
              <p>{{ countdown.minutes }}</p>
              <p>
                {{
                  getDeclension(countdown.minutes, [
                    "минута",
                    "минуты",
                    "минут",
                  ])
                }}
              </p>
            </div>
            <div>
              <p>{{ countdown.seconds }}</p>
              <p>
                {{
                  getDeclension(countdown.seconds, [
                    "секунда",
                    "секунды",
                    "секунд",
                  ])
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__container third">
      <p class="vibe fz36">Место проведения</p>
      <Swiper
        v-if="isLoaded"
        @swiper="(swiper) => (swiper2 = swiper)"
        class="swiper swiper-2"
        slidesPerView="auto"
        :spaceBetween="5"
        :loop="isLoaded"
      >
        <SwiperSlide>
          <img class="swiper-img" :src="ysadba1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="ysadba2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="ysadba1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="ysadba2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="ysadba1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="ysadba2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="ysadba1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="ysadba2" alt="" />
        </SwiperSlide>
      </Swiper>
      <div>
        <img :src="button" alt="" />
      </div>
      <p class="third__content">
        Историческая усадьба Богдановичей
        <span style="white-space: nowrap">“Двор Стайки”</span>
      </p>
      <button class="third__button" @click="handleClickOpenMap">
        ПОСМОТРЕТЬ НА КАРТЕ
      </button>
      <img class="third__flower" :src="flower" alt="" />
    </div>
    <div class="main__container fourth">
      <p class="vibe fz50">Тайминг</p>
      <div class="fourth__grid">
        <div class="fourth__grid_div_1">
          <div>
            <p class="vibe1 fz36">14:00</p>
            <b class="fz12 f500">Трансфер до усадьбы</b>
            <p class="fz12">г. Минск <br />ДС Дружная</p>
          </div>
        </div>
        <div class="fourth__grid_div_2">
          <div>
            <p class="vibe1 fz36">15:30</p>
            <b class="fz12 f500">Фуршет</b>
            <p class="fz12">Историческая усадьба Богдановичей</p>
          </div>
        </div>
        <div class="fourth__grid_div_3">
          <div>
            <p class="vibe1 fz36">16:30</p>
            <b class="fz12 f500">Церемония</b>
          </div>
        </div>
        <div class="fourth__grid_div_4">
          <img :src="ecremonia" alt="" />
        </div>
        <div class="fourth__grid_div_5">
          <img :src="banket" alt="" />
        </div>
        <div class="fourth__grid_div_6">
          <div>
            <p class="vibe1 fz36">17:00</p>
            <b class="fz12 f500">Банкет</b>
          </div>
        </div>
        <div class="fourth__grid_div_7">
          <div>
            <p class="vibe1 fz36">23:00</p>
            <b class="fz12 f500">Свадебный торт</b>
          </div>
        </div>
        <div class="fourth__grid_div_8">
          <img :src="cake" alt="" />
        </div>
      </div>
    </div>
    <div class="main__container fifth">
      <div class="fifth__content">
        <p class="anim-fifth-1 vibe fz50">Дресс-код</p>
        <p class="anim-fifth-2">
          Мы будем признательны, <br />
          если вы придержитесь <br />
          цветовой гаммы
        </p>
        <div class="fifth__border anim-fifth-3"></div>
        <p class="f500 anim-fifth-4">TOTAL BLACK</p>
      </div>

      <Swiper
        v-if="isLoaded"
        @swiper="(swiper) => (swiper3 = swiper)"
        class="swiper swiper-3"
        slidesPerView="auto"
        :slidesPerGroup="1"
        :spaceBetween="5"
        :loop="isLoaded"
        centered-slides
      >
        <SwiperSlide>
          <img class="swiper-img center" :src="black2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="black3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="black1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="black2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="black3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="black1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img center" :src="black2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="swiper-img" :src="black3" alt="" />
        </SwiperSlide>
      </Swiper>
      <div class="fifth__content anim-fifth-5">
        <p>
          Чтобы было удобнее, мы собрали примеры <br />
          образов, которые помогут вам вдохновиться <br />
          и выбрать наряд
        </p>
      </div>
    </div>
    <div class="main__container six">
      <p class="vibe1 fz70 anims-six-1">Details</p>
      <div class="six__convert anims-six-2">
        <p class="six__convert-text">
          Мы не хотим обременять <br />
          вас выбором подарка, <br />
          поэтому будем рады вкладу <br />
          в бюджет нашей молодой семьи
        </p>
        <img :src="convert" alt="" />
      </div>
      <div class="six__content anims-six-3" style="margin-top: -50px">
        <p>
          Для вашего удобства мы организуем <br />
          трансфер до места торжества. <br />
          Трансфер будет на месте за 10 минут <br />
          до отправления по адресу ДС Дружная.
        </p>
        <p style="margin-top: 10px; margin-bottom: 20px">
          Если Вы планируете воспользоваться этой услугой - сообщите пожалуйства
          об этом нам
        </p>
      </div>
      <div class="six__content anims-six-4" style="padding: 0 5px; width: 100%">
        <div class="six__ramka">
          <img :src="bant" alt="" />
          <p class="anims-six-4-text">
            Мы старались сделать праздник незабываемым, <br />
            поэтому будем рады, если Вы подтвердите свое <br />
            присутствие на торжестве
            <b class="f700" :style="{ whiteSpace: 'nowrap' }"
              >до 01 июня 2026</b
            >
          </p>
        </div>
      </div>
      <div class="six__content anims-six-5">
        <p>
          Вступайте в наш общий <b class="f700">телеграмм</b> канал <br />
          Там мы будем делиться впечатлениями, <br />
          эмоциями, фото и видео
        </p>
      </div>
      <button class="six__button" @click="handleClickChat">
        ВСТУПИТЬ В ЧАТ
      </button>
    </div>
    <div class="main__container seven">
      <div class="seven__hand">
        <img :src="hand" alt="" />
        <button class="seven__button" @click="handleClickOpenContact">
          НАПИСАТЬ
        </button>
      </div>
      <div class="seven__content">
        <p class="seven__content-contacts vibe fz50">Контакты</p>
        <p class="seven__content-contacts-text seven__content-text">
          Если у вас возникли вопросы по <br />
          мероприятию или вы подготовили <br />
          творческий сюрприз - обращайтесь <br />
          к нашему
          <b class="f700">организатору Евгении</b>
        </p>
      </div>
      <div class="seven__content seven__content-texts">
        <p class="seven__content-text1 vibe fz50">Ждем вас с</p>
        <p class="seven__content-text2 vibe fz50">нетерпением</p>
      </div>
      <div class="seven__ends">
        <img class="seven__end1" :src="end" alt="" />
        <img class="seven__end2" :src="end" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader-wrapper {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  p {
    color: var(--color-text);
  }
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid var(--color-text);
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid var(--color-text-secondary);
  border-left: 4px solid transparent;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.main {
  position: relative;
  background-color: var(--color-bg);
  max-width: 440px;
  margin: 0 auto;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  color: var(--color-text-black);
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  opacity: 1;
  transition: all 0.25s ease-in-out;

  &_loaded {
    opacity: 0;
  }

  &__container {
    position: relative;
    &:nth-child(odd) {
      background-color: var(--color-bg-secondary);
    }
    &:first-child {
      background-color: var(--color-bg);
    }

    &::after {
      position: absolute;
      content: "";
      width: 105%;
      left: 0px;
      min-height: 210px;
      height: auto;
      background-image: url("./assets/shelk.webp");
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: contain;
      bottom: 0;
      z-index: 2;
      margin-bottom: -21%;
      rotate: 2deg;
    }
  }
}

@media screen and (max-width: 425px) {
  .main {
    width: 100%;
    max-width: unset;
  }
}

.first {
  position: relative;

  .video {
    width: 100%;
    height: auto;
    // opacity: 0;
    // z-index: -1;
    transition: all 0.25s ease-in-out;
    position: relative;

    &_play {
      opacity: 1;
      z-index: 2;
    }
  }

  &__text {
    position: absolute;
    color: var(--color-text);
    z-index: 1;
    &:first-of-type {
      left: 30px;
      bottom: 25%;
      font-size: min(70px, 14vw);
    }

    &:nth-of-type(2) {
      right: 30px;
      bottom: 12%;
      font-size: min(70px, 14vw);
    }
  }

  img:first-child {
    width: auto;
    height: 100%;
    filter: blur(1.5px) brightness(0.6);
    position: absolute;
    left: 50%;
    object-position: center center;
    transform: translateX(-50%);
    object-fit: cover;
  }
  img:nth-child(2) {
    object-fit: contain;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    max-width: 90px;
    width: min(50%, 20vw);
    height: auto;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
    transform-origin: left top;

    &:hover {
      scale: 0.95;
    }
  }
}

.second {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-text);

  &__content {
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 25px;
    &_calendar {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    table {
      border-spacing: 0;
      th {
        border-top: 1px solid white;
        border-right: 1px solid white;
        padding: 4px;

        &:last-child {
          border-right: unset;
        }
      }
      tr {
        border-top: 1px solid white;
      }
      td {
        padding-top: 4px;
        position: relative;
        img {
          position: absolute;
          top: -50px;
          left: -17px;
          max-width: 142px;
          height: auto;
        }

        border-top: 1px solid white;
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        text-align: center;
        width: 100px;

        &:last-child {
          border-right: unset;
        }
      }
    }
  }

  &__lystra {
    position: absolute;
    transform-origin: top center;
    rotate: -10deg;
    top: -10px;
    left: 50%;
    transform: translate(-50%);
  }
}

.swiper {
  width: 100%;
  padding: 280px 0 60px 0;
}

.swiper-slide {
  // width: 300px; /* базовый размер */
  max-width: 230px;
  min-width: 230px;
  transition: all 0.5s ease;
  transform: scale(0.9);
  filter: grayscale(100%);
  opacity: 0.6;
  margin-top: auto;
  margin-bottom: auto;
}

.swiper-slide {
  transition:
    transform 0.5s ease,
    filter 0.5s ease,
    opacity 0.5s ease;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Центральный слайд */
.swiper-slide-active {
  transform: scale(1.1);
  filter: grayscale(0%);
  opacity: 1;
  z-index: 2;
}

.calendar {
  padding: 0 55px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  gap: 20px;
}

.third {
  position: relative;
  * {
    color: var(--color-text-secondary);
  }

  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &__flower {
    left: 0;
    z-index: 3;
    max-width: 200px;
    bottom: 80px;
    position: absolute;
  }

  &__content {
    text-align: center;
    max-width: 320px;
    width: 100%;
  }

  &__button {
    background-color: #350609;
    color: white;
    padding: 10px 24px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 13px;
    border-radius: 20px;
    cursor: pointer;
    transition: scale 0.25s ease-in-out;
    &:hover {
      scale: 0.95;
    }
  }
}

.swiper-2 {
  padding-left: -5px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: 105px;
}

.fourth {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 80px 5% 120px;

  * {
    color: var(--color-text);
  }

  &__grid {
    column-gap: 5%;
    row-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > div {
      display: flex;
      align-items: center;

      & > div {
        padding: 12px;
      }
      &:has(div) {
        background-color: var(--color-bg-secondary);
      }

      max-width: 437px;
      // height: 170px;
      position: relative;
      width: 100%;
      overflow: hidden;
      aspect-ratio: 1;

      border-radius: 40px;
      * {
        color: var(--color-text-secondary);
      }
      border: unset;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
}

.fifth {
  padding: 60px 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  * {
    color: var(--color-text-secondary);
  }

  &__border {
    border-left: 1px solid var(--color-text-secondary);
    height: 30px;
  }

  &__content {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

.swiper-3 {
  padding-top: 20px;
  padding-bottom: 20px;
  .swiper-slide {
    max-width: 180px;
    min-width: 180px;
    filter: unset;
    opacity: unset;
  }
}

.six {
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
  padding: 80px 0 60px;

  &__content {
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  &__ramka {
    padding: 70px 5% 5%;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    img {
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }

    background-color: var(--color-bg-secondary);
    border-radius: 20px;
    color: var(--color-text-secondary);
  }

  &__convert {
    position: relative;
    margin-bottom: -30px;
    margin-top: -60px;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__convert-text {
    position: absolute;
    max-width: 50%;
    text-align: center;
    left: 24%;
    max-width: 180px;
    top: 35%;
    color: #350609;
    font-weight: 400;
    font-size: 11px;
    rotate: -22deg;
    line-height: 100%;
  }

  &__button {
    padding: 6px 40px;
    margin-top: -30px;
    border-radius: 50px;
    background-color: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-text);
    transition: scale 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
      scale: 0.95;
    }
  }
}

.seven {
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  color: var(--color-text);
  padding: 60px 0 0;
  position: relative;

  * {
    color: #350609;
  }

  &::after {
    all: unset;
  }

  &__content {
    padding: 0 20px;
  }

  &__content-text {
    max-width: 30%;
    font-size: 14px;
  }

  &__hand {
    position: absolute;
    top: -10px;
    right: 0;
    // width: 50%;
  }

  &__ends {
    position: relative;
  }

  &__end1 {
    width: 100%;
    height: auto;
    z-index: 2;
    filter: blur(10px);
  }
  &__end2 {
    width: 100%;
    height: auto;
    max-height: 95%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__content-texts {
    padding-top: 50px;
    margin-bottom: -110px;
    z-index: 3;
  }

  &__content-text1 {
    margin-right: auto;
    font-size: min(50px, 12vw);
    margin-top: -30px;
  }
  &__content-text2 {
    margin-top: -10px;
    margin-left: 30%;
    font-size: min(50px, 12vw);
  }

  &__button {
    padding: 4px 16px;
    border: 1px solid var(--color-text-secondary);
    position: absolute;
    left: 25%;
    bottom: 115px;
    border-radius: 16px;
    rotate: 28deg;
    background-color: transparent;
    cursor: pointer;

    transition: scale 0.25s ease-in-out;
    z-index: 4;
  }

  &__content-contacts {
    margin-top: 10px;
    font-size: min(50px, 12vw);
  }

  &__content-contacts-text {
    margin-top: 10px;
    text-align: center;
    font-size: min(15px, 3.2vw);
    max-width: min(60%, 60vw);
    padding-bottom: 20%;
  }
}

.anims-six-1 {
  color: rgba(255, 255, 255, 0.2);
  align-self: flex-end;
  padding-right: 50px;
  margin-bottom: -50px;
}

.anims-six-1,
.anims-six-2,
.anims-six-3,
.anims-six-4,
.anims-six-5,
.anims-six-6,
.anim-second-1,
.anim-second-2,
.anim-second-3,
.anim-second-4 {
  opacity: 0;
}

button {
  white-space: nowrap;
}
</style>
