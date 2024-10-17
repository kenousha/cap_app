import React, { useState } from "react";

function Feedback ({name, review, rating}) {
const [showWarning, setShowWarning] = useState(false);
const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData (e.currentTarget);
      const name = formData.get('name')
      const review = formData.get('review')
      const rating = formData.get('rating')
      if (name.length && review.length && rating?.length > 0) {
        setShowWarning(false);
      } else {
        setShowWarning(true);
      }
    };
return (
<form className="feedbackForm" onSubmit={handleFormSubmit} >
{showWarning && <p className="warning">Please fill out all fields.</p>}
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"/>
    </div>
                                    
    <div>
        <label >Review:</label>
        <textarea type="text" name="review"/>
    </div>

    <div className='rating'>
        <label >Rating:</label>
        <div className='starrating'>
            <input type='radio' name="rating" id='star5'/> <label for='star5'  className="fa fa-star star"/>
            <input type='radio' name="rating" id='star4'/> <label for='star4' className="fa fa-star star"/>
            <input type='radio' name="rating" id='star3'/> <label for='star3' className="fa fa-star star"/>
            <input type='radio' name="rating" id='star2'/> <label for='star2' className="fa fa-star star"/>
            <input type='radio' name="rating" id='star1'/> <label for='star1' className="fa fa-star star"/>
        </div>
    </div>
    <button type="submit" >Submit</button>
</form>
)};
 export default Feedback