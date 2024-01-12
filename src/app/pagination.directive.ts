// pagination.directive.ts
import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective {
  @Input() currentPage: number = 1;
  @Input() maxItems: number = 5;
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
    totalPages!: number;

  // Implement pagination logic based on your requirements
  // ...

  // Example: 
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
