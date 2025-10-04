import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, Component , CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper/bundle';
import { Autoplay } from 'swiper/modules';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements AfterViewInit, OnInit , OnDestroy {
    isMenuOpen = false;
private ctx!: gsap.Context;
 private initTimeoutId: any;
private scrollListener: (() => void) | null = null;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
 images = [
    'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-7-copy.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-42.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-54.png',
    'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-7-copy.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-42.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-54.png',
    'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-7-copy.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-42.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-54.png',
    'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-7-copy.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-42.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-54.png',
    'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-7-copy.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-42.png', 'https://mediazoneag.com/wp-content/uploads/2025/06/Artboard-54.png',
  ];

  openPanelId: string;

  dataTeam = [
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/2/22451508-1.jpg',
      id: 'panel-1',
      name: 'Eslam Esam',
      Job: 'Front-End Developer',
    },
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/3/3/33521980-1.jpg',
      id: 'panel-2',
      name: 'Eslam Esam',
            Job: 'Front-End Developer',
    },
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/2/22451508-1.jpg',
      id: 'panel-3',
      name: 'Eslam Esam',
            Job: 'Front-End Developer',
    },
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/3/3/33521980-1.jpg',
      id: 'panel-4',
      name: 'Eslam Esam',
            Job: 'Front-End Developer',
    },
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/2/22451508-1.jpg',
      id: 'panel-5',
      name: 'Eslam Esam',
            Job: 'Front-End Developer',
    },
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/2/22451508-1.jpg',
      id: 'panel-6',
      name: 'Eslam Esam',
            Job: 'Front-End Developer',
    },
        {
        img: 'https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/2/22451508-1.jpg',
      id: 'panel-7',
      name: 'Eslam Esam',
            Job: 'Front-End Developer',
    },
   
  ];
  panels = [
        {
        img: 'https://mediazoneag.com/wp-content/uploads/2025/04/image-86.png',
      id: 'panel-6',
      title: 'Design & Branding',
      heading: 'Modern Design',
      text: 'From logos to complete brand identities, our design team ensures your brand stands out from the competition.',
      color: '#fff' ,
      titleColors: '#000000',
    },
    {
      img: 'https://mediazoneag.com/wp-content/uploads/2025/04/image-86.png',
      id: 'panel-1',
      title: 'Marketing Strategy',
      heading: 'Full Marketing Strategy',
      text: 'We craft comprehensive marketing strategies to elevate your brand and reach your target audience effectively.',
      color: '#e6c321' ,
      titleColors: '#000000',
    },
    {
        img: 'https://mediazoneag.com/wp-content/uploads/2025/04/image-86.png',
      id: 'panel-2',
      title: 'Websites',
      heading: 'Creative Web Design',
      text: 'Your website is your brand’s home online; let’s make it powerful. We design and build responsive, user-friendly websites.',
      color: '#F23619',
        titleColors: '#ffffff',
    },
    {
        img: 'https://mediazoneag.com/wp-content/uploads/2025/04/image-86.png',
      id: 'panel-3',
      title: 'Mobile Apps',
      heading: 'Creative Mobile App',
      text: 'We build custom mobile apps that are sleek, intuitive, and scalable for both iOS and Android platforms.',
      color: '#980010' ,
          titleColors: '#ffffff',
    },
    {
        img: 'https://mediazoneag.com/wp-content/uploads/2025/04/image-86.png',
      id: 'panel-4',
      title: 'Design & Branding',
      heading: 'Modern Design',
      text: 'From logos to complete brand identities, our design team ensures your brand stands out from the competition.',
      color: '#fff' ,
      titleColors: '#000000',
    },
    {
        img: 'https://mediazoneag.com/wp-content/uploads/2025/04/image-86.png',
      id: 'panel-5',
      title: 'Motion Graphics',
      heading: 'Engaging Motion',
      text: 'Bring your story to life with compelling motion graphics and animations that capture attention.',
      color: '#206BFF' ,
     titleColors: '#ffffff',
    }
  ];

  constructor() {
    
   this.openPanelId = this.panels[0].id;

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  }

  ngOnInit(): void {
   window.scrollTo(0, 0);
  }

  togglePanel(panelId: string): void {
    this.openPanelId = panelId;
  }
