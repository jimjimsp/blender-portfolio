import React from "react";

class ImageElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="element-wrapper" onClick={this.openImage.bind(this)}>
        <img className="element-image" src={this.props.imagePath} alt="Image" />
      </div>
    );
  }

  openImage() {
    this.props.showViewer(this.props.imagePath);
  }
}

export default ImageElement;
