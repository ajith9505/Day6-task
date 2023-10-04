class Uber {
    constructor(name, pickup, drop, km, type) {
        this.name = name;
        this.pickup = pickup;
        this.drop = drop;
        this.km = km;
        this.type = type;
    }

    basePrice = 10.00;
    totalPrice = 0.00;

    ride() {
        if (this.type === "Car") {
            this.totalPrice = (this.km * 10) + this.basePrice;
            console.log(`Hi, ${this.name} welcome to Uber.\nYour ride from ${this.pickup} to ${this.drop}.`);
            console.log(`Travelling Kilometers : ${this.km}.\nTotal Price : ${this.totalPrice.toFixed(2)}Rs.`);
        }
        else if (this.type === "Auto") {
            this.totalPrice = (this.km * 7) + this.basePrice;
            console.log(`Hi, ${this.name} welcome to Uber.\nYour ride from ${this.pickup} to ${this.drop}.`);
            console.log(`Travelling Kilometers : ${this.km}.\nTotal Price : ${this.totalPrice.toFixed(2)}Rs.\n`);
        }
        else {
            this.totalPrice = (this.km * 5.32) + this.basePrice;
            console.log(`Hi, ${this.name} welcome to Uber.\nYour ride from ${this.pickup} to ${this.drop}.`);
            console.log(`Travelling Kilometers : ${this.km}.\nTotal Price : ${this.totalPrice.toFixed(2)}Rs.`);
        }
    }


}

const ride1 = new Uber("Ajith Kumar", "Medavakkam", "Mambakkam", 11, "Car");
const ride2 = new Uber("Ajith Kumar", "Medavakkam", "Mambakkam", 11, "Auto");
const ride3 = new Uber("Ajith Kumar", "Medavakkam", "Mambakkam", 11, "Bike");

ride1.ride();
ride2.ride();
ride3.ride();