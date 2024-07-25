import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from '../../model/product.model';
import { HttpClient } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, DialogModule, InputTextModule,ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {


  constructor(private httpClient: HttpClient) { }

  private readonly API_URL = 'http://localhost:8080/api/v1/products';

  ngOnInit(): void {
    this.httpClient.get(`${this.API_URL}`).subscribe(
      (response: any) => {
        this.products = response
      }
    )
  }


  products!: Product[];

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }




}
