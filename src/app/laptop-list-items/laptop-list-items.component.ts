import { Component } from '@angular/core';

@Component({
  selector: 'laptop-list-items',
  templateUrl: './laptop-list-items.component.html',
  styleUrls: ['./laptop-list-items.component.css'],
})
export class LaptopListItemsComponent {
  laptopArray = [
    {
      type: 'Lenovo - ThinkPad P15 Gen 2',
      description: 'NVIDIA 4GB graphics card, 16GB RAM, and 512GB SSD',
      imgSrc:
        'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzI4OTc5fGltYWdlL3BuZ3xoZTQvaGJlLzE0MTEwNjA3NjcxMzI2LnBuZ3wwYmQwOTNmMDhiNWI3NzhkYTQ1Zjg1YzM4NzNhNDNhYTkxMTVmNWEyMmE5OWNiMzE2NDhhYTE5ZTZiMjM2ODcz/wmd00000487.png',
    },
    {
      type: 'HP - ZBook Fury G8',
      description: 'Intel Xeon CPU, NVIDIA RTX, 128 GB RAM and 8TB.',
      imgSrc: 'https://www.notebookcheck-cn.com/uploads/tx_nbc2/zbook.jpg',
    },
    {
      type: 'Asus',
      description: 'OLED HDR Panel, NVIDIA Geforce, intel core i9-8 core',
      imgSrc:
        'https://trademark-eg.com/wp-content/uploads/2022/06/UX582H-H2007W-2-600x600.webp',
    },
    {
      type: 'Dell - Dell Precision 5760',
      description:
        '	AI and VR optimizer, NVIDIA graphics, Intel Xeon or Core i9, and Windows11',
      imgSrc:
        'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/17-5760/media-gallery/workstations_precision_17_5760_gallery_5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=620&qlt=100,0&resMode=sharp2&size=620,402',
    },
    {
      type: 'Apple - MacBook Pro 14” or 16”',
      description:
        'Retina XDR display, M1 Pro or Max, 21 hours of battery life',
      imgSrc:
        'https://p.turbosquid.com/ts-thumb/9R/1CXzMq/bu/applemacbookpro14inchsilvermb3dmodel001/jpg/1644572892/600x600/fit_q87/63a65ee357a4255f72c4aa422fd0baa9d7fac246/applemacbookpro14inchsilvermb3dmodel001.jpg',
    },
    {
      type: 'Apple - MacBook Air',
      description:
        'M1 chip, 8-core CPU, 8-core GPU, and 18 hours of battery life.',
      imgSrc:
        'https://iapple-eg.com/wp-content/uploads/2022/01/71jGe7roXL._AC_SL1500_.jpg',
    },
    {
      type: 'Lenovo - ThinkPad P15 Gen 2',
      description: 'NVIDIA 4GB graphics card, 16GB RAM, and 512GB SSD',
      imgSrc:
        'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzI4OTc5fGltYWdlL3BuZ3xoZTQvaGJlLzE0MTEwNjA3NjcxMzI2LnBuZ3wwYmQwOTNmMDhiNWI3NzhkYTQ1Zjg1YzM4NzNhNDNhYTkxMTVmNWEyMmE5OWNiMzE2NDhhYTE5ZTZiMjM2ODcz/wmd00000487.png',
    },
    {
      type: 'HP - ZBook Fury G8',
      description: 'Intel Xeon CPU, NVIDIA RTX, 128 GB RAM and 8TB.',
      imgSrc: 'https://www.notebookcheck-cn.com/uploads/tx_nbc2/zbook.jpg',
    },
    {
      type: 'Asus',
      description: 'OLED HDR Panel, NVIDIA Geforce, intel core i9-8 core',
      imgSrc:
        'https://trademark-eg.com/wp-content/uploads/2022/06/UX582H-H2007W-2-600x600.webp',
    },
    {
      type: 'Dell - Dell Precision 5760',
      description:
        '	AI and VR optimizer, NVIDIA graphics, Intel Xeon or Core i9, and Windows11',
      imgSrc:
        'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/17-5760/media-gallery/workstations_precision_17_5760_gallery_5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=620&qlt=100,0&resMode=sharp2&size=620,402',
    },
    {
      type: 'Apple - MacBook Pro 14” or 16”',
      description:
        'Retina XDR display, M1 Pro or Max, 21 hours of battery life',
      imgSrc:
        'https://p.turbosquid.com/ts-thumb/9R/1CXzMq/bu/applemacbookpro14inchsilvermb3dmodel001/jpg/1644572892/600x600/fit_q87/63a65ee357a4255f72c4aa422fd0baa9d7fac246/applemacbookpro14inchsilvermb3dmodel001.jpg',
    },
    {
      type: 'Apple - MacBook Air',
      description:
        'M1 chip, 8-core CPU, 8-core GPU, and 18 hours of battery life.',
      imgSrc:
        'https://iapple-eg.com/wp-content/uploads/2022/01/71jGe7roXL._AC_SL1500_.jpg',
    },
  ];
}
