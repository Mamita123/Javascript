
starting_year = prompt('starting year: ')
last_year = prompt('last year')
let year_range= " ";

for(let year=starting_year; year <= last_year; year++){
  if ((year%4 ===0) && (year%100 !== 0) || (year%400 ===0) || (year % 100===0 && year % 400 ===0)){
    year_range += '<li>${year}</li>';
    console.log(year);
  }
}
document.write(year_range)
