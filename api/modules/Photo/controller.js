// import mongoose from 'mongoose';
import Photo from './model';

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
      2) Active images.
      3) Images in order:
        a) Newest to Oldest
        b) Oldest to Newest
  */
  console.time('ARRAY');
  Photo.find()
    .then(
      img => res.status(201).json({ success: true, payload: img }),
      err => res.status(500).json({ message: err })
    );
    console.timeEnd('ARRAY');
};
