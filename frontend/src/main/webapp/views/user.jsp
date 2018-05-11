<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>User-view Page</title>
    <link rel="stylesheet" href="../resources/css/user-view-page.css">
    <style type="text/css">
        .tg {
            border-collapse: collapse;
            border-spacing: 0;
            border-color: #ccc;
        }

        .tg td {
            font-family: Arial, sans-serif;
            font-size: 14px;
            padding: 10px 5px;
            border-style: solid;
            border-width: 1px;
            overflow: hidden;
            word-break: normal;
            border-color: #ccc;
            color: #333;
            background-color: #fff;
        }

        .tg th {
            font-family: Arial, sans-serif;
            font-size: 16px;
            font-weight: normal;
            padding: 10px 5px;
            border-style: solid;
            border-width: 1px;
            overflow: hidden;
            word-break: normal;
            border-color: #ccc;
            color: #333;
            background-color: #f0f0f0;
        }

        .tg .tg-4eph {
            background-color: #f9f9f9
        }
    </style>
</head>
<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="/views/parts/navigation.jsp"/>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="form-horizontal">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-default">
                        <span style="font-size: 30px"><i class="fa fa-facebook"></i></span>
                    </button>
                    <button type="button" class="btn btn-outline-default">
                        <span style="font-size: 30px"><i class="fa fa-twitter-square"></i></span>
                    </button>
                    <button type="button" class="btn btn-outline-default">
                        <span style="font-size: 30px"><i class="fa fa-vk" aria-hidden="true"></i></span>
                    </button>
                </div>
                <hr>
                <div>
                    <img src="/resources/img/user.png" alt="" width="200" height="200" class="img-circle">
                </div>
                <div>
                    <span>${objAboutStudent.accountEntityByStudent.firstname} ${objAboutStudent.accountEntityByStudent.lastname} ${objAboutStudent.accountEntityByStudent.patronymic}</span>
                </div>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <hr class="color-under-image">
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <div>
                    <p>Student</p>
                    <p>${objAboutStudent.adress}</p>
                    <p>${objAboutStudent.phone}</p>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="form-horizontal">
                <h4>History of Profile</h4>
                <table class="table table-th-block">
                    <tbody>
                    <tr><td class="active">Faculty:</td><td>${objAboutStudent.specialityEntityByStudent.facultyByFaculty.namefaculty}</td></tr>
                    <tr><td class="active">Group:</td><td>${objAboutStudent.groupStudent}</td></tr>
                    <tr><td class="active">Speciality:</td><td>${objAboutStudent.specialityEntityByStudent.namespeciality}</td></tr>
                    <tr><td class="active">Budget:</td><td>${objAboutStudent.isbudget}</td></tr>
                    <tr><td class="active">Average score:</td><td>${objAboutStudent.averagescore}</td></tr>
                    <tr><td class="active">Status of Student:</td><td>${objAboutStudent.statuspractice}</td></tr>
                    <tr><td class="active"><h5>Comment : </h5></td><td>${objAboutStudent.comment}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="container">
    <c:if test="${!empty objAboutStudent.request_companies}">
        <table class="tg">
            <tr>
                <th width="100">ID</th>
                <th width="140">Name of Company</th>
                <th width="120">Date From</th>
                <th width="120">Date to</th>
                <th width="140">Name of Head</th>
                <th width="140">Surname of Head</th>
                <th width="140">Patronymic of Head</th>
                <th width="140">Available Speciality</th>
                <th width="100">Available Faculty</th>
            </tr>
            <c:forEach items="${objAboutStudent.request_companies}" var="requests_of_student">
                <tr>
                    <td>${requests_of_student.idRequest}</td>
                    <td>${requests_of_student.namecompany}</td>
                    <td>${requests_of_student.datefrom}</td>
                    <td>${requests_of_student.dateto}</td>
                    <td>${requests_of_student.accountEntity.firstname}</td>
                    <td>${requests_of_student.accountEntity.lastname}</td>
                    <td>${requests_of_student.accountEntity.patronymic}</td>
                    <td>${requests_of_student.specialityEntity.facultyByFaculty.namefaculty}</td>
                    <td>${requests_of_student.specialityEntity.namespeciality}</td>
                </tr>
            </c:forEach>
        </table>
    </c:if>
</div>
<jsp:include page="parts/footer.jsp"/>
</body>
</html>
