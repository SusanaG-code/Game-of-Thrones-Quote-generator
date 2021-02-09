import React from "react";
import "../stylesheets/Quotes.scss";
import twitterLogo from "../images/twitter.svg";

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
        <button className="btn__twitter-btn">
          <a
            className="btn__twitter-btn__link"
            href={`https://twitter.com/intent/tweet?text=${props.quote} - ${props.character.name}-${props.house}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet it!
            <img
              src={twitterLogo}
              alt="twitter-logo"
              className="btn__twitter-btn__logo"
            ></img>
          </a>
        </button>

        <button id="new-quote" className="new-quote-btn" onClick={handleClick}>
          <span className="new-quote-btn__btn-text">New Quote</span>
        </button>
      </div>
    </div>
  );
};
Quotes.propTypes = {};
export default Quotes;
