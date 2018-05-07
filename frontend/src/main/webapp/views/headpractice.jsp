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

<table class="table table-striped">
    <thead>
    <tr>
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
    <tbody>
    <c:if test="${not empty studentcontr}">
        <c:forEach items="${studentcontr}" var="student">
    <tr>
        <th>${student.id}</th>
        <td>${student.accountEntity.firstname}</td>
        <td>${student.accountEntity.lastname}</td>
        <td>${student.accountEntity.patronymic}</td>
        <td>${student.specialityEntity.facultyEntity.namefaculty}</td>
        <td>${student.specialityEntity.namespeciality}</td>
        <td>${student.group}</td>
        <td>${student.isbudget}</td>
        <td>${student.averagescore}</td>
        <td>${student.statuspractice}</td>
        <td>company</td>
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
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<jsp:include page="parts/footer.jsp"/>
</body>
</html>
