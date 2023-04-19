import React from 'react';

function NavigationBar(props) {
    const { jsonData, onSelect } = props;
    return (
        <div>
            <ul>
                {jsonData.map((data, index) => (
                    <li key={index} onClick={() => onSelect(data)}>{data.fileName}</li>
                ))}
            </ul>
        </div>
    );
}

export default NavigationBar;
