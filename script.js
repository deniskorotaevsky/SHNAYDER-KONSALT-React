let format = 'DD.MM.YYYY';
let m = moment();
document.querySelector('.date_week').innerHTML = m.startOf('week').add(8, 'days').format(format);

