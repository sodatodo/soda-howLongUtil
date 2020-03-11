export default function getTargettime (hours, minutes) {
    const targettime = new Date();

    targettime.setHours(hours);
    targettime.setMinutes(minutes);
    targettime.setSeconds(0);
    targettime.setMilliseconds(0);

    if (targettime < Date.now()) targettime.setDate(targettime.getDate() + 1);

    return targettime;
}