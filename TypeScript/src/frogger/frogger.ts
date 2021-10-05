import { Road } from "./road";

class Frogger {
	private road: Road;
    private position: number;

    constructor(road: Road, position: number) {
        this.road = road;
        this.position = position;
    }

    public move(forward: boolean): boolean {
        let nextPosition: number = this.position + (forward ? 1 : -1);
        if (!this.isValid(nextPosition) || this.isOccupied(nextPosition)) {
            return false;
        }
        this.position = nextPosition;
        return true;
    }

    public isOccupied(position: number): boolean {
        let occupied: boolean[] = this.road.getOccupied();
        return occupied[position];
    }

    public isValid(position: number): boolean {
        if (position < 0) return false;
        let occupied: boolean[] = this.road.getOccupied();
        return position < occupied.length;
    }
}