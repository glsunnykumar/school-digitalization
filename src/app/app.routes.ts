import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'contact', component: ContactComponent },

];
