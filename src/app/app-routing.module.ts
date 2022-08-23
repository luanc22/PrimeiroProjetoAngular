import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre", component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
