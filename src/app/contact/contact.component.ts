import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../shared/services/translation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  constructor(public translationService: TranslationService) {}

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
  mailTest = false;

  post = {
    endPoint: 'https://dennisjakobi.net/Portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as const,
    },
  };

  successMessage: string | null = null;
  private successTimeout: any;

  /**
   * Toggles the `confirmedPolicy` property.
   *
   * @returns {void}
   */
  togglePolicy() {
    this.confirmedPolicy = !this.confirmedPolicy;
  }

  /**
   * Submits the contact form.
   *
   * This function is called when the submit button is clicked. It first checks if the form is invalid and if the policy checkbox is unchecked. If either condition is true, it will not submit the form.
   *
   * If the `mailTest` property is false and the policy checkbox is checked, it will send a POST request to the specified endpoint with the contact form data. If the request is successful, it will reset the form.
   *
   * If the `mailTest` property is true and the policy checkbox is checked, it will simply reset the form.
   *
   * @param ngForm The contact form.
   */

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted) {
      if (ngForm.form.invalid) {
        Object.keys(ngForm.form.controls).forEach((key) => {
          const control = ngForm.form.get(key);
          control?.markAsTouched();
        });
        return;
      }

      if (!this.confirmedPolicy) return;

      if (!this.mailTest) {
        this.http
          .post(
            this.post.endPoint,
            this.post.body(this.contactData),
            this.post.options
          )
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
              this.showSuccessMessage();
            },
            error: (error) => {},
          });
      } else {
        ngForm.resetForm();
        this.showSuccessMessage();
      }
    }
  }

  showSuccessMessage() {
    const msg = this.translationService.getTranslation(
      'contact',
      'successMessage'
    );
    this.successMessage = typeof msg === 'string' ? msg : null;
    clearTimeout(this.successTimeout);
    this.successTimeout = setTimeout(() => {
      this.successMessage = null;
    }, 4000);
  }

  /**
   * Sets the `focused.email` property to false and marks the email form control as touched when the email input field loses focus.
   *
   * @param email The email form control.
   *
   * @returns {void}
   */
  onEmailBlur(email: any) {
    this.focused.email = false;
    email.control.markAsTouched();
  }
}
