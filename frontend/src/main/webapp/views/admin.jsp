<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Admin</title>
        <style>
            button.btn:hover {
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -o-transform: scale(1.1);
            }
            button.btn {
                -webkit-transform: scale(0.8);
                -moz-transform: scale(0.8);
                -o-transform: scale(0.8);
                -webkit-transition-duration: 5s;
                -moz-transition-duration: 5s;
                -o-transition-duration: 5s;
                width: 10em;
                height: 2.5em;
            }
        </style>
</head>

<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>
<sec:authentication var="user" property="principal"/>
You are logged as ${user.username}
<div class="container-fluid">
    <div class="row ">
        <div class="col-md-4">
            <h6>Кнопки Для работы со студентом</h6>

            <button href="#" role="button" class="btn btn-primary jsBtnAboutStudent"><i class="fa fa-eraser" aria-hidden="true"></i>   About Student</button>

            <button href="#modalMultiSelect" role="button" class="btn btn-primary jsOpenModalMultiSelectForReassign" data-toggle="modal"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>   Reassign Student</button>
            <button href="#" role="button" class="btn btn-primary jsBtnReleaseStudent"><i class="fa fa-eraser" aria-hidden="true"></i>   Release Student</button>
            <button href="#modalMultiSelect" role="button" class="btn btn-primary jsOpenModalMultiSelect" data-toggle="modal"><i class="fa fa-plus-circle" aria-hidden="true"></i>   Assign Student</button>
            <button href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudentForEdit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true"></i>   Edit Student</button>
            <button href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudent" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Student</button>
            <button href="#" role="button" class="btn btn-primary jsBtnDeleteStudent"><i class="fa fa-trash" aria-hidden="true"></i>   Delete Students</button>
        </div>
        <div class="col-md-4">
            <h6>Кнопки Для доб</h6>
            <button href="#modalSpeciality" role="button" class="btn btn-primary jsOpenModalSpeciality" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Speciality</button>
            <button href="#modalFaculty" role="button" class="btn btn-primary jsOpenModalFaculty" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Faculty</button>
            <button href="#modalHeadOfPractice" role="button" class="btn btn-primary jsOpenModalHeadOfPractice" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Head</button>
        </div>
        <div class="col-md-4">
            <h6>Кнопки Для работы со запросом</h6>
            <button href="#" role="button" class="btn btn-primary jsBtnDeleteRequest"><i class="fa fa-trash" aria-hidden="true"></i>   Delete Requests</button>
            <button href="#modalRequest" role="button" class="btn btn-primary jsOpenModalRequestForEdit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true"></i>   Edit Request</button>
            <button href="#modalRequest" role="button" class="btn btn-primary jsOpenModalRequest" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Request</button>
        </div>
    </div>





