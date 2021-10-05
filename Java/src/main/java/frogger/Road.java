package frogger;

public class Road {
    private final boolean[] occupied;

    public Road(boolean[] occupied) {
        this.occupied = occupied;
    }

    public boolean[] getOccupied() {
        return this.occupied;
    }
}
