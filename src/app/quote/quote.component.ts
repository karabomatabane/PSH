import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])]),
    movingFrom: new FormControl('', [Validators.required]),
    movingTo: new FormControl('', [Validators.required]),
    suburbFrom: new FormControl('', [Validators.required]),
    suburbTo: new FormControl('', [Validators.required]),
    typeOfMove: new FormControl('res', [Validators.required]),
    additionalInfo: new FormControl(''),
    })
  }

  get formControls() {
    return this.FormData.controls;
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
  }
}
