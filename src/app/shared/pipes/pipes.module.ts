import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionReduced } from './description_reduced.pipe';
import { FormatHeight } from './format-height.pipe';
import { ToKg } from './to-kg.pipe';

@NgModule({
  declarations: [
    DescriptionReduced,
    FormatHeight,
    ToKg,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionReduced,
    FormatHeight,
    ToKg,
  ]
})
export class PipesModule { }
