$(document).ready(() => {

    $('#videoForm').submit((event) => {
        event.preventDefault();
        if($('#formFileLg').get(0).files[0]) {
            $('.progress').removeClass('hidden');
            sendData();
        }
        else {
            alert('Najpierw wybierz plik');
        }
    });

});

const sendData = () => {

    let formData = new FormData();
    let file = $('#formFileLg').get(0).files[0];

    formData.append('video', file, 'film.mp4');

    $.ajax({
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        url: window.location + '/save',
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt) {
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    console.log(percentComplete);
                    $('.progress-bar').css("width", Math.round(percentComplete * 100) + '%');
                }
            }, false);
            return xhr;
        },
        success: (pass) => {
            $('.progress').addClass('hidden');
            $('.alert-success').removeClass('hidden');
            $('.alert-danger').addClass('hidden');
        },
        error: (e) => {
            $('.progress').addClass('hidden');
            $('.alert-success').addClass('hidden');
            $('.alert-danger').removeClass('hidden');
          }
    });

    $('#video').val('');

};