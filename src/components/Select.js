import React from 'react';
import SelectOptions from './SelectOptions';

const Select = ({onOptionSelect, options}) => {

    const handleSelectChange = event => {
        // event.preventDefault();
        onOptionSelect(event.target.value);
    }

    return(
        <select id="genre" onChange={handleSelectChange}>
            <SelectOptions options={options}/>
        </select>
    );
}

export default Select;