$(function () {
    // preload audio
    var toast = new Audio('toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('#productName').text($(this).data('name'));
        $('#code').text($(this).data('code'));
        $('#liveToast').toast({ autohide: false }).toast('show');
    });

    $(document).on('keyup', function (e){
        if (e.keyCode === 27) {
            e.preventDefault();

            $('#liveToast').toast().toast('hide');
        }
    });
});