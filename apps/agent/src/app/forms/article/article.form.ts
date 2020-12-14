import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article, CategoryType } from '@fmg/domain';

@Component({
  selector: 'fmg-agent-article-form',
  templateUrl: './article.form.html',
  styleUrls: ['./article.form.scss'],
})
export class ArticleForm implements OnInit {
  @Input()
  article: Article = {
    key: '',
    version: '',
    title: '',
    body: '',
    category: CategoryType.Buy,
    created: { by: '', on: new Date() },
    updated: { by: '', on: new Date() },
  };

  @Output()
  editModeChangeEvent: EventEmitter<boolean> = new EventEmitter(true);

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      key: '',
      title: ['', Validators.required],
      body: ['', Validators.required],
      version: '',
      updated: fb.group({ by: '', on: '' }),
      created: fb.group({ by: '', on: '' }),
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.article);
  }

  onSaveClick(): void {
    if (this.form.valid) {
      // TODO: implement save functionality
      console.log('Your changes have been saved!');
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
