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
        INPUT_COMMENT: '.jsInputComment',

        INPUT_USERNAME_LOGIN: '.jsInputUsername',
        INPUT_PASSWORD_LOGIN: '.jsInputPassword',

        INPUT_ID_REQUEST: '.jsInputIdRequest',
        INPUT_STATUS_REQUEST: '.jsInputStatusRequest',
        INPUT_NAME_COMPANY: '.jsInputNameCompany',
        INPUT_DATE_FROM: '.jsInputDateFrom',
        INPUT_DATE_TO: '.jsInputDateTo',
        INPUT_MIN_AVERAGE_SCORE: '.jsInputMinAverageScore',
        INPUT_TOTAL_QUANTITY: '.jsInputTotalQuantity',

        INPUT_NAME_HEAD: '.jsInputNameHeadOfPractice',
        INPUT_SURNAME_HEAD: '.jsInputSurnameHeadOfPractice',
        INPUT_PATRONYMIC_HEAD: '.jsInputPatronymicHeadOfPractice',
        INPUT_EMAIL_HEAD: '.jsInputEmailHeadOfPractice',
        INPUT_LOGIN_HEAD: '.jsInputLoginHeadOfPractice',
        INPUT_PASSWORD_HEAD: '.jsInputPasswordHeadOfPractice'


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

        $inputNameHead:$(INPUT_ELEMENT.INPUT_NAME_HEAD),
        $inputSurnameHead:$(INPUT_ELEMENT.INPUT_SURNAME_HEAD),
        $inputPatronymicHead:$(INPUT_ELEMENT.INPUT_PATRONYMIC_HEAD),
        $inputEmailHead:$(INPUT_ELEMENT.INPUT_EMAIL_HEAD),
        $inputUsernameHead:$(INPUT_ELEMENT.INPUT_LOGIN_HEAD),
        $inputPasswordHead:$(INPUT_ELEMENT.INPUT_PASSWORD_HEAD),

        $inputIdStudent: $(INPUT_ELEMENT.INPUT_ID_STUDENT),
        $inputStatusStudent: $(INPUT_ELEMENT.INPUT_STATUS_STUDENT),
        $inputNameGroup: $(INPUT_ELEMENT.INPUT_NAME_GROUP),
        $inputAverageScore: $(INPUT_ELEMENT.INPUT_AVERAGE_SCORE),
        $inputAdress: $(INPUT_ELEMENT.INPUT_ADRESS),
        $inputPhone: $(INPUT_ELEMENT.INPUT_PHONE),
        $inputComment: $(INPUT_ELEMENT.INPUT_COMMENT),

        $inputIdRequest:$(INPUT_ELEMENT.INPUT_ID_REQUEST),
        $inputStatusRequest:$(INPUT_ELEMENT.INPUT_STATUS_REQUEST),
        $inputNameCompany:$(INPUT_ELEMENT.INPUT_NAME_COMPANY),
        $inputDateFrom:$(INPUT_ELEMENT.INPUT_DATE_FROM),
        $inputDateTo:$(INPUT_ELEMENT.INPUT_DATE_TO),
        $inputMinAverageScore:$(INPUT_ELEMENT.INPUT_MIN_AVERAGE_SCORE),
        $inputTotalQuantity:$(INPUT_ELEMENT.INPUT_TOTAL_QUANTITY),

        $inputUsernameLogin: $(INPUT_ELEMENT.INPUT_USERNAME_LOGIN),
        $inputPasswordLogin: $(INPUT_ELEMENT.INPUT_PASSWORD_LOGIN)
        /*$modalRequest : $(MODAL_ELEMENT.MODAL_REQUEST),
        $modalStudent : $(MODAL_ELEMENT.MODAL_STUDENT),
        $modalFaculty : $(MODAL_ELEMENT.MODAL_FACULTY),
        $modalSpeciality : $(MODAL_ELEMENT.MODAL_SPECIALITY),
        $modalHead : $(MODAL_ELEMENT.MODAL_HEAD),
        $modalMulti : $(MODAL_ELEMENT.MODAL_MULTI)*/
    };

    window.ATRUBUT_HTML = ATRIBUT_HTML;

});