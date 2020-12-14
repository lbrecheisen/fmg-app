import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { fromLead, leadActions } from '@fmg/domain';
import { Store } from '@ngrx/store';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'fmg-agent-lead-form',
  templateUrl: './lead.form.html',
  styleUrls: ['./lead.form.scss'],
})
export class LeadForm {
  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    email: ['', [Validators.email]],
    maxPrice: [''],
    minBedrooms: [''],
    minBathrooms: [''],
    minGarageSpaces: [''],
    minSquareFootage: [''],
    additionalInfo: [''],
    recaptcha: new FormControl(null, Validators.required),
  });

  isLoading$ = this.store.select(fromLead.isLoading);
  error$ = this.store.select(fromLead.error);

  isSubmitted = false;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  onSubmit() {
    this.isSubmitted = true;

    this.store.dispatch(leadActions.set({ lead: this.form.value }));

    this.dialog.open(ModalComponent, {
      data: {
        title: 'Success!',
        body:
          'We are processing your request now. Our goal is to have your search ready within an hour.',
      },
    });
  }
}
