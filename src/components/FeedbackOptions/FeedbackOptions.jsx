import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        type="button"
        className="btn btn-success"
        onClick={onLeaveFeedback[0]}
      >
        {options[0]}
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={onLeaveFeedback[1]}
      >
        {options[1]}
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={onLeaveFeedback[2]}
      >
        {options[2]}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired),
};

export default FeedbackOptions;
