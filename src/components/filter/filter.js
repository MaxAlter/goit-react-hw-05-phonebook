import React from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import filterStyle from "../../transition/filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <CSSTransition in timeout={250} classNames={filterStyle} unmountOnExit>
      <form className={style.formFilter}>
        <label className={style.formName_label}>Find Contacts by Name</label>
        <input
          className={style.formName_input}
          type="text"
          value={value}
          onChange={onChangeFilter}
          placeholder="Type to filter contacts..."
          autoComplete="off"
        />
      </form>
    </CSSTransition>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
