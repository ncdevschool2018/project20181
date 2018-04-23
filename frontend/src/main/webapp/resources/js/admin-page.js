$(document).ready(function () {

    var ELEMENTS = {
        STUDENTS_TABLE: '.jsStudentsTable',
        REQUESTS_TABLE: '.jsRequestsTable'
    };
    var  $studentsTable = $(ELEMENTS.STUDENTS_TABLE),
         $requestsTable = $(ELEMENTS.REQUESTS_TABLE);

    // Add Faculty(Post)(viewmodel)
    $('.jsBtnAddFaculty').click(function (event) {
        event.stopPropagation();
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

    // Add Speciality(Post)(entity)
    $('.jsBtnAddSpeciality').click(function (event) {
        event.stopPropagation();
        var objSpecialitySave = {
            namespeciality: $('.jsinputspeciality').val(),
            facultyId : $("#modalSpeciality").find(".availableFaculties option:selected").attr("class")
        };

        $.ajax({
            url: 'createSpecialty',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objSpecialitySave),
            success: function (objSpecialitySave) {
                $('#sos').text(objSpecialitySave.facultyId + objSpecialitySave.namespeciality);
            }
        });
    });

    // Add Request(Post)(viewmodel)
    $('.jsBtnAddRequest').click(function (event) {
        event.stopPropagation();
        var objRequestSave = {
            namecompany: $('.jsInputNameCompany').val(),
            datefrom: $('.jsInputDateFrom').val(),
            dateto: $('.jsInputDateTo').val(),
            minaverage: $('.jsInputMinAverageScore').val(),
            totalquantity: $('.jsInputTotalQuantity').val(),
            statuspractice: $('.jsInputStatusPractice').val(),
            specialityId: $('#modalRequest').find('.availableSpecialities option:selected').attr("class"),
            accountid: $('#modalRequest').find('.availableHeadsOfPractice option:selected').attr("class")
        };

        $.ajax({
            url: 'createRequest',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objRequestSave),
            success: function (objRequestSave) {
                $('#ror').text(objRequestSave.specialityId + objRequestSave.dateto + objRequestSave.statuspractice +objRequestSave.accountid);
                $requestsTable.bootstrapTable('reload', objRequestSave);
            }
        });
    });

    // Add Student(Post)
    $('.jsBtnAddStudent').click(function (event) {
            event.stopPropagation();
            var objStudSave = {
               // firstname: $('.jsInputName').val(),
                //lastname: $('.jsInputSurname').val(),
               // patronymic:$('.jsInputPatronomyc').val(),
                group: $('.jsInputGroup').val(),
                averagescore:$('.jsInputAverageScore').val(),
                isbudget:$('.jsInputBudget').val(),
                statuspractice:$('.jsInputStatus').val(),
                //specialityName:$('.jsInputNeededSpeciality').val(),
                //facultyName:$('.jsInputNeededFaculty').val()
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


    $('.jsOpenModalSpeciality').click(function (event) {
        event.stopPropagation();
        getAvailableFaculty();
    });
    $('.jsOpenModalRequest').click(function (event) {
        event.stopPropagation();
        getAvailableSpeciality();
        getAvailableHeadOfPractice();
    });
    $('.jsOpenModalStudent').click(function (event) {
        event.stopPropagation();
        getAvailableSpeciality();
        getAvailableAccountStudents();
    });

    //typeahead Full Speciality
    function getAvailableSpeciality() {
        $.ajax({
            async: false,
            url: 'specialtyList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (specialityList) {
                $(".availableSpecialities").html("");
                specialityList ? function () {
                    specialityList.some(function (specialityList) {
                        $(".availableSpecialities").append("<option class=\"" + specialityList.idSpeciality + "\">" + specialityList.namespeciality + "</option>")
                    });
                }() : false;
            }
        });
    }
    //typeahead Full Faculty
    function getAvailableFaculty() {
        $.ajax({
            async: false,
            url: 'facultyList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (facultyList) {
                $(".availableFaculties").html("");
                facultyList ? function () {
                    facultyList.some(function (facultyList) {
                        $(".availableFaculties").append("<option class=\"" + facultyList.idFaculty + "\">" + facultyList.namefaculty + "</option>")
                    });
                }() : false;
            }
        });
    }
    //typeahead Full Head Of Practice
    function getAvailableHeadOfPractice() {
        $.ajax({
            async: false,
            url: 'headOfPracticeList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (headOfPracticeList) {
                $(".availableHeadsOfPractice").html("");
                headOfPracticeList ? function () {
                    headOfPracticeList.some(function (headOfPracticeList) {
                        $(".availableHeadsOfPractice").append("<option class=\"" + headOfPracticeList.idAccount + "\">" + headOfPracticeList.firstname +
                            " " + headOfPracticeList.lastname + " " + headOfPracticeList.patronymic + "</option>")
                    });
                }() : false;
            }
        });
    }
    //typeahead Full Account of Student
    function getAvailableAccountStudents() {
        $.ajax({
            async: false,
            url: 'studentsList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (studentsList) {
                $(".availableAccountStudent").html("");
                studentsList ? function () {
                    studentsList.some(function (studentsList) {
                        $(".availableAccountStudent").append("<option class=\"" + studentsList.idAccount + "\">" + studentsList.firstname +
                            " " + studentsList.lastname + " " + studentsList.patronymic + "</option>")
                    });
                }() : false;
            }
        });
    }

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