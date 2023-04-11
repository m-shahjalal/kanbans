import React, { useState } from 'react';

const Header = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        value && setValue('')
    }

    return (
        <div className="header">
            <input
                value={value}
                onChange={handleChange}
                className="header-input"
                type="text"
                placeholder="write your task"
            />
            <button onClick={handleSubmit} className="header-button">Add</button>
        </div>
    );
};

export default Header;
