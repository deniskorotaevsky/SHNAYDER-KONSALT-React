let format = 'DD.MM.YYYY';
let m = moment();
document.querySelector('.js-sale').innerHTML = m.startOf('week').add(8, 'days').format(format);