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
        <td>${student.firstnameofstudent}</td>
        <td>${student.lastnameofstudent}</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
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
