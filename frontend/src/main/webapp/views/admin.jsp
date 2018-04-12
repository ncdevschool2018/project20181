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
            <li class="nav-item"><a href="#table-student" class="nav-link active" data-toggle="pill">Таблица студентов</a> </li>
            <li class="nav-item"><a href="#table-request" class="nav-link" data-toggle="pill">Таблица запросов</a> </li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active " id="table-student">
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
                                <td>${student.studentEntity.specialityEntity.facultyEntity.namefaculty}</td>
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
            <div role="tabpanel" class="tab-pane fade" id="table-request">
                Таблица запросов
            </div>
        </div>
</div>
<br>
<br>
<br>
<br>
<div class="container">

        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal_add_student">Add student</a>

        <button class="btn btn-primary" type="button" id="btn_edit_student">Edit student</button>
        <button class="btn btn-primary" type="button">Delete student</button>

</div>

<!-- Модальные окна -->
<!-- МО Добавление студента -->
<div id="modal_add_student" class="modal fade">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Add Student</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div id="hoh"></div>
            <input name="username" class="form-control" id="inputNameStudent" placeholder="Name of student">
            <input name="group" class="form-control" id="inputGroupStudent" placeholder="Group of student">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" id="#btn123t">Add</button>
        </div>
    </div>
</div>
</div>
<br>
<br>
<br>
<br>
<script src="../resources/js/admin-page.js"></script>

<jsp:include page="parts/footer.jsp"/>
</body>
</html>
