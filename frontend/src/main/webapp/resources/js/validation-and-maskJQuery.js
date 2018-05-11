$(document).ready(function () {


    //Faculty Mask
    ATRUBUT_HTML.$inputNameFaculty.mask('SSSSSSSS');
    ATRUBUT_HTML.$inputNameFaculty.focusout(function() {
        ATRUBUT_HTML.$inputNameFaculty.val( this.value.toUpperCase() );
    });

    //Speciality Mask
    ATRUBUT_HTML.$inputNameSpeciality.mask('SSSSSSSS');
    ATRUBUT_HTML.$inputNameSpeciality.focusout(function() {
        ATRUBUT_HTML.$inputNameSpeciality.val( this.value.toUpperCase() );
    });

    //Student Masks
    ATRUBUT_HTML.$inputNameGroup.mask('000000');

    ATRUBUT_HTML.$inputAverageScore.mask('0.0');
    //ATRUBUT_HTML.$inputAdress.mask('SSSSSSSS, st-t SSSSSSS, 00 ');
    ATRUBUT_HTML.$inputPhone.mask('(000) 000 0000');


});