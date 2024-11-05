class Reservation {
  constructor(guest, room, days) {
    this.guest = guest;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base fee per night: $${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const reservation1 = new Reservation(5, "304", 3);
console.log(reservation1);

Reservation.baseFee = 200;
const reservation2 = new Reservation(2, "103", 5);
console.log(reservation2);

console.log(`Premium Fee: $${Reservation.premiumFee}`);
