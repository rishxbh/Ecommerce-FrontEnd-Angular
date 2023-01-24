import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { review } from '../review';
import { StarRatingComponent } from 'ng-starrating';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-and-review',
  templateUrl: './product-and-review.component.html',
  styleUrls: ['./product-and-review.component.css']
})
export class ProductAndReviewComponent implements OnInit {
  currentRating=0.0;
  liveRating=this.currentRating.toFixed(2);
  inputRating= 0;
  reviewForm!:FormGroup
  constructor(private productService:ProductServiceService, private router:ActivatedRoute, private builder:FormBuilder) { 

   }
  myProduct !: Product;
  myReview !: review[];
  ngOnInit(): void {
    this.productFunction();
    this.reviewForm = this.builder.group({
      rating:'',
      comment:'',
      product:''
    })
  }
  postReview() {
    this.reviewForm.value.rating = this.inputRating;
    this.reviewForm.value.product = this.myProduct;
    this.productService.postReview(this.reviewForm.value).subscribe(res => {
      console.warn("success", res);
      this.reviewForm.reset();
      this.inputRating = 0;
      this.productFunction();
    })
  }
  productFunction(){
    this.productService.getProduct(this.router.snapshot.params['id']).subscribe(res => {
      this.myProduct = res;
      this.myReview = res.reviews;
      console.log(this.myReview)
      let sum = 0;
      for(let i of this.myReview) {
        sum+= i.rating;
      }
      this.currentRating = sum/this.myReview.length
    })
  }
}
