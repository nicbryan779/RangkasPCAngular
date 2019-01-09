import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  algoliaConfig = { apiKey: '00f1bb7fcb575a5f3a60b2955f3f066d',
                    appId: '2IQGKRK7FZ',
                    indexName: 'products'};
  alls = [];
  IMG_BASE = 'localhost:8000/uploads/';
  // platformFilter: any = {type: value}
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(res => { this.alls = res['data'];
      console.log(this.alls);
      });
  }

}
