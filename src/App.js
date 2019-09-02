import React from "react";
import ImageElement from "./components/ImageElement";
import Menu from "./components/Menu";
import apart1 from "./res/apart1.jpg";
import apart2 from "./res/apart2.jpg";
import bb from "./res/bb.png";
import blanco from "./res/blanco.png";
import concretehead from "./res/concretehead.png";
import elenor from "./res/elenor.png";
import lady from "./res/lady.png";
import opening from "./res/opening.jpg";
import opening2 from "./res/opening2.png";
import opening3 from "./res/opening3.png";
import sass from "./res/sass.jpg";
import stick from "./res/stick.png";
import tiara from "./res/tiara.png";
import moonman from "./res/moon-man.avi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showViewer: false, viewerImage: "", viewerTitle: "" };
  }

  render() {
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
          <p>Jim Skog Pirinen</p>
          <Menu />
        </header>
        <div className="wrapper">
          <ImageElement
            title="my concrete love"
            imagePath={concretehead}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="bb sausage"
            imagePath={bb}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="elenor"
            imagePath={elenor}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="lady marlborough"
            imagePath={lady}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="hello mr sass"
            imagePath={sass}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="stick"
            imagePath={stick}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="tiara"
            imagePath={tiara}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="blanco"
            imagePath={blanco}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="opening of the mouth 1"
            imagePath={opening}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="opening of the mouth 2"
            imagePath={opening2}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="opening of the mouth 3"
            imagePath={opening3}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="apart in here 1"
            imagePath={apart1}
            showViewer={this.showViewer.bind(this)}
          />
          <ImageElement
            title="apart in here 2"
            imagePath={apart2}
            showViewer={this.showViewer.bind(this)}
          />
        </div>
      </div>
    );
  }

  showViewer(title, image) {
    this.setState({
      showViewer: true,
      viewerTitle: title,
      viewerImage: image
    });
    this.forceUpdate();
  }

  hideViewer() {
    this.setState({ showViewer: false });
  }
}

export default App;
