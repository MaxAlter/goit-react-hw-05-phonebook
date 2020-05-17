import React from "react";
import PropTypes from "prop-types";
import styles from "../../transition/styles.module.css";
import { CSSTransition } from "react-transition-group";
import st from "./alertContact.module.css";

const AlertContact = ({ isActiv = false }) => (
  <CSSTransition
    in={isActiv}
    classNames={styles}
    timeout={250}
    mountOnEnter
    unmountOnExit
  >
    <div className={st.alert}>contact already exists</div>
  </CSSTransition>
);

AlertContact.propTypes = {
  isActive: PropTypes.bool,
};

export default AlertContact;
