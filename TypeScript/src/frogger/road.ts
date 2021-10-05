class Road {
	private occupied: boolean[]

	constructor(occupied: boolean[]) {
		this.occupied = occupied;
	}

	public getOccupied(): boolean[] {
		return this.occupied;
	}
}

export { Road }