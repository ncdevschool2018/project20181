<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Admin</title>
</head>

<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>

<!-- Вкладки с таблицами-->
<div class="container">
        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#table-student1" class="nav-link active" data-toggle="pill">Таблица студентов</a> </li>
            <li class="nav-item"><a href="#table-student" class="nav-link" data-toggle="pill">Таблица запросов</a> </li>
            <li class="nav-item"><a href="#table-request" class="nav-link" data-toggle="pill">Таблица запросов</a> </li>
        </ul>
        <div class="tab-content">
            <!-- Таблица студентов1 -->
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
            </div>
            <!-- Таблица студентов -->
            <div role="tabpanel" class="tab-pane fade" id="table-student">
                <table data-click-to-select="true"  data-pagination="true" data-search="true" data-toggle="table"
                       data-sort-order="asc" data-sort-name="lastname" data-height="250" class="jsStudentsTable" >
                    <thead>
                    <tr>
                        <th data-field="idStudent" data-checkbox="true"></th>
                        <th data-field="firstname">First Name</th>
                        <th data-field="lastname">Last Name</th>
                        <th data-field="patronymic">Patronomyc</th>
                        <th data-field="group">Group</th>
                        <th data-field="averagescore">Average Score</th>
                        <th data-field="isbudget">Budget</th>
                        <th data-field="statuspractice">Status</th>
                        <th data-field="specialityName">Speciality</th>
                        <th data-field="facultyName">Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>
            <!-- Таблица запросов -->
            <div role="tabpanel" class="tab-pane fade" id="table-request">
                <table data-click-to-select="true"  data-pagination="true" data-search="true" data-toggle="table"
                       data-sort-order="asc" data-sort-name="namecompany" data-height="250" class="jsRequestsTable">
                    <thead>
                    <tr>
                        <th data-field="idRequest" data-checkbox="true"></th>
                        <th data-field="namecompany">Name of Company</th>
                        <th data-field="minaverage">Needed Average Score</th>
                        <th data-field="datefrom">Date from</th>
                        <th data-field="dateto">Date to</th>
                        <th data-field="totalquantity">Total quantity</th>
                        <th data-field="nameSpeciality">Needed Speciality</th>
                        <th data-field="nameFaculty">Needed Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>
        </div>
</div>
<div class="container">

        <button class="btn btn-primary jsBtnEditStudent" type="button">Edit student</button>
        <button class="btn btn-primary jsBtnDeleteStudent" type="button">Delete student</button>

    <a href="#modalRequest" role="button" class="btn btn-primary jsOpenModalRequest" data-toggle="modal">Create Request</a>
    <a href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudent" data-toggle="modal">Create Student</a>
    <a href="#modalSpeciality" role="button" class="btn btn-primary jsOpenModalSpeciality" data-toggle="modal">Create Speciality</a>
    <a href="#modalFaculty" role="button" class="btn btn-primary jsOpenModalFaculty" data-toggle="modal">Create Faculty</a>

</div>

<!-- Модальные окна -->
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
                <h4 class="modal-title">Add Student</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="hoh"></div>
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
                    <select class="form-control availableSpecialities"></select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddStudent">Create Student</button>
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
                        <div class="col-md-6"><input class="form-control jsInputDateFrom" placeholder="Date from" type="text"></div>
                        <div class="col-md-6"><input  class="form-control jsInputDateTo" placeholder="Date to" type="text"></div>
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

<script src="../resources/js/admin-page.js"></script>

<jsp:include page="parts/footer.jsp"/>
</body>
</html>
