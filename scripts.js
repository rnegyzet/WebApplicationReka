let data = {
    first: 'kepek/1pappesz.jpg',
    title: 'Így kezdődött...',
    description: 'Jó elindulni akkor, ha támogató barát és biztonságot, életet adó Isten adja meg a kezdő lendületet.'
  };
  
  /*$('#first').attr('src', data.first);*/
  $('#title').append(data.title);
  $('#description').append(data.description);

  let kepek = ['kepek/1pappesz.jpg', 'kepek/2kuruclesi.jpg', 'kepek/3varsag.jpg', 'kepek/4hagymas.jpg', 'kepek/5kereszt.jpg', 'kepek/6madaras.jpg', 'kepek/7csok.jpg', 'kepek/8arnyek.jpg'];
  let currentPhoto = 0;
  $('#first').attr('src', kepek[currentPhoto]);