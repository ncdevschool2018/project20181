<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sf" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Login</title>
    <link rel="stylesheet" href="../resources/css/login-page.css">
</head>

<body>
<jsp:include page="/views/parts/header.jsp"/>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<c:url var="inputAction111" value="/authorization/start"/>
<sf:form action="${inputAction111}" modelAttribute="account" method="post">
<div class="container" align="center">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="form-horizontal">
                <span class="heading">SIGN IN</span>
                <div class="form-group">
                    <sf:input path="email" type="email" class="form-control" id="inputEmail" placeholder="E-mail"/>
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="form-group help">
                    <sf:input path="password" type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                    <i class="fa fa-lock"></i>
                    <a href="#" class="fa fa-question-circle"></a>
                </div>
                <div class="form-group">
                    <div class="main-checkbox">
                        <input type="checkbox" value="none" id="checkbox1" name="check"/>
                        <label for="checkbox1"></label>
                    </div>
                    <span class="text">Remember me</span>
                    <button type="submit" class="btn btn-default">Login</button>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
</sf:form>
<br>
<div class="container" align="center">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3">Don't have an account?</div>
        <div class="col-md-3">
            <a href="<c:url value="registration.jsp"/>">Signup</a>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>

<a href="<c:url value = "/students-view"/>">headpractice</a>
<a href="<c:url value="admin.jsp"/>">admin</a>
<a href="<c:url value="user.jsp"/>">user</a>
</body>
</html>
