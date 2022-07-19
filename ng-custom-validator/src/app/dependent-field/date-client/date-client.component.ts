import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateLessThan } from 'src/app/validation/date.validation';

@Component({
  selector: 'app-date-client',
  templateUrl: './date-client.component.html',
  styleUrls: ['./date-client.component.scss']
})
export class DateClientComponent implements OnInit {

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.bookingForm = this.fb.group({
      place: [],
      fromDate: [],
      toDate: []
    }, { validators: dateLessThan('fromDate', 'toDate') });
  }

  submitForm() {
    if (!this.bookingForm.valid) {
      return;
    }
    alert('Form is valid!!!');
  }

}
