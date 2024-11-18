import { TemplateRef } from '@angular/core';
import { FieldBase } from '../../../../../../../projects/ng-core/src/public-api';

export class TextboxField extends FieldBase<string> {
  override readonly fieldType? = 'textbox';
  icon?: TemplateRef<any>;
  onIconClick?: (value?: string) => void;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  placeholder?: string;

  constructor(options: TextboxField) {
    super(options, '');
    this.type = options.type ?? 'text';
    this.icon = options.icon;
    this.placeholder = options.placeholder ?? '';
    this.onIconClick = options.onIconClick;
  }
}
