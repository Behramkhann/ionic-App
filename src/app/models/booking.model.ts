export class Booking {
  constructor(
    public id: string,
    public placeId: string,
    public userId: string,
    public placeImg: string,
    public firstname: string,
    public lastName: string,
    public placeTitle: string,
    public guestNumber: number,
    public bookedFrom: Date,
    public bookedTo: Date
  ) {}
}
