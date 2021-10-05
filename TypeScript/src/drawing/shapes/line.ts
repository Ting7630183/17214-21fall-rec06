
class Line {
	point1: number[];
	point2: number[];

	constructor(point1: number[], point2: number[]) {
		this.point1 = point1;
		this.point2 = point2;
	}

    public toJPEG(): number[] {
        // Pretend this works.
        return [];
    }

    public toPNG(): number[] {
        // Pretend this works.
        return [];
    }
}

export { Line }