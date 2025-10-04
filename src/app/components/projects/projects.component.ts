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

  private projectSwiper: Swiper | undefined;
  private workSliderInstance: Swiper | undefined;
  private projectsLatestSwiper: Swiper | undefined;
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
      imageUrl: 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'MediaZone',
      category: 'Rebranding'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Noya Broker App',
      category: 'mobile app'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Hoops',
      category: 'Branding'
    } ,
    {
      imageUrl: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Hoops',
      category: 'Branding'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Hoops',
      category: 'Branding'
    }
  ];
  filteredProjects: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setActiveFilter(this.activeFilter);
  }

  ngAfterViewInit(): void {
    this.initSwiper();
    this.workSwiper();
    this.latestSwiper();
  }

  initSwiper(): void {
    this.projectSwiper = new Swiper('.project-slider', {
      slidesPerView: "auto",
      spaceBetween: 5,
      loop: true,
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
      // autoplay: { delay: 2000, disableOnInteraction: false },
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
}