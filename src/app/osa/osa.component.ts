import { Component } from '@angular/core';
import { Child, Adult } from '../types/types';

@Component({
  selector: 'app-osa',
  templateUrl: './osa.component.html',
  styleUrl: './osa.component.scss',
})
export class OsaComponent {
  form = {
    numberOfAdults: 0,
    numberOfChildren: 0,
  };

  adults: Adult[] = [];
  children: Child[] = [];

  updateNumberOfChildren(newTotal: number) {
    const oldTotal = this.children.length;
    if (newTotal > oldTotal) {
      this.addChild();
    } else {
      this.removeChild();
    }
  }

  updateNumberOfAdults() {}

  addChild() {
    this.children.push({
      name: '',
      hasSpecalDiet: false,
      specialDiet: '',
    });
  }

  removeChild() {
    this.children.pop();
  }
}
