import React, { Component, PropTypes } from 'react';
import { Image } from 'semantic-ui-react';
import { LoadingScreen } from '../../../commons';

class Library extends Component {
  componentWillMount() {
    this.props.getFromBackEnd();
  }
  render() {
    const { photos, translate } = this.props;
    if (!photos.isFetched) return <LoadingScreen />;

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
    console.log(photos.server);
    return (
      <div className="library">
        {photos.server === [] ? (
          <div className="initial">
            <h1>{translate('no-img')}</h1>
            <h1>{translate('upload-prompt')}</h1>
            <h1>You have no images stored yet.</h1>
            <h1>Please upload images to the cloud.</h1>
          </div>
        ) : (
          <div className="library">
              <Image.Group size='tiny'>
                {images}
              </Image.Group>
          </div>
        )}
      </div>
    );
  }
}

Library.propTypes = {
  getFromBackEnd: PropTypes.func.isRequired,
  photos: PropTypes.object,
  translate: PropTypes.func
};

export default Library;
