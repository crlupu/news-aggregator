import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NewsComponent } from './news/news.component';
import { NewsByTopicComponent } from './news-by-topic/news-by-topic.component';
import { NewsBySourceComponent } from './news-by-source/news-by-source.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'main-page', component: LandingPageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/topic/:topic', component: NewsByTopicComponent },
  { path: 'news/source/:source', component: NewsBySourceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
