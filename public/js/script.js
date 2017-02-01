var flag = 0;
$(document).ready(function () {
    $.get('/recentSearch', recent);

    $('form').submit(function (e) {
        e.preventDefault();
        flag=1;
        $.post('/', {word: $('#word').val()}, recent);
        this.reset();
    });

    $('body').on('click', 'a', function() {
      var temp = $(this).attr('id');
      flag=1;
      $.post('/', {word: `${temp}`}, recent);
    });
});

function recent(recentSearch) {
    if(flag){
      $('#resultParent').empty();
      var rs = "<p class='result'>Meaning &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;" + recentSearch[0] + "</p>";
      $('#resultParent').html(rs);
    }

    $('table').empty();
    $('table').append("<tr><th>Word</th><th>Meaning</th></tr>");

    $.each(recentSearch, function (k,v) {
      v = v.toString();
      var index = v.indexOf(":");
      var key = v.slice(1,index);
      var value = v.slice(index+1,v.indexOf("}")).slice(0,200);
      var text = `<tr><td><a class='a' id='${key}' href="#">${key}</a></td><td>${value}...</td></tr>`;
      $('table').append(text);
    });
}
