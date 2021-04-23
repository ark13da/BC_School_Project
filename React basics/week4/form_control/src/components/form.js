import React from 'react';
import "./style.css";

const Form = ({click,change}) => {
    return (
      <div>
            <form onSubmit={click} >
                <div className="formControl">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        required
                        onChange={change}
                    ></input>
                </div>
                <div className="formControl">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        required
                        onChange={change}
                    ></input>
                </div>
                <div className="formControl">
                    <label htmlFor="phone">Phone number</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                        required
                        onChange={change}
                    ></input>
                </div>
                <div className="formControl">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="5"
                        required
                        onChange={change}
                    ></textarea>
                </div>
                <div className="formControl">
                    <label htmlFor="Role">Role</label>
                    <select
                        name="role"
                        id="role"
                        required
                        onChange={change}
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                <div className="formControl">
                    <input type="submit"  value="Submit"/>
                </div>

        </form>
      </div>
    );
};

export default Form;