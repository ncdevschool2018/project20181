<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Admin Requests</title>
    <link rel="stylesheet" href="../resources/css/admin-page.css">
</head>

<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>
<div class="container">
    <div class="row ">
            <button href="#modalHeadOfPractice" role="button" class="btn btn-primary jsOpenModalHeadOfPractice" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Head</button>

            <button href="#" role="button" class="btn btn-primary jsBtnDeleteRequest"><i class="fa fa-trash" aria-hidden="true"></i>   Delete Requests</button>
            <button href="#modalRequest" role="button" class="btn btn-primary jsOpenModalRequestForEdit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true"></i>   Edit Request</button>
            <button href="#modalRequest" role="button" class="btn btn-primary jsOpenModalRequest" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Request</button>
        </div>
</div>


<br>
<!-- Вкладки с таблицами-->
<div class="container-fluid">
            <table data-click-to-select="true"
                   data-pagination="true"
                   data-side-pagination="client"
                   data-page-list="[5, 10, 20, 50, 100, 200]"
                   data-search="true"
                   data-toggle="table"
                   data-sort-order="asc"
                   data-sort-name="namecompany"
                   data-height="350"
                   data-classes="table table-bordered table-hover jsRequestsTable">
                <thead>
                <tr>
                    <th data-field="checkbox" data-checkbox="idRequest"></th>
                    <th data-field="namecompany" data-sortable="true">Name of Company</th>
                    <th data-field="minaverage" data-sortable="true">Needed Average Score</th>
                    <th data-field="datefrom" data-sortable="true">Date from</th>
                    <th data-field="dateto" data-sortable="true">Date to</th>
                    <th data-field="totalquantity" data-sortable="true">Total quantity</th>
                    <th data-field="availablequantity">Available quantity</th>
                    <th data-field="statuspractice">Status</th>
                    <th data-field="nameSpeciality" data-sortable="true">Speciality</th>
                    <th data-field="nameFaculty" data-sortable="true">Faculty</th>
                    <th data-field="lastnameHeadOfPractice" data-sortable="true">Head</th>
                </tr>
                </thead>
            </table >
</div>
<br>
<br>
<br>
<jsp:include page="parts/footer.jsp"/>
<!-- МО Создание запроса -->
<div id="modalRequest" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title jsTitleAddRequest">Add Request</h4>
                <h4 class="modal-title jsTitleEditRequest">Edit Request</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div class="form-group jsDivIdRequestforEdit">
                    <label>Id Request : </label>
                    <input type="text" class="form-control jsInputIdRequest" placeholder="Id Request" readonly/>
                </div>
                <div class="form-group jsDivStatusRequest">
                    <label>Status Request : </label>
                    <input type="text" class="form-control jsInputStatusRequest" placeholder="Status Request" value="Available" readonly/>
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputNameCompany" placeholder="Name of company" type="text">
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6"><input class="form-control jsInputDateFrom" placeholder="Date from" type="date"></div>
                        <div class="col-md-6"><input  class="form-control jsInputDateTo" placeholder="Date to" type="date"></div>
                    </div>
                </div>
                <div class="form-group">
                    <input class="form-control jsInputMinAverageScore" placeholder="Min average score" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputTotalQuantity" placeholder="Total quantity" type="text">
                </div>
                <div class="form-group">
                    <select class="form-control availableFacultiesRequest"></select>
                </div>
                <div class="form-group">
                    <select class="form-control availableSpecialities"></select>
                </div>
                <div class="form-group">
                    <select class="form-control availableHeadsOfPractice"></select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-secondary jsBtnResetRequest">Reset Student</button>
                <button class="btn btn-success jsBtnAddAndEditRequest">Create/Edit Request</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание руководителя практики -->
<div id="modalHeadOfPractice" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Head of Practice</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input  class="form-control jsInputNameHeadOfPractice" placeholder="Name Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputSurnameHeadOfPractice" placeholder="Surname Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputPatronymicHeadOfPractice" placeholder="Patronymic Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputEmailHeadOfPractice" placeholder="Email Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputLoginHeadOfPractice" placeholder="Login Head Of Practice" type="text">
                </div>
                <div class="form-group">
                    <input  class="form-control jsInputPasswordHeadOfPractice" placeholder="Password Head Of Practice" type="password">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddHeadOfPractice">Create Head</button>
            </div>
        </div>
    </div>
</div>

<script src="../resources/js/admin-page.js"></script>
<script src="../resources/js/validation-and-maskJQuery.js"></script>

</body>