import React from 'react';

const AnimalNew = ({change,click}) => {
    return (
      <div className="AnimalNew">
        <form onSubmit={click}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="aclass">Class:</label>
            <input
              type="text"
              id="aclass"
              name="aclass"
              required
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="img">Image:</label>
            <input type="text" id="img" name="img" required onChange={change} />
          </div>
          <div>
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              name="link"
              required
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" required onChange={change} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default AnimalNew;