</div>
<br>
<!-- Вкладки с таблицами-->
<div class="container-fluid">
        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#table-student1" class="nav-link jsOpenTableStudentForMAV" data-toggle="pill"><i class="fa fa-list" aria-hidden="true"></i><span>   Table of StudentsMAV</span></a> </li>
            <li class="nav-item"><a href="#table-student" class="nav-link active jsOpenTableStudents" data-toggle="pill"><i class="fa fa-list" aria-hidden="true"></i><span>   Table of Students</span></a> </li>
            <li class="nav-item"><a href="#table-request" class="nav-link jsOpenTableRequests" data-toggle="pill"><i class="fa fa-list" aria-hidden="true"></i><span>   Table of Requests</span></a> </li>
        </ul>
        <div class="tab-content">
            <!-- Таблица студентов1 -->
            <div role="tabpanel" class="tab-pane fade in active" id="table-student1">
                <table data-click-to-select="true"
                       data-pagination="true"
                       data-side-pagination="client"
                       data-page-list="[5, 10, 20, 50, 100, 200]"
                       data-search="true"
                       data-toggle="table"
                       data-sort-order="asc"
                       data-sort-name="lastname"
                       data-height="350"
                       data-classes="table table-bordered table-hover jsStudentTableForMAV" >
                    <thead>
                    <tr>
                       <!-- <th style="width:20px;"><input type="checkbox" id="head_checkbox"></th>-->
                        <th data-field="checkbox" data-checkbox="idStudent"></th>
                        <th data-field="idStudent">#</th>
                        <th data-field="firstname" data-sortable="true">First Name</th>
                        <th data-field="lastname" data-sortable="true">Last Name</th>
                        <th data-field="patronymic" data-sortable="true">Patronymic</th>
                        <th data-field="groupStudent" data-sortable="true">Group</th>
                        <th data-field="averagescore" data-sortable="true">Average Score</th>
                        <th data-field="isbudget" data-sortable="true">Budget</th>
                        <th data-field="statuspractice" data-sortable="true">Status</th>
                        <th data-field="specialityName" data-sortable="true"> Speciality</th>
                        <th data-field="facultyName" data-sortable="true">Faculty</th>
                        <th>Info</th>
                    </tr>
                    </thead>
                    <tbody id="body_student_table">
                    <c:if test="${not empty studentListForMAV}">
                        <c:forEach items="${studentListForMAV}" var="student">
                            <tr>
                                <td></td>
                                <td>${student.idStudent}</td>
                                <td>${student.accountEntityByStudent.firstname}</td>
                                <td>${student.accountEntityByStudent.lastname}</td>
                                <td>${student.accountEntityByStudent.patronymic}</td>
                                <td>${student.groupStudent}</td>
                                <td>${student.averagescore}</td>
                                <td>${student.isbudget}</td>
                                <td>${student.statuspractice}</td>
                                <td>${student.specialityEntityByStudent.namespeciality}</td>
                                <td>${student.specialityEntityByStudent.facultyByFaculty.namefaculty}</td>
                                <td>
                                    <a href="/students-view/${student.idStudent}" target="_blank">
                                        <button type="button" class="btn btn-info"><i class="fa fa-info" aria-hidden="true"></i>   Info</button>
                                    </a>
                                </td>
                            </tr>
                        </c:forEach>
                    </c:if>
                    </tbody>
                </table>
            </div>
            <!-- Таблица студентов -->
            <div role="tabpanel" class="tab-pane fade" id="table-student">
                <table data-click-to-select="true"
                       data-pagination="true"
                       data-side-pagination="server"
                       data-page-list="[5, 10, 20, 50, 100, 200]"
                       data-search="true"
                       data-url = "/studentTable"
                       data-toggle="table"
                       data-sort-order="asc"
                       data-sort-name="lastname"
                       data-height="350"
                       data-classes="table table-bordered table-hover jsStudentsTable" >
                    <thead>
                    <tr>
                        <th data-field="checkbox" data-checkbox="idStudent"></th>
                        <th data-field="firstname" data-sortable="true">First Name</th>
                        <th data-field="lastname" data-sortable="true">Last Name</th>
                        <th data-field="patronymic" data-sortable="true">Patronomyc</th>
                        <th data-field="groupStudent" data-sortable="true">Group</th>
                        <th data-field="averagescore" data-sortable="true">Average Score</th>
                        <th data-field="isbudget" data-sortable="true">Budget</th>
                        <th data-field="statuspractice" data-sortable="true">Status</th>
                        <th data-field="specialityName" data-sortable="true">Speciality</th>
                        <th data-field="facultyName" data-sortable="true">Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>
            <!-- Таблица запросов -->
            <div role="tabpanel" class="tab-pane fade" id="table-request">
                <table data-click-to-select="true"
                       data-pagination="true"
                       data-side-pagination="client"
                       data-page-list="[5, 10, 20, 50, 100, 200]"
                       data-search="true"
                       data-toggle="table"
                       data-sort-order="asc"
                       data-sort-name="namecompany"
                       data-height="350"
                       data-classes="table table-bordered table-hover jsRequestsTable">
                    <thead>
                    <tr>
                        <th data-field="checkbox" data-checkbox="idRequest"></th>
                        <th data-field="namecompany" data-sortable="true">Name of Company</th>
                        <th data-field="minaverage" data-sortable="true">Needed Average Score</th>
                        <th data-field="datefrom" data-sortable="true">Date from</th>
                        <th data-field="dateto" data-sortable="true">Date to</th>
                        <th data-field="totalquantity" data-sortable="true">Total quantity</th>
                        <th data-field="availablequantity">Available quantity</th>
                        <th data-field="statuspractice">Status</th>
                        <th data-field="nameSpeciality" data-sortable="true">Speciality</th>
                        <th data-field="nameFaculty" data-sortable="true">Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>
        </div>
</div>


<!-- Модальные окна -->
<!-- МО Создание руководителя практики -->
<div id="modalHeadOfPractice" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Head of Practice</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="hop"></div>
                <div class="form-group">
                    <input  class="form-control jsInputNameHeadOfPractice" placeholder="Name Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputSurnameHeadOfPractice" placeholder="Surname Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputPatronymicHeadOfPractice" placeholder="Patronymic Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputEmailHeadOfPractice" placeholder="Email Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputLoginHeadOfPractice" placeholder="Login Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputPasswordHeadOfPractice" placeholder="Password Head Of Practice" type="text">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddHeadOfPractice">Create Head</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание специальности -->
