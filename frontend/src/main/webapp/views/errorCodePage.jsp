<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
    <title>Error</title>
    <style>
        body{
            background: url(../resources/img/kirkorov.png) no-repeat center center fixed;
            background-size: cover;
        }
    </style>
</head>
<body >
<br>
<h1 style="color: blue;">${errorMsg}</h1>
</body>
</html>
