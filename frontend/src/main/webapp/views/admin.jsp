<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Admin</title>
        <style>
            a.btn:hover {
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -o-transform: scale(1.1);
            }
            a.btn {
                -webkit-transform: scale(0.8);
                -moz-transform: scale(0.8);
                -o-transform: scale(0.8);
                -webkit-transition-duration: 5s;
                -moz-transition-duration: 5s;
                -o-transition-duration: 5s;
            }
        </style>
</head>

<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>

<!-- Вкладки с таблицами-->
<div class="container-fluid">
        <ul class="nav nav-pills">
            <!--<li class="nav-item"><a href="#table-student1" class="nav-link active" data-toggle="pill">Таблица студентов</a> </li>-->
            <li class="nav-item"><a href="#table-student" class="nav-link active jsOpenTableStudents" data-toggle="pill"><i class="fa fa-list" aria-hidden="true"></i><span>   Table of Students</span></a> </li>
            <li class="nav-item"><a href="#table-request" class="nav-link jsOpenTableRequests" data-toggle="pill"><i class="fa fa-list" aria-hidden="true"></i><span>   Table of Requests</span></a> </li>
        </ul>
        <div class="tab-content">
            <!-- Таблица студентов1
            <div role="tabpanel" class="tab-pane fade in active" id="table-student1">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th style="width:20px;"><input type="checkbox" id="head_checkbox"></th>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Patronymic</th>
                        <th>Faculty</th>
                        <th>Speciality</th>
                        <th>Group</th>
                        <th>Is budget</th>
                        <th>Average score</th>
                        <th>Status</th>
                        <th>Name of company</th>
                        <th>Practice period</th>
                        <th>Btn "Show info"</th>
                    </tr>
                    </thead>
                    <tbody id="body_student_table">
                    <c:if test="${not empty studentcontr1}">
                        <c:forEach items="${studentcontr1}" var="student">
                            <tr>
                                <td><input type="checkbox" class="body_checkbox"></td>
                                <th>${student.id}</th>
                                <td>${student.firstname}</td>
                                <td>${student.lastname}</td>
                                <td>${student.patronymic}</td>
                                <td>${student.email}</td>
                                <td>${student.role}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td>dates</td>
                                <td>
                                    <a href="/students-view/${student.id}" target="_blank">
                                        <button type="button" class="btn btn-info">Info</button>
                                    </a>
                                </td>
                            </tr>
                        </c:forEach>
                    </c:if>
                    </tbody>
                </table>
            </div>-->
            <!-- Таблица студентов -->
            <div role="tabpanel" class="tab-pane fade" id="table-student">
                <table data-click-to-select="true"
                       data-pagination="true"
                       data-side-pagination="client"
                       data-page-list="[5, 10, 20, 50, 100, 200]"
                       data-search="true"
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
                        <th data-field="idStudent" data-formatter="practiceFormatter" class="text-center">About practice</th>
                        <th data-field="idStudent" data-formatter="showFormatter" class="text-center">About student</th>
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
                        <th data-field="nameSpeciality" data-sortable="true">Needed Speciality</th>
                        <th data-field="nameFaculty" data-sortable="true">Needed Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>
        </div>
</div>
<div class="container">

    <a href="#" role="button" class="btn btn-primary jsBtnDeleteStudent"><i class="fa fa-trash" aria-hidden="true"></i>   Delete Students</a>
    <a href="#modalMultiSelect" role="button" class="btn btn-primary jsOpenModalMultiSelect" data-toggle="modal"><i class="fa fa-plus-circle" aria-hidden="true"></i>   Assign Students</a>
    <a href="#modalHeadOfPractice" role="button" class="btn btn-primary jsOpenModalHeadOfPractice" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Head of Practice</a>

    <a href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudentForEdit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true"></i>   Edit student</a>
    <a href="#modalRequest" role="button" class="btn btn-primary jsOpenModalRequest" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Request</a>
    <a href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudent" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Student</a>
    <a href="#modalSpeciality" role="button" class="btn btn-primary jsOpenModalSpeciality" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Speciality</a>
    <a href="#modalFaculty" role="button" class="btn btn-primary jsOpenModalFaculty" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Faculty</a>

</div>

<!-- Модальные окна -->
<!-- МО Создание специальности -->
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
                <button class="btn btn-success jsBtnAddHeadOfPractice">Create Head of Practice</button>
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
                <div class="form-group jsDivFormGroupShowforEdit">
                    <label>Id Student : </label>
                    <input type="text" class="form-control jsInputIdStudent" placeholder="Id Student" readonly/>
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
                    <input class="form-control jsInputBudget" placeholder="Is budget of student" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputStatusStudent" placeholder="Status of practice student" type="text">
                </div>
               <div class="form-group">
                    <input class="form-control jsInputAdress" placeholder="Adress" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputPhone" placeholder="Phone" type="text">
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
                <button class="btn btn-success jsBtnAddandEditStudent">Create/Edit Student</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание запроса -->
<div id="modalRequest" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Request</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="ror"></div>
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
                    <input class="form-control jsInputStatusPractice" placeholder="Status of practice" type="text">
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
                <button class="btn btn-success jsBtnAddRequest">Create Request</button>
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
                <button class="btn btn-success jsBtnMS">MS</button>
            </div>
        </div>
    </div>
</div>



<script src="../resources/js/admin-page.js"></script>

<jsp:include page="parts/footer.jsp"/>
</body>
</html>
