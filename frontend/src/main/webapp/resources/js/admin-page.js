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
            }
        });
    });

    // Add Student(Post)(entity)
    $('.jsBtnAddandEditStudent').click(function (event) {
            event.stopPropagation();
            var objStudSave = {
                idStudent: $('.jsInputIdStudent').val(),
                groupStudent: $('.jsInputGroup').val(),
                averagescore:$('.jsInputAverageScore').val(),
                isbudget:$('.jsInputBudget').val(),
                statuspractice:$('.jsInputStatusStudent').val(),
                adress:$('.jsInputAdress').val(),
                phone:$('.jsInputPhone').val(),
                comment:$('.jsInputComment').val(),
                specialityId: $('#modalStudent').find('.availableSpecialities option:selected').attr("class"),
                accountId: $('#modalStudent').find('.availableAccountStudent option:selected').attr("class")
            };

            $.ajax({
                url: 'createOrEditStudent',
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                mimeType: 'application/json',
                data: JSON.stringify(objStudSave),
                success: function (objStudSave) {
                    $('#hoh').text(objStudSave.firstname + objStudSave.lastname + objStudSave.patronymic
                        + objStudSave.idStudent + objStudSave.specialityId + objStudSave.accountId + objStudSave.firstname);
                }
            });
        });
    //Add Head Of Practice
    $('.jsBtnAddHeadOfPractice').click(function (event) {
        event.stopPropagation();
        var objHeadOfPracticeSave = {
            firstname: $('.jsInputNameHeadOfPractice').val(),
            lastname: $('.jsInputSurnameHeadOfPractice').val(),
            patronymic: $('.jsInputPatronymicHeadOfPractice').val(),
            email: $('.jsInputEmailHeadOfPractice').val(),
            login: $('.jsInputLoginHeadOfPractice').val(),
            password: $('.jsInputPasswordHeadOfPractice').val()
        };

        $.ajax({
            url: 'createHeadOfPractice',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objHeadOfPracticeSave),
            success: function (objHeadOfPracticeSave) {
                $('#hop').text(objHeadOfPracticeSave.password + objHeadOfPracticeSave.patronymic);
            }
        });
    });
    //Delete Student(Post)
    $('.jsBtnDeleteStudent').click(function () {
    var studentIdForDelete = $studentsTable.bootstrapTable('getSelections');
    console.log(studentIdForDelete);

        $.ajax({
            url: 'deleteStudent',
            type: 'POST',
            dataType: 'text',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(studentIdForDelete),
            success: function () {

            }
        });

    });


    $('.jsBtnResetStudent').click(function (event) {
        $('#modalStudent').find("input,textarea,select").val('');
    });
    /*$('.jsOpenModalStudentForEdit').click(function () {
        var  studentIdForEdit = $studentsTable.bootstrapTable('getSelections')[0].idStudent;

        $.ajax({
           // async: false,
            url: 'loadStudentForEdit',
            type: 'GET',
            dataType: 'text',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  studentIdForEdit},
            success: function (objOneStudentForEdit) {
                $('#hoh1').text(objOneStudentForEdit.firstname);
            }
        });
    });*/



    $('.jsOpenModalMultiSelect').click(function () {
       getAvailableStudent();
        getAvailableRequest();
        typeaheadStudent();
    });
    $('.jsOpenModalSpeciality').click(function () {
        getAvailableFaculty();
    });
    $('.jsOpenModalRequest').click(function () {
        getAvailableSpeciality();
        getAvailableHeadOfPractice();
    });
    $('.jsOpenModalStudent').click(function () {
        $('.jsTitleEditStudent').hide();
        $('.jsDivFormGroupShowforEdit').show();
        $('.jsTitleAddStudent').show();
        getAvailableSpeciality();
        getAvailableAccountStudents();
    });
    $('.jsOpenModalStudentForEdit').click(function () {
        $('.jsTitleAddStudent').hide();
        $('.jsTitleEditStudent').show();
        $('.jsDivFormGroupShowforEdit').show();
        LoadStudentEntityForEditStudent();
        getAvailableAccountStudents();
        getAvailableSpeciality();
    });

    $('.jsOpenTableStudents').click(function () {
       ListAllStudents();
    });
    $('.jsOpenTableRequests').click(function () {
       ListAllRequests();
    });

    //select getFull Speciality
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
                console.log(typeof specialityList);
                $(".availableSpecialities").html("");
                specialityList ? function () {
                    specialityList.some(function (specialityList) {
                        $(".availableSpecialities").append("<option class=\"" + specialityList.idSpeciality + "\">" + specialityList.namespeciality + "</option>")
                    });
                }() : false;
            }
        });
    }
    //select getFull Faculties
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
    //select getFull Head Of Practices
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
    //select getFull Accounts of Students
    function getAvailableAccountStudents() {
        $.ajax({
            async: false,
            url: 'studentsAccountList',
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
    //select getFull Students
    function getAvailableStudent() {
        $.ajax({
            async: false,
            url: 'studentList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (studentsList) {
                $(".availableStudent").html("");
                studentsList ? function () {
                    studentsList.some(function (studentsList) {
                        $(".availableStudent").append("<option class=\"" + studentsList.idStudent + "\">" + studentsList.firstname +
                            " " + studentsList.lastname + " " + studentsList.patronymic + "</option>")
                    });
                }() : false;
            }
        });
    }
    //select getFull Students
    function getAvailableRequest() {
        $.ajax({
            async: false,
            url: 'requestList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (requestsList) {
                $(".availableRequest").html("");
                requestsList ? function () {
                    requestsList.some(function (requestsList) {
                        $(".availableRequest").append("<option class=\"" + requestsList.idRequest + "\">"+ requestsList.namecompany +"</option>")
                    });
                }() : false;
            }
        });
    }

    //Load to select Student for EditStudent
    function LoadStudentEntityForEditStudent() {
        var  studentIdForEdit = $studentsTable.bootstrapTable('getSelections')[0].idStudent;

        $.ajax({
            async: false,
            url: 'loadStudentForEdit',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  studentIdForEdit},
            success: function (objOneStudentForEdit) {
                console.log(typeof objOneStudentForEdit);

                var str = objOneStudentForEdit.firstname + " " + objOneStudentForEdit.lastname + " " + objOneStudentForEdit.patronymic;
                console.log(str);
                console.log(str === "Yura Druschits Aleksandrovich");
                console.log(typeof str);

              // $(".availableAccountStudent [value='objOneStudentForEdit.firstname objOneStudentForEdit.lastname objOneStudentForEdit.patronymic']");
                //$(".availableAccountStudent").find("option:contains('Yura Druschits Aleksandrovich')").attr("selected", "selected");
                $('.jsInputIdStudent').val(objOneStudentForEdit.idStudent);
                $(".availableAccountStudent").find("option:contains('Yura Druschits Aleksandrovich')").attr("selected", "selected");



                $('.jsInputGroup').val(objOneStudentForEdit.groupStudent);
                $('.jsInputAverageScore').val(objOneStudentForEdit.averagescore);
                $('.jsInputBudget').val(objOneStudentForEdit.isbudget);
                $('.jsInputStatusStudent').val(objOneStudentForEdit.statuspractice);
                $('.jsInputAdress').val(objOneStudentForEdit.adress);
                $('.jsInputPhone').val(objOneStudentForEdit.phone);
                $('.jsInputComment').val(objOneStudentForEdit.comment);

            }
        });
    }




    //typeahead Students
    function typeaheadStudent() {
        $('.jsInputTypeaheadStudent').typeahead({
            source: function (query, result) {
                $.ajax({
                    async: false,
                    url: 'studentList',
                    type: 'GET',
                    dataType: 'json',
                    contentType: "application/json",
                    mimeType: 'application/json',
                    data: {query:query},
                    success: function (data) {
                        result($.map(data,function (item) {
                            return item;
                        }));
                    }
                })
            }
        });
    }


    // bootstrap-table documentation http://bootstrap-table.wenzhixin.net.cn/documentation
    function ListAllStudents() {
        $.ajax({
            url: 'studentList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            success: function (students) {
                $studentsTable.bootstrapTable('load', students);
                $studentsTable.on('click-row.bs.table', function (e, students) {
                    console.log(students);
                });
            }
        });
    }

    function ListAllRequests() {
        $.ajax({
            url: 'requestList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            success: function (requests) {
                $requestsTable.bootstrapTable('load', requests);
                $requestsTable.on('click-row.bs.table', function (e, requests) {
                    console.log(requests);
                });
            }
        });
    }



    function showFormatter() {
        return '<a href="/aboutStudent?id="' + 'class="btn btn-info jsMoreInfoAboutStudentButton">Info</a>';
    }
});