setupScrollSnapping(): void {
  const snapSections = gsap.utils.toArray<HTMLElement>('.snap-section');
  if (snapSections.length === 0) return;

  let isAnimating = false;
  let currentIndex = -1; 
  let debounceTimeout: any;

  const goToSection = (index: number) => {
    if (index < 0 || index >= snapSections.length || isAnimating) return;
    isAnimating = true;
    currentIndex = index;
    
    gsap.to(window, {
      
      scrollTo: { y: snapSections[index], autoKill: false },
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => { isAnimating = false; },
      
      
    });
  };

  const observer = ScrollTrigger.observe({
    type: "wheel,touch",
    preventDefault: true,
    onDown: () => {
      if (isAnimating) return;
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => { goToSection(currentIndex + 1); }, 50);
    },
    onUp: () => {
      if (isAnimating) return;
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        if (currentIndex === 0) {
          isAnimating = true;
          gsap.to(window, {
            scrollTo: { y: 0, autoKill: false },
            duration: 0.4,
            ease: 'power2.inOut',
            onComplete: () => { isAnimating = false; }
          });
        } else {
          goToSection(currentIndex - 1);
        }
      }, 50);
    },
  });

  observer.disable();

  ScrollTrigger.create({

    start: 200, 
    end: "max", 

    onEnter: () => {
      observer.enable();
      goToSection(0);
    },

    onEnterBack: () => {
      observer.disable();
      currentIndex = -1; 
    }
  });
  
}
setupAboutAnimation(): void {
  const aboutSection = document.querySelector('.about');
  if (!aboutSection) return;

  const leftContent = '.about .titleLeft';
  const rightContent = '.about .titleRight';
  const image = '.about .imgR';
  const tags = '.about .whoAreWe, .about .services, .about .ourProjects, .about .ourTeam';

  gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: 'top 60%',
      end: 'bottom 70%',
      toggleActions: 'restart reverse restart reverse',
      // markers: true,
    }
  })
  .from(leftContent, { 
    x: -100, 
    opacity: 0, 
    duration: 0.8, 
    ease: 'power2.out' 
  })
  .from(rightContent, { 
    y: -50, 
    opacity: 0, 
    duration: 0.8, 
    ease: 'power2.out' 
  }, "-=0.5")
  .from(image, { 
    x: -50, 
    opacity: 0, 
    scale: 0.8, 
    duration: 0.7, 
    ease: 'back.out(1.7)' 
  }, "-=0.5")
  .from(tags, { 
    y: -50, 
    opacity: 0, 
    duration: 0.6, 
    ease: 'power2.out', 
    stagger: 0.2 
  }, "-=0.5");
}
setupCaseStudiesAnimation(): void {
  const caseStudiesSection = document.querySelector('.caseStudi');
  if (!caseStudiesSection) return;

  const mainProjectsBlock = '.caseStudi .projects';
  const mainClientsBlock = '.caseStudi .clients';
  const pTag = '.caseStudi .projects p';
  const spanTag = '.caseStudi .projects span';

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: caseStudiesSection,
      start: 'top 70%',
      end: 'bottom 70%',
      toggleActions: 'restart reverse restart reverse',
    }
  });

  tl.from(spanTag, { 
    y: -50, 
    opacity: 0, 
    duration: 0.6 
  })
  .from(pTag, { 
    y: -50, 
    opacity: 0,
    duration: 0.6 
  }, "-=0.4");

  tl.from(mainProjectsBlock, {
    xPercent: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  }, "-=0.5")
  .from(mainClientsBlock, {
    xPercent: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  }, "-=0.6");

  tl.to(mainClientsBlock, {
    '--pseudo-opacity': 1,
    '--pseudo-scale': 1,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  }, "-=0.5");
}
setupResultsAnimation(): void {
  const resultsSection = document.querySelector('.results');
  if (!resultsSection) return;

  const leftText = '.results .left';
  const rightImage = '.results .right img'; 

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: resultsSection,
      start: 'top 70%',
      end: 'bottom 70%',
      toggleActions: 'restart reverse restart reverse',
      // markers: true,
    }
  });

  tl.from(leftText, {
    xPercent: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
  .from(rightImage, {
    rotationY: 180, 
    scale: 0.7,     
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)', 
  }, "-=0.5");
}
setupTeamTitleAnimation(): void {
  const teamTitle = document.querySelector('.meetOurTeam .title');
  const endTriggerEl = document.querySelector('.teamMediaZone');

  if (!teamTitle || !endTriggerEl) {
    return;
  }

  gsap.to(teamTitle, {
    y: '170vh',
    ease: 'none',
    scrollTrigger: {
      trigger: '.meetOurTeam',
      start: 'center center',
      endTrigger: endTriggerEl,
      end: 'bottom bottom',
      scrub: 1,
    }
  });
}
ngAfterViewInit() {
  this.ctx = gsap.context(() => {
    const scrollForceStartTime = Date.now();

    const forceScrollLoop = () => {
      window.scrollTo(0, 0);
      if (Date.now() - scrollForceStartTime < 500) {
        requestAnimationFrame(forceScrollLoop);
      }
    };
    
    requestAnimationFrame(forceScrollLoop);

  this.initTimeoutId = setTimeout(() => {
      const autoplayOptions = {
        delay: 3000,
        disableOnInteraction: false,
      };

      new Swiper('.swiper-forward', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
          ...autoplayOptions,
          reverseDirection: false,
        },
        allowTouchMove: true,
        grabCursor: true,
      });

      new Swiper('.swiper-reverse', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
          ...autoplayOptions,
          reverseDirection: true,
        },
        allowTouchMove: true,
        grabCursor: true,
      });

      new Swiper('.swiper-knowforDigital', {
        modules: [Autoplay],
          slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        speed: 800,
          navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 5 },
                1440: { slidesPerView: 5 },
            },
        autoplay: {
          ...autoplayOptions,
        },
        allowTouchMove: true,
        grabCursor: true,
      });
      new Swiper('.swiper-teamMediaZone', {
        modules: [Autoplay],
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        speed: 800,
        autoplay: {
          ...autoplayOptions,
        },
                    breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 4 },
                1440: { slidesPerView: 4 },
            },
        allowTouchMove: true,
      });

      this.setupTvAnimation();
      this.setupTeamTitleAnimation();
      this.setupResultsAnimation(); 
      this.setupCaseStudiesAnimation(); 
      this.setupAboutAnimation(); 
      this.setupScrollSnapping();
      this.setupNavColorChange();
    }, 800);
  });
}
  ngOnDestroy(): void {
      console.log('HomeComponent is being destroyed! Cleaning up animations...');
  this.ctx.revert();
    if (this.scrollListener) {
    window.removeEventListener('scroll', this.scrollListener);
        clearTimeout(this.initTimeoutId);
  }
  }
