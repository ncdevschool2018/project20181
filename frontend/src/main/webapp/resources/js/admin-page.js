$(document).ready(function () {


    $("#btn123t").click(function (event) {
    event.stopPropagation();

    var objStudSave = {
        firstname: $('#inputNameStudent').val(),
        group: $('#inputGroupStudent').val()
    };

    $.ajax({
        url:'users',
        type:'POST',
        dataType:'json',
        contentType: "application/json",
        mimeType: 'application/json',
        data: JSON.stringify(obj_stud_save),
        success:function (studobj) {
            /*$("#hoh").append("<tr><td><input type=\"checkbox\" class=\"body_checkbox\"></td><td>" + studobj.firstname + "</td>" +
        "<td>" + studobj.group + "</td></tr>");-->*/
            $("#modal_add_student").modal("hide");
            //$("#hoh").text(studobj.firstname + studobj.group);
    }


    });
    });
});