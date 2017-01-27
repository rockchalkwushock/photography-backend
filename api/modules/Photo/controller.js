import Photo from './model';
import '../../config/cloudinaryConfig';

// Takes in Cloudinary Data and stores on DB.
export const getPublicID = (req, res) => {
  const data = req.body.result;
  if (data === undefined) res.status(422).json({ success: false, message: 'Upload Failed!' });
  const insertStuff = data.reduce((array, item) => {
    array.push({
      public_id: item.public_id,
      url: item.url,
      thumbnail_url: item.thumbnail_url
    });

    return array;
  }, []);

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

// Calls up specific data for rendering on the front-end.
export const sendToFrontEnd = (req, res) => {
  /* TODO: request from front-end should ask for:
      1) All images.
      2) Active images. TODO: Set up prop in Redux/Model for active state.
      3) Images in order:
        a) Newest to Oldest
        b) Oldest to Newest
  */
  Photo.find()
    .then(
      img => res.status(201).json({ success: true, payload: img }),
      err => res.status(500).json({ success: false, message: err })
    );
};

// export const deletePhotoCloudinary = (req, res) => {
//   // setup for one item at moment
//   const { public_id } = req.body;
//   // remove from Cloudinary Servers
//   cloudinary.v2.uploader.destroy(public_id)
//     .then(
//       result => res.status(201).json({ success: true, payload: result }), // should return 'ok'
//       err => res.status(500).json({ success: false, message: err })
//     );
// };
//
// export const deletePhotoDB = (req, res) => {
//   // setup for one item at moment
//   const { public_id } = req.body;
//   // remove from my db
//   Photo.findOneAndDelete(public_id)
//     .then(
//       img => res.status(201).json({ success: true, payload: img }),
//       err => res.status(500).json({ success: false, payload: err })
//     );
// };
