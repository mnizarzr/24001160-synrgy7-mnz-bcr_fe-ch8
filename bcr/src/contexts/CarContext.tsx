import {
  Dispatch,
  PropsWithChildren,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";

export interface Car {
  id: number;
  name: string;
  price: number;
  picture: string | null;
  start_rent: string;
  finish_rent: string;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  created_by: number;
  updated_by: number | null;
  deleted_by: number | null;
}

export type CarAction =
  | { type: "ADD_CAR"; payload: Car }
  | { type: "UPDATE_CAR"; payload: Car }
  | { type: "GET_CAR"; payload: Car[] }
  | { type: "DELETE_CAR"; id: number };

const CarsContext = createContext<Car[] | null>(null);

const CarsDispatchContext = createContext<Dispatch<CarAction> | null>(null);

export const CarsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cars, dispatch] = useReducer(carsReducer, []);

  return (
    <CarsContext.Provider value={cars}>
      <CarsDispatchContext.Provider value={dispatch}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsContext.Provider>
  );
};

export function useCars(): Car[] {
  return useContext(CarsContext)!;
}

export function useCarsDispatch(): Dispatch<CarAction> {
  return useContext(CarsDispatchContext)!;
}

const carsReducer: Reducer<Car[], CarAction> = (cars, action) => {
  switch (action.type) {
    case "GET_CAR": {
      return [...cars, ...action.payload];
    }
    case "ADD_CAR": {
      return [...cars, action.payload];
    }
    case "UPDATE_CAR": {
      return cars.map((c) => {
        if (c.id === action.payload.id) {
          return action.payload;
        }
        return c;
      });
    }
    case "DELETE_CAR": {
      return cars.filter((c) => c.id !== action.id);
    }
  }
};
