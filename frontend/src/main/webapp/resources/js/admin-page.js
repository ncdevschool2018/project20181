

$(document).ready(function () {
//--------------------------------------------------------BUSINESS LOGIC-----------------------------------------------------------------------------------------------------------------------

    /*ATRUBUT_HTML.$buttonAddFaculty
        .mouseenter(function() {
        // get the form values
        var name = ATRUBUT_HTML.$inputNameFaculty.val();

        $.ajax({
            type: "POST",
            url: "checkFaculty",
            data: "name=" + name,
            success: function(response){
                // we have the response
                if(response.status == "SUCCESS"){
                    userInfo = "<ol>";
                    for(i =0 ; i < response.result.length ; i++){
                        userInfo += "<br><li><b>Name</b> : " + response.result[i].name +
                            ";<b> Education</b> : " + response.result[i].education;
                    }
                    userInfo += "</ol>";
                    $('#info').html("User has been added to the list successfully. " + userInfo);
                    $('#name').val('');
                    $('#education').val('');
                    $('#error').hide('slow');
                    $('#info').show('slow');
                }else{
                    errorInfo = "";
                    for(i =0 ; i < response.result.length ; i++){
                        errorInfo += "<br>" + (i + 1) +". " + response.result[i].code;
                    }
                    $('#error').html("Please correct following errors: " + errorInfo);
                    $('#info').hide('slow');
                    $('#error').show('slow');
                }
            },
            error: function(e){
                alert('Error: ' + e);
            }
        });
    });*/

    $.ajax({
        url: 'checkStatusStudent',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        mimeType: 'application/json',
        data: ''
    });



    // Add Faculty(Post)(viewmodel)
    ATRUBUT_HTML.$buttonAddFaculty.click(function (event) {
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
                else {
                    alert("Adding Faculty was unsuccessful. That's faculty is existing")}
            },
            error: function (xhr,textStatus) {
                console.log(xhr.status);
            }
        });
    });
    // Add Speciality(Post)(entity)
    ATRUBUT_HTML.$buttonAddSpeciality.click(function (event) {
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
                    $('#error').html("Please correct following errors: ");
                    $('#info').hide('slow');
                    $('#error').show('slow');
                    alert("Adding Speciality was successful");
                    $('#modalSpeciality').modal('hide');
                }
                else {alert("Adding Speciality was unsuccessful.That's speciality is existing")}
            }
        });
    });
    // Add and Edit Request(Post)(viewmodel)
    ATRUBUT_HTML.$buttonAddOrEditRequest.click(function (event) {
        event.stopPropagation();
        var objRequestSave = {
            idRequest: ATRUBUT_HTML.$inputIdRequest.val(),
            namecompany: ATRUBUT_HTML.$inputNameCompany.val(),
            datefrom: ATRUBUT_HTML.$inputDateFrom.val(),
            dateto: ATRUBUT_HTML.$inputDateTo.val(),
            statuspractice: ATRUBUT_HTML.$inputStatusRequest.val(),
            minaverage: ATRUBUT_HTML.$inputMinAverageScore.val(),
            totalquantity: ATRUBUT_HTML.$inputTotalQuantity.val(),
            specialityId: $('#modalRequest').find('.availableSpecialities option:selected').attr("class"),
            headOfPracticeId: $('#modalRequest').find('.availableHeadsOfPractice option:selected').attr("class")
        };
        $.ajax({
            url: 'createOrEditRequest',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: JSON.stringify(objRequestSave),
            success: function (objRequestSave) {
                ListAllRequests();
                $('.jsBtnResetRequest').trigger('click');
                ATRUBUT_HTML.$requestsTable.trigger('uncheck-all.bs.table');
                $('#modalRequest').modal('hide');
            }
        });
    });
    // Add and Edit Student(Post)(entity)
    ATRUBUT_HTML.$buttonAddOrEditStudent.click(function (event) {
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
    ATRUBUT_HTML.$buttonAddHead.click(function (event) {
        event.stopPropagation();
        var objHeadOfPracticeSave = {
            firstname: ATRUBUT_HTML.$inputNameHead.val(),
            lastname: ATRUBUT_HTML.$inputSurnameHead.val(),
            patronymic: ATRUBUT_HTML.$inputPatronymicHead.val(),
            email: ATRUBUT_HTML.$inputEmailHead.val(),
            login: ATRUBUT_HTML.$inputUsernameHead.val(),
            password: ATRUBUT_HTML.$inputPasswordHead.val()
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
    ATRUBUT_HTML.$buttonDeleteStudent.click(function () {
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
    ATRUBUT_HTML.$buttonDeleteRequest.click(function () {
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
    ATRUBUT_HTML.$buttonReleaseStudent.click(function () {
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
    ATRUBUT_HTML.$buttonAssignStudentOnPractice.click(function (event) {
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
    ATRUBUT_HTML.$buttonReassignStudentOnPractice.click(function (event) {
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
    ATRUBUT_HTML.$buttonAboutStudent.click(function (event) {
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
    ATRUBUT_HTML.$buttonResetStudent.on('click',function (event) {
        $('#modalStudent').find("input,textarea,select").val('');
        ATRUBUT_HTML.$inputStatusStudent.val("Available");
    });
    //Очистка полей в модальном окне запроса
    ATRUBUT_HTML.$buttonResetRequest.on('click',function (event) {
        $('#modalRequest').find("input,textarea,select").val('');
        ATRUBUT_HTML.$inputStatusRequest.val("Available");
    });
//--------------------------------------------------------OPEN MODAL-----------------------------------------------------------------------------------------------------------------------

    ATRUBUT_HTML.$buttonOpenModalMultuSelectForAssign.click(function () {

       getAvailableStudent();
        getAvailableRequest();
        //typeaheadStudent();
    });

    ATRUBUT_HTML.$buttonOpenModalMultuSelectForReassign.click(function () {
        //getAvailableStudent();
        //getAvailableRequest();
        //typeaheadStudent();
        LoadStudentForReassign();
    });

    ATRUBUT_HTML.$buttonOpenModalSpeciality.click(function () {
        getAvailableFaculty();
    });
    ATRUBUT_HTML.$buttonOpenModalRequestForSave.click(function () {
        $('.jsTitleEditRequest').hide();
        $('.jsDivIdRequestforEdit').show();
        $('.jsTitleAddRequest').show();
        getAvailableHeadOfPractice();
        getAvailableFaculty();
        $('.availableFacultiesRequest').trigger('change');
    });
    ATRUBUT_HTML.$buttonOpenModalRequestForEdit.click(function () {
        $('.jsTitleEditRequest').show();
        $('.jsDivIdRequestforEdit').show();
        $('.jsTitleAddRequest').hide();
        getAvailableHeadOfPractice();
        getAvailableFaculty();
        LoadRequestEntityForEditRequest();


    });
    ATRUBUT_HTML.$buttonOpenModalStudentForSave.click(function () {
        $('.jsTitleEditStudent').hide();
        $('.jsDivIdStudentforEdit').show();
        $('.jsTitleAddStudent').show();
        getAvailableAccountStudents();
        getAvailableFaculty();
        $('.availableFacultiesStudent').trigger('change');
    });
    ATRUBUT_HTML.$buttonOpenModalStudentForEdit.click(function () {
        $('.jsTitleAddStudent').hide();
        $('.jsTitleEditStudent').show();
        $('.jsDivFormGroupShowforEdit').show();
        getAvailableAccountStudents();
        getAvailableFaculty();
        LoadStudentEntityForEditStudent();
    });

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
    //Load to typeahead Student For Reassign
    function LoadStudentForReassign() {
        var  studentIdForReassign = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getSelections')[0].idStudent;

        $.ajax({
            async: false,
            url: 'loadStudentForReassign',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            mimeType: 'application/json',
            data: {dataStudentReassign :  studentIdForReassign},
            success: function (requestList) {
                requestList ? function () {
                    requestList.some(function (requestList) {
                        console.log(requestList);
                    });
                }() : false;
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
    ATRUBUT_HTML.$buttonOpenModalMultuSelectForAssign.click(function (event) {
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
    /*function ListAllStudents() {
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
    }*/
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
        ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
        ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
        ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
        ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', true);
    }
    ATRUBUT_HTML.$studentsTableForMAV.on('check-all.bs.table', function (e) {
        var allStudent = ATRUBUT_HTML.$studentsTableForMAV.bootstrapTable('getAllSelections');
        SizeCheckboxOfTableStudent = 0;
        allStudent.forEach(function(item, i, allStudent){
            SizeCheckboxOfTableStudent++;
        });
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$studentsTableForMAV.on('check.bs.table', function (e) {
        SizeCheckboxOfTableStudent++;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$studentsTableForMAV.on('uncheck-all.bs.table', function (e) {
        SizeCheckboxOfTableStudent = 0;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
        else if (SizeCheckboxOfTableStudent === 1) {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', true);
        }
    });
    ATRUBUT_HTML.$studentsTableForMAV.on('uncheck.bs.table', function (e) {
        SizeCheckboxOfTableStudent--;
        console.log(SizeCheckboxOfTableStudent);
        if (SizeCheckboxOfTableStudent > 1) {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
        else if (SizeCheckboxOfTableStudent === 1) {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalStudentForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonReleaseStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonAboutStudent.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteStudent.prop('disabled', true);
        }
    });
    //Table Of Request
    var SizeCheckboxOfTableRequest = 0;
    if (SizeCheckboxOfTableRequest === 0) {
        console.log(SizeCheckboxOfTableRequest);
        ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
        ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', true);
    }
    ATRUBUT_HTML.$requestsTable.on('check-all.bs.table', function (e) {
        var allRequest = ATRUBUT_HTML.$requestsTable.bootstrapTable('getAllSelections');
        SizeCheckboxOfTableRequest = 0;
        allRequest.forEach(function(item, i, allRequest){
            SizeCheckboxOfTableRequest++;
        });
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$requestsTable.on('check.bs.table', function (e) {
        SizeCheckboxOfTableRequest++;
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
    });
    ATRUBUT_HTML.$requestsTable.on('uncheck-all.bs.table', function (e) {
        SizeCheckboxOfTableRequest = 0;
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
        else if (SizeCheckboxOfTableRequest === 1) {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', true);
        }
    });
    ATRUBUT_HTML.$requestsTable.on('uncheck.bs.table', function (e) {
        SizeCheckboxOfTableRequest--;
        console.log(SizeCheckboxOfTableRequest);
        if (SizeCheckboxOfTableRequest > 1) {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
        else if (SizeCheckboxOfTableRequest === 1) {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', false);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', false);
        }
        else {
            ATRUBUT_HTML.$buttonOpenModalRequestForEdit.prop('disabled', true);
            ATRUBUT_HTML.$buttonDeleteRequest.prop('disabled', true);
        }
    });


});
