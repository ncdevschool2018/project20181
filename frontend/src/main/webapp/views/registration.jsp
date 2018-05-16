<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
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
                    <form:form action="registrate" method="post" commandName="accountEntity">
                        <div class="form-group ">
                            <form:input path="login" class="form-control jsInputLoginStudent"  placeholder="Username" type="text"  autofocus="" />
                            <i class="fa fa-user"></i>
                            <form:errors path="login" cssClass="error" style="color:red"></form:errors>
                        </div>

                        <div class="form-group ">
                            <form:input path="email" class="form-control jsInputEmailStudent" placeholder="E-mail" type="text" />
                            <i class="fa fa-envelope"></i>
                            <form:errors path="email" cssClass="error" style="color:red"></form:errors>
                        </div>

                        <div class="form-group ">
                            <form:input path="password" class="form-control jsInputFirstPasswordForCompare"  placeholder="Password" type="password" />
                            <i class="fa fa-lock"></i>
                            <form:errors path="password" cssClass="error" style="color:red"></form:errors>
                        </div>


                        <div class="form-group">
                            <form:input path="confirmPassword" class="form-control jsInputSecondPasswordForCompare" placeholder="Confirm Password" type="password" />
                            <i class="fa fa-lock"></i>
                            <form:errors path="confirmPassword"></form:errors>
                        </div>

                        <div class="form-group ">
                            <form:input path="firstname" class="form-control jsInputNameStudent" placeholder="Name" type="text" />
                            <i class="fa fa-user"></i>
                            <form:errors path="firstname" cssClass="error" style="color:red"></form:errors>
                        </div>

                        <div class="form-group ">
                            <form:input path="lastname" class="form-control jsInputSurnameStudent" placeholder="Surname" type="text" />
                            <i class="fa fa-user"></i>
                            <form:errors path="lastname" cssClass="error" style="color:red"></form:errors>
                        </div>

                        <div class="form-group ">
                            <form:input path="patronymic" class="form-control jsInputPatronymicStudent" placeholder="Patronymic" type="text" />
                            <i class="fa fa-user"></i>
                            <form:errors path="patronymic" cssClass="error" style="color:red"></form:errors>
                        </div>
                        <div class="form-group">
                             <button type="submit" class="btn btn-default jsBtnRegistration">Sign me up</button>
                        </div>
                    </form:form>
            </div>
        </div>

        <div class="col-md-3"></div>
    </div>
</div>
</body>
</html>
