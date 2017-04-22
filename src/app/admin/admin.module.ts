import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './admin.router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quizzes/quiz.component';
import { NewQuizComponent } from './quizzes/new-quiz.component';
import { NewTopicComponent } from './quizzes/new-topic.component';
import { TopicComponent } from './topics/topic.component';
import { QuestionComponent } from './questions/question.component';
import {GeneralModule} from "../common/general.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    routing
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    QuizzesComponent,
    QuizComponent,
    NewQuizComponent,
    NewTopicComponent,
    TopicComponent,
    QuestionComponent
  ],
  entryComponents: [
    NewQuizComponent,
    NewTopicComponent
  ]
})
export class AdminModule {}
