package drawing.shapes;

import drawing.writing.JPEGWriter;
import drawing.writing.PNGWriter;

import java.io.IOException;
import java.io.Writer;

public interface Shape {

    Line[] toLines();

    default void draw(Writer writer, Line[] lines) {
        try {
            for (Line line : lines) {
                if (writer instanceof JPEGWriter) {
                    writer.write(line.toJPEG());
                }
                else if (writer instanceof PNGWriter) {
                    writer.write(line.toPNG());
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