<div id="modalSpeciality" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Speciality</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="sos"></div>
                <div class="form-group">
                    <input  class="form-control jsInputSpeciality" placeholder="Speciality" type="text">
                </div>
                <div class="form-group">
                    <select class="form-control availableFaculties"></select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddSpeciality">Create Speciality</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание факультета -->
<div id="modalFaculty" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Faculty</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="fof1"></div>
                <input  class="form-control jsInputFaculty" placeholder="Faculty" type="text">
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddFaculty">Create Faculty</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание студента -->
<div id="modalStudent" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title jsTitleAddStudent">Add Student</h4>
                <h4 class="modal-title jsTitleEditStudent">Edit Student</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="hoh"></div>
                <div id="hoh1"></div>
                <div class="form-group jsDivIdStudentforEdit">
                    <label>Id Student : </label>
                    <input type="text" class="form-control jsInputIdStudent" placeholder="Id Student" readonly/>
                </div>
                <div class="form-group jsDivStatusRequest">
                    <label>Status Student : </label>
                    <input type="text" class="form-control jsInputStatusStudent" placeholder="Status Student" value="Available" readonly>
                </div>
                <div class="form-group">
                    <select class="form-control availableAccountStudent"></select>
                </div>
                <div class="form-group">
                    <input class="form-control jsInputGroup" placeholder="Group of student" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputAverageScore" placeholder="Average Score of student" type="text">
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label class="btn btn-outline-info btn-md btn-block">
                                <input type="radio" name="isBudget" value="yes" checked> Budget
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="btn btn-outline-info btn-md btn-block">
                                <input type="radio" name="isBudget" value="no"> Paid
                            </label>
                        </div>
                    </div>
                    <!--<input class="form-control jsInputBudget" placeholder="Is budget of student" type="text">-->
                </div>
               <div class="form-group">
                    <input class="form-control jsInputAdress" placeholder="Adress" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputPhone" placeholder="Phone" type="text">
                </div>
                <div class="form-group">
                    <select class="form-control availableFacultiesStudent"></select>
                </div>
                <div class="form-group">
                    <select class="form-control availableSpecialities"></select>
                </div>
                <div class="form-group">
                    <textarea rows="5" cols="30" class="form-control jsInputComment" placeholder="Comment About Student"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-secondary jsBtnResetStudent">Reset Student</button>
                <button class="btn btn-success jsBtnAddAndEditStudent">Create/Edit Student</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание запроса -->
<div id="modalRequest" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title jsTitleAddRequest">Add Request</h4>
                <h4 class="modal-title jsTitleEditRequest">Edit Request</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="ror"></div>
                <div class="form-group jsDivIdRequestforEdit">
                    <label>Id Request : </label>
                    <input type="text" class="form-control jsInputIdRequest" placeholder="Id Request" readonly/>
                </div>
                <div class="form-group jsDivStatusRequest">
                    <label>Status Request : </label>
                    <input type="text" class="form-control jsInputStatusRequest" placeholder="Status Request" value="Available" readonly/>
                </div>
                <div class="form-group">
                     <input  class="form-control jsInputNameCompany" placeholder="Name of company" type="text">
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6"><input class="form-control jsInputDateFrom" placeholder="Date from" type="date"></div>
                        <div class="col-md-6"><input  class="form-control jsInputDateTo" placeholder="Date to" type="date"></div>
                    </div>
                </div>
                <div class="form-group">
                    <input class="form-control jsInputMinAverageScore" placeholder="Min average score" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputTotalQuantity" placeholder="Total quantity" type="text">
                </div>
                <div class="form-group">
                    <select class="form-control availableFacultiesRequest"></select>
                </div>
                <div class="form-group">
                    <select class="form-control availableSpecialities"></select>
                </div>
                <div class="form-group">
                    <select class="form-control availableHeadsOfPractice"></select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-secondary jsBtnResetRequest">Reset Student</button>
                <button class="btn btn-success jsBtnAddAndEditRequest">Create/Edit Request</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание малтиселекта -->
<div id="modalMultiSelect" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Multi Select</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="mom"></div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <select class="form-control availableStudent"></select>
                            <input  class="form-control jsInputTypeaheadStudent" placeholder="Search Student" type="text" autocomplete="off">
                        </div>
                        <div class="col-md-6">
                            <select class="form-control availableRequest"></select>
                            <input  class="form-control jsInputTypeaheadRequest" placeholder="Search Request" type="text" autocomplete="off">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAssignStudentOnPractice">Assign Student</button>
                <button class="btn btn-success jsBtnReAssignStudentOnPractice">Reassign Student</button>
            </div>
        </div>
    </div>
</div>



<script src="../resources/js/admin-page.js"></script>

<jsp:include page="parts/footer.jsp"/>
</body>
</html>
