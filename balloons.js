$(function(){
    $('#birthday').pickadate( {format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    //1. Randomize the attention seeker in balloons.html. Choose a random animate.css 
    //attention seeker and apply when the page loads using JavaScript.
    const animations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
    $('h1.animate__animated').addClass('animate__' + animations[Math.floor(Math.random() * animations.length)]);
    

    //2. Create a toast when the submit button is clicked only if there are no balloons
    // selected.
    $('#submit').on('click', function(e){
        e.preventDefault();
        if($('.form-check-input:checked').length == 0)
            $('#liveToast').toast({autohide: false}).toast('show');
    });

    //3. Add ability to check / uncheck all balloons with a single click (using a button,
    // checkbox, link, etc…)
    $('#all').on('click', function(e){
        $('.form-check-input').each(function(){
            if(!$(this).is(':checked'))
            {
                $(this).click();
            }
        })
    });
    $('#clear').on('click', function(e){
        $('.form-check-input').each(function(){
            if($(this).is(':checked'))
            {
                $(this).click();
            }
        })
    });

    //4. Hovering the mouse over a checkbox label should change the color of the h1 element 
    //(Happy Birthday!) to the balloon color indicated in the label. Moving the mouse out 
    //of the label should reset the color.
    $('.form-check-label').hover(
        function(e){
            $('h1.animate__animated').css('color', $(this).parent().find('.form-check-input').prop('id'));
        }, function(e){
            $('h1.animate__animated').css('color', '');
        }
    )

    $(document).on('keyup', function (e) {
        if (e.keyCode === 27) {
            e.preventDefault();

            $('#liveToast').toast().toast('hide');
        }
    });
});

