import React from "react";
import ImageElement from "./components/ImageElement";
import Menu from "./components/Menu";
import apart1 from "./res/img/apart1.jpg";
import apart2 from "./res/img/apart2.jpg";
import bb from "./res/img/bb.png";
import blanco from "./res/img/blanco.png";
import concretehead from "./res/img/concretehead.png";
import elenor from "./res/img/elenor.png";
import lady from "./res/img/lady.png";
import opening from "./res/img/opening.jpg";
import opening2 from "./res/img/opening2.png";
import opening3 from "./res/img/opening3.png";
import sass from "./res/img/sass.jpg";
import stick from "./res/img/stick.png";
import tiara from "./res/img/tiara.png";
import selfportrait from "./res/img/self-lowpoly.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "3d",
      images: [
        selfportrait,
        apart1,
        apart2,
        bb,
        blanco,
        concretehead,
        elenor,
        lady,
        opening,
        opening2,
        opening3,
        sass,
        stick,
        tiara
      ],
      drawings: [selfportrait],
      showViewer: false,
      viewerImage: ""
    };
  }

  render() {
    var currView = "";
    if (this.state.currentView === "draw") {
      currView = this.state.drawings;
    } else {
      currView = this.state.images;
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
          <h1>___Jim Skog Pirinen</h1>
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
