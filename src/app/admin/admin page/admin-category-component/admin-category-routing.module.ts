import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminCategoryComponentComponent } from "./admin-category-component.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { EditCategoryComponent } from './edit-category/edit-category.component';
const routes: Routes = [
  {
    path: '',
    component: AdminCategoryComponentComponent
  },
  {
    path: 'new',
    component: CreateCategoryComponent
  },
  {
    path: ':id',
    component: EditCategoryComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoryComponentRoutingModule {
  static component = [CreateCategoryComponent,EditCategoryComponent]
}
