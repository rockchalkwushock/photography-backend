import React, { PropTypes } from 'react';
import { Card } from 'semantic-ui-react';


const Library = ({ pics }) => {
  // iterate over pics array pulling out thumbnail_url
  // and applying prop to a new Card.
  // then push to new array images for rendering
  // inside Card.Group.
  const images = pics.reduce((array, item, index) => {
    const { url } = item;
    array.push(
      <Card
        key={index}
        raised image={url} // eslint-disable-line
      />
    );
    return array;
  }, []);
  // render view to DOM.
  return (
    <div className="library">
      <Card.Group itemsPerRow={6}>
        {images}
      </Card.Group>
    </div>
  );
};

Library.propTypes = {
  pics: PropTypes.array
};

export default Library;
