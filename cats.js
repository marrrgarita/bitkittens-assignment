$(function() {

  $('.summon-cats').on('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    }).done(function(data){
        var kitties = data.cats;
        var kittyPhotos = [];
        for (var i = 0; i < kitties.length; i++) {
          var source = kitties[i]['photo'];
          var image = $('<img>').attr('src', source).appendTo('#cat' + (i + 1));
          kittyPhotos.push(image);
        }
      $('.cat-box').each(function(index){
        $(this).html(kittyPhotos[index]);
      });
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
