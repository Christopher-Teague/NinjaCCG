class Card {
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        //reduce target res by power
        target.resilience-=this.power;
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude){
    super(name, cost);
    this.text=text;
    this.stat=stat;
    this.magnitude=magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.stat=="resilience"){
                target.resilience+=this.magnitude;
            } else {
            target.power+=this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(" ***** Unit1 Info ***** ");
console.log(unit1);
const effect1 = new Effect ("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", +3 );
console.log( "***** Effect Info ***** " );
console.log(effect1);
console.log(" ***** Play Effect on Unit1 *****");
effect1.play(unit1);
console.log(unit1);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2);
console.log(" ***** Unit2 info ***** ");
console.log(unit2);
console.log(" ***** Unti 1 attacks Unit2 ***** ");
unit1.attack(unit2);
console.log(unit2);


