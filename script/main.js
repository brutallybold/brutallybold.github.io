$(document).ready(function(){
    
    //window.scrollTo(0, document.getElementById('gesicht').clientHeight / 3);

    function getLayoutWidth() {
        var newPixelWidth = $('.layout').first().css('width');

            newPixelWidth = newPixelWidth.replace(/[^\d.-]/g, '');

            return parseFloat(newPixelWidth);
    }
    
    function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    }
    
    var maxScrollToPosition = getLayoutWidth();
    
    window.scrollTo(getRandomArbitrary(0, maxScrollToPosition), getRandomArbitrary(0, maxScrollToPosition));
    
    
    //overlay text
    $('.project').click(function(event) {
        console.log(event);

        var text = event.target.dataset.text

        $('#displaytext').first().html(text);

    });    
    
    //toggle overlay
    $('.project').on('click', function(e) {
      $('.overlay').toggleClass("displayNone"); 
      e.preventDefault();
        
    });
    
    $('.overlay').on('click', function(e) {
      $('.overlay').toggleClass("displayNone"); 
      e.preventDefault();
        
    });
   
    //zoom function
    function scale(checkzoomlimit, zoomamount){

        var positionTop = $('html, body').scrollTop();
        var positionLeft = $('html, body').scrollLeft();

        //var midHeight = positionTop + window.innerHeight / 2;
        //var midWidth = positionLeft + window.innerWidth / 2;

        //console.log(positionTop, positionLeft);
    
        
        //existierender wert auslesen, buchstaben von wert entfernen, text in zahl umwandeln, pixel in wv umrechnen, 
        var originPixelWidth = getLayoutWidth();
            
        //console.log("originPixelWidth", originPixelWidth)
        
        var originRelativeWidth = originPixelWidth / document.documentElement.clientWidth * 100;
        
        //console.log("originRelativeWidth", originRelativeWidth)
        

        //If(width > 100 && width < 600)
        if (checkzoomlimit(originRelativeWidth)) {
            //wert modifizieren
            var newRelativeWidth = originRelativeWidth + zoomamount;
            
            //console.log("newRelativeWidth", newRelativeWidth)
            
             //wert auf das layout schreiben
            $('.layout').first().css({
                width: newRelativeWidth + 'vw',
                height: newRelativeWidth + 'vw'
            });
            
            //var testPixelWidth = newRelativeWidth * document.documentElement.clientWidth / 100;
            
            var newPixelWidth = getLayoutWidth();
                
            //console.log("newPixelWidth", newPixelWidth)
            //console.log("testPixelWidth", testPixelWidth)
            //console.log("scrollLeft", positionLeft + (newPixelWidth - originPixelWidth) / 2)
            //console.log("scrollTop", positionTop + (newPixelWidth - originPixelWidth) / 2)
            
            $('body').scrollLeft(positionLeft + (newPixelWidth - originPixelWidth) / 2);
            $('body').scrollTop(positionTop + (newPixelWidth - originPixelWidth) / 2);
    
        }
 
       }
    
    
    //Buttons
    function checkmaxzoomlimit(size){
            if (size<600){
                return true
            }
            return false
        }
    
    $('#zoomin').click(function() {
        scale(checkmaxzoomlimit, 125)
    });
    
    
  function checkminzoomlimit(size){
            if (size>100){
                return true
            }
            return false
        }
    
    $('#zoomout').click(function() {
        scale(checkminzoomlimit, -125)
    });
    
});