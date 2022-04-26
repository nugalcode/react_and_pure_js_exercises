import Select from './Select.js';
import { useState } from 'react';

const cars = ["Volvo", "Saab", "Mercedes", "Audi"];

function SelectApp() {

    const [car, setCar] = useState(cars[0]);

    function selectCar(newCar) {
        setCar(newCar);
    }

    return (
        <div className="App">
            <span> {car} </span>
            <Select cars={cars} selectCar={selectCar} />
        </div>
    );
}

export default SelectApp;
