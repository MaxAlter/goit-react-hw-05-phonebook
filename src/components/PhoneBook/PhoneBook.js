import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import logo from "../../transition/logo.module.css";
import s from "./logo.module.css";

export default class PhoneBookLogo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    isActiv: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isActiv: true }), 300);
  }

  render() {
    const { isActiv } = this.state;
    const { title } = this.props;
    return (
      <CSSTransition in={isActiv} classNames={logo} timeout={500}>
        <div className={s.title}>{title}</div>
      </CSSTransition>
    );
  }
}
