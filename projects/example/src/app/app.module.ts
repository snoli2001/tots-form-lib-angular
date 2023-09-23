import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponentComponent } from './pages/form-component/form-component.component';

import { TotsFormModule } from 'projects/tots/form/src/public-api';
import { FormSidebarComponent } from './pages/form-sidebar/form-sidebar.component';
import { TotsFormSidebarPageModule } from 'projects/tots/form-sidebar-page/src/public-api';
import { TotsDateFieldFormModule } from 'projects/tots/date-field-form/src/public-api';
import { TotsUsersSelectorMenuModule } from 'projects/tots/users-selector-menu/src/public-api';
import { TotsCoreModule } from '@tots/core';
import { HttpClientModule } from '@angular/common/http';
import { TotsDaySelectorMenuModule } from 'projects/tots/day-selector-menu/src/public-api';
import { TotsRangeDateSelectorMenuModule } from 'projects/tots/range-date-selector-menu/src/public-api';
import { TotsQuillMentionFieldFormModule } from 'projects/tots/quill-mention-field-form/src/public-api';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    FormSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatMenuModule,

    TotsCoreModule,
    TotsFormModule,
    TotsFormSidebarPageModule,
    TotsDateFieldFormModule,
    TotsUsersSelectorMenuModule,
    TotsDaySelectorMenuModule,
    TotsRangeDateSelectorMenuModule,
    TotsQuillMentionFieldFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
