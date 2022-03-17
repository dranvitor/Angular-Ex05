import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { TodoService } from './services/todo.service';
import { FooterComponent } from './components/footer/footer.component';
import { ChangecolorDirective } from './shared/changecolor.directive';
import { SecchangecolorDirective } from './shared/secchangecolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ItemComponent,
    FooterComponent,
    ChangecolorDirective,
    SecchangecolorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
