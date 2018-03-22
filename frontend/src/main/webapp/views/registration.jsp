<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
            <form class="form-horizontal">
                <span class="heading">SIGN UP</span>

                <div class="form-group ">
                    <input class="form-control"  placeholder="Username" name="login" type="text"  autofocus="" />
                    <i class="fa fa-user"></i>
                </div>

                <div class="form-group ">
                    <input class="form-control" placeholder="E-mail" name="email" type="email" />
                    <i class="fa fa-envelope"></i>
                </div>

                <div class="form-group ">
                    <input class="form-control"  placeholder="Password" name="password" type="password" />
                    <i class="fa fa-lock"></i>
                </div>

                <div class="form-group ">
                    <input class="form-control" placeholder="Confirm Password" name="confirmPassword" type="password" />
                    <i class="fa fa-lock"></i>
                </div>
                <div class="form-group">
                     <button type="submit" class="btn btn-default">Sign me up</button>
                </div>
            </form>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
</body>
</html>
