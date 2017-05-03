$(function() {

  $('.summon-cats').on('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    }).done(function(data){
        var source = data.cats.photo
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
