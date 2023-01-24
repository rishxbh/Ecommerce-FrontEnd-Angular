import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  form!: FormGroup
  list!: Product[];

  constructor(private service: ProductServiceService, private formBuilder: FormBuilder) {
    this.list = [];
  }

  ngOnInit(): void {
    this.allProducts();
    this.form = this.formBuilder.group({
      query: ''
    }
    )
  }

  getQueryProduct() {
    console.warn(this.form.value.query);
    this.service.getQuery(this.form.value.query).subscribe(res => {
      this.list = res;
    })
  }

  allProducts() {
    this.service.getList().subscribe(data => this.list = data);
  }

}
