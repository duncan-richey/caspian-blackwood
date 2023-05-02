import Swiper, { EffectCreative, Parallax } from 'swiper';

export default function createPostersSlider(el) {
  const swiperEl = el.querySelector('.swiper');

  const calcNextOffset = () => {
    const parentWidth = swiperEl.parentElement.offsetWidth;
    const swiperWidth = swiperEl.offsetWidth;
    let nextOffset =
      (parentWidth - (parentWidth - swiperWidth) / 2) / swiperWidth;
    nextOffset = Math.max(nextOffset, 1);
    return `${nextOffset * 100}%`;
  };

  const postersSwiper = new Swiper(swiperEl, {
    modules: [Parallax, EffectCreative],
    effect: 'creative',
    speed: 600,
    resistanceRatio: 0,
    grabCursor: true,
    parallax: true,
    creativeEffect: {
      limitProgress: 3,
      perspective: true,
      shadowPerProgress: true,
      prev: {
        shadow: true,
        translate: ['-15%', 0, -200],
      },
      next: {
        translate: [calcNextOffset(), 0, 0],
      },
    },
  });

  const posters = el.querySelectorAll('.swiper-slide');
  posters.forEach((poster) => {
    const questListContainer = poster.querySelector('.quest-list-container');
    const questToggles = poster.querySelectorAll('.quest-toggle');

    questToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const isOpen = questListContainer.classList.toggle('open');
        if (isOpen) {
          questListContainer.style.transform = 'translateY(0)';
        } else {
          questListContainer.style.transform = 'translateY(100%)';
        }
      });
    });
  });

  const onResize = () => {
    if (!postersSwiper || postersSwiper.destroyed) return;
    postersSwiper.params.creativeEffect.next.translate = [
      calcNextOffset(),
      0,
      0,
    ];
    if (
      postersSwiper.params.resizeObserver &&
      typeof window.ResizeObserver !== 'undefined'
    ) {
      postersSwiper.update();
    }
  };
  window.addEventListener('resize', onResize);
  return postersSwiper;
}

