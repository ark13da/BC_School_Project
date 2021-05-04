import React from 'react';

const Newrecipe = ({ change, click }) => {
    return (
        <div className="RecipeNew">
            <h3>Add new recipe</h3>
        <form onSubmit={click}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image" required onChange={change} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
    
};

export default Newrecipe;