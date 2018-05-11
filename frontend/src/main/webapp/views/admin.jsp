<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <%@include file="parts/meta.jsp"%>
    <title>Admin</title>
        <style>
            button.btn:hover {
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -o-transform: scale(1.1);
            }
            button.btn {
                -webkit-transform: scale(0.8);
                -moz-transform: scale(0.8);
                -o-transform: scale(0.8);
                -webkit-transition-duration: 5s;
                -moz-transition-duration: 5s;
                -o-transition-duration: 5s;
                width: 10em;
                height: 2.5em;
            }
            #divForTypeaheadRequest,
            #divForTypeaheadStudent{
                position: relative;
                *z-index: 1;
                margin: 50px 0;
            }

            .typeahead{
                width: 396px;
                height: 30px;
                padding: 8px 12px;
                font-size: 24px;
                line-height: 30px;
                border: 2px solid #ccc;
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                border-radius: 8px;
                outline: none;
            }

            .typeahead {
                background-color: #fff;
            }

            .typeahead:focus {
                border: 2px solid #0097cf;
            }

            .container {
                max-width: 750px;
                margin: 0 auto;
                text-align: center;
            }

            .tt-menu,
            .gist {
                text-align: left;
            }

            a {
                color: #03739c;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }

            .table-of-contents li {
                display: inline-block;
                *display: inline;
                zoom: 1;
            }

            .table-of-contents li a {
                font-size: 16px;
                color: #999;
            }

            .typeahead,
            .tt-query,
            .tt-hint {
                width: 460px;
                height: 40px;
                padding: 8px 12px;
                font-size: 18px;
                line-height: 30px;
                border: 2px solid #ccc;
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                border-radius: 8px;
                outline: none;
            }

            .typeahead {
                background-color: #fff;
            }

            .typeahead:focus {
                border: 2px solid #0097cf;
            }

            .tt-query {
                -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            }

            .tt-hint {
                color: #999
            }

            .tt-menu {
                width: 422px;
                margin: 12px 0;
                padding: 8px 0;
                background-color: #fff;
                border: 1px solid #ccc;
                border: 1px solid rgba(0, 0, 0, 0.2);
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                border-radius: 8px;
                -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.2);
                -moz-box-shadow: 0 5px 10px rgba(0,0,0,.2);
                box-shadow: 0 5px 10px rgba(0,0,0,.2);
            }

            .tt-suggestion {
                padding: 3px 20px;
                font-size: 16px;
                line-height: 20px;
            }

            .tt-suggestion:hover {
                cursor: pointer;
                color: #fff;
                background-color: #0097cf;
            }

            .tt-suggestion.tt-cursor {
                color: #fff;
                background-color: #0097cf;

            }

            .tt-suggestion p {
                margin: 0;
            }

            .gist {
                font-size: 14px;
            }

            #custom-templates .empty-message {
                padding: 5px 10px;
                text-align: center;
            }

            #multiple-datasets .league-name {
                margin: 0 20px 5px 20px;
                padding: 3px 0;
                border-bottom: 1px solid #ccc;
            }

            #scrollable-dropdown-menu .tt-menu {
                max-height: 150px;
                overflow-y: auto;
            }

            #rtl-support .tt-menu {
                text-align: right;
            }
        </style>
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
                    <tbody id="body_student_table">
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
                <div id="sos"></div>
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
                <div id="fof1"></div>
                <input  class="form-control jsInputFaculty" placeholder="Faculty" type="text">
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
                <div id="hoh"></div>
                <div id="hoh1"></div>
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
                <div id="mom"></div>
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
