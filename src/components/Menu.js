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
          onClick={this.onChangeView3D.bind(this)}
          className={"menu-item threed " + this.state.menu_close}
        >
          3D
        </p>
        <p
          onClick={this.onChangeViewDraw.bind(this)}
          className={"menu-item drawings " + this.state.menu_close}
        >
          drawings
        </p>
        <a
          href="https://www.youtube.com/channel/UCqacqnaqgCbyH4nWm1WvkNA"
          className={"menu-item youtube " + this.state.menu_close}
        >
          youtube
        </a>
        <a
          href="mailto:jim.skogpirinen@gmail.com"
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

  onChangeView3D() {
    this.props.changeView("3d");
  }

  onChangeViewDraw() {
    this.props.changeView("draw");
  }
}

export default Menu;
