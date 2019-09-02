import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu_close: ""
    };
  }

  render() {
    return (
      <div className={"menu-wrapper " + this.state.menu_close}>
        <div
          className={"menu-btn " + this.state.menu_close}
          onClick={this.onClickBtn.bind(this)}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <a
          href="mailto:jim.skogpirinen@gmail.com"
          className={"menu-item _home " + this.state.menu_close}
        >
          Contact.
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={"menu-item _strengths " + this.state.menu_close}
        >
          CV.
        </a>
        <a
          href="https://github.com/jimjimsp"
          className={"menu-item _work " + this.state.menu_close}
        >
          GitHub.
        </a>
        <a
          href="#about"
          className={"menu-item _about " + this.state.menu_close}
        >
          About me.
        </a>
      </div>
    );
  }

  onClickBtn() {
    if (this.state.menu_close === "open") {
      this.setState({ menu_close: "" });
    } else {
      this.setState({ menu_close: "open" });
    }
  }
}

export default Menu;
