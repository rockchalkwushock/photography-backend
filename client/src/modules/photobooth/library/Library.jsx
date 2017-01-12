import React, { Component, PropTypes } from 'react';
import { Image, Label } from 'semantic-ui-react';
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
      if (!url) {
        array.push(
          <Image key={index} size='tiny'>
            <Label content='Image not found!' icon='warning' />
          </Image>
        );
      }
      array.push(
        <Image
          key={index}
          src={url}
        />
      );
      return array;
    }, []);

    return (
      <div>
        {photos.server.length === 0 ? (
          <div className="initial">
            <h1>{translate('no-img')}</h1>
            <h1>{translate('upload-prompt')}</h1>
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
