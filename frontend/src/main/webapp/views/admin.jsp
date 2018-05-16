<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Admin Students</title>
    <link rel="stylesheet" href="../resources/css/admin-page.css">
</head>

<body>
<jsp:include page="/views/parts/header.jsp"/>
<jsp:include page="parts/navigation.jsp"/>
<div class="container">
    <div class="jsBtnGroupStudent">
            <button href="#" role="button" class="btn btn-primary jsBtnAboutStudent"><i class="fa fa-eraser" aria-hidden="true"></i>   About Student</button>

            <button href="#modalMultiSelect" role="button" class="btn btn-primary jsOpenModalMultiSelectForReassign" data-toggle="modal"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>   Reassign Student</button>
            <button href="#" role="button" class="btn btn-primary jsBtnReleaseStudent"><i class="fa fa-eraser" aria-hidden="true"></i>   Release Student</button>
            <button href="#modalMultiSelect" role="button" class="btn btn-primary jsOpenModalMultiSelect" data-toggle="modal"><i class="fa fa-plus-circle" aria-hidden="true"></i>   Assign Student</button>
            <button href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudentForEdit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true"></i>   Edit Student</button>
            <button href="#modalStudent" role="button" class="btn btn-primary jsOpenModalStudent" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Student</button>
            <button href="#" role="button" class="btn btn-primary jsBtnDeleteStudent"><i class="fa fa-trash" aria-hidden="true"></i>   Delete Students</button>

            <button href="#modalSpeciality" role="button" class="btn btn-primary jsOpenModalSpeciality" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Speciality</button>
            <button href="#modalFaculty" role="button" class="btn btn-primary jsOpenModalFaculty" data-toggle="modal"><i class="fa fa-plus" aria-hidden="true"></i>   Create Faculty</button>
    </div>





</div>
<br>
<!-- Вкладки с таблицами-->
<div class="container-fluid">

                <table data-click-to-select="true"
                       data-pagination="true"
                       data-side-pagination="server"
                       data-page-list="[5, 10, 20, 50, 100, 200]"
                       data-search="true"
                       data-toggle="table"
                       data-url = "/studentTable"
                       data-sort-order="asc"
                       data-sort-name="lastname"
                       data-height="350"
                       data-classes="table table-bordered table-hover jsStudentTableForMAV" >
                    <thead>
                    <tr>
                       <!-- <th style="width:20px;"><input type="checkbox" id="head_checkbox"></th>-->
                        <th data-field="checkbox" data-checkbox="idStudent"></th>
                        <th data-field="idStudent">#</th>
                        <th data-field="firstname" data-sortable="true">First Name</th>
                        <th data-field="lastname" data-sortable="true">Last Name</th>
                        <th data-field="patronymic" data-sortable="true">Patronymic</th>
                        <th data-field="groupStudent" data-sortable="true">Group</th>
                        <th data-field="averagescore" data-sortable="true">Average Score</th>
                        <th data-field="isbudget" data-sortable="true">Budget</th>
                        <th data-field="statuspractice" data-sortable="true">Status</th>
                        <th data-field="specialityName" data-sortable="true"> Speciality</th>
                        <th data-field="facultyName" data-sortable="true">Faculty</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:if test="${not empty studentListForMAV}">
                        <c:forEach items="${studentListForMAV}" var="student">
                            <tr>
                                <td></td>
                                <td>${student.idStudent}</td>
                                <td>${student.accountEntityByStudent.firstname}</td>
                                <td>${student.accountEntityByStudent.lastname}</td>
                                <td>${student.accountEntityByStudent.patronymic}</td>
                                <td>${student.groupStudent}</td>
                                <td>${student.averagescore}</td>
                                <td>${student.isbudget}</td>
                                <td>${student.statuspractice}</td>
                                <td>${student.specialityEntityByStudent.namespeciality}</td>
                                <td>${student.specialityEntityByStudent.facultyByFaculty.namefaculty}</td>
                            </tr>
                        </c:forEach>
                    </c:if>
                    </tbody>
                </table>
            <!-- Таблица студентов -->
            <!--<div role="tabpanel" class="tab-pane fade" id="table-student1">
                <table data-click-to-select="true"
                       data-pagination="true"
                       data-side-pagination="server"
                       data-page-list="[5, 10, 20, 50, 100, 200]"
                       data-search="true"
                       data-url = "/studentTable"
                       data-toggle="table"
                       data-sort-order="asc"
                       data-sort-name="lastname"
                       data-height="350"
                       data-classes="table table-bordered table-hover jsStudentsTable" >
                    <thead>
                    <tr>
                        <th data-field="checkbox" data-checkbox="idStudent"></th>
                        <th data-field="firstname" data-sortable="true">First Name</th>
                        <th data-field="lastname" data-sortable="true">Last Name</th>
                        <th data-field="patronymic" data-sortable="true">Patronomyc</th>
                        <th data-field="groupStudent" data-sortable="true">Group</th>
                        <th data-field="averagescore" data-sortable="true">Average Score</th>
                        <th data-field="isbudget" data-sortable="true">Budget</th>
                        <th data-field="statuspractice" data-sortable="true">Status</th>
                        <th data-field="specialityName" data-sortable="true">Speciality</th>
                        <th data-field="facultyName" data-sortable="true">Faculty</th>
                    </tr>
                    </thead>
                </table >
            </div>-->
