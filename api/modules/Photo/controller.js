// import mongoose from 'mongoose';
import Photo from './model';

export const getPublicID = (req, res) => {
  const data = req.body.result; // this should be an array of object(s)
  console.log(data);
  if (!data) res.status(422).json({ success: false, message: 'Upload Failed!' });
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
