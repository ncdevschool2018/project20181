<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
<div class="container" align="center">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <form class="form-horizontal">
                <span class="heading">SIGN IN</span>
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="form-group help">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
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
            </form>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
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
</body>
</html>
