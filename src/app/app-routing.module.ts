import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsComponent } from './gifts/gifts.component';
import { HomeComponent } from './home/home.component';
import { OsaComponent } from './osa/osa.component';

const routes: Routes = [
  { path: 'home', title: 'Bröllop 2024', component: HomeComponent },

  { path: 'gifts', title: 'Gåvor', component: GiftsComponent },
  { path: 'osa', title: 'OSA', component: OsaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
