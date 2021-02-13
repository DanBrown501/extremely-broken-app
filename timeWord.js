// Turn a string of 24-hour time into words.
// Example: '00:00 to' 'midnight', 10:34  to 'ten thirty four am'

var lowWords = [
    "oh", "one", "two", "three", "four", "five", "six", "seven",
    "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];
var tensWords = ["twenty", "thirty", "forty", "fifty"];

function timeToWords(timeStr) {
    let hours = timeStr.split(':')[0]
    let minutes = timeStr.split(':')[1]
    if (hours == '00' && minutes == '00') {
        return "midnight"
    }
    else if (hours == '12' && minutes == '00') {
        return "noon"
    }
    else if (hours < '12') {
        return `${convertHoursToWord(hours)} ${convertMinutesToWords(minutes)} am`
    }
    else {
        return `${convertHoursToWord(hours)} ${convertMinutesToWords(minutes)} pm`
    }
}

function convertHoursToWord(hours) {
    var result;
    if (hours > '12') {
        hours -= 12;
    }
    if (hours == '00') {
        result = 'twelve'
    }
    else {
        result = lowWords[parseInt(hours)];
    }
    return result;
}

function convertMinutesToWords(minutes) {
    var tens, ones, result;
    if (minutes == '00') {
        result = "o'clock"
    }
    else if (minutes < lowWords.length) {
        if (minutes < '10') {
            result = `oh ${lowWords[parseInt(minutes)]}`;
        }
        else {
            result = lowWords[parseInt(minutes)];
        }
    }
    else {
        tens = Math.floor(minutes / 10);
        ones = minutes % 10;
        if (tens <= 5) {
            result = tensWords[tens - 2];
            if (ones > 0) {
                result += " " + lowWords[ones];
            }
        } else {
            result = "unknown"
        }
    }
    return result;
}

module.exports = {timeToWords, convertHoursToWord, convertMinutesToWords}