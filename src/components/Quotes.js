import React from "react";
import "../stylesheets/Quotes.css";

const Quotes = (props) => {
  const handleClick = (ev) => {
    const click = ev.currentTarget.value;
    props.handleClick(click);
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="text">
        <p>
          <span className="title-quote">Quote:</span>
          <span className="description">{props.quote}</span>
        </p>
      </div>
      <div id="author" className="author">
        <p>
          <span className="title-quote">Character:</span>
          <span className="description">{props.character.name}</span>
        </p>
      </div>
      <div id="house" className="house">
        <p>
          <span className="title-quote">House:</span>
          <span className="description">{props.house}</span>
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
