import React from "react";

const input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        //   ref={this.username}
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default input;