setupNavColorChange(): void {
  gsap.to('.nav-links a', {
    color: '#206BFF', 
    scrollTrigger: {
      trigger: '.our-work', 
      start: 'top 10%',     
      end: 'bottom 10%',    
      toggleActions: 'play reverse play reverse', 
    }
  });
}
setupTvAnimation(): void {
  const screen = document.querySelector('.screen-content') as HTMLElement;
  const screenfixed = document.querySelector('.tv-frame-wrapper') as HTMLElement;
  const navBar = document.querySelector('.navBar') as HTMLElement;
  const logoMedai = document.querySelector('.logoMedai') as HTMLElement;

  if (!screen || !screenfixed || !navBar || !logoMedai) {
    return;
  }

  screen.style.position = 'fixed';
  screen.style.top = '0';
  screen.style.left = '0';
  screen.style.width = '100%';
  screen.style.height = '100%';
  
  const tl = gsap.timeline({ paused: true });

  tl.to('.screen-content', {
    scale: 2,
    y: '1vh',
    duration: 2,
    ease: 'power2.out'
  });

  ScrollTrigger.create({
    trigger: "body",
    start: 1, 
    end: "max",
    onEnter: () => {
      gsap.set(screenfixed, { position: 'sticky' });
      gsap.set(navBar, { top: '8px' });
      gsap.to(logoMedai, { rotate: -23, duration: 0.3 });
      tl.play();
    },
    onLeaveBack: () => {
      gsap.set(screenfixed, { position: 'fixed' });
      gsap.set(navBar, { top: '12%' });
      gsap.to(logoMedai, { rotate: 7, duration: 0.3 });
      tl.reverse();
    }
  });
}
}
