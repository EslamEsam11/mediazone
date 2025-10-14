import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Swiper from 'swiper/bundle';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
    isMenuOpen = false;
  private projectSwiper: Swiper | undefined;
  private workSliderInstance: Swiper | undefined;
  private projectsLatestSwiper: Swiper | undefined;
    private navObserver: IntersectionObserver | undefined;
  projectFilters = ['Websites', 'Mobile App', 'Brand Identity', 'Media Buying', 'Graphic Design Team'];
  activeFilter = 'Websites';

  allProjects = [
    { title: 'Solitone', imageUrl: 'assets/images/image1.png', category: 'Websites' },
    { title: 'Z', imageUrl: 'assets/images/image2.png', category: 'Websites' },
    { title: 'Z', imageUrl: 'assets/images/image.png', category: 'Websites' },
    { title: 'Z', imageUrl: 'assets/images/image3.png', category: 'Websites' },
    { title: 'Z', imageUrl: 'assets/images/image.png', category: 'Websites' },
    { title: 'Z', imageUrl: 'assets/images/image2.png', category: 'Websites' },
    { title: 'Kanye West', imageUrl: 'assets/images/image3.png', category: 'Brand Identity' },
    { title: 'TKa', imageUrl: 'assets/images/image.png', category: 'Brand Identity' },
    { title: 'TKa', imageUrl: 'assets/images/image1.png', category: 'Brand Identity' },
    { title: 'TKa', imageUrl: 'assets/images/image2.png', category: 'Brand Identity' },
    { title: 'TKa', imageUrl: 'assets/images/image.png', category: 'Brand Identity' },
    { title: 'Mobile Project 1', imageUrl: 'assets/images/image2.png', category: 'Mobile App' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image1.png', category: 'Mobile App' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image3.png', category: 'Mobile App' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image.png', category: 'Mobile App' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image2.png', category: 'Mobile App' },

    { title: 'Mobile Project 1', imageUrl: 'assets/images/image2.png', category: 'Media Buying' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image1.png', category: 'Media Buying' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image3.png', category: 'Media Buying' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image.png', category: 'Media Buying' },
    { title: 'Mobile Project 2', imageUrl: 'assets/images/image2.png', category: 'Media Buying' },

        { title: 'Kanye West', imageUrl: 'assets/images/image3.png', category: 'Graphic Design Team' },
    { title: 'TKa', imageUrl: 'assets/images/image.png', category: 'Graphic Design Team' },
    { title: 'TKa', imageUrl: 'assets/images/image1.png', category: 'Graphic Design Team' },
    { title: 'TKa', imageUrl: 'assets/images/image2.png', category: 'Graphic Design Team' },
    { title: 'TKa', imageUrl: 'assets/images/image.png', category: 'Graphic Design Team' },
  ];


 slides = [

    {
      type: 'single',
      imageUrl:  'assets/images/imageWork2.png'
    },
    {
      type: 'single',
      imageUrl: 'assets/images/imageWork6.png'
    },
        {
      type: 'grid',
      imageUrls: [
        'assets/images/imageWork3.png',
        'assets/images/imageWork4.png',
        'assets/images/imageWork5.png',
        'assets/images/imageWork2.png'
      ]
    },
    {
      type: 'single',
      imageUrl: 'assets/images/imageWork.png'
    },
    {
      type: 'single',
      imageUrl: 'assets/images/imageWork1.png'
    },
        {
      type: 'grid',
      imageUrls: [
        'assets/images/imageWork3.png',
        'assets/images/imageWork4.png',
        'assets/images/imageWork5.png',
        'assets/images/imageWork2.png'
      ]
    },
    {
      
      type: 'single',
      imageUrl: 'assets/images/imageWork.png'
    },
    {
      type: 'single',
      imageUrl: 'assets/images/imageWork1.png'
    },
    {
      type: 'single',
      imageUrl:  'assets/images/imageWork6.png'
    },
        {
      type: 'grid',
      imageUrls: [
        'assets/images/imageWork3.png',
        'assets/images/imageWork4.png',
        'assets/images/imageWork5.png',
        'assets/images/imageWork2.png'
      ]
    },
  ];
    projects = [
    {
      imageUrl: 'assets/images/imageLatest3.png',
      title: 'MediaZone',
      category: 'Rebranding'
    },
    {
      imageUrl: 'assets/images/imageLatest1.png',
      title: 'MediaZone',
      category: 'Rebranding'
    },
    {
      imageUrl: 'assets/images/imageLatest2.png',
      title: 'Noya',
      category: 'Broker Ai Tool'
    } ,
    {
      imageUrl: 'assets/images/imageLatest3.png',
      title: 'MediaZone',
      category: 'Rebranding'
    },
    {
      imageUrl: 'assets/images/imageLatest1.png',
      title: 'MediaZone',
      category: 'Rebranding'
    },
    {
      imageUrl: 'assets/images/imageLatest2.png',
      title: 'Noya',
      category: 'Broker Ai Tool'
    } ,
  ];
   projectsClient = [
    {
      title: 'Chiringuito',
      imageUrl: 'assets/images/imageClient1.png',
      captions: ['Line', 'Branding']
    },
    {
      title: 'Vicio',
      imageUrl: 'assets/images/imageClient2.png',
      captions: ['Branding', 'Line']
    },
    {
      title: 'Westwood Tennis Club',
      imageUrl: 'assets/images/imageClient3.png',
      captions: ['Line', 'Branding']
    }
  ];
  filteredProjects: any[] = [];
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor() { }

  ngOnInit(): void {
    this.setActiveFilter(this.activeFilter);
  }

  ngAfterViewInit(): void {
    this.initSwiper();
    this.workSwiper();
    this.latestSwiper();
     this.setupNavObserver();
  }

  initSwiper(): void {
    this.projectSwiper = new Swiper('.project-slider', {
      slidesPerView: "auto",
      spaceBetween: 5,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        }
      },
    });
  }
  workSwiper(): void {
    this.workSliderInstance = new Swiper('.work-swiper', {
      slidesPerView: "auto",
      spaceBetween: 5,
      loop: true,
            pagination: {
        el: '.swiper-pagination-progressbar',
        type: 'progressbar',
      },
      autoplay: { delay: 2000, disableOnInteraction: false },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        }
        
        
      },
    });
  }
  latestSwiper(): void {
    this.workSliderInstance = new Swiper('.latest-projects-slider', {
      slidesPerView: "auto",
      spaceBetween: 5,
      loop: true,
            pagination: {
        el: '.swiper-pagination-progressbar',
        type: 'progressbar',
      },
      autoplay: { delay: 2000, disableOnInteraction: false },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        }
        
        
      },
    });
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
    this.filteredProjects = this.allProjects.filter(p => p.category === filter);
    
    setTimeout(() => {
      // لاحظ أننا نقوم بتحديث الـ slider الصحيح
      this.projectSwiper?.update();
    }, 0);
  }

    setupNavObserver(): void {
    const navLinks = document.querySelector('.nav-links');
    const targetSection = document.querySelector('.latest-projects');

    if (!navLinks || !targetSection) {
      return;
    }

    const options = {
      root: null,
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0.1
    };

    this.navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.classList.add('change-color');
        } else {
          navLinks.classList.remove('change-color');
        }
      });
    }, options);

    this.navObserver.observe(targetSection);
  }
}