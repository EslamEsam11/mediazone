import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, Component , CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper/bundle';
import { Autoplay } from 'swiper/modules';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit, OnInit {
    isMenuOpen = false;

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
            duration: 1,
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
  if (!teamTitle) return;

  gsap.to(teamTitle, {
    y: '170vh', 
    ease: 'none', 
    scrollTrigger: {
      trigger: '.meetOurTeam', 
      start: 'center center',  
      endTrigger: '.teamMediaZone', 
      end: 'bottom bottom',    
      
      scrub: 1, 
      
      // markers: true,
    }
  });
}
ngAfterViewInit() {

  const scrollForceStartTime = Date.now();

  const forceScrollLoop = () => {
    window.scrollTo(0, 0);
    if (Date.now() - scrollForceStartTime < 500) {
      requestAnimationFrame(forceScrollLoop);
    }
  };
  
  requestAnimationFrame(forceScrollLoop);



  setTimeout(() => {
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
      allowTouchMove: true,
    });

    this.setupTvAnimation();
    this.setupTeamTitleAnimation();
    this.setupResultsAnimation(); 
    this.setupCaseStudiesAnimation(); 
    this.setupAboutAnimation(); 
    this.setupScrollSnapping();
  }, 800); 
}


setupTvAnimation(): void {
  const screen = document.querySelector('.screen-content') as HTMLElement;
  if (screen) {
    screen.style.position = 'fixed';
    screen.style.top = '0';
    screen.style.left = '0';
    screen.style.width = '100%';
    screen.style.height = '100%';
  }

  const tl = gsap.timeline({ paused: true });

  tl.to('.screen-content', {
    scale: 4,
    y: '1vh',
    duration: 2,
    ease: 'power2.out'
  });

  let lastScrollY = window.scrollY;
  let played = false;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
const screenfixed = document.querySelector('.tv-frame-wrapper') as HTMLElement;
const navBar = document.querySelector('.navBar') as HTMLElement;
    if (currentScrollY > 0 ) {
      screenfixed.style.position = 'sticky';
      navBar.style.top = '8px';
    }else if(currentScrollY == 0 ){
      screenfixed.style.position = 'fixed';
       navBar.style.top = '12%';
    }
    // Scroll Down
    if (currentScrollY > lastScrollY && !played) {
      played = true;
      tl.play();
    }

    // Scroll Up
    if (currentScrollY < lastScrollY && played && currentScrollY < 50) {
      played = false;
      tl.reverse();
    }

    lastScrollY = currentScrollY;
  });
}

}
