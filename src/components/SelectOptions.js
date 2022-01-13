import React from "react";

const SelectOptions = ({options}) => {
    const allOptions = options.map((option, index) => {
    return (<option value={option.url} key={index}>{option.name}</option>)
});
    return(
        allOptions
    );
}

export default SelectOptions;