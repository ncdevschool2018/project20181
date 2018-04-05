<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>User-view Page</title>
    <link rel="stylesheet" href="../resources/css/user-view-page.css">
</head>
<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="/views/parts/navigation.jsp"/>

<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="form-horizontal">
                <div class="btn-group" role="group" aria-label="Basic example">
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
                    <span>${studoneob.firstname} ${studoneob.lastname} ${studoneob.patronymic}</span>
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
                    <p>${studoneob.adress}</p>
                    <p>${studoneob.phone}</p>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="form-horizontal">
                <h4>История профиля</h4>
                <table class="table table-th-block">
                    <tbody>
                    <tr><td class="active">Зарегистрирован:</td><td>12-06-2016</td></tr>
                    <tr><td class="active">Факультет:</td><td>${studoneob.specialityEntity.facultyEntity.namefaculty}</td></tr>
                    <tr><td class="active">Группа:</td><td>${studoneob.group}</td></tr>
                    <tr><td class="active">Дата практики:</td><td></td></tr>
                    <tr><td class="active">Специальность:</td><td>${studoneob.specialityEntity.namespeciality}</td></tr>
                    <tr><td class="active">Бюджет:</td><td>${studoneob.isbudget}</td></tr>
                    <tr><td class="active">Средний бал:</td><td>${studoneob.averagescore}</td></tr>
                    <tr><td class="active">Название компании:</td><td> 7</td></tr>
                    <tr><td class="active">Статус практики:</td><td>${studoneob.statuspractice}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row">
            <div class="col-md-12">
                <h5>Комментарий : </h5>
                ${studoneob.comment}
            </div>
    </div>
</div>
<jsp:include page="parts/footer.jsp"/>
</body>
</html>
