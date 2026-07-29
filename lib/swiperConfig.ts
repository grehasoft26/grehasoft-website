import { SwiperOptions } from 'swiper/types';

/**
 * Shared configuration for Swiper.js carousels used across the Grehasoft site.
 * Ensures consistent slide count, spacing breakpoints, speed, autoplay,
 * hover controls, and keyboard navigability.
 */
export const commonSwiperConfig: SwiperOptions = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 700,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
};
