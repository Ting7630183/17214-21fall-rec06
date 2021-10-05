import { Writer } from "../writing/writer";
import { PNGWriter } from "../writing/pngwriter";
import { JPEGWriter } from "../writing/jpegwriter";
import { Line } from "./line";

interface Shape {
	
    toLines(): Line[];

    draw(writer: Writer, lines: Line[]): void;
}

abstract class AbstractShape implements Shape {

	abstract toLines(): Line[];

	public draw(writer: Writer, lines: Line[]): void {
		try {
			for (let line of lines) {
				if (writer instanceof JPEGWriter) {
					writer.write(line.toJPEG());
				}
				else if (writer instanceof PNGWriter) {
					writer.write(line.toPNG());
				}
			}
		} catch (e) {
			console.log(e);
		}
	}
}

export { Shape, AbstractShape }