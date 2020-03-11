import ms from 'ms';
import targettime from './targettime';
import millisecondUtil from './millisencondsUtil';

export default function howLongUntil(hours, minutes) {
    if (typeof hours === 'undefined') hours = 12;
    if (typeof minutes === 'undefined') minutes = 30;

    const millisecondsUntilTargetTime = millisecondUtil(targettime(hours, minutes));
    return ms(millisecondsUntilTargetTime, { long: true });
}