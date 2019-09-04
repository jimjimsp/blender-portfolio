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

        <p
          onClick={this.onChangeViewDigital.bind(this)}
          className={"menu-item digital " + this.state.menu_close}
        >
          digital
        </p>
        <p
          onClick={this.onChangeViewPhysical.bind(this)}
          className={"menu-item physical " + this.state.menu_close}
        >
          physical
        </p>
        <a
          href="https://www.youtube.com/channel/UCqacqnaqgCbyH4nWm1WvkNA"
          target="_blank"
          rel="noopener noreferrer"
          className={"menu-item youtube " + this.state.menu_close}
        >
          youtube
        </a>
        <a
          href="mailto:jim.skogpirinen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={"menu-item contact " + this.state.menu_close}
        >
          contact
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

  onChangeViewDigital() {
    this.props.changeView("digital");
  }

  onChangeViewPhysical() {
    this.props.changeView("physical");
  }
}

export default Menu;
