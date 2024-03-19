import React, {useState} from "react";

function Form() {
    const [form, setForm] = useState({
        firstname : 'Rishabh',
        lastname : 'Vachheta',
        email : 'RishabhVachheta@gmail.com',
    });

    return (
        <div>
            <label>First name:
                <input value={form.firstname} onChange={e => {
                    setForm({
                        ...form,
                        firstname:e.target.value
                    });
                }} />
            </label>
            <label>Last name:
                <input value={form.lastname} onChange={e => {
                    setForm({
                        ...form,
                        lastname:e.target.value
                    });
                }} />
            </label>
            <label>Email:
                <input value={form.email} onChange={e => {
                    setForm({
                        ...form,
                        email:e.target.value
                    });
                }} />
            </label>
            <p>
                {form.firstname}{" "}
                {form.lastname}{" "}
                {form.email}{" "}
            </p>
        </div>
    )
}

export default Form;