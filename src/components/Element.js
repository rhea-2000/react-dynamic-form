import React from 'react';
import Checkbox from './elements/Checkbox';
import Select from './elements/Select';
import Input from './elements/Input';
import Slide from './elements/Slider';

const Element = ({ field, onChange }) => {
    switch (field.field_type) {
        case 'text':
            return (
                <Input
                    field={field}
                    onChange={onChange}
                />);
        case 'select':
            return (
                <Select
                    field={field}
                    onChange={onChange} />
            )
        case 'checkbox':
            return (<Checkbox
                field={field}
                onChange={onChange}
            />)
        case 'slider':
            return (<Slide
                field={field}
                onChange={onChange}
            />)
        default:
            return null;
    }
}

export default Element

