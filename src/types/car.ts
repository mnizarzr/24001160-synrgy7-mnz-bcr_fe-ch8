export interface Car {
    id: string;
    plate: string;
    manufacture: string;
    model: string;
    image: string;
    rentPerDay: number;
    capacity: number;
    description: string;
    transmission: string;
    available: string;
    type: string;
    year: string;
    options: string[];
    specs: string[];
    availableAt: string | Date;
    withDriver?: boolean
  }
