$(document).ready(function () {

    //Faculty Mask
    ATRUBUT_HTML.$inputNameFaculty.mask('SSSSSSSS');
    ATRUBUT_HTML.$inputNameFaculty.focusout(function() {
        ATRUBUT_HTML.$inputNameFaculty.val( this.value.toUpperCase() );
    });
    ATRUBUT_HTML.$buttonAddFaculty.prop('disabled', true);
    ATRUBUT_HTML.$inputNameFaculty.on("keyup",function () {
        if(ATRUBUT_HTML.$inputNameFaculty.val().trim() !== ""){ ATRUBUT_HTML.$buttonAddFaculty.prop('disabled', false);}
        else{ ATRUBUT_HTML.$buttonAddFaculty.prop('disabled', true);}
    });


    //Speciality Mask
    ATRUBUT_HTML.$inputNameSpeciality.mask('SSSSSSSS');
    ATRUBUT_HTML.$inputNameSpeciality.focusout(function() {
        ATRUBUT_HTML.$inputNameSpeciality.val( this.value.toUpperCase() );
    });
    ATRUBUT_HTML.$buttonAddSpeciality.prop('disabled', true);
    ATRUBUT_HTML.$inputNameSpeciality.on("keyup",function () {
        if(ATRUBUT_HTML.$inputNameSpeciality.val().trim() !== "") {ATRUBUT_HTML.$buttonAddSpeciality.prop('disabled', false);}
        else {ATRUBUT_HTML.$buttonAddSpeciality.prop('disabled', true);}
    });
    //Head Mask
    ATRUBUT_HTML.$inputNameHead.focusout(function() {
        var firstSymbolUpperInStr = ATRUBUT_HTML.$inputNameHead.val().trim();
        firstSymbolUpperInStr = firstSymbolUpperInStr[0].toUpperCase() + firstSymbolUpperInStr.substr(1);
        ATRUBUT_HTML.$inputNameHead.val(firstSymbolUpperInStr);
    });
    ATRUBUT_HTML.$inputSurnameHead.focusout(function() {
        var firstSymbolUpperInStr = ATRUBUT_HTML.$inputSurnameHead.val().trim();
        firstSymbolUpperInStr = firstSymbolUpperInStr[0].toUpperCase() + firstSymbolUpperInStr.substr(1);
        ATRUBUT_HTML.$inputSurnameHead.val(firstSymbolUpperInStr);
    });
    ATRUBUT_HTML.$inputPatronymicHead.focusout(function() {
        var firstSymbolUpperInStr = ATRUBUT_HTML.$inputPatronymicHead.val().trim();
        firstSymbolUpperInStr = firstSymbolUpperInStr[0].toUpperCase() + firstSymbolUpperInStr.substr(1);
        ATRUBUT_HTML.$inputPatronymicHead.val(firstSymbolUpperInStr);
    });
    ATRUBUT_HTML.$buttonAddHead.prop('disabled', true);
     $('#modalHeadOfPractice').find('input').on("keyup",function () {
        if(ATRUBUT_HTML.$inputPasswordHead.val().trim() !== "" && ATRUBUT_HTML.$inputNameHead.val().trim() !== "" &&
            ATRUBUT_HTML.$inputSurnameHead.val().trim() !== "" && ATRUBUT_HTML.$inputPatronymicHead.val().trim() !== "" &&
            ATRUBUT_HTML.$inputUsernameHead.val().trim() !== "" && ATRUBUT_HTML.$inputEmailHead.val().trim() !== "" ){
            ATRUBUT_HTML.$buttonAddHead.prop('disabled', false);
        }
        else {ATRUBUT_HTML.$buttonAddHead.prop('disabled', true);}
    });


    //Student Masks
    //ATRUBUT_HTML.$inputAdress.mask('SSSSSSSS, st-t SSSSSSS, 00 ');
    ATRUBUT_HTML.$inputNameGroup.mask('000000');
    ATRUBUT_HTML.$inputAverageScore.mask('0.0');
    ATRUBUT_HTML.$inputPhone.mask('(000) 000 0000');
    if(ATRUBUT_HTML.$buttonOpenModalStudentForSave.click(function () {
        ATRUBUT_HTML.$buttonAddOrEditStudent.prop('disabled', true);
    }));
    if(ATRUBUT_HTML.$buttonOpenModalStudentForEdit.click(function () {
            ATRUBUT_HTML.$buttonAddOrEditStudent.prop('disabled', false);
    }));
    $('#modalStudent').find('input').on("keyup",function () {
        if(ATRUBUT_HTML.$inputNameGroup.val().trim() !== "" && ATRUBUT_HTML.$inputAverageScore.val().trim() !== "" &&
            ATRUBUT_HTML.$inputAdress.val().trim() !== "" && ATRUBUT_HTML.$inputPhone.val().trim() !== "" &&
            ATRUBUT_HTML.$inputComment.val().trim() !== ""){
            ATRUBUT_HTML.$buttonAddOrEditStudent.prop('disabled', false);
        }
        else {ATRUBUT_HTML.$buttonAddOrEditStudent.prop('disabled', true);}
    });
    //Request Masks
    if(ATRUBUT_HTML.$buttonOpenModalRequestForSave.click(function () {
            ATRUBUT_HTML.$buttonAddOrEditRequest.prop('disabled', true);
    }));
    if(ATRUBUT_HTML.$buttonOpenModalRequestForEdit.click(function () {
            ATRUBUT_HTML.$buttonAddOrEditRequest.prop('disabled', false);
    }));
    ATRUBUT_HTML.$inputMinAverageScore.mask('0.0');
    ATRUBUT_HTML.$inputTotalQuantity.mask('00');
    ATRUBUT_HTML.$inputNameCompany.mask('SSSSSSSSS');
    ATRUBUT_HTML.$inputNameCompany.focusout(function() {
        var firstSymbolUpperInStr = ATRUBUT_HTML.$inputNameCompany.val().trim();
        firstSymbolUpperInStr = firstSymbolUpperInStr[0].toUpperCase() + firstSymbolUpperInStr.substr(1);
        ATRUBUT_HTML.$inputNameCompany.val(firstSymbolUpperInStr);
    });

    $('#modalRequest').find('input').on("keyup",function () {
        if(ATRUBUT_HTML.$inputNameCompany.val().trim() !== "" && ATRUBUT_HTML.$inputMinAverageScore.val().trim() !== "" &&
            ATRUBUT_HTML.$inputTotalQuantity.val().trim() !== ""){
            ATRUBUT_HTML.$buttonAddOrEditRequest.prop('disabled', false);
        }
        else {ATRUBUT_HTML.$buttonAddOrEditRequest.prop('disabled', true);}
    });



});

+function () {

    var Validation = {

        validateOnEmpty: function (inputs, btns) {
            var isAnyValidationErrors = false;
            if (inputs) {
                inputs.some(function (input) {
                    if (!input.val()) {
                        isAnyValidationErrors = true;

                        input.next().html('Should not be empty');
                        input.next().show();
                    } else {
                        input.next().hide();
                    }
                });
            }
            if (btns) {
                if (isAnyValidationErrors) {
                    btns.some(function (button) {
                        button.attr("disabled", true)
                    })
                } else {
                    btns.some(function (button) {
                        button.removeAttr('disabled')
                    })
                }
            }
        }
    };
    window.Validation = Validation;

}();