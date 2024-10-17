import React, { useState } from "react";

function Feedback ({name, review, onSubmit}) {
const [showWarning, setShowWarning] = useState(false);
const handleFormSubmit = (e) => {
      e.preventDefault();
      const reviewData = {
        "name": name,
        "review": review,
      }
      const formData = new FormData (e.currentTarget);
      const rating = formData.get("rating");
      if (name && review && rating?.length >0 ) { 
        setShowWarning(false);
        onSubmit({ name, review});
      } else {
        setShowWarning(true);
      }
    };

return (
<form className="feedbackForm" onSubmit={handleFormSubmit} >
{showWarning && <p className="warning">Please fill out all fields.</p>}
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => (name= e.target.value)}/>
    </div>
                                    
    <div>
        <label htmlFor="review">Review:</label>
        <textarea type="text" id="review" value={review} onChange={(e) => (review= e.target.value)}/>
    </div>

    <div className='rating'>
        <label >Rating:</label>
        <div className='starrating'>
            <input type='radio' name="rating" id='star5'/> <label htmlFor='star5'  className="fa fa-star star"/>
            <input type='radio' name="rating" id='star4'/> <label htmlFor='star4' className="fa fa-star star"/>
            <input type='radio' name="rating" id='star3'/> <label htmlFor='star3' className="fa fa-star star"/>
            <input type='radio' name="rating" id='star2'/> <label htmlFor='star2' className="fa fa-star star"/>
            <input type='radio' name="rating" id='star1'/> <label htmlFor='star1' className="fa fa-star star"/>
        </div>
    </div>
    <button type="submit" >Submit</button>
</form>
)};
 export default Feedback