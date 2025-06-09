import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ImprintService } from '../shared/services/imprint.service';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  private imprintService = inject(ImprintService);
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
              console.log('Antwort vom Server:', response);
              ngForm.resetForm();
            },
            error: (error) => {
              console.error('Fehler beim Senden:', error);
            },
            complete: () => console.info('POST abgeschlossen'),
          });
      } else {
        ngForm.resetForm();
      }
    }
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

  /**
   * Toggles the visibility of the privacy policy imprint.
   *
   * This function calls the `toggleImprint` method from the `ImprintService`
   * to change the imprint type to 'privacy', which displays the privacy policy
   * to the user.
   */

  showPrivacyPolicy() {
    this.imprintService.toggleImprint('privacy');
  }
}
