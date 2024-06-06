import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OSADialogData } from '../types/types';

@Component({
  selector: 'app-osa-dialog',
  templateUrl: './osa-dialog.component.html',
  styleUrl: './osa-dialog.component.scss',
})
export class OSADialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: OSADialogData) {}

  numberSpecialDiet: number = 0;
  numberAlcohol: number = 0;

  ngOnInit() {
    for (let index = 0; index < this.data.adults.length; index++) {
      const adult = this.data.adults[index];

      if (adult.hasSpecalDiet) {
        this.numberSpecialDiet++;
      }

      if (adult.drinksAlcohol) {
        this.numberAlcohol++;
      }
    }

    for (let index = 0; index < this.data.children.length; index++) {
      const child = this.data.children[index];

      if (child.hasSpecalDiet) {
        this.numberSpecialDiet++;
      }
    }
  }
}
