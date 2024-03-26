import React, {useState} from "react";

function Form() {
    const [form, setForm] = useState({
        firstname : 'Rishabh',
        lastname : 'Vachheta',
        email : 'RishabhVachheta@gmail.com',
        phone : '9347189264'
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
            <label >phone:
                <input value={form.phone} onChange={e => {
                    setForm({
                        ...form,
                        phone:e.target.value
                    })
                }}/>
            </label>
            <p>
                {form.firstname}{" "}
                {form.lastname}{" "}
                {form.email}{" "}
                {form.phone}
            </p>
        </div>
    )
}

export default Form;