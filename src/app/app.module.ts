import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductModule } from './productmodule/product.module';
import { SomeOtherModule } from './somothermodule/some-other.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ProductModule, SomeOtherModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
