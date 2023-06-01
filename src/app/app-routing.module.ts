import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {PassTestComponent} from "./components/pass-test/pass-test.component";
import {TestListComponent} from "./components/test-list/test-list.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [

      {path: '', redirectTo: 'test-list', pathMatch: 'full'},
      {path: 'test-list', component: TestListComponent},
      {path: 'pass-test', component: PassTestComponent},
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
