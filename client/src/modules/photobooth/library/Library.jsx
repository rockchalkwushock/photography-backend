import React, { Component, PropTypes } from 'react';
import { Image } from 'semantic-ui-react';
import { LoadingScreen } from '../../../commons';

const styles = {
  root: {
    height: '83vh'
  }
};

class Library extends Component {
  componentWillMount() {
    this.props.getFromBackEnd();
  }
  render() {
    const { photos } = this.props;
    if (!photos.isFetched) {
      return <LoadingScreen />;
    } else if (photos.server === []) {
      return (
        <div className="initial">
          <h1>You have no images stored yet.</h1>
          <h1>Please upload images to the cloud.</h1>
        </div>
      );
    }
    const images = photos.server.reduce((array, item, index) => {
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
      <div className="library" style={styles.root}>
          <Image.Group size='small'>
            {images}
          </Image.Group>
      </div>
    );
  }
}

Library.propTypes = {
  getFromBackEnd: PropTypes.func.isRequired,
  photos: PropTypes.object
};

export default Library;
