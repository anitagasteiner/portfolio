import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive,
    FormComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {  

}
