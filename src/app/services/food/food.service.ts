import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll(){
    return [
      {
        id: 1,
        name: 'Oi Muchim | Spicy Cucumber Salad',
        price: 14,
        favorite: true,
        star: 4.5,
        tags: ['Side Dish', 'Spicy', 'Salad'],
        imageUrl: '/assets/food-1_Oi_Muchim-Spicy_Cucumber_Salad.jpg',
        description: 'Oi means cucumber, and muchim means mixed with seasonings. Simple side dish (banchan) with crunchy cucumbers. Delicious with any Korean meal and can be a quick kimchi substitute.',
        originalName: '오이무침',
        origins: ['South Korea']
      },
      {
        id: 2,
        name: 'Hobak Mandu | Zucchini Dumplings',
        price: 22,
        favorite: false,
        star: 4,
        tags: ['Appetizer', 'Cold', 'Dumplings', 'Temple Food'],
        imageUrl: '/assets/food-2_Hobak_Mandu-Zucchini_Dumplings.jpg',
        description: 'Temple food. Made with summer zucchini.',
        originalName: '/',
        origins: ['South Korea']
      },
      {
        id: 3,
        name: 'Gaji Mari | Eggplant Rolls',
        price: 25,
        favorite: false,
        star: 3,
        tags: ['Appetizer', 'Temple Food'],
        imageUrl: '/assets/food-3_Gaji_Mari- Eggplant_Rolls.jpg',
        description: 'Gaji is eggplant, and mari refers to rolled up dishes. Thinly sliced eggplants and red cabbage rolled up with alfafa sprouts, and served with a hot mustard sauce. Soy-based sauce provided as sauce option.',
        originalName: '가지말이',
        origins: ['South Korea']
      },
      {
        id: 4,
        name: 'Tofu Gimbap',
        price: 9,
        favorite: false,
        star: 3.5,
        tags: ['Temple Food', 'Gimbap'],
        imageUrl: '/assets/food-4_Tofu_Gimbap.jpg',
        description: 'Vegan kimbap with tofu and homemade braised burdock root (ueong jorim) as a filling. Tofu is shallow-fried in oil until golden brown and crispy.',
        originalName: '',
        origins: ['South Korea']
      },
      {
        id: 5,
        name: 'Deulkkae Soondubu Jjigae | Soft Tofu Stew With Perilla Seeds',
        price: 17,
        favorite: true,
        star: 5,
        tags: ['Stew', 'Hot'],
        imageUrl: '/assets/food-5_Deulkkae_Soondubu_Jjigae-Soft_Tofu_Stew_With_Perilla_Seeds.jpg',
        description: 'Stew made with smooth tofu curds, soondubu (or sundubu), also known as silken or extra soft tofu. With perilla seeds, dashima and shiitake mushroom.',
        originalName: '순두부 찌개',
        origins: ['South Korea']
      },
      {
        id: 6,
        name: 'Beoseot Jeongol | Mushroom Hotpot',
        price: 12,
        favorite: true,
        star: 5,
        tags: ['Main Dish', 'Hot', 'Spicy'],
        imageUrl: '/assets/food-6_Beoseot_Jeongol-Mushroom_Hotpot.jpg',
        description: 'Vegetable broth, vegetables including assortment of mushrooms, tofu and dangmyeon (sweet potato starch noodles). Spicy varation.',
        originalName: '버섯전골',
        origins: ['South Korea']
      },
      {
        id: 1,
        name: 'Oi Muchim | Spicy Cucumber Salad',
        price: 14,
        favorite: true,
        star: 4.5,
        tags: ['Side Dish', 'Spicy', 'Cold'],
        imageUrl: '/assets/food-1_Oi_Muchim-Spicy_Cucumber_Salad.jpg',
        description: 'Oi means cucumber, and muchim means mixed with seasonings. Simple side dish (banchan) with crunchy cucumbers. Delicious with any Korean meal and can be a quick kimchi substitute.',
        originalName: '오이무침',
        origins: ['South Korea']
      },









      '/assets/food-1_Oi_Muchim-Spicy_Cucumber_Salad.jpg',
      '/assets/food-2_Hobak_Mandu-Zucchini_Dumplings.jpg',
      '/assets/food-3_Gaji_Mari- Eggplant_Rolls.jpg',
      '/assets/food-4_Tofu_Gimbap.jpg',
      '/assets/food-5_Deulkkae_Soondubu_Jjigae-Soft_Tofu_Stew_With_Perilla_Seeds.jpg',
      '/assets/food-6_Beoseot_Jeongol-Mushroom_Hotpot.jpg',
      '/assets/food-7_Danpatjuk-Sweet_Red_Bean_Porridge.jpg',
      '/assets/food-8_Oiji-Korean_Pickled_Cucumbers.jpg'
    ]
  }
}
