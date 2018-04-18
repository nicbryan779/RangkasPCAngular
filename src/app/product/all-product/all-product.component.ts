import { Component, OnInit } from '@angular/core';
import {AllProductService} from '../../services/allProduct.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  alls = [];
  // platformFilter: any = {type: value}
  constructor(private _allProductService: AllProductService) { }

  ngOnInit() {
    this._allProductService.getProducts()
      .subscribe(res => { this.alls = res['data'];
      console.log(this.alls);
      });
  }

}
