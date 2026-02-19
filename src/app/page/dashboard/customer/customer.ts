import { CommonModule, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../../../model/type';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [NgForOf , ReactiveFormsModule, FormsModule , CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit{

  customerList: Array<CustomerModel> = [];
  customerObj : CustomerModel = {
    id: '',
    title: '',
    name: '',
    dob: {},
    salary: 0.0,
    address: '',
    city: '',
    province: '',
    postalCode: ''
  }

  constructor(private http: HttpClient , private cdr:ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    this.getAll();
  }

  addCustomer(){
    // this.http.post("http:localhost:8080/customer/add").subscribe(data => {

    // })
  }

  getAll(){
    this.http.get<CustomerModel[]>('http://localhost:8080/customer/getAll').subscribe(data => {
      this.customerList = data;
      this.cdr.detectChanges();
    });
  }
  
}
