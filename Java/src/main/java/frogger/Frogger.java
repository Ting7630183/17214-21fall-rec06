package frogger;

import frogger.Road;

public class Frogger {

    private final Road road;
    private int position;

    public Frogger(Road road, int position) {
        this.road = road;
        this.position = position;
    }

    public boolean move(boolean forward) {
        int nextPosition = this.position + (forward ? 1 : -1);
        if (!isValid(nextPosition) || isOccupied(nextPosition)) {
            return false;
        }
        this.position = nextPosition;
        return true;
    }

    public boolean isOccupied(int position) {
        boolean[] occupied = this.road.getOccupied();
        return occupied[position];
    }

    public boolean isValid(int position) {
        if (position < 0) return false;
        boolean[] occupied = this.road.getOccupied();
        return position < occupied.length;
    }
}
