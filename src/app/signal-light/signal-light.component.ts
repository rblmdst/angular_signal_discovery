import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'signal-light',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signal-light.component.html',
})
export class SignalLightComponent {
  nameCtrl = new FormControl();

  items = signal<string[]>([]);
  count = computed(() => this.items().length);

  constructor() {
    effect(() => {
      console.log(this.items().join('#'));
    });
  }

  resetList() {
    this.items.set([]);
  }

  addItem() {
    const itemName = this.nameCtrl.value;
    // this.items.set([...this.items(), itemName]);
    this.items.update((curr) => [...curr, itemName]);

    this.nameCtrl.reset();
  }
}
