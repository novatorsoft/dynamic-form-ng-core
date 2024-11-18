import { Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxField } from './textbox-field.type';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
})
export class TextboxComponent {
  @Input({ required: true }) fieldOptions!: TextboxField;
  @Input({ required: true }) formControl!: FormControl;
}
