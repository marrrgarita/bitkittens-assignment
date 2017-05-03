$(function() {

  $('.summon-cats').on('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    }).done(function(data){
        var kitties = data.cats;
        for (var i = 0; i < kitties.length; i++) {
          var source = kitties[i]['photo'];
          $('<img>').attr('src', source).appendTo('#cat' + (i + 1));
        }
    });
  });

  // for (var i = 0; i < data.candidates.length; i++) {
  //     candidate = data.candidates[i];
  //     var cInfo = candidate.name + ': ' + candidate.votes + ' votes.';
  //     var item = $('<li>').html(cInfo);
  //     $('#candidate-list').append(item);
  //   }
  //

});
