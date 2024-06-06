import { Component } from '@angular/core';
import { Child, Adult } from '../types/types';
import { MatDialog } from '@angular/material/dialog';
import { OSADialogComponent } from '../osa-dialog/osa-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  updateNumberOfChildren(newTotal: number) {
    const oldTotal = this.children.length;
    if (newTotal > oldTotal) {
      this.addChild();
    } else {
      this.removeChild();
    }
  }

  updateNumberOfAdults(newTotal: number) {
    const oldTotal = this.adults.length;
    if (newTotal > oldTotal) {
      this.adults.push({
        drinksAlcohol: true,
        hasSpecalDiet: false,
        name: '',
        specialDiet: '',
      });
    } else {
      this.adults.pop();
    }
  }

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

  openSaveDialog() {
    this.dialog.open(OSADialogComponent, {
      data: {
        adults: this.adults,
        children: this.children,
      },
    });
  }
}
