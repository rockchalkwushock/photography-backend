import React, { Component, PropTypes } from 'react';
import Loading from 'react-loading';
import { Card } from 'semantic-ui-react';

class Library extends Component {
  // When component mounts should call GET
  // to DB for all pics.
  // If DB is empty need to handle with message.
  componentWillMount() {
    this.props.getDB();
  }
  render() {
    const { pics } = this.props;
    console.log(pics);
    if (!pics) return <Loading />;
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
    return (
      <div className="library">
        <Card.Group itemsPerRow={6}>
          {images}
        </Card.Group>
      </div>
    );
  }
}

Library.propTypes = {
  getDB: PropTypes.func.isRequired,
  pics: PropTypes.array
};

export default Library;
