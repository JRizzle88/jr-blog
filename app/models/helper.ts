import {Injectable} from "@angular/core";
import * as moment from 'moment';

@Injectable()
export class Helper {
  constructor() {}

  // verify or else set default
  verifyImage(url: string) {
    return (url && url !== '') ? url : '//placeholdit.com/700x250';
  }

  // format using moment
  formatDate(dateString: string) {
    let date = moment(dateString);
    // verify the json date is valid
    if (date.isValid()) {
      let diff = moment(new Date().getTime()).diff(date, 'days');
      let fromNow = date.fromNow();
      return (diff >= 7) ? date.format('MMM D, YYYY') : fromNow;
    }
    return 'Invalid Date';
  }
}
