// GSAP Animation JavaScript for Post 2 page

// GSAP Animation for Header Logo
gsap.from(".header__logo", {
  duration: 1,
  opacity: 0,
  y: -50,
  delay: 0.5,
});

// GSAP Animation for Hero Section
gsap.from(".left__arrow__icon", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.5,
});
gsap.from(".right__arrow__icon", {
  duration: 1,
  x: 50,
  opacity: 0,
  delay: 0.5,
});
gsap.from(".hero__content h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  delay: 1,
});
gsap.from(".hero__content p", {
  duration: 1,
  x: 50,
  opacity: 0,
  delay: 1,
  stagger: 0.3,
});
gsap.from(".hero__content__lists", {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 1.5,
});

// GSAP Animation for Gallery Section
gsap.from(".gallery__img", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  delay: 0.5,
});
gsap.from(".gallery__spinner", {
  duration: 2,
  rotation: 360,
  opacity: 0,
  repeat: -1,
  ease: "linear",
  delay: 0.8,
});
gsap.from(".gallery__shape__left", {
  duration: 1,
  x: -100,
  opacity: 0,
  delay: 0.5,
});
gsap.from(".gallery__shape__right", {
  duration: 1,
  x: 100,
  opacity: 0,
  delay: 0.5,
});

// GSAP Animation JavaScript for Post 7 page

gsap.from(".header__shape__left", {
  duration: 2,
  opacity: 1,
  x: -100,
  ease: "power2.out",
  delay: 1,
  opacity: 0,
});

gsap.from(".header__shape__right", {
  duration: 2,
  opacity: 1,
  x: 100,
  ease: "power2.out",
  delay: 1,
  opacity: 0,
});

gsap.from(".star__shape", {
  duration: 2,
  rotation: 360,
  scale: 1.1,
  delay: 1,
  opacity: 0,
});

gsap.from(".hero__left__shape, .hero__right__shape", {
  duration: 1.5,
  rotateX: 180,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.from(".hero__content__sub-title span", {
  duration: 2,
  opacity: 0,
  y: 20,
  ease: "power2.out",
  stagger: 0.1,
  delay: 2,
});

gsap.from(".hero__content__bottom", {
  duration: 1,
  x: -30,
  opacity: 0,
  delay: 2,
});

gsap.from(".book__btn", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 2,
});
