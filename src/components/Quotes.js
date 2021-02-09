import React from "react";
import "../stylesheets/Quotes.scss";

const Quotes = (props) => {
  const handleClick = (ev) => {
    const click = ev.currentTarget.value;
    props.handleClick(click);
  };

  return (
    <div id="quote-box" className="quoteBox">
      <div id="text" className="quoteBox__quote">
        <p>
          <span className="quoteBox__title-quote">Quote:</span>
          <span className="quoteBox__description">{props.quote}</span>
        </p>
      </div>
      <div id="author" className="quoteBox__charac">
        <p>
          <span className="quoteBox__title-charac">Character:</span>
          <span className="quoteBox__description">{props.character.name}</span>
        </p>
      </div>
      <div id="house" className="quoteBox__house">
        <p>
          <span className="quoteBox__title-house">House:</span>
          <span className="quoteBox__description">{props.house}</span>
        </p>
      </div>

      <div id="buttons" className="btn">
        <button id="new-quote" className="new-quote-btn" onClick={handleClick}>
          <span className="btn-text">New Quote</span>
        </button>
      </div>
    </div>
  );
};
Quotes.propTypes = {};
export default Quotes;
