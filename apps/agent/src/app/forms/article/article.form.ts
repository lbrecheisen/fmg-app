import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article, articleActions } from '@fmg/domain';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fmg-agent-article-form',
  templateUrl: './article.form.html',
  styleUrls: ['./article.form.scss'],
})
export class ArticleForm implements OnInit {
  @Input()
  article: Article = {
    id: '',
    version: '',
    title: '',
    body: '',
    category: '',
    agentId: '',
    isRemoved: false,
    created: { by: '', on: new Date().toISOString() },
    updated: { by: '', on: new Date().toISOString() },
  };

  @Output()
  editModeChangeEvent: EventEmitter<boolean> = new EventEmitter(true);

  form: FormGroup;

  constructor(private store: Store, fb: FormBuilder) {
    this.form = fb.group({
      id: '',
      title: ['', Validators.required],
      body: ['', Validators.required],
      category: '',
      version: '',
      isRemoved: false,
      updated: fb.group({ by: '', on: '' }),
      created: fb.group({ by: '', on: '' }),
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.article);
  }

  onSaveClick(): void {
    if (this.form.valid) {
      this.store.dispatch(articleActions.insert({ article: this.form.value }));
      this.editModeChangeEvent.emit(false);
    }
  }

  onCancelClick(): void {
    if (this.form.dirty) {
      if (
        confirm(
          'Are you sure you would like to cancel? All unsaved changes will be lost.'
        )
      ) {
        this.editModeChangeEvent.emit(false);
      }
    } else {
      this.editModeChangeEvent.emit(false);
    }
  }
}
