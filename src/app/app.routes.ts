import { Routes } from '@angular/router';
import { HomePage, DashboardPage} from void;

export const appRoutes: Routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/dashboard',
    component: DashboardPage
  }
]