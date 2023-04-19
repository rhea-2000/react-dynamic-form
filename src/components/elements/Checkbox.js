import React from 'react'

const Checkbox = ({ field, onChange }) => {
    const { field_id, field_label, field_value } = field;
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id={field_id} defaultChecked={field_value} onChange={(event) => onChange(event, field)} />
            <label className="form-check-label" htmlFor={field_id}>{field_label}</label>
        </div>
    )
}

export default Checkbox;
