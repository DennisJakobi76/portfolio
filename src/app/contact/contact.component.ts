import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  focused = {
    name: false,
    email: false,
    message: false,
  };

  hasInput = false;
  emailPattern = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$';
  confirmedPolicy = false;
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  togglePolicy() {
    this.confirmedPolicy = !this.confirmedPolicy;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted) {
      if (ngForm.form.invalid) {
        Object.keys(ngForm.form.controls).forEach((key) => {
          const control = ngForm.form.get(key);
          control?.markAsTouched();
        });
        return;
      }

      if (!this.confirmedPolicy) {
        return;
      }

      if (!this.mailTest && this.confirmedPolicy) {
        this.http
          .post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (this.mailTest && this.confirmedPolicy) {
        ngForm.resetForm();
      }
    }
  }

  onEmailBlur(email: any) {
    this.focused.email = false;
    email.control.markAsTouched();
  }
}
