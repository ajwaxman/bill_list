$(document).ready(function(){
  
  // function that takes two dates and returns the days between them
  function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
  }

  // An array of the colors used in the list
  var colors = [
    '#FE0344',
    '#FE1344',
    '#FE2344',
    '#FE3344',
    '#FE4344',
    '#FE5344',
    '#FE6344',
    '#FE7344',
    '#FE9344',
    '#FEA344',
    '#FEB344',
    '#FEC344',
    '#FED344',
    '#FEE344',
    '#FEF344',
    '#fbFb55',
    '#ebFb55',
    '#dbFb55',
    '#cbFb55',
    '#bbFb55',
    '#abFb55',
    '#9bFb55',
    '#8bFb55',
    '#7bFb55',
    '#6bFb55',
    '#5bFb55',
    '#4bFb55',
    '#3bFb55',
    '#2bFb55',
    '#1bFb55',
    '#0bFb55',
  ]


  // create a var with today's date
  var today = new Date();
  var month = today.getMonth();
  today.setHours(12);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  var sortItems = function() {
      var $items = $('ul li');
      $items.sort(function(a, b) {
          var keyA = $(a).data('day');
          var keyB = $(b).data('day');
          return (keyA > keyB) ? 1 : 0;
      });
      $.each($items, function(index, row){
          $('ul').append(row);
      });
  } 

  // insert days until bill is due into span.days-to-pay using today's date and the day of month the bill is due
  $(".days-to-pay").each(function(i, span){
    var billDate = new Date();
    var billDay = $(this).attr('data-day');
    billDate.setHours(12);
    billDate.setMinutes(0);
    billDate.setSeconds(0);
    billDate.setMilliseconds(0);
    billDate.setDate(billDay);
    if (today.getDate() == billDay) {
      $(this).text("Today!");
    } else if (today.getDate() > billDay) {
      billDate.setMonth(month + 1);
      $(this).text(daydiff(today,billDate)); 
    } else {
      $(this).text(daydiff(today,billDate));
    }
    $(this).parent().css('background', colors[daydiff(today,billDate)]);
    sortItems();
  })


  // $('#bill-list li').remove();



})