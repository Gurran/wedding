import { Component } from '@angular/core';
import { Gifts } from '../types/types';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss',
})
export class GiftsComponent {
  gifts: Gifts[] = [
    {
      title: 'Global Classic Knivset 3 delar G-96, GS-38, GS-109',
      link: 'https://www.cervera.se/produkt/global-global-classic-knivset-3-delar-g-96-gs-38-gs-109',
      imageLink:
        'https://cerveranew.cdn.storm.io/026abae2-8841-45d0-ae62-b68abc661bbe.jpeg',
      id: 1,
    },
  ];
}
