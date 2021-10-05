import { Shape } from "./shapes/shape";
import { Writer } from "./writing/writer";
import { JPEGWriter } from "./writing/jpegwriter";
import { PNGWriter } from "./writing/pngwriter";
import { Line } from "./shapes/line";

class Drawing {

    public shapes: Shape[];

    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

    public draw(format: string, filename: string): void {
        if (format === "jpeg") {
            try {
                let writer: Writer = new JPEGWriter(filename + ".png")
                for (let shape of this.shapes) {
                    let lines: Line[] = shape.toLines();
                    shape.draw(writer, lines);
                }
            } catch (e) {
                console.log(e);
            }
        }
        else if (format === "png") {
            try {
                let writer: Writer = new PNGWriter(filename + ".png")
                for (let shape of this.shapes) {
                    let lines: Line[] = shape.toLines();
                    shape.draw(writer, lines);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}

