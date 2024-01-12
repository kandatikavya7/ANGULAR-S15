// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {
  transform(customers: any[], searchText: string): any[] {
    if (!customers || !searchText) {
      return customers;
    }

    searchText = searchText.toLowerCase();

    return customers.filter(customer =>
      customer.name.toLowerCase().includes(searchText)
    );
  }
}
