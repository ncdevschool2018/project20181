<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Registration</title>
    <link rel="stylesheet" type="text/css" media="all" href="../resources/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../resources/bootstrap/css/font-awesome.min.css">
    <style type="text/css">
        body, html{
            background-color: #fff6dc;
            padding: 0;
            margin: 0;
            color: #304e5c;
        }
    </style>
</head>
<script src="../resources/bootstrap/js/popper.min.js"></script>
<script src="../resources/bootstrap/js/bootstrap.min.js"></script>
<script src="../resources/bootstrap/js/jquery-3.2.1.min.js"></script>
<body>
<div class="container" align="center">
    <div class="row">

        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title" align="center" ><span style="font-weight: bolder">SIGN UP</span></h3>
                    </div>
                    <div class="panel-body">

                       <form>
                            <fieldset>
                                    <div class="form-group ">
                                        <input class="form-control"  placeholder="Username - required,min long - 6, only a-z or A-Z characters" name="login" type="text"  autofocus="" />

                                    </div>



                                    <div class="form-group ">
                                        <input class="form-control" placeholder="E-mail - required, email format" name="email" type="email" />

                                    </div>



                                    <div class="form-group ">
                                        <input class="form-control"  placeholder="Password - required,min long - 6,at least one a-z A-Z 1-9" name="password" type="password" />
                                    </div>



                                    <div class="form-group ">
                                        <input class="form-control" placeholder="Confirm Password" name="confirmPassword" type="password" />
                                    </div>





                                <div class="row">
                                    <div class="col-md-3">
                                    </div>
                                    <div class="col-md-6">
                                        <button type="submit" class="btn avtreg_btn" style="background-color: #17fe58"
                                                value=""><span style="font-weight: bold; color: white">Sign me up</span>
                                        </button>
                                        <!--<input type="submit" value="Register" class="btn" name="register">-->
                                    </div>
                                    <div class="col-md-3">
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3"></div>
    </div>
</div>

</body>
</html>
