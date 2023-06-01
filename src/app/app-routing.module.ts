import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {PassTestComponent} from "./components/pass-test/pass-test.component";
import {TestListComponent} from "./components/test-list/test-list.component";
import {HomeComponent} from "./components/home/home.component";
import {Err404Component} from "./components/err404/err404.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [

      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'test-list', component: TestListComponent},
      {path: 'pass-test', component: PassTestComponent},
      {path: 'contact', component: ContactComponent},
    ]
  },
  {
    path: '**', component:Err404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
