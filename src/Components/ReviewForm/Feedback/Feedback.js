import React from "react";

const Feedback = ({ name, review, onSubmit}) => {
const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, review});
      const reviewData = {
        "name": name,
        "review": review,
        "rating": []
      }
      localStorage.setItem('reviewData', JSON.stringify(reviewData));
    };
return (
<form className="feedbackForm" onSubmit={handleFormSubmit} >
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => (name= e.target.value)} required/>
    </div>
                                    
    <div>
        <label >Review:</label>
        <textarea type="text" id="review" value={review} onChange={(e) => (review= e.target.value)} required/>
    </div>

    <div className='rating'>
        <label >Rating:</label>
        <div className='starrating'>
            <input type='radio' name="rating" value={5} onChange={(e) => (rating= e.target.value)} id='star5'/> <label for='star5'  className="fa fa-star star"/>
            <input type='radio' name="rating" value={4} onChange={(e) => (rating= e.target.value)} id='star4'/> <label for='star4' className="fa fa-star star"/>
            <input type='radio' name="rating" value={3} onChange={(e) => (rating= e.target.value)} id='star3' required /> <label for='star3' className="fa fa-star star"/>
            <input type='radio' name="rating" value={2} onChange={(e) => (rating= e.target.value)} id='star2'/> <label for='star2' className="fa fa-star star"/>
            <input type='radio' name="rating" value={1} onChange={(e) => (rating= e.target.value)} id='star1'/> <label for='star1' className="fa fa-star star"/>
        </div>
    </div>
    <button type="submit" >Submit</button>
</form>
)};
 export default Feedback