</div>


<!-- Модальные окна -->
<!-- МО Создание специальности -->
<div id="modalSpeciality" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Speciality</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div id="info" class="success"></div>
                <div id="error" class="error"></div>
                <div class="form-group">
                    <input  class="form-control jsInputSpeciality" placeholder="Speciality" type="text">
                </div>
                <div class="form-group">
                    <select class="form-control availableFaculties"></select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddSpeciality">Create Speciality</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание факультета -->
<div id="modalFaculty" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Faculty</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <input  class="form-control jsInputFaculty" placeholder="Faculty" type="text" id="name">
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAddFaculty">Create Faculty</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание студента -->
<div id="modalStudent" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title jsTitleAddStudent">Add Student</h4>
                <h4 class="modal-title jsTitleEditStudent">Edit Student</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div class="form-group jsDivIdStudentforEdit">
                    <label>Id Student : </label>
                    <input type="text" class="form-control jsInputIdStudent" placeholder="Id Student" readonly/>
                </div>
                <div class="form-group jsDivStatusRequest">
                    <label>Status Student : </label>
                    <input type="text" class="form-control jsInputStatusStudent" placeholder="Status Student" value="Available" readonly>
                </div>
                <div class="form-group">
                    <select class="form-control availableAccountStudent"></select>
                </div>
                <div class="form-group">
                    <input class="form-control jsInputGroup" placeholder="Group of student" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputAverageScore" placeholder="Average Score of student" type="text">
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label class="btn btn-outline-info btn-md btn-block">
                                <input type="radio" name="isBudget" value="yes" checked> Budget
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="btn btn-outline-info btn-md btn-block">
                                <input type="radio" name="isBudget" value="no"> Paid
                            </label>
                        </div>
                    </div>
                    <!--<input class="form-control jsInputBudget" placeholder="Is budget of student" type="text">-->
                </div>
               <div class="form-group">
                    <input class="form-control jsInputAdress" placeholder="Adress" type="text">
                </div>
                <div class="form-group">
                    <input class="form-control jsInputPhone" placeholder="Phone" type="text">
                </div>
                <div class="form-group">
                    <select class="form-control availableFacultiesStudent"></select>
                </div>
                <div class="form-group">
                    <select class="form-control availableSpecialities"></select>
                </div>
                <div class="form-group">
                    <textarea rows="5" cols="30" class="form-control jsInputComment" placeholder="Comment About Student"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-secondary jsBtnResetStudent">Reset Student</button>
                <button class="btn btn-success jsBtnAddAndEditStudent">Create/Edit Student</button>
            </div>
        </div>
    </div>
</div>
<!-- МО Создание малтиселекта -->
<div id="modalMultiSelect" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Multi Select</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div id="divForTypeaheadStudent">
                        <input class="typeahead" id="jsInputTypeaheadStudent" type="text" placeholder="Search Student..." autocomplete="off">
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <select class="form-control availableStudent"></select>
                        </div>
                        <div class="col-md-6">
                            <select class="form-control availableRequest"></select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div id="divForTypeaheadRequest">
                        <input class="typeahead" id="jsInputTypeaheadRequest" type="text" placeholder="Search Request..." autocomplete="off">
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-success jsBtnAssignStudentOnPractice">Assign Student</button>
                <button class="btn btn-success jsBtnReAssignStudentOnPractice">Reassign Student</button>
            </div>
        </div>
    </div>
</div>



<script src="../resources/js/admin-page.js"></script>
<script src="../resources/js/validation-and-maskJQuery.js"></script>

<jsp:include page="parts/footer.jsp"/>
</body>
</html>
