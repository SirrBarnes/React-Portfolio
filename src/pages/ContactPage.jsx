import '../components/UI/Contact.css';
import React, { useState } from 'react';

const contactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Message submitted! I'll get back to you soon!");

        setFormData({name: '', email: '', message: ''});
    }

    return (
        <section id = "contact-me">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className = "contactForm">
                <div className = "formGroup">
                    <label htmlFor = "name">Name: </label>             
                    <input type = "text" id = "name" name = "name" value = {formData.name} onChange = {handleChange} required/>
                </div>
                <div className = "formGroup">
                    <label htmlFor = "email">Email: </label>
                    <input type = "email" id = "email" name = "email" value = {formData.email} onChange = {handleChange} required />
                </div>

                <div className = "formGroup">
                    <label htmlFor = "message">Message: </label>
                    <textarea id = "message" name = "message" value = {formData.message} onChange = {handleChange}required/>
                </div>

                <button type = "submit">Submit</button>
            </form>
        </section>
    );
}

export default contactForm;