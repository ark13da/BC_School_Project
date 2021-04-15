import React from 'react';
import "./style.css";

const Form = (props) => {
    return (
      <div>
            <form>
                <div className="formControl">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        required
                        onChange={props.change}
                    ></input>
                </div>
                <div className="formControl">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        required
                        onChange={props.change}
                    ></input>
                </div>
                <div className="formControl">
                    <label htmlFor="phone">Phone number</label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone number"
                        required
                        onChange={props.change}
                    ></input>
                </div>
                <div className="formControl">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="Message"
                        placeholder="Message"
                        rows="5"
                        required
                        onChange={props.change}
                    ></textarea>
                </div>
                <div className="formControl">
                    <label htmlFor="Role">Role</label>
                    <select
                        name="Role"
                        required
                        onChange={props.change}
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
        </form>
      </div>
    );
};

export default Form;