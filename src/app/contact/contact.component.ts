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
   * Checks if the form is valid and marks all invalid controls as touched.
   *
   * @param ngForm The form to check.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  checkIsFormValid(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      Object.keys(ngForm.form.controls).forEach((key) => {
        const control = ngForm.form.get(key);
        control?.markAsTouched();
      });
      return false;
    } else {
      return true;
    }
  }

  /**
   * Checks if the user confirmed the privacy policy.
   *
   * @returns {boolean} True if the user confirmed the privacy policy, false otherwise.
   */
  checkIsPolicyConfirmed() {
    if (!this.confirmedPolicy) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Resets the form and shows a success message.
   *
   * @param ngForm The form to reset.
   * @returns {void}
   */
  resetFormAndShowSuccessMessage(ngForm: NgForm) {
    ngForm.resetForm();
    this.showSuccessMessage();
  }

  /**
   * Posts the contact data to the mail server and resets the form and shows a success message on success.
   *
   * @param ngForm The form to reset.
   * @returns {void}
   */
  postMessageAsMail(ngForm: NgForm) {
    this.http
      .post(
        this.post.endPoint,
        this.post.body(this.contactData),
        this.post.options
      )
      .subscribe({
        next: () => {
          this.resetFormAndShowSuccessMessage(ngForm);
        },
      });
  }

  /**
   * Called when the form is submitted.
   * Checks if the form is valid and if the policy is confirmed.
   * If the mail test is set, it resets the form and shows a success message.
   * Otherwise, it posts the contact data to the mail server and resets the form and shows a success message on success.
   * @param ngForm The form to check and reset.
   * @returns {void}
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted) {
      if (!this.checkIsFormValid(ngForm)) return;

      if (!this.checkIsPolicyConfirmed()) return;

      if (!this.mailTest) {
        this.postMessageAsMail(ngForm);
      } else {
        this.resetFormAndShowSuccessMessage(ngForm);
      }
    }
  }

  /**
   * Shows the success message.
   *
   * This function gets the success message translation and sets the `successMessage` property to it. It also clears any previous timeout and sets a new one to hide the success message after 4 seconds.
   *
   * @returns {void}
   */
  /*******  fa563eae-975d-4712-91f8-baa73452e26d  *******/
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
