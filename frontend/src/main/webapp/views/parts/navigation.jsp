<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="<c:url value="/index.jsp"/>">
            <img src="/resources/img/logo.png" alt="" width="200" height="60">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <sec:authorize access="isAuthenticated() and principal.username=='admin'">
                    <li class="nav-item active">
                        <a class="nav-link" href="<c:url value="/studentsViewAdmin"/>">Students <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<c:url value="/studentsViewAdminRequest"/>">Requests</a>
                    </li>
                    </sec:authorize>
                </ul>

            <form class="form-inline my-2 my-lg-0">
                <sec:authorize access="isAuthenticated()">
                    <sec:authentication var="user" property="principal"/>
                    <span style="font-size: 30px; font-family: 'Lobster'; margin-right: 150px ">Welcome to Practice, ${user.username} </span>
                    <a href="<c:url value="/index.jsp"/>">
                        <span style="color: #050505">
                            <i class="fa fa-sign-out" aria-hidden="true" style="font-size:200%"></i>
                        </span>
                    </a>
                </sec:authorize>
                <sec:authorize access="isAnonymous()">
                    <sec:authentication var="user" property="principal"/>
                        <a href="<c:url value="/authorization"/>">
                            <span style="color: #050505">
                                <i class="fa fa-sign-in" aria-hidden="true" style="font-size:200%"></i>
                            </span>
                        </a>
                </sec:authorize>
            </form>
        </div>
    </div>
</nav>

<hr style="height: 5px;background-image: -webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));">


