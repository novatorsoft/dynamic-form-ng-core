import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TextboxComponent, TextboxField } from './components/fields';

import { ButtonComponent } from './components/button/button.component';
import { NvsDynamicFormModule } from '../../../../projects/ng-core/src/lib/nvs-dynamic-form.module';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NvsDynamicFormModule.forRoot({
        formFields: {
          textbox: {
            component: TextboxComponent,
            class: TextboxField,
          },
        },
        submitButton: {
          component: ButtonComponent,
          defaultOptions: {
            label: 'Save',
            isFullWidth: true,
            position: 'center',
          },
        },
      }),
    ),
  ],
};
