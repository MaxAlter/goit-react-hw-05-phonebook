import React, { Component, Fragment } from "react";
import shortid from "shortid";
import style from "./PhoneBook.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  userId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onHandleForm({ ...this.state });

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Fragment>
        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <label className={style.contactForm_label} htmlFor={this.userId}>
            Name
            <input
              className={style.contactForm_input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              id={this.userId}
              autoComplete="off"
            />
          </label>
          <label className={style.contactForm_label} htmlFor={this.userId}>
            Number
            <input
              className={style.contactForm_input}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <button className={style.contactForm_button} type="submit">
            Add contacts
          </button>
        </form>
      </Fragment>
    );
  }
}
