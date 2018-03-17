 // javascript Interactive Photo gallery //

 lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    wrapAround: true
  });


$("#search").keyup(function(){ 

  let searchTerm = $('#search').val();
  searchTerm = searchTerm.toLowerCase();
  //console.log(searchTerm);
  let match = document.querySelectorAll('a[data-title]');
  //console.log(match);
  for (i=0; i< match.length; i++){

  //console.log(match[i].getAttribute('data-title'));
  if  (match[i].getAttribute('data-title').toLowerCase().includes(searchTerm)){
  match [i].style.display="inline";
  } else {
  match [i].style.display="none";
  }

  }


})

     
      

    





  

