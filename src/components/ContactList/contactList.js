import React from "react";
import PropTypes from "prop-types";
import List from "./list";
import style from "./ContactList.module.css";
import { CSSTransition } from "react-transition-group";
import slideStyle from "../../transition/slide.module.css";

const ContactList = ({ items, onDeleteList }) => {
  return (
    items.length > 0 && (
      <ul className={style.contactList}>
        {items.map((item) => (
          <li key={item.id}>
            <CSSTransition
              in
              timeout={250}
              classNames={slideStyle}
              key={item.id}
              unmountOnExit
            >
              <List {...item} onDeleteList={() => onDeleteList(item.id)} />
            </CSSTransition>
          </li>
        ))}
      </ul>
    )
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteList: PropTypes.func.isRequired,
};
export default ContactList;

// className={style.contacts}
