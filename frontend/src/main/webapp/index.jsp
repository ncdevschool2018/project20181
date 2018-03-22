<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <%@include file="views/parts/meta.jsp"%>
    <title>Index</title>


</head>
<body>
<jsp:include page="/views/parts/header.jsp"/>
<a href="<c:url value="views/authorization.jsp"/>" target="_blank">Login</a>



<div class="container" align="center">
    <div class="row">

        <div class="col-md-offset-3 col-md-6">
            <form class="form-horizontal">
                <span class="heading">SIGN IN</span>
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail">
                    <i class="fa fa-user"></i>
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
                    <span class="text">Запомнить</span>
                    <button type="submit" class="btn btn-default">ВХОД</button>
                </div>
            </form>
        </div>

    </div><!-- /.row -->
</div><!-- /.container -->

<%@include file="views/parts/footer.jsp"%>
</body>
</html>
