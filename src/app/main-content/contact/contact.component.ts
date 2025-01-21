import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false
  }

  onSubmit(ngForm: NgForm) {
    // Wir führen die Funktion nur aus, wenn die Form valide und submitted ist:
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
      ngForm.reset();
      console.log(this.contactData);
    }
  }

}