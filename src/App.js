import React from "react";
import ImageElement from "./components/ImageElement";
import Menu from "./components/Menu";

import apart1 from "./res/digital/apart1.jpg";
import apart2 from "./res/digital/apart2.jpg";
import bb from "./res/digital/bb.png";
import blanco from "./res/digital/blanco.png";
import concretehead from "./res/digital/concretehead.png";
import elenor from "./res/digital/elenor.png";
import lady from "./res/digital/lady.png";
import lowpolyfactory from "./res/digital/lowpolyfactory.png";
import moonman from "./res/digital/moon-man.gif";
import opening from "./res/digital/opening.jpg";
import opening2 from "./res/digital/opening2.png";
import opening3 from "./res/digital/opening3.png";
import sass from "./res/digital/sass.jpg";
import selfportrait from "./res/digital/self-lowpoly.png";
import stickwalk from "./res/digital/stickwalk.png";
import tiara from "./res/digital/tiara.png";
import stick2 from "./res/digital/stick2.png";
import gramophone from "./res/digital/gramophone.png";
import hospital1 from "./res/digital/hospital1.png";

import boyinroom from "./res/physical/boyinroom.png";
import cloudbaby from "./res/physical/cloudbaby.png";
import holy from "./res/physical/holy.png";
import jandk from "./res/physical/jandk.png";
import mrprince from "./res/physical/mrprince.png";
import nickthevamp from "./res/physical/nickethevamp.png";
import oldman from "./res/physical/oldman.png";
import slothkingdom from "./res/physical/slothkingdom.png";
import smudge from "./res/physical/smudge.png";
import window from "./res/physical/window.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "digital",
      digital: [
        moonman,
        selfportrait,
        lowpolyfactory,
        concretehead,
        gramophone,
        hospital1,
        lady,
        elenor,
        bb,
        stick2,
        sass,
        tiara,
        stickwalk,
        blanco,
        apart1,
        apart2,
        opening,
        opening2,
        opening3
      ],
      physical: [
        slothkingdom,
        mrprince,
        smudge,
        nickthevamp,
        jandk,
        holy,
        cloudbaby,
        oldman,
        boyinroom,
        window
      ],
      showViewer: false,
      viewerImage: ""
    };
  }

  render() {
    var currView = "";
    if (this.state.currentView === "physical") {
      currView = this.state.physical;
    } else {
      currView = this.state.digital;
    }

    return (
      <div className="App">
        {this.state.showViewer && (
          <div className="viewer-wrapper" onClick={this.hideViewer.bind(this)}>
            <p className="viewer-title">{this.state.viewerTitle}</p>
            <img
              className="viewer-image"
              src={this.state.viewerImage}
              alt="Viewer image"
            />
          </div>
        )}
        <header>
          <h1>Jim Skog Pirinen</h1>
          <Menu changeView={this.changeView.bind(this)} />
        </header>
        <div className="wrapper">
          {currView.map(item => (
            <ImageElement
              imagePath={item}
              showViewer={this.showViewer.bind(this)}
            ></ImageElement>
          ))}
        </div>
      </div>
    );
  }

  showViewer(image) {
    this.setState({
      showViewer: true,
      viewerImage: image
    });
    this.forceUpdate();
  }

  hideViewer() {
    this.setState({ showViewer: false });
  }

  changeView(new_view) {
    this.setState({
      currentView: new_view
    });
  }
}

export default App;
