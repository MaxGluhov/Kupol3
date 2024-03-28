$(document).ready(function () {
    let isDragging = false;

    $('#kupol3').mousedown(function () {
        isDragging = true;
    });

    $(document).mousemove(function (e) {
        if (isDragging) {
            $('#kupol3').offset({
                top: e.pageY - $('#kupol3').outerHeight() / 2,
                left: e.pageX - $('#kupol3').outerWidth() / 2
            });
        }
    });

    $(document).mouseup(function () {
        isDragging = false;
    });
});

$(document).ready(function () {
    let isDragging = false;

    $('#kupol2').mousedown(function () {
        isDragging = true;
    });

    $(document).mousemove(function (e) {
        if (isDragging) {
            $('#kupol2').offset({
                top: e.pageY - $('#kupol2').outerHeight() / 2,
                left: e.pageX - $('#kupol2').outerWidth() / 2
            });
        }
    });

    $(document).mouseup(function () {
        isDragging = false;
    });
});

$(document).ready(function () {
    let isDragging = false;

    $('#kupol1').mousedown(function () {
        isDragging = true;
    });

    $(document).mousemove(function (e) {
        if (isDragging) {
            $('#kupol1').offset({
                top: e.pageY - $('#kupol1').outerHeight() / 2,
                left: e.pageX - $('#kupol1').outerWidth() / 2
            });
        }
    });

    $(document).mouseup(function () {
        isDragging = false;
    });
}); 
