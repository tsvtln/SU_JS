document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const daysInput = document.getElementById('days-input');
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');

    document.getElementById('daysBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const days = Number(daysInput.value);
        convertFromDays(days, 'days');
    });

    document.getElementById('hoursBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const hours = Number(hoursInput.value);
        const days = hours / 24;
        convertFromDays(days, 'hours');
    });

    document.getElementById('minutesBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const minutes = Number(minutesInput.value);
        const days = minutes / 1440;
        convertFromDays(days, 'minutes');
    });

    document.getElementById('secondsBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const seconds = Number(secondsInput.value);
        const days = seconds / 86400;
        convertFromDays(days, 'seconds');
    });

    function convertFromDays(days, source) {
        if (source !== 'days') {
            daysInput.value = days.toFixed(2);
        }
        if (source !== 'hours') {
            hoursInput.value = (days * 24).toFixed(2);
        }
        if (source !== 'minutes') {
            minutesInput.value = (days * 1440).toFixed(2);
        }
        if (source !== 'seconds') {
            secondsInput.value = (days * 86400).toFixed(2);
        }
    }
}


// 0/100 (this calculates per button, but requirement is writen by 10000iq person, so no way to know what was required before running the judge test)
// function solve() {

//     let valueDays;
//     let valueHours;
//     let valueMinutes;
//     let valueSeconds;

//     // days
//     let daysForm = document.getElementById('days');
//     let daysField = document.getElementById('days-input');

//     // hours
//     let hoursForm = document.getElementById('hours');
//     let hoursField = document.getElementById('hours-input');

//     // minutes
//     let minutesForm = document.getElementById('minutes');
//     let minutesField = document.getElementById('minutes-input');

//     // seconds
//     let secondsForm = document.getElementById('seconds');
//     let secondsField = document.getElementById('seconds-input');

//     function clearUp(){
//         valueDays = '';
//         valueHours = '';
//         valueMinutes = '';
//         valueSeconds = '';
//     }

//     // do the days
//     daysForm.addEventListener('submit', function(e){
//         e.preventDefault();
//         // get value from first available field

//         if (hoursField.value != '' && hoursField.value != 'Hours') {
//             valueHours = Number(hoursField.value);
//         } else if (minutesField.value != '' && minutesField.value != 'Minutes'){
//             valueMinutes = Number(minutesField.value);
//         } else {
//             valueSeconds = Number(secondsField.value);
//         }
//         daysCalc();
//     })

//     function daysCalc(){
//         if (valueHours) {
//             valueDays = valueHours / 24;
//         } else if (valueMinutes){
//             valueDays = valueMinutes / 1440;
//         } else {
//             valueDays = valueSeconds / 86400;
//         }
//         daysField.value = valueDays.toFixed(2);
//         clearUp();
//     }

//     // do the hours
//     hoursForm.addEventListener('submit', function(e){
//         e.preventDefault();

//         if (daysField.value != '' && daysField.value != 'Days'){
//             valueDays = Number(daysField.value);
//         } else if (minutesField.value != '' && minutesField.value != 'Minutes'){
//             valueMinutes = Number(minutesField.value);
//         } else {
//             valueSeconds = Number(secondsField.value);
//         }
//         hoursCalc();
//     })

//     function hoursCalc(){
//         if (valueDays) {
//             valueHours = valueDays * 24;
//         } else if (valueMinutes) {
//             valueHours = valueMinutes / 60;
//         } else {
//             valueHours = valueSeconds / 3600;
//         }
//         hoursField.value = valueHours.toFixed(2);
//         clearUp();
//     }

//     // do the minutes
//     minutesForm.addEventListener('submit', function(e){
//         e.preventDefault();

//         if (daysField.value != '' && daysField.value != 'Days'){
//             valueDays = Number(daysField.value);
//         } else if (hoursField.value != '' && hoursField.value != 'Hours'){
//             valueHours = Number(hoursField.value);
//         } else {
//             valueSeconds = Number(secondsField.value);
//         }
//         minutesCalc();
//     })

//     function minutesCalc(){
//         if (valueDays) {
//             valueMinutes = valueDays * 24 * 60;
//         } else if (valueHours) {
//             valueMinutes = valueHours * 60;
//         } else {
//             valueMinutes = valueSeconds / 60;
//         }

//         minutesField.value = valueMinutes.toFixed(2);
//         clearUp();
//     }

//     // do the seconds
//     secondsForm.addEventListener('submit', function(e){
//         e.preventDefault();

//         if (daysField.value != '' && daysField.value != 'Days'){
//             valueDays = Number(daysField.value);
//         } else if (hoursField.value != '' && hoursField.value != 'Hours'){
//             valueHours = Number(hoursField.value);
//         } else {
//             valueMinutes = Number(minutesField.value);
//         }
//         secondsCalc();
//     })

//     function secondsCalc(){
//         if (valueDays) {
//             valueSeconds = valueDays * 24 * 60 * 60;
//         } else if (valueHours) {
//             valueSeconds = valueHours * 60 * 60;
//         } else {
//             valueSeconds = valueMinutes * 60;
//         }
//         secondsField.value = valueSeconds.toFixed(2);
//         clearUp();
//     }
// }