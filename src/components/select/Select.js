import React from 'react';
import './Select.css';

const Select = ({ cars, selectCar }) => {

    function handleOnChange(e) {
        if (e.target)
            selectCar(e.target.value);
    }

    return (
        <div className="select">
         
            <select onChange={(e) => handleOnChange(e)}>
                {
                    cars.map((car, index) => {
                        return (
                            <option value={car} key={car}>
                                {car}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;