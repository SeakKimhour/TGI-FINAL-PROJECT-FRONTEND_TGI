import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'app/service/subcategory.service';

@Component({
  selector: 'app-admin-sub-category-component',
  templateUrl: './admin-sub-category-component.component.html',
  styleUrls: ['./admin-sub-category-component.component.css']
})
export class AdminSubCategoryComponentComponent implements OnInit {

  constructor(private _subcategoryService: SubcategoryService, ) { }

  listSubCategory: any = []
  async ngOnInit(): Promise<void> {
    await this._subcategoryService.getAllSubcategory().subscribe((res) => {
      this.listSubCategory = res
    })
  }
  async deletePost(data: any) {
    await this._subcategoryService.deleteCategory(data).subscribe((res)=>{
      console.log(res);

    })
  }



}
