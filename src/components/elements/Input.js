import React from 'react'

const Input = ({ field, onChange }) => {
    const { field_id, field_label, field_placeholder, field_value, field_type } = field;
    return (
        <div className="form-group">
            <label htmlFor={field_id}>{field_label}</label>
            <input type={field_type} className="form-control" id={field_id} placeholder={field_placeholder ? field_placeholder : ' '} value={field_value}
                onChange={(event) => {
                    onChange(event, field)
                }} />
        </div>
    )
}

export default Input