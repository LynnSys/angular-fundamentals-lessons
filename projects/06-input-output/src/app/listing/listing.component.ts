import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- This article element represents and entire listing -->
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title">{{car.model}} {{car.make}}</p>
        <hr />
        <p class="detail">
        <span>Year</span>
        <span>{{car.year}}</span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{car.transmission}}</span>
        </div>
        <p class="detail">
        <span>Mileage</span>
        <span>{{car.miles}}</span>
        </p>
        <p class="detail">
        <span>Price</span>
        <span>{{car.price}}</span>
        </p>
      </section>
      <button (click)="handleSavedCar()">Add To</button>
    </article>
    `,
  styles: ``,
})
export class ListingComponent {
  @Input({
    required:true //required component
  }) car!: Car; //non null assertion operator tell angular to chill if it is undefined

  @Output() savedCar = new EventEmitter<Car>();

  handleSavedCar(){
    this.savedCar.emit(this.car);
  }
}
