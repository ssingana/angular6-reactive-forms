import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GeneralformsComponent } from "./generalforms/generalforms.component";
import { FormbuilderComponent } from "./formbuilder/formbuilder.component";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes : Routes = [
    {path : 'home', component:AppComponent},
    {path : 'generalforms', component: GeneralformsComponent},
    {path : 'reactiveforms', component : FormbuilderComponent},
    {path : "**", component:PageNotFoundComponent}
];

@NgModule({
imports : [RouterModule.forRoot(routes)],
exports : [RouterModule]
})
export class AppRoutingModule{}
export const routingComonents = [GeneralformsComponent,FormbuilderComponent,PageNotFoundComponent];