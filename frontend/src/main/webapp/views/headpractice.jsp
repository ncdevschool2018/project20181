<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Head of Practice</title>
    <style type="text/css">
        hr {
            border: 3px;
            border-top: 4px double #8c8c8c;
            text-align: center;
        }
        hr:after {
            content: '\2665';
            display: inline-block;
            position: relative;
            top: -15px;
            padding: 0 10px;
            background: #fff;
            color: #8c8c8c;
            font-size: 18px;
        }
    </style>
</head>

<body>
<jsp:include page="parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>
<br>
<hr>
<br>
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
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
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
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
    </tr>

    </tbody>
</table>

</body>
</html>
