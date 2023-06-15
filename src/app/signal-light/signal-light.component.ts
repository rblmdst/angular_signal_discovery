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

  // items: string[] = [];

  constructor() {
    // TODO: Log product list changes (effect)
  }

  resetList() {
    // TODO: Clear the list
  }

  addItem() {
    const itemName = this.nameCtrl.value;
    // TODO: Add new item to the list
    this.nameCtrl.reset();
  }
}
