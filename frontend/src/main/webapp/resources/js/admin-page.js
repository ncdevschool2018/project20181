$(document).ready(function () {



    var ELEMENTS = {
        STUDENTS_TABLE: '.jsStudentsTable',
        REQUESTS_TABLE: '.jsRequestsTable',
        STUDENT_TABLE_MAV: '.jsStudentTableForMAV'
    };
    var  $studentsTable = $(ELEMENTS.STUDENTS_TABLE),
         $requestsTable = $(ELEMENTS.REQUESTS_TABLE),
         $studentsTableForMAV = $(ELEMENTS.STUDENT_TABLE_ONE);



    $('.jsBtnLogin').click(function (event) {
        event.stopPropagation();

        $.ajax({
            url: 'authorize',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                username: $('.jsInputUsername').val(),
                password: $('.jsInputPassword').val()
            }),
            success: function (xhr) {
                console.log(xhr.status);
                window.location.href = "/home"
            },
            error: function (xhr, textStatus) {
                xhr.status == 401 ? alert('Credentials are not correct.'): alert('Something went wrong, try again later.');
            }
        });


    });

//--------------------------------------------------------BUSINESS LOGIC-----------------------------------------------------------------------------------------------------------------------

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
    $('.jsBtnAddAndEditRequest').click(function (event) {
        event.stopPropagation();
        var objRequestSave = {
            idRequest:$('.jsInputIdRequest').val(),
            namecompany: $('.jsInputNameCompany').val(),
            datefrom: $('.jsInputDateFrom').val(),
            dateto: $('.jsInputDateTo').val(),
            statuspractice:$('.jsinputstatusrequest').val(),
            minaverage: $('.jsInputMinAverageScore').val(),
            totalquantity: $('.jsInputTotalQuantity').val(),
            specialityId: $('#modalRequest').find('.availableSpecialities option:selected').attr("class"),
            headOfPracticeId: $('#modalRequest').find('.availableHeadsOfPractice option:selected').attr("class")
        };

        $.ajax({
            url: 'createRequest',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objRequestSave),
            success: function (objRequestSave) {
                $('#ror').text(objRequestSave.specialityId + objRequestSave.dateto + objRequestSave.statuspractice +objRequestSave.headOfPracticeId);
            }
        });
    });
    // Add Student(Post)(entity)
    $('.jsBtnAddAndEditStudent').click(function (event) {
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
                   /* $('#hoh').text(objStudSave.firstname + objStudSave.lastname + objStudSave.patronymic
                        + objStudSave.idStudent + objStudSave.specialityId + objStudSave.accountId + objStudSave.firstname);*/
                    var row = {
                        checkbox : "-",
                        firstname : objStudSave.firstname,
                        lastname : objStudSave.lastname,
                        patronymic : objStudSave.patronymic,
                        groupStudent : objStudSave.groupStudent,
                        averagescore : objStudSave.averagescore,
                        isbudget : objStudSave.isbudget,
                        statuspractice : objStudSave.statuspractice,
                        specialityName : objStudSave.specialityName,
                        facultyName : objStudSave.facultyName,
                        //moreInfo : "-",
                        idStudent : objStudSave.idStudent
                    };
                    $studentsTable.bootstrapTable('prepend', row);
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
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(studentIdForDelete),
            success: function () {
                $studentsTable.bootstrapTable('remove', {
                    field: 'idStudent',
                    values: studentIdForDelete
                });
            }
        });

    });
    //Delete Request(Post)
    $('.jsBtnDeleteRequest').click(function () {
        var requestIdForDelete = $requestsTable.bootstrapTable('getSelections');
        console.log(requestIdForDelete);

        $.ajax({
            url: 'deleteRequest',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(requestIdForDelete),
            success: function () {
                $studentsTable.bootstrapTable('remove', {
                    field: 'idRequest',
                    values: requestIdForDelete
                });
            }
        });

    });
    //Release Student from Practice
    $('.jsBtnReleaseStudent').click(function () {
        var studentIdForRelease = $studentsTable.bootstrapTable('getSelections')[0].idStudent;
        console.log(studentIdForRelease);

        $.ajax({
            url: 'releaseStudent',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  studentIdForRelease},
            success: function (objOneRequestForEdit) {
                console.log(typeof objOneRequestForEdit);
            }
        });
    });
    //Assign Student on Practice
    $('.jsBtnAssignStudentOnPractice').click(function (event) {
       var studentIdForRequest = $('#modalMultiSelect').find('.availableStudent option:selected').attr("class"),
       requestIdForStudent = $('#modalMultiSelect').find('.availableRequest option:selected').attr("class");
        console.log(studentIdForRequest, requestIdForStudent);

        $.ajax({
            url: 'assignStudentOnPractice',
            type: 'POST',
            dataType: 'json',
            mimeType: 'application/json',
            data: ({ student: studentIdForRequest, practice : requestIdForStudent }),
            success: function () {

            }
        });
    });
    //Reassign Student on Practice
    $('.jsBtnReAssignStudentOnPractice').click(function (event) {
        var studentIdForRequest = $('#modalMultiSelect').find('.availableStudent option:selected').attr("class"),
            requestIdForStudent = $('#modalMultiSelect').find('.availableRequest option:selected').attr("class");
        console.log(studentIdForRequest, requestIdForStudent);

        $.ajax({
            url: 'reassignStudentOnPractice',
            type: 'POST',
            dataType: 'json',
            mimeType: 'application/json',
            data: ({ student: studentIdForRequest, practice : requestIdForStudent }),
            success: function () {

            }
        });
    });

