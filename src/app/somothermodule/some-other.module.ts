import { InjectionToken, NgModule } from '@angular/core';
import { SomeService } from './some.service';

export const PRODUCTSERVICE = new InjectionToken<string>('');

@NgModule({
  imports: [],
  providers: [{ provide: PRODUCTSERVICE, useClass: SomeService }],
})
export class SomeOtherModule {}
