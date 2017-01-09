import React, { Component, PropTypes } from 'react';
import Loading from 'react-loading';
import { Image } from 'semantic-ui-react';

class Library extends Component {
  componentWillMount() {
    this.props.getFromBackEnd();
  }
  render() {
    const { photos } = this.props;
    if (!photos) return <Loading />;
    if (photos === []) {
      return (
        <div className="initial">
          <h1>You have no images stored yet.</h1>
          <h1>Please upload images to the cloud.</h1>
        </div>
      );
    }
    const images = photos.reduce((array, item, index) => {
      const { url } = item;
      array.push(
        <Image
          key={index}
          src={url}
        />
      );
      return array;
    }, []);
    return (
      <div className="library">
        <Image.Group size='small'>
          {images}
        </Image.Group>
      </div>
    );
  }
}

Library.propTypes = {
  getFromBackEnd: PropTypes.func.isRequired,
  photos: PropTypes.array
};

export default Library;
