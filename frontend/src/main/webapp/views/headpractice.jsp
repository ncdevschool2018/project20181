<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Head of Practice</title>
</head>

<body>
<jsp:include page="parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>


    <table data-click-to-select="true"
           data-pagination="true"
           data-side-pagination="client"
           data-page-list="[5, 10, 20, 50, 100, 200]"
           data-search="true"
           data-toggle="table"
           data-sort-order="asc"
           data-sort-name="lastname"
           data-height="350"
           data-classes="table table-bordered table-hover jsStudentTableForMAV1" >
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
                        <a href="/studentView/${student.idStudent}" target="_blank">
                            <button type="button" class="btn btn-info"><i class="fa fa-info" aria-hidden="true"></i>   Info</button>
                        </a>
                    </td>
                </tr>
            </c:forEach>
        </c:if>
        </tbody>
    </table>
<br>
<br>
<br>
<jsp:include page="parts/footer.jsp"/>
</body>
</html>
