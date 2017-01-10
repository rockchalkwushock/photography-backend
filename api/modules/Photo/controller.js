import cloudinary from 'cloudinary';
import Photo from './model';
import '../../config/cloudinaryConfig';

export const getPublicID = (req, res) => {
  const data = req.body.result; // this should be an array of object(s)
  console.log('REQUEST FROM FRONT-END');
  console.log('-----------------------');
  console.log(data);
  console.log('-----------------------');
  if (data === undefined) res.status(422).json({ success: false, message: 'Upload Failed!' });
  console.time('ARRAY');
  const insertStuff = data.reduce((array, item) => {
    array.push({
      public_id: item.public_id,
      url: item.url,
      thumbnail_url: item.thumbnail_url
    });

    return array;
  }, []);
  console.timeEnd('ARRAY');

  Photo.insertMany(insertStuff)
    .then(
      img => res.status(201).json({
        success: true,
        message: 'Successfully added to database.',
        cloudinary: img
      }),
      err => res.status(422).json({ success: false, message: err })
    );
};

export const sendToFrontEnd = (req, res) => {
  /* TODO: request from front-end should ask for:
      1) All images.
      2) Active images. TODO: Set up prop in Redux/Model for active state.
      3) Images in order:
        a) Newest to Oldest
        b) Oldest to Newest
  */
  console.time('ARRAY');
  Photo.find()
    .then(
      img => res.status(201).json({ success: true, payload: img }),
      err => res.status(500).json({ success: false, message: err })
    );
    console.timeEnd('ARRAY');
};

export const deletePhoto = (req, res) => {
  // setup for one item at moment
  const { public_id } = req.body;
  // remove from Cloudinary Servers
  cloudinary.v2.uploader.destroy(public_id)
    .then(
      result => res.status(201).json({ success: true, payload: result }), // should return 'ok'
      err => res.status(500).json({ success: false, message: err })
    );
  // remove from my db
  Photo.findOneAndDelete(public_id)
    .then(
      img => res.status(201).json({ success: true, payload: img }),
      err => res.status(500).json({ success: false, payload: err })
    );
};
