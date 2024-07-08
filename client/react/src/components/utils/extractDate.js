function extractDate(dateString) {
    const dateTimePattern = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/;
    const match = dateString.match(dateTimePattern);

    return match[2] + "h / " + match[1];
}
export default extractDate