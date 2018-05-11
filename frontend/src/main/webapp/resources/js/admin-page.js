$(document).ready(function () {
    /*var MODAL_ELEMENT = {
        MODAL_REQUEST: '#modalRequest',
        MODAL_STUDENT: '#modalStudent',
        MODAL_FACULTY: '#modalFaculty',
        MODAL_SPECIALITY: '#modalSpeciality',
        MODAL_HEAD: '#modalHeadOfPractice',
        MODAL_MULTI: '#modalMultiSelect'
    };*/
    var TABLE_ELEMENTS = {
        STUDENTS_TABLE: '.jsStudentsTable',
        REQUESTS_TABLE: '.jsRequestsTable',
        STUDENT_TABLE_MAV: '.jsStudentTableForMAV'
    };

    var BTN_ELEMENT = {
        BTN_LOGIN: '.jsBtnLogin',
        BTN_REGISTRATION: '.jsBtnRegistration',
        BTN_ABOUT_STUDENT: '.jsBtnAboutStudent',
        BTN_DELETE_STUDENT: '.jsBtnDeleteStudent',
        BTN_RELEASE_STUDENT: '.jsBtnReleaseStudent',
        BTN_ADD_SPECIALITY: '.jsBtnAddSpeciality',
        BTN_ADD_FACULTY: '.jsBtnAddFaculty',
        BTN_ADD_OR_EDIT_STUDENT: '.jsBtnAddAndEditStudent',
        BTN_RESET_STUDENT: '.jsBtnResetStudent',
        BTN_ASSIGN_STUDENT_ON_PRACTICE: '.jsBtnAssignStudentOnPractice',
        BTN_REASSIGN_STUDENT_ON_PRACTICE: '.jsBtnReAssignStudentOnPractice',
        BTN_DELETE_REQUEST: '.jsBtnDeleteRequest',
        BTN_ADD_HEAD: '.jsBtnAddHeadOfPractice',
        BTN_ADD_OR_EDIT_REQUEST: '.jsBtnAddAndEditRequest',
        BTN_RESET_REQUEST: '.jsBtnResetRequest',

        BTN_OPEN_MODAL_FACULTY: '.jsOpenModalFaculty',
        BTN_OPEN_MODAL_SPECIALITY: '.jsOpenModalSpeciality',
        BTN_OPEN_MODAL_STUDENT: '.jsOpenModalStudent',
        BTN_OPEN_MODAL_STUDENT_FOR_EDIT: '.jsOpenModalStudentForEdit',
        BTN_OPEN_MODAL_MULTI_SELECT: '.jsOpenModalMultiSelect',
        BTN_OPEN_MODAL_MULTI_SELECT_FOR_REASSIGN: '.jsOpenModalMultiSelectForReassign',
        BTN_OPEN_MODAL_HEAD: '.jsOpenModalHeadOfPractice',
        BTN_OPEN_MODAL_REQUEST: '.jsOpenModalRequest',
        BTN_OPEN_MODAL_REQUEST_FOR_EDIT: '.jsOpenModalRequestForEdit'
    };

    var INPUT_ELEMENT = {
        INPUT_NAME_FACULTY: '.jsInputFaculty',
        INPUT_NAME_SPECIALITY: '.jsInputSpeciality',

        INPUT_ID_STUDENT: '.jsInputIdStudent',
        INPUT_STATUS_STUDENT: '.jsInputStatusStudent',
        INPUT_NAME_GROUP: '.jsInputGroup',
        INPUT_AVERAGE_SCORE: '.jsInputAverageScore',
        INPUT_ADRESS: '.jsInputAdress',
        INPUT_PHONE: '.jsInputPhone',
        INPUT_COMMENT: '.jsInputComment'




    };

    var  ATRIBUT_HTML = {
        $studentsTable : $(TABLE_ELEMENTS.STUDENTS_TABLE),
        $requestsTable : $(TABLE_ELEMENTS.REQUESTS_TABLE),
        $studentsTableForMAV : $(TABLE_ELEMENTS.STUDENT_TABLE_MAV),

        $buttonLogin : $(BTN_ELEMENT.BTN_LOGIN),
        $buttonRegistration : $(BTN_ELEMENT.BTN_REGISTRATION),
        $buttonAboutStudent : $(BTN_ELEMENT.BTN_ABOUT_STUDENT),
        $buttonDeleteStudent : $(BTN_ELEMENT.BTN_DELETE_STUDENT),
        $buttonReleaseStudent : $(BTN_ELEMENT.BTN_RELEASE_STUDENT),
        $buttonAddSpeciality : $(BTN_ELEMENT.BTN_ADD_SPECIALITY),
        $buttonAddFaculty : $(BTN_ELEMENT.BTN_ADD_FACULTY),
        $buttonAddOrEditStudent : $(BTN_ELEMENT.BTN_ADD_OR_EDIT_STUDENT),
        $buttonResetStudent : $(BTN_ELEMENT.BTN_RESET_STUDENT),
        $buttonAssignStudentOnPractice : $(BTN_ELEMENT.BTN_ASSIGN_STUDENT_ON_PRACTICE),
        $buttonReassignStudentOnPractice : $(BTN_ELEMENT.BTN_REASSIGN_STUDENT_ON_PRACTICE),
        $buttonDeleteRequest : $(BTN_ELEMENT.BTN_DELETE_REQUEST),
        $buttonAddHead : $(BTN_ELEMENT.BTN_ADD_HEAD),
        $buttonAddOrEditRequest : $(BTN_ELEMENT.BTN_ADD_OR_EDIT_REQUEST),
        $buttonResetRequest : $(BTN_ELEMENT.BTN_RESET_REQUEST),


        $buttonOpenModalFaculty : $(BTN_ELEMENT.BTN_OPEN_MODAL_FACULTY),
        $buttonOpenModalSpeciality : $(BTN_ELEMENT.BTN_OPEN_MODAL_SPECIALITY),
        $buttonOpenModalHead : $(BTN_ELEMENT.BTN_OPEN_MODAL_HEAD),
        $buttonOpenModalStudentForSave : $(BTN_ELEMENT.BTN_OPEN_MODAL_STUDENT),
        $buttonOpenModalStudentForEdit : $(BTN_ELEMENT.BTN_OPEN_MODAL_STUDENT_FOR_EDIT),
        $buttonOpenModalRequestForSave : $(BTN_ELEMENT.BTN_OPEN_MODAL_REQUEST),
        $buttonOpenModalRequestForEdit : $(BTN_ELEMENT.BTN_OPEN_MODAL_REQUEST_FOR_EDIT),
        $buttonOpenModalMultuSelectForAssign : $(BTN_ELEMENT.BTN_OPEN_MODAL_MULTI_SELECT),
        $buttonOpenModalMultuSelectForReassign : $(BTN_ELEMENT.BTN_OPEN_MODAL_MULTI_SELECT_FOR_REASSIGN),




        $inputNameFaculty: $(INPUT_ELEMENT.INPUT_NAME_FACULTY),
        $inputNameSpeciality: $(INPUT_ELEMENT.INPUT_NAME_SPECIALITY),

        $inputIdStudent: $(INPUT_ELEMENT.INPUT_ID_STUDENT),
        $inputStatusStudent: $(INPUT_ELEMENT.INPUT_STATUS_STUDENT),
        $inputNameGroup: $(INPUT_ELEMENT.INPUT_NAME_GROUP),
        $inputAverageScore: $(INPUT_ELEMENT.INPUT_AVERAGE_SCORE),
        $inputAdress: $(INPUT_ELEMENT.INPUT_ADRESS),
        $inputPhone: $(INPUT_ELEMENT.INPUT_PHONE),
        $inputComment: $(INPUT_ELEMENT.INPUT_COMMENT)
        /*$modalRequest : $(MODAL_ELEMENT.MODAL_REQUEST),
        $modalStudent : $(MODAL_ELEMENT.MODAL_STUDENT),
        $modalFaculty : $(MODAL_ELEMENT.MODAL_FACULTY),
        $modalSpeciality : $(MODAL_ELEMENT.MODAL_SPECIALITY),
        $modalHead : $(MODAL_ELEMENT.MODAL_HEAD),
        $modalMulti : $(MODAL_ELEMENT.MODAL_MULTI)*/
    };

    window.ATRUBUT_HTML = ATRIBUT_HTML;


    //Authorization(POST)
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
    //Registration POST
    $('.jsBtnRegistration').click(function (event) {
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
    });




//--------------------------------------------------------BUSINESS LOGIC-----------------------------------------------------------------------------------------------------------------------

    // Add Faculty(Post)(viewmodel)
    $('.jsBtnAddFaculty').click(function (event) {
        event.stopPropagation();
        var objFacultySave = {
            namefaculty: ATRUBUT_HTML.$inputNameFaculty.val()
        };

        $.ajax({
            url: 'faculty',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objFacultySave),
            success: function (confirmAddFaculty) {
                if(confirmAddFaculty === true) {
                    alert("Adding Faculty was successful");
                    $('#modalFaculty').modal('hide');
                }
                else {alert("Adding Faculty was unsuccessful. That's faculty is existing")}
            }
        });
    });
    // Add Speciality(Post)(entity)
    $('.jsBtnAddSpeciality').click(function (event) {
        event.stopPropagation();
        var objSpecialitySave = {
            namespeciality: ATRUBUT_HTML.$inputNameSpeciality.val(),
            facultyId : $("#modalSpeciality").find(".availableFaculties option:selected").attr("class")
        };

        $.ajax({
            url: 'createSpecialty',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objSpecialitySave),
            success: function (confirmAddSpeciality) {
                if(confirmAddSpeciality === true) {
                    alert("Adding Speciality was successful");
                    $('#modalSpeciality').modal('hide');
                }
                else {alert("Adding Speciality was unsuccessful.That's speciality is existing")}
            }
        });
    });
    // Add and Edit Request(Post)(viewmodel)
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
                ListAllRequests();
                $('.jsBtnResetRequest').trigger('click');
                ATRUBUT_HTML.$requestsTable.trigger('uncheck-all.bs.table');
                $('#modalRequest').modal('hide');
            }
        });
    });
    // Add and Edit Student(Post)(entity)
    $('.jsBtnAddAndEditStudent').click(function (event) {
            event.stopPropagation();
            var objStudSave = {
                idStudent: ATRUBUT_HTML.$inputIdStudent.val(),
                groupStudent: ATRUBUT_HTML.$inputNameGroup.val(),
                averagescore: ATRUBUT_HTML.$inputAverageScore.val(),
                isbudget: $('input[name=isBudget]:checked').val(),
                statuspractice: ATRUBUT_HTML.$inputStatusStudent.val(),
                adress: ATRUBUT_HTML.$inputAdress.val(),
                phone: ATRUBUT_HTML.$inputPhone.val(),
                comment: ATRUBUT_HTML.$inputComment.val(),
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
                    /*if(objStudSave.idStudent !== null){
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
                            idStudent : objStudSave.idStudent
                        };
                       $studentsTableForMAV.bootstrapTable('updateRow',{index: objStudSave.idStudent, row: row});
                        $studentsTableForMAV.bootstrapTable('prepend', row);
                    }*/
                    $('#modalStudent').modal('hide');
                    window.location.href = "/studentsViewAdmin";
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
            success: function (confirmAddHead) {
                if(confirmAddHead === true) {
                    alert("Adding Faculty was successful");
                    $('#modalHeadOfPractice').modal('hide');
                }
                else {alert("Adding Faculty was unsuccessful")}
            }
        });
    });
    //Delete Student(Post)
    $('.jsBtnDeleteStudent').click(function () {
    var studentIdForDelete = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getSelections');
    console.log(studentIdForDelete);

        $.ajax({
            url: 'deleteStudent',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(studentIdForDelete),
            success: function (studentsList) {
                /*$studentsTable.bootstrapTable('remove', {
                    field: 'idStudent',
                    values: students.idStudent
                });*/
                //$studentsTable.bootstrapTable('removeByUniqueId', 18)
                console.log(studentsList);
                studentsList ? function () {
                    studentsList.some(function (studentsList) {
                            alert("Delete of Students was successfully");
                            window.location.href = "/studentsViewAdmin";
                    });
                }() : alert("Delete of Students was unsuccessfully");
            }
        });

    });
    //Delete Request(Post)
    $('.jsBtnDeleteRequest').click(function () {
        var requestIdForDelete = ATRUBUT_HTML.$requestsTable.bootstrapTable('getSelections');
        console.log(requestIdForDelete);

        $.ajax({
            url: 'deleteRequest',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(requestIdForDelete),
            success: function (confirmDeleteRequest) {
                if(confirmDeleteRequest === true){
                    alert("Delete of Requests was successfully");
                    ListAllRequests();
                    ATRUBUT_HTML.$requestsTable.trigger('uncheck-all.bs.table');
                }
                else {alert("Delete of Requests was unsuccessfully");}
            }
        });

    });
    //Release Student from Practice
    $('.jsBtnReleaseStudent').click(function () {
        var studentIdForRelease = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getSelections')[0].idStudent;
        console.log(studentIdForRelease);

        $.ajax({
            url: 'releaseStudent',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  studentIdForRelease},
            success: function (confirmReleaseStudent) {
                if(confirmReleaseStudent === true){
                    alert("Release of Student was successfully");
                    window.location.href = "/studentsViewAdmin";
                }
                else alert("Student has no practice");
            }
        });
    });
    //Assign Student on Practice
    $('.jsBtnAssignStudentOnPractice').click(function (event) {
       var studentIdForRequest = $('#modalMultiSelect').find('.availableStudent option:selected').attr("class"),
       requestIdForStudent = $('#modalMultiSelect').find('.availableRequest option:selected').attr("class");
       var studentFromTypeahead = $('#jsInputTypeaheadStudent').val();
       var requestFromTypeahead = $('#jsInputTypeaheadRequest').val();

       var studentId = studentFromTypeahead.split(" ");
       var requestId = requestFromTypeahead.split(" ");
       console.log(studentId[3], requestId[1], typeof studentId[3], typeof requestId[1]);


        $.ajax({
            url: 'assignStudentOnPractice',
            type: 'POST',
            dataType: 'json',
            mimeType: 'application/json',
            data: ({ student: studentId[3], practice : requestId[1] }),
            success: function (confirmAssign) {
                if(confirmAssign === true) {
                    alert("Assigning Student was successful");
                    $('#modalMultiSelect').modal('hide');
                    window.location.href = "/studentsViewAdmin";
                }
                else {alert("Assigning Student was unsuccessful. Parameters of Student don't meet the requirements or in actual practice there are no places")}
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
    //AboutStudent?????
    $('.jsBtnAboutStudent').click(function (event) {
        var studentIdForRelease = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getSelections')[0].idStudent;

        $.ajax({
            url: 'aboutStudent',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {studentId :  studentIdForRelease},
            success: function (id) {
                //window.open('/studentView/'+id,'_blank');
                window.location.href="/studentView/"+id;
                window.location.target = "_blank";

            }
        });
    });

//--------------------------------------------------------RESET-----------------------------------------------------------------------------------------------------------------------
    //Очистка полей в модальном окне студента
    $('.jsBtnResetStudent').on('click',function (event) {
        $('#modalStudent').find("input,textarea,select").val('');
        $('.jsInputStatusStudent').val("Available");
    });
    //Очистка полей в модальном окне запроса
    $('.jsBtnResetRequest').on('click',function (event) {
        $('#modalRequest').find("input,textarea,select").val('');
        $('.jsinputstatusrequest').val("Available");
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
        getAvailableHeadOfPractice();
        getAvailableFaculty();
        $('.availableFacultiesRequest').trigger('change');
    });
    $('.jsOpenModalRequestForEdit').click(function () {
        $('.jsTitleEditRequest').show();
        $('.jsDivIdRequestforEdit').show();
        $('.jsTitleAddRequest').hide();
        getAvailableHeadOfPractice();
        getAvailableFaculty();
        LoadRequestEntityForEditRequest();


    });
    $('.jsOpenModalStudent').click(function () {
        $('.jsTitleEditStudent').hide();
        $('.jsDivIdStudentforEdit').show();
        $('.jsTitleAddStudent').show();
        getAvailableAccountStudents();
        getAvailableFaculty();
        $('.availableFacultiesStudent').trigger('change');
    });
    $('.jsOpenModalStudentForEdit').click(function () {
        $('.jsTitleAddStudent').hide();
        $('.jsTitleEditStudent').show();
        $('.jsDivFormGroupShowforEdit').show();
        getAvailableAccountStudents();
        getAvailableFaculty();
        LoadStudentEntityForEditStudent();
    });

    ListAllStudents();
    ListAllRequests();
//--------------------------------------------------------TRIGGERS-----------------------------------------------------------------------
    $('.availableFacultiesStudent').on('change', function () {
        var facultyId = $('#modalStudent').find(".availableFacultiesStudent option:selected").attr("class");
        getAvailableSpeciality(facultyId);
    });
    $('.availableFacultiesRequest').on('change', function () {
        var facultyId = $('#modalRequest').find(".availableFacultiesRequest option:selected").attr("class");
        getAvailableSpeciality(facultyId);
    });

//--------------------------------------------------------lOAD TO SELECT and EDIT FUNCTION-----------------------------------------------------------------------------------------------------------------------
    //select getFull Speciality
    function getAvailableSpeciality(idFaculty) {
        $.ajax({
            async: false,
            url: 'specialtyList',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {facultyId :  idFaculty},
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
                $(".availableFacultiesStudent").html("");
                $(".availableFacultiesRequest").html("");
                facultyList ? function () {
                    facultyList.some(function (facultyList) {
                        $(".availableFaculties").append("<option class=\"" + facultyList.idFaculty + "\">" + facultyList.namefaculty + "</option>");
                        $(".availableFacultiesStudent").append("<option class=\"" + facultyList.idFaculty + "\">" + facultyList.namefaculty + "</option>");
                        $(".availableFacultiesRequest").append("<option class=\"" + facultyList.idFaculty + "\">" + facultyList.namefaculty + "</option>");

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
        var  studentIdForEdit = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getSelections')[0].idStudent;

        $.ajax({
            async: false,
            url: 'loadStudentForEdit',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  studentIdForEdit},
            success: function (objOneStudentForEdit) {
                //$(".availableAccountStudent").find("option:contains('Ugor Zaranko Igorevich')").attr("selected", "selected");
                var specialityNameForAddToSelect = objOneStudentForEdit.specialityName;
                var accountStudentForAddToSelect = objOneStudentForEdit.firstname + " " + objOneStudentForEdit.lastname + " " + objOneStudentForEdit.patronymic;
                var facultyNameForAddToSelect = objOneStudentForEdit.facultyName;
                $(".availableAccountStudent").append("<option class=\"" + objOneStudentForEdit.accountId + "\">" + objOneStudentForEdit.firstname +
                    " " + objOneStudentForEdit.lastname + " " + objOneStudentForEdit.patronymic + "</option>");
                getAvailableSpeciality(objOneStudentForEdit.facultyId);


                $('.availableAccountStudent option').filter(function() {return this.text === accountStudentForAddToSelect;}).prop("selected", true);
                $('.jsInputIdStudent').val(objOneStudentForEdit.idStudent);
                $('.jsInputStatusStudent').val(objOneStudentForEdit.statuspractice);
                $('.jsInputGroup').val(objOneStudentForEdit.groupStudent);
                $('.jsInputAverageScore').val(objOneStudentForEdit.averagescore);
                $('.jsInputBudget').val(objOneStudentForEdit.isbudget);
                $('.jsInputAdress').val(objOneStudentForEdit.adress);
                $('.jsInputPhone').val(objOneStudentForEdit.phone);
                $('.jsInputComment').val(objOneStudentForEdit.comment);
                $('.availableFacultiesStudent option').filter(function() {return this.text === facultyNameForAddToSelect;}).prop("selected", true);
                $(".availableSpecialities option").filter(function() {return this.text === specialityNameForAddToSelect;}).prop("selected", true);
            }
        });
    }
    //Load to select Request for EditRequest
    function LoadRequestEntityForEditRequest() {
        var  requestIdForEdit = ATRUBUT_HTML.$requestsTable.bootstrapTable('getSelections')[0].idRequest;

        $.ajax({
            async: false,
            url: 'loadRequestForEdit',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {data1 :  requestIdForEdit},
            success: function (objOneRequestForEdit) {
                var accountHeadForAddToSelect = objOneRequestForEdit.firstnameHeadOfPractice + " " +
                    objOneRequestForEdit.lastnameHeadOfPractice + " " + objOneRequestForEdit.patronymicHeadOfPractice,
                    specialityNameForAddToSelect = objOneRequestForEdit.nameSpeciality,
                    facultyNameForAddToSelect = objOneRequestForEdit.nameFaculty;
                    getAvailableSpeciality(objOneRequestForEdit.facultyId);

                $('.jsInputIdRequest').val(objOneRequestForEdit.idRequest);
                $('.jsInputStatusRequest').val(objOneRequestForEdit.statuspractice);
                $('.jsInputNameCompany').val(objOneRequestForEdit.namecompany);
                $('.jsInputDateFrom').val(objOneRequestForEdit.datefrom);
                $('.jsInputDateTo').val(objOneRequestForEdit.dateto);
                $('.jsInputMinAverageScore').val(objOneRequestForEdit.minaverage);
                $('.jsInputTotalQuantity').val(objOneRequestForEdit.totalquantity);
                $('.jsInputStatusPractice').val(objOneRequestForEdit.statuspractice);
                $('.availableFacultiesRequest option').filter(function() {return this.text === facultyNameForAddToSelect;}).prop("selected", true);
                $('.availableSpecialities option').filter(function() {return this.text === specialityNameForAddToSelect;}).prop("selected", true);
                $('.availableHeadsOfPractice option').filter(function() {return this.text === accountHeadForAddToSelect;}).prop("selected", true);
            }
        });
    }
//--------------------------------------------------------TYPEAHEAD-----------------------------------------------------------------------------------------------------------------------
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            // an array that will be populated with substring matches
            matches = [];
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
        };
    };

    var students = [];
    var practice = [];
    $(".jsOpenModalMultiSelect").click(function (event) {
        $.ajax({
            async : false,
            url: 'studentListForSelect',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (studentList) {
                students.length = 0;
                studentList ? function () {
                    studentList.some(function (studentList) {
                        students.push(studentList.lastname + " " + studentList.firstname + " " + studentList.patronymic + " " + studentList.idStudent);
                    });
                }() : false;
            }
        });
        $.ajax({
            async : false,
            url: 'requestListForSelect',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: '',
            success: function (requestList) {
                practice.length = 0;
                requestList ? function () {
                    requestList.some(function (requestList) {
                        practice.push(requestList.namecompany + " " + requestList.idRequest);
                    });
                }() : false;
            }
        });
    });

    $('#divForTypeaheadStudent').find('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'allStudents',
            source: substringMatcher(students)
        }
    );
    $('#divForTypeaheadRequest').find('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'allRequests',
            source: substringMatcher(practice)
        }
    );

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
                ATRUBUT_HTML.$studentsTable.bootstrapTable('load', students);
                ATRUBUT_HTML.$studentsTable.on('click-row.bs.table');
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
                ATRUBUT_HTML.$requestsTable.bootstrapTable('load', requests);
                ATRUBUT_HTML.$requestsTable.on('click-row.bs.table');
            }
        });
    }



    //Table Of Student
    var SizeCheckboxOfTableStudent = 0;
    if (SizeCheckboxOfTableStudent === 0) {
        console.log(SizeCheckboxOfTableStudent);
        $('.jsOpenModalStudentForEdit').prop('disabled', true);
        $('.jsBtnReleaseStudent').prop('disabled', true);
        $('.jsBtnAboutStudent').prop('disabled', true);
        $('.jsBtnDeleteStudent').prop('disabled', true);
    }
    ATRUBUT_HTML.$studentsTableForMAV.on('check-all.bs.table', function (e) {
        var allStudent = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getAllSelections');
        SizeCheckboxOfTableStudent = 0;
        allStudent.forEach(function(item, i, allStudent){
            SizeCheckboxOfTableStudent++;
        });
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnReleaseStudent').prop('disabled', true);
            $('.jsBtnAboutStudent').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
        else {
            $('.jsOpenModalStudentForEdit').prop('disabled', false);
            $('.jsBtnReleaseStudent').prop('disabled', false);
            $('.jsBtnAboutStudent').prop('disabled', false);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$studentsTableForMAV.on('check.bs.table', function (e) {
        SizeCheckboxOfTableStudent++;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnReleaseStudent').prop('disabled', true);
            $('.jsBtnAboutStudent').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
        else {
            $('.jsOpenModalStudentForEdit').prop('disabled', false);
            $('.jsBtnReleaseStudent').prop('disabled', false);
            $('.jsBtnAboutStudent').prop('disabled', false);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$studentsTableForMAV.on('uncheck-all.bs.table', function (e) {
        SizeCheckboxOfTableStudent = 0;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnReleaseStudent').prop('disabled', true);
            $('.jsBtnAboutStudent').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
        else if (SizeCheckboxOfTableStudent === 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', false);
            $('.jsBtnReleaseStudent').prop('disabled', false);
            $('.jsBtnAboutStudent').prop('disabled', false);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
        else {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnReleaseStudent').prop('disabled', true);
            $('.jsBtnAboutStudent').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', true);
        }
    });
    ATRUBUT_HTML.$studentsTableForMAV.on('uncheck.bs.table', function (e) {
        SizeCheckboxOfTableStudent--;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnReleaseStudent').prop('disabled', true);
            $('.jsBtnAboutStudent').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
        else if (SizeCheckboxOfTableStudent === 1) {
            $('.jsOpenModalStudentForEdit').prop('disabled', false);
            $('.jsBtnReleaseStudent').prop('disabled', false);
            $('.jsBtnAboutStudent').prop('disabled', false);
            $('.jsBtnDeleteStudent').prop('disabled', false);
        }
        else {
            $('.jsOpenModalStudentForEdit').prop('disabled', true);
            $('.jsBtnReleaseStudent').prop('disabled', true);
            $('.jsBtnAboutStudent').prop('disabled', true);
            $('.jsBtnDeleteStudent').prop('disabled', true);
        }
    });
    //Table Of Request
    var SizeCheckboxOfTableRequest = 0;
    if (SizeCheckboxOfTableRequest === 0) {
        console.log(SizeCheckboxOfTableRequest);
        $('.jsOpenModalRequestForEdit').prop('disabled', true);
        $('.jsBtnDeleteRequest').prop('disabled', true);
    }
    ATRUBUT_HTML.$requestsTable.on('check-all.bs.table', function (e) {
        var allRequest = ATRUBUT_HTML.$requestsTable.bootstrapTable('getAllSelections');
        SizeCheckboxOfTableRequest = 0;
        allRequest.forEach(function(item, i, allRequest){
            SizeCheckboxOfTableRequest++;
        });
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            $('.jsOpenModalRequestForEdit').prop('disabled', true);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
        else {
            $('.jsOpenModalRequestForEdit').prop('disabled', false);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$requestsTable.on('check.bs.table', function (e) {
        SizeCheckboxOfTableRequest++;
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            $('.jsOpenModalRequestForEdit').prop('disabled', true);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
        else {
            $('.jsOpenModalRequestForEdit').prop('disabled', false);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$requestsTable.on('uncheck-all.bs.table', function (e) {
        SizeCheckboxOfTableRequest = 0;
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            $('.jsOpenModalRequestForEdit').prop('disabled', true);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
        else if (SizeCheckboxOfTableRequest === 1) {
            $('.jsOpenModalRequestForEdit').prop('disabled', false);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
        else {
            $('.jsOpenModalRequestForEdit').prop('disabled', true);
            $('.jsBtnDeleteRequest').prop('disabled', true);
        }
    });
    ATRUBUT_HTML.$requestsTable.on('uncheck.bs.table', function (e) {
        SizeCheckboxOfTableRequest--;
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            $('.jsOpenModalRequestForEdit').prop('disabled', true);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
        else if (SizeCheckboxOfTableRequest === 1) {
            $('.jsOpenModalRequestForEdit').prop('disabled', false);
            $('.jsBtnDeleteRequest').prop('disabled', false);
        }
        else {
            $('.jsOpenModalRequestForEdit').prop('disabled', true);
            $('.jsBtnDeleteRequest').prop('disabled', true);
        }
    });


});