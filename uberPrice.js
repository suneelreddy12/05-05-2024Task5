class UberPriceCalculator {
  constructor(farePerKm, farePerMinute) {
    this.farePerKm = farePerKm;
    this.farePerMinute = farePerMinute;
  }

  calculatePrice(distanceInKms, timeInMinutes) {
    const price = this.farePerKm * distanceInKms + this.farePerMinute * timeInMinutes;
    return price;
  }
}

const calculator = new UberPriceCalculator(8, 1.5); // Base fare: ₹8 per km, Cost per minute: ₹1.5
const distance = 10; // Distance in km
const time = 20; // Time in minutes

const price = calculator.calculatePrice(distance, time);
console.log(`The estimated price for the Uber ride is ₹${price}.`);
