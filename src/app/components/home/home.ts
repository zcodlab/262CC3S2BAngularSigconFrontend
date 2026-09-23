import { Component,OnInit,OnDestroy } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header,Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  // Definimos las diapositivas con tipos de contenido específicos
  slides = [
    { url: 'assets/imagenes/slider/bg1.jpg', type: 'hero' },
    { url: 'assets/imagenes/slider/bg2.jpg', type: 'about' },
    { url: 'assets/imagenes/slider/bg3.jpg', type: 'easy' },
    { url: 'assets/imagenes/slider/bg4.jpg', type: 'problems' }
  ];
  currentIndex = 0;
  ngOnInit(){}
  ngOnDestroy(){}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
