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
      title: 'By Tareq Taylor Skärbräda Tarragon 45 x 28 cm Akaciaträ',
      link: 'https://www.cervera.se/produkt/tareq-taylor-by-tareq-taylor-skarbrada-tarragon-45x28-cm-akaciatra',
      imageLink:
        'https://cerveranew.cdn.storm.io/795e8349-f21d-41a0-9b13-23ab3cbd7dc7.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 1,
    },
    {
      title: 'KitchenAid Pastapress II till köksmaskin 6 former',
      link: 'https://www.cervera.se/produkt/pastapress-ii-till-koksmaskin-6-former-vit',
      imageLink:
        'https://cerveranew.cdn.storm.io/f65aaa03-14b1-452d-b8c2-aa67a98db7a7.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 2,
    },
    {
      title: 'KitchenAid Köttkvarn i Metall',
      link: 'https://www.cervera.se/produkt/kitchenaid-tillbehor-kaid-kottkvarn-metall',
      imageLink:
        'https://cerveranew.cdn.storm.io/cb3c485c-cc9e-41aa-bce1-6ebe46b7c0d2.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 3,
    },
    {
      title: 'Authentis Rödvin 48 cl 4-pack',
      link: 'https://www.cervera.se/produkt/spiegelau-authentis-rodvinglas-48cl-4p',
      imageLink:
        'https://cerveranew.cdn.storm.io/5afaf1ff-8c39-4da8-a485-e008ddbd2dca.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 4,
    },
    {
      title: 'Mon Amie Kanna 35 cl',
      link: 'https://www.cervera.se/produkt/mon-amie-kanna-35-cl',
      imageLink:
        'https://cerveranew.cdn.storm.io/d3afd247-282e-4456-8506-8221f1bcfbb0.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 5,
    },
    {
      title: 'Mon Amie Tårtfat 30 cm',
      link: 'https://www.cervera.se/produkt/mon-amie-tartfat-27-cm',
      imageLink:
        'https://cerveranew.cdn.storm.io/1cfdb8f6-05f3-46da-ad6d-cb2d584a583d.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 6,
    },

    {
      title: 'Mon Amie Tallrik djup 20 cm',
      link: 'https://www.cervera.se/produkt/rorstrand-mon-amie-tallrik-djup-20-cm',
      imageLink:
        'https://cerveranew.cdn.storm.io/360144ef-d88e-4fb2-9a94-2d15f7fea50c.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 7,
    },
    {
      title: 'Mon Amie Tallrik 18 cm',
      link: 'https://www.cervera.se/produkt/mon-amie-assiett-18-cm',
      imageLink:
        'https://cerveranew.cdn.storm.io/ef77bdc7-7125-4f2d-8cf9-8533bd8d8a28.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 8,
    },

    {
      title: 'Mon Amie Mugg med öra 34 cl',
      link: 'https://www.cervera.se/produkt/mon-amie-mugg-med-ora-34-cl',
      imageLink:
        'https://cerveranew.cdn.storm.io/eb8473b5-dbf9-4406-8435-1886c85ef517.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 9,
    },
    {
      title: 'Mon Amie Tekopp 50 cl',
      link: 'https://www.cervera.se/produkt/mon-amie-tekopp-50-cl',
      imageLink:
        'https://cerveranew.cdn.storm.io/506e5830-e82c-4490-8b6d-46ddd2573687.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 10,
    },
    {
      title: 'Mon Amie Tallrik 27 cm',
      link: 'https://www.cervera.se/produkt/mon-amie-tallrik-27-cm',
      imageLink:
        'https://cerveranew.cdn.storm.io/41892a4c-1ec4-414e-8c6f-7f0c57eb975a.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 11,
    },

    {
      title: 'Rumours Champagneskål 24 cl',
      link: 'https://www.cervera.se/produkt/rumours-champagneskal-24-cl',
      imageLink:
        'https://cerveranew.cdn.storm.io/97a54a89-a80e-4f23-a80c-cce1b3c8ee0d.jpeg?mode=Pad&quality=75&format=webp&width=1080&height=1080',
      id: 12,
    },
  ];
}