//--------------------------------------------------------RESET-----------------------------------------------------------------------------------------------------------------------
    //Очистка полей в модальном окне студента
    $('.jsBtnResetStudent').click(function (event) {
        $('#modalStudent').find("input,textarea,select").val('');
    });
    //Очистка полей в модальном окне запроса
    $('.jsBtnResetRequest').click(function (event) {
        $('#modalRequest').find("input,textarea,select").val('');
    });

//--------------------------------------------------------OPEN MODAL-----------------------------------------------------------------------------------------------------------------------

    $('.jsOpenModalMultiSelect').click(function () {

       getAvailableStudent();
        getAvailableRequest();
        //typeaheadStudent();
    });

    $('.jsOpenModalMultiSelectForReassign').click(function () {
        getAvailableStudent();
        getAvailableRequest();
        //typeaheadStudent();
    });

    $('.jsOpenModalSpeciality').click(function () {
        getAvailableFaculty();
    });
    $('.jsOpenModalRequest').click(function () {
        $('.jsTitleEditRequest').hide();
        $('.jsDivIdRequestforEdit').show();
        $('.jsTitleAddRequest').show();
        getAvailableSpeciality();
        getAvailableHeadOfPractice();
    });
    $('.jsOpenModalRequestForEdit').click(function () {
        $('.jsTitleEditRequest').show();
        $('.jsDivIdRequestforEdit').show();
        $('.jsTitleAddRequest').hide();
        LoadRequestEntityForEditRequest();
        getAvailableSpeciality();
        getAvailableHeadOfPractice();
    });
    $('.jsOpenModalStudent').click(function () {
        $('.jsTitleEditStudent').hide();
        $('.jsDivIdStudentforEdit').show();
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

    $('.jsOpenTableStudentForMAV').click(function () {
        $studentsTableForMAV.on('click-row.bs.table');
    });
    $('.jsOpenTableStudents').click(function () {
       ListAllStudents();
    });
    $('.jsOpenTableRequests').click(function () {
       ListAllRequests();
    });


//--------------------------------------------------------lOAD TO SELECT and EDIT FUNCTION-----------------------------------------------------------------------------------------------------------------------
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
    //select getFull Students(Available)
    function getAvailableStudent() {
        $.ajax({
            async: false,
            url: 'studentListForSelect',
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
    //select getFull Requests(Available)
    function getAvailableRequest() {
        $.ajax({
            async: false,
            url: 'requestListForSelect',
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
                $('.jsInputStatusStudent').val(objOneStudentForEdit.statuspractice);
                //$(".availableAccountStudent").find("option:contains('Yura Druschits Aleksandrovich')").attr("selected", "selected");



                $('.jsInputGroup').val(objOneStudentForEdit.groupStudent);
                $('.jsInputAverageScore').val(objOneStudentForEdit.averagescore);
                $('.jsInputBudget').val(objOneStudentForEdit.isbudget);
                $('.jsInputAdress').val(objOneStudentForEdit.adress);
                $('.jsInputPhone').val(objOneStudentForEdit.phone);
                $('.jsInputComment').val(objOneStudentForEdit.comment);

                $('.availableSpecialities').find("option:contains('II')").attr("selected", "selected");

            }
        });
    }
    //Load to select Request for EditRequest
    function LoadRequestEntityForEditRequest() {
        var  requestIdForEdit = $requestsTable.bootstrapTable('getSelections')[0].idRequest;

        $.ajax({
            async: false,
            url: 'loadRequestForEdit',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  requestIdForEdit},
            success: function (objOneRequestForEdit) {
                console.log(typeof objOneRequestForEdit);

                $('.jsInputIdRequest').val(objOneRequestForEdit.idRequest);
                $('.jsInputStatusRequest').val(objOneRequestForEdit.statuspractice);
                $('.jsInputNameCompany').val(objOneRequestForEdit.namecompany);
                $('.jsInputDateFrom').val(objOneRequestForEdit.datefrom);
                $('.jsInputDateTo').val(objOneRequestForEdit.dateto);
                $('.jsInputMinAverageScore').val(objOneRequestForEdit.minaverage);
                $('.jsInputTotalQuantity').val(objOneRequestForEdit.totalquantity);
                $('.jsInputStatusPractice').val(objOneRequestForEdit.statuspractice);


            }
        });
    }


    //typeahead Students
   /* function typeaheadStudent() {
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
    }*/

//--------------------------------------------------------Bootstrap Table-----------------------------------------------------------------------------------------------------------------------
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
                $studentsTable.on('click-row.bs.table');
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
                $requestsTable.on('click-row.bs.table');
            }
        });
    }




    var SizeCheckboxOfTableStudent = 0;
    $studentsTable.on('check.bs.table', function (e) {
        SizeCheckboxOfTableStudent++;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', false);
            $('.jsBtnAboutStudent').prop('disabled', true);
        } else $('button').prop('disabled', false);
    });
    $studentsTable.on('uncheck.bs.table', function (e) {
        SizeCheckboxOfTableStudent--;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', false);
            $('.jsBtnAboutStudent').prop('disabled', true);
        } else if (SizeCheckboxOfTableStudent === 1) {
            $('button').prop('disabled', false);
        } else $('button').prop('disabled', true);
    });
});