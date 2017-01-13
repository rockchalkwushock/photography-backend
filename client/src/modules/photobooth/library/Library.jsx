import React, { Component, PropTypes } from 'react';
import { Image, Label } from 'semantic-ui-react';
import { LoadingScreen } from '../../../commons';

class Library extends Component {
  componentWillMount() {
    // perform GET Request for appending images.
    this.props.getFromBackEnd();
  }
  render() {
    const { photos, translate } = this.props;
    if (!photos.isFetched) return <LoadingScreen />;

    // Where array of object(s) is processed for rendering/re-rendering.
    const images = photos.server.reduce((array, item) => {
      const { _id, url } = item;
      if (!url) {
        array.push(
          <Image key={_id} size='tiny'>
            <Label content='Image not found!' icon='warning' />
          </Image>
        );
      }
      array.push(
        <Image
          key={_id}
          src={url}
        />
      );
      return array;
    }, []);

    return (
      <div className='library'>
        {photos.server.length === 0 ? (
          <div className="initial">
            <h1>{translate('no-img')}</h1>
            <h1>{translate('upload-prompt')}</h1>
          </div>
        ) : (
          <div className="images">
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
