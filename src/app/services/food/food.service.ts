import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll():string[]{
    return [
      '/assets/food-1_Oi_Muchim-Spicy_Cucumber_Salad.jpg',
      '/assets/food-2_Hobak_Mandu-Zucchini_Dumplings.jpg',
      '/assets/food-3_Gaji_mari- Eggplant_Rolls.jpg',
      '/assets/food-4_Tofu_Gimbap.jpg',
      '/assets/food-5_Deulkkae_Soondubu_Jjigae-Soft_Tofu_Stew_With_Perilla_Seeds.jpg',
      '/assets/food-6_Beoseot_Jeongol-Mushroom_Hotpot.jpg',
      '/assets/food-7_Danpatjuk-Sweet_Red_Bean_Porridge.jpg',
      '/assets/food-8_Oiji-Korean_Pickled_Cucumbers.jpg'
    ]
  }
}
