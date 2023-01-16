function animalCount(miles) {
    const animalDensityFirst10 = 10;
    const animalDensitySecond = 50;
    const restAnimals = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10;
        return count;
    }
    else if (miles <= 20) {
        const firstAnimal = 10 * animalDensityFirst10;
        const restMiles = miles - 10;
        const secondAnimal = restMiles * animalDensitySecond;
        const totalAnimals = firstAnimal + secondAnimal;
        return totalAnimals

    }
    else {
        const firstAnimal = 10 * animalDensityFirst10;
        const secondAnimal = 10 * animalDensitySecond;
        const restMiles = miles - 20;
        const restTotalAnimal = restMiles * restAnimals;
        const totalAnimals = firstAnimal + secondAnimal + restTotalAnimal;
        return totalAnimals;

    }
}
const animals = animalCount(25);
console.log(animals)