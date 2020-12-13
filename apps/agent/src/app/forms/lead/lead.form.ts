import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fromLead, leadActions } from '@fmg/domain';
import { Store } from '@ngrx/store';

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
  });

  isLoading$ = this.store.select(fromLead.isLoading);
  error$ = this.store.select(fromLead.error);

  isSubmitted = false;

  constructor(private store: Store, private fb: FormBuilder) {}

  onSubmit() {
    this.isSubmitted = true;

    const { ...lead } = this.form.value;

    this.store.dispatch(leadActions.set({ lead }));
  }
}
