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