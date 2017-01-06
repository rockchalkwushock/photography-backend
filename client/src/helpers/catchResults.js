import { getCloudinaryData } from '../modules';

export const catchResults = results => {
  getCloudinaryData(results);
};

/*
NOTE:

Made this thinking the actionCreator was not able to trigger
the reducer while being called inside the widget, but this is
not the case.
*/
