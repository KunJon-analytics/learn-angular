import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hinv-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  price: number | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<PriceComponent>
  ) {}

  ngOnInit(): void {}

  save() {
    this.dialogRef.close(this.price);
  }
}
