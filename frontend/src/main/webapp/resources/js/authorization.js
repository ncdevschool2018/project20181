$(document).ready(function () {
    ATRUBUT_HTML.$buttonLogin
        .mouseenter(function() {
            Validation.validateOnEmpty([ATRUBUT_HTML.$inputUsernameLogin, ATRUBUT_HTML.$inputPasswordLogin], [ATRUBUT_HTML.$buttonLogin]);

            ATRUBUT_HTML.$inputUsernameLogin.on('blur', function () {
                Validation.validateOnEmpty([ATRUBUT_HTML.$inputUsernameLogin], [ATRUBUT_HTML.$buttonLogin]);
            });

            ATRUBUT_HTML.$inputPasswordLogin.on('blur', function () {
                Validation.validateOnEmpty([ATRUBUT_HTML.$inputPasswordLogin], [ATRUBUT_HTML.$buttonLogin]);
            });
        })
        .mouseleave(function(){
            // отвели курсор с объекта (не учитываются переходы внутри элемента)
        });


    //Authorization(POST)
    ATRUBUT_HTML.$buttonLogin.click(function (event) {
        event.stopPropagation();

        $.ajax({
            url: 'authorize',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                username: ATRUBUT_HTML.$inputUsernameLogin.val(),
                password: ATRUBUT_HTML.$inputPasswordLogin.val()
            }),
            success: function (xhr) {
                console.log(xhr.status);
                $('.jsCredentialsIncorrectNotification').hide();
                window.location.href = "/home"
            },
            error: function (xhr, textStatus) {
                console.log(xhr.status);console.log(textStatus);

                xhr.status == 401 ? $('.jsCredentialsIncorrectNotification').show() : alert('Something went wrong, try again later.');
            }
        });
    });
    //Registration POST
    /*ATRUBUT_HTML.$buttonRegistration.click(function (event) {
        event.stopPropagation();
        var objAccountStudentSave = {
            firstname: $('.jsInputNameStudent').val(),
            lastname: $('.jsInputSurnameStudent').val(),
            patronymic: $('.jsInputPatronymicStudent').val(),
            email: $('.jsInputEmailStudent').val(),
            login: $('.jsInputLoginStudent').val(),
            password: $('.jsInputFirstPasswordForCompare').val()
        };

        $.ajax({
            url: 'createStudentAccount',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objAccountStudentSave),
            success: window.location.href = "/authorization"
        });
    });*/

});