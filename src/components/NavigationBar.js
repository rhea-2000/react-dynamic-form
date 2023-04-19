import React from 'react';

function NavigationBar({ jsonData }) {
    return (
        <div>
            <ul>
                {jsonData.map((data, index) => (
                    <li key={index}>{data.fileName}</li>
                ))}
            </ul>
        </div>
    );
}

export default NavigationBar;
