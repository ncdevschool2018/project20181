<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Registration</title>
    <link rel="stylesheet" href="../resources/css/login-page.css">
</head>

<body>
<br>
<br>
<br>
<br>
<br>
<jsp:include page="/views/parts/header.jsp"/>

<div class="container" align="center">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="form-horizontal">
                <span class="heading">SIGN UP</span>

                <div class="form-group ">
                    <input class="form-control jsInputLoginStudent"  placeholder="Username" type="text"  autofocus="" />
                    <i class="fa fa-user"></i>
                </div>

                <div class="form-group ">
                    <input class="form-control jsInputEmailStudent" placeholder="E-mail" type="email" />
                    <i class="fa fa-envelope"></i>
                </div>

                <div class="form-group ">
                    <input class="form-control jsInputFirstPasswordForCompare"  placeholder="Password" type="password" />
                    <i class="fa fa-lock"></i>
                </div>

                <div class="form-group ">
                    <input class="form-control jsInputSecondPasswordForCompare" placeholder="Confirm Password" name="confirmPassword" type="password" />
                    <i class="fa fa-lock"></i>
                </div>
                <div class="form-group ">
                    <input class="form-control jsInputNameStudent" placeholder="Name" type="text" />
                    <i class="fa fa-lock"></i>
                </div>
                <div class="form-group ">
                    <input class="form-control jsInputSurnameStudent" placeholder="Surname" type="text" />
                    <i class="fa fa-lock"></i>
                </div>
                <div class="form-group ">
                    <input class="form-control jsInputPatronymicStudent" placeholder="Patronymic" type="text" />
                    <i class="fa fa-lock"></i>
                </div>
                <div class="form-group">
                     <button type="submit" class="btn btn-default jsBtnRegistration">Sign me up</button>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>

<script src="../resources/js/admin-page.js"></script>
</body>
</html>
