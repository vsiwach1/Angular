import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <p>
      details works!

    </p>
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" formControlName="firstName" />
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" formControlName="lastName" />

      <label for="first-name">Email</label>
      <input type="email" id="email" formControlName="email" />
      <button type="submit" class="primary">Submit</button>
    </form>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit, OnDestroy {

  httpSubscription!: Subscription; //[] = [];
 
  constructor(private httpClient: HttpClient) {
   
    
  }
  public ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }
  public ngOnInit(): void {
    this.httpSubscription = this.httpClient.get('https://www.google.com').subscribe(next => {
      console.log(next);

    });
  }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    const firstName = this.applyForm.value.firstName ?? '';
    const lastName = this.applyForm.value.lastName ?? '';
    const email = this.applyForm.value.email ?? '';
    
  }
}
