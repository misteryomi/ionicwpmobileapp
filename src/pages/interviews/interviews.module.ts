import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewsPage } from './interviews';

@NgModule({
  declarations: [
    InterviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewsPage),
  ],
})
export class InterviewsPageModule {}
