import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  algoliaConfig = { apiKey: 'b6cd244028ca2f73124edbdba303ff04',
                    appId: 'DI4JTNN11Z',
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
