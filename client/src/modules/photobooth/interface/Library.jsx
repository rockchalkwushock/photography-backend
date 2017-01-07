import React, { Component, PropTypes } from 'react';
import Loading from 'react-loading';
import { Image } from 'semantic-ui-react';

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
    if (pics === []) {
      return (
        <div className="initial">
          <h1>You have no images stored yet.</h1>
          <h1>Please upload images to the cloud.</h1>
        </div>
      );
    }
    const images = pics.reduce((array, item, index) => {
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
  getDB: PropTypes.func.isRequired,
  pics: PropTypes.array
};

export default Library;
