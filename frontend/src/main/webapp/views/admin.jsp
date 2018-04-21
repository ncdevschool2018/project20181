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
                                <td>${student.studentEntity.specialityEntity.facultyByFaculty.namefaculty}</td>
                                <td>${student.studentEntity.specialityEntity.namespeciality}</td>
                                <td>${student.studentEntity.group}</td>
                                <td>${student.studentEntity.isbudget}</td>
                                <td>${student.studentEntity.averagescore}</td>
                                <td>${student.studentEntity.statuspractice}</td>
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
                <table data-click-to-select="true"  data-pagination="true" data-search="true" data-toggle="table" class="jsStudentsTable">
                    <thead>
                    <tr>
                        <th data-field="idAccount" data-checkbox="true"></th>
                        <th data-field="firstname">First Name</th>
                        <th data-field="lastname">Last Name</th>
                        <th data-field="email">Email</th>
                        <th data-field="login">Username</th>
                        <th data-field="group">Group</th>
                        <th data-field="specialityName">Speciality of Student</th>
                        <th data-field="facultyName">Faculty of Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>
            <!-- Таблица запросов -->
            <div role="tabpanel" class="tab-pane fade" id="table-request">
                <table data-click-to-select="true"  data-pagination="true" data-search="true" data-toggle="table" class="jsRequestsTable">
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


    <a href="#modalStudent" role="button" class="btn btn-primary" data-toggle="modal">Create Student</a>
    <a href="#modalSpeciality" role="button" class="btn btn-primary" data-toggle="modal">Create Speciality</a>
    <a href="#modalFaculty" role="button" class="btn btn-primary" data-toggle="modal">Create Faculty</a>

<br>
    <br>
        <div class="row">
            <div class="col-md-6">

            </div>
            <div class="col-md-6">
            </div>
        </div>
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
                <input  class="form-control jsInputSpeciality" placeholder="Speciality" type="text">
                <input  class="form-control jsInputTypeaHeadFaculty" placeholder="Faculty" type="text">
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
                <input  class="form-control jsInputName" placeholder="Name of student" type="text">
                <input class="form-control jsInputSurname" placeholder="Surname of student" type="text">
                <input  class="form-control jsInputPatronomyc" placeholder="Patronomyc of student" type="text">
                <input class="form-control jsInputGroup" placeholder="Group of student" type="text">
                <input class="form-control jsInputAverageScore" placeholder="Average Score of student" type="text">
                <input class="form-control jsInputBudget" placeholder="Is budget of student" type="text">
                <input class="form-control jsInputStatus" placeholder="Status of practice" type="text">
                <input class="form-control jsInputNeededSpeciality" placeholder="Needed" type="text">
                <input class="form-control jsInputNeededFaculty" placeholder="Needed Faculty" type="text">
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddStudent">Create Student</button>
            </div>
        </div>
    </div>
</div>

<script src="../resources/js/admin-page.js"></script>

<jsp:include page="parts/footer.jsp"/>
</body>
</html>
