import { CommonModule, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomerModel } from '../../../../model/type';

@Component({
  selector: 'app-customer',
  imports: [NgForOf, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit {

  customerList: Array<CustomerModel> = [];
  customerObj: CustomerModel = {
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

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.getAll();
  }

  addCustomer(): void {
    console.log(this.customerObj);
    this.http.post("http://localhost:8080/customer/add", this.customerObj).subscribe(data => {
      console.log(data);
      if (data === true) {
        Swal.fire({
          title: "Good job! "+this.customerObj.name+" successfully saved!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
      this.getAll();
    })
  }

  // viewCustomer(customer){
  //   this.customerObj.id = customerId;
  // }

  updateCustomer(){
    this.http.put("http://localhost:8080/customer/update" , this.customerObj).subscribe(data => {
      if(data == true){
        Swal.fire({
          title: "Good job! "+this.customerObj.id+" successfully Updated!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    })
    this.getAll();
  }

  getAll() {
    this.http.get<CustomerModel[]>('http://localhost:8080/customer/getAll').subscribe(data => {
      this.customerList = data;
      this.cdr.detectChanges();
    });
  }

}
