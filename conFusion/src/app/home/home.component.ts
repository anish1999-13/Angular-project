import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService  } from '../services/promotion.service';
import { flyInOut, expand} from '../animations/app.animation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  leader: Leader;
  promotion: Promotion;

  constructor(private dishService: DishService,
  private leaderService: LeaderService,
  private promotionService: PromotionService,
  @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
      this.dishService.getFeaturedDish()
       .subscribe((dishes)=> this.dish= dishes,
       errmess => this.dishErrMess = <any>errmess);

       this.leaderService.getFeaturedleader()
       .subscribe((leaders)=>this.leader=leaders)

       this.promotionService.getFeaturedPromotion()
       .subscribe((promo)=>this.promotion=promo)
  }

}
