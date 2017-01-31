import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorpickerComponent } from './colorpicker.component';
import { PaletteComponent } from './palette.component';

@NgModule({
    declarations: [ColorpickerComponent, PaletteComponent],
    imports: [CommonModule],
    providers: [],
    exports: [ColorpickerComponent],
    bootstrap: [ColorpickerComponent, PaletteComponent]
})
export class ColorpickerModule { }