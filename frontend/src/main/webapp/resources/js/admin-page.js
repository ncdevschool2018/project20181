$(document).ready(function () {

    var ELEMENTS = {
        STUDENTS_TABLE: '.jsStudentsTable',
        REQUESTS_TABLE: '.jsRequestsTable'
    };
    var  $studentsTable = $(ELEMENTS.STUDENTS_TABLE),
         $requestsTable = $(ELEMENTS.REQUESTS_TABLE);

    //Test trouble with convertor
   /* $('.jsBtnDeleteStudent').click(function () {
        var objFacultySave = {
            namefaculty: $('.jsInputFaculty1').val()
        };

        $.ajax({
            url: 'faculty',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objFacultySave),
            success: function (objFacultySave) {
                $('#fof').text(objFacultySave.namefaculty);
            }
        });
    });*/
    // Add Faculty(Post)
    $('.jsBtnAddFaculty').click(function () {
        var objFacultySave = {
            namefaculty: $('.jsInputFaculty').val()
        };

        $.ajax({
            url: 'faculty',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objFacultySave),
            success: function (objFacultySave) {
                $('#fof1').text(objFacultySave.namefaculty);
            }
        });
    });

    // Add Speciality(Post)
    $('.jsBtnAddSpeciality').click(function () {
        var objSpecialitySave = {
            namespeciality: $('.jsinputspeciality').val(),
            facultyId : $('.jsInputTypeaHeadFaculty').val()

           // facultyViewModelSpeciality: $('.jsinputtypeaheadfaculty').val()
        };

        $.ajax({
            url: 'createSpecialty1',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objSpecialitySave),
            success: function (objSpecialitySave) {
                $('#sos').text(objSpecialitySave.namefaculty + objSpecialitySave.namespeciality);
            }
        });
    });



        // Add Student(Post)
        $('.jsBtnAddStudent').click(function () {

            var objStudSave = {
                firstname: $('.jsInputName').val(),
                lastname: $('.jsInputSurname').val(),
                patronymic:$('.jsInputPatronomyc').val(),
                group: $('.jsInputGroup').val(),
                averagescore:$('.jsInputAverageScore').val(),
                isbudget:$('.jsInputBudget').val(),
                statuspractice:$('.jsInputStatus').val(),
                specialityName:$('.jsInputNeededSpeciality').val(),
                facultyName:$('.jsInputNeededFaculty').val()
            };

            $.ajax({
                url: 'users',
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                mimeType: 'application/json',
                data: JSON.stringify(objStudSave),
                success: function (objStudSave) {
                    $('#hoh').text(objStudSave.firstname + objStudSave.lastname + objStudSave.patronymic
                        + objStudSave.group + objStudSave.averagescore + objStudSave.isbudget + objStudSave.statuspractice);

                }
            });
        });


    // bootstrap-table documentation http://bootstrap-table.wenzhixin.net.cn/documentation
    $.ajax({
        url: 'students',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        mimeType: 'application/json',
        success: function (students) {
            $studentsTable.bootstrapTable('load', students);
            $studentsTable.on('click-row.bs.table', function (e, clickedUser) {
                console.log(clickedUser);
            });
        }
    });

    $.ajax({
        url: 'requests',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        mimeType: 'application/json',
        success: function (requests) {
            $requestsTable.bootstrapTable('load', requests);
            $requestsTable.on('click-row.bs.table', function (e, clickedUser) {
                console.log(clickedUser);
           });
        }
    });


});