import React from 'react'

const Select = ({ field, onChange }) => {
    const { field_id, field_label, field_options, field_value } = field;

    return (
        <div className="form-group">
            <label htmlFor={field_id}>{field_label}</label>
            <select className="form-control" defaultValue={field_value} id={field_id} onChange={(event) => onChange(event, field)}>
                <option key={"defaultKey" + field_options.length + 1}>Default select</option>
                {field_options.length > 0 && field_options.map((option, i) => <option key={i} value={option.option_label}>{option.option_label} </option>)}
            </select>
        </div>
    )
}

export default Select