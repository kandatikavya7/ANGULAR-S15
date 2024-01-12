// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = { 
  
    "customers": [
      { "id": 1, "name": "Customer 1" },
      { "id": 2, "name": "Customer 2" },
      // ... more customers
    ],
    "orders": [
      { "id": 1, "customerId": 1, "product": "Product A" },
      { "id": 2, "customerId": 1, "product": "Product B" },
      // ... more orders
    ]
  }
  // Your JSON data

  getData() {
    return this.data;
  }
}
