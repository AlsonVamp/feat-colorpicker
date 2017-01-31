import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'feat-colorpicker',
    templateUrl: './colorpicker.component.html',
    styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements AfterViewInit {
    ctx: CanvasRenderingContext2D;
    color: string = "white";
    constructor() { }
    @ViewChild('lightness') canvasRef: ElementRef;
    onColorChange(color: string) {
        this.color = color;
        this.updateLightness();
    }
    updateLightness() {
        this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
        let grd = this.ctx.createLinearGradient(0, 0, 0, 150);
        grd.addColorStop(0, this.color);
        grd.addColorStop(1, "black");

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, 40, 150);
    }
    onLightnessClick(data: MouseEvent) {
        let rect = this.canvasRef.nativeElement.getBoundingClientRect();
        let x = Math.floor((data.clientX - rect.left) / (rect.right - rect.left) * this.canvasRef.nativeElement.width);
        let y = Math.floor((data.clientY - rect.top) / (rect.bottom - rect.top) * this.canvasRef.nativeElement.height);
        let raw_colors = this.ctx.getImageData(x, y, 1, 1).data;
        this.color = [Math.round(raw_colors[0] * raw_colors[3] / 255),
        Math.round(raw_colors[1] * raw_colors[3] / 255),
        Math.round(raw_colors[2] * raw_colors[3] / 255)].reduce((pv, cv) => {
            let strCV: string = cv.toString(16);
            return pv + (strCV.length == 2 ? strCV : ("0" + strCV));
        }, "#")
    }
    ngAfterViewInit() {
        console.log(this.canvasRef);
        this.ctx =
            this.canvasRef.nativeElement.getContext('2d');
        this.updateLightness();
    }
}