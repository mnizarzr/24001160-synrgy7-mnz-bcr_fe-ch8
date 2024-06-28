import { Car } from "@/types/car";
import { getRandomInt } from "@/utils/number";
import axios from "axios";

export const populateCars = (cars: Car[]): Car[] => {
    return cars.map((car) => {
        const isPositive = getRandomInt(0, 1) === 1;
        const timeAt = new Date();
        const mutator = getRandomInt(1000000, 100000000);
        const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
        const withDriver = Math.random() >= 0.5;

        return {
            ...car,
            withDriver,
            availableAt,
        };
    });
};

export async function listCars(filterer?: (car: Car) => boolean): Promise<Car[]> {
    let cars: Car[];
    const cachedCarsString = localStorage.getItem("CARS");

    if (cachedCarsString) {
        cars = JSON.parse(cachedCarsString) as Car[];
    } else {
        const response = await axios.get<Car[]>(
            "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        cars = populateCars(response.data);
        localStorage.setItem("CARS", JSON.stringify(cars));
    }

    if (filterer) return cars.filter(filterer);

    return cars;
}
