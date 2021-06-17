(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/remruatthanga/Documents/dev/inhouse/inhouse/src/main.ts */"zUnb");


/***/ }),

/***/ "0GDw":
/*!*********************************************************************************!*\
  !*** ./src/app/component/dialog/new-leave-dialog/new-leave-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewLeaveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLeaveDialogComponent", function() { return NewLeaveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_supervisor_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/supervisor-api.service */ "KgNH");
/* harmony import */ var src_app_service_leave_allowance_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/leave-allowance-api.service */ "gCE5");
/* harmony import */ var src_app_service_leave_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/leave-api.service */ "XYED");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom-select-component/custom-select-component.component */ "0U9+");
/* harmony import */ var _custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom-date-picker-component/custom-date-picker-component.component */ "SwAD");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












function NewLeaveDialogComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-custom-select-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newLeaveEmployeeValue = $event; })("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNewLeaveEmployeeSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-custom-select-component", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.newLeaveLeaveTypeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-custom-date-picker-component", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_date_picker_component_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.newLeaveFromDateValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLeaveDialogComponent_ng_container_2_Template_nz_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.newLeaveFromTypeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-custom-date-picker-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_date_picker_component_valueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newLeaveToDateValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLeaveDialogComponent_ng_container_2_Template_nz_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newLeaveToTypeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Full");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-custom-select-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.newLeaveStatusValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-custom-select-component", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewLeaveDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.newLeaveReportToValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newLeaveEmployeeOptions)("value", ctx_r1.newLeaveEmployeeValue)("isLoading", ctx_r1.isNewLeaveEmployeeSelectLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newLeaveLeaveTypeOptions)("value", ctx_r1.newLeaveLeaveTypeValue)("disabled", ctx_r1.newLeaveEmployeeValue == null)("isLoading", ctx_r1.isNewLeaveLeaveTypeSelectLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.newLeaveFromDateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newLeaveFromTypeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 0)("nzDisabled", ctx_r1.newLeaveFromDateValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1)("nzDisabled", ctx_r1.newLeaveFromDateValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2)("nzDisabled", ctx_r1.newLeaveFromDateValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.newLeaveFromDateValue == null)("value", ctx_r1.newLeaveToDateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newLeaveToTypeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 0)("nzDisabled", ctx_r1.newLeaveFromDateValue == null || ctx_r1.newLeaveToDateValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1)("nzDisabled", ctx_r1.newLeaveFromDateValue == null || ctx_r1.newLeaveToDateValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2)("nzDisabled", ctx_r1.newLeaveFromDateValue == null || ctx_r1.newLeaveToDateValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newLeaveStatusOptions)("value", ctx_r1.newLeaveStatusValue)("disabled", ctx_r1.newLeaveEmployeeValue == null || ctx_r1.newLeaveEmployeeValue != null && ctx_r1.newLeaveEmployeeValue.id == ctx_r1.currentUserEmployee.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newLeaveReportToOptions)("disabled", ctx_r1.newLeaveEmployeeValue == null)("isLoading", ctx_r1.isNewLeaveReportToSelectLoading)("value", ctx_r1.newLeaveReportToValue);
} }
class NewLeaveDialogComponent {
    constructor(message, _supervisorApiService, _leaveAllowanceApiService, _leaveApiService) {
        this.message = message;
        this._supervisorApiService = _supervisorApiService;
        this._leaveAllowanceApiService = _leaveAllowanceApiService;
        this._leaveApiService = _leaveApiService;
        this._isNewLeaveModalVisible = false;
        this.currentUserEmployee = null;
        this.onNewCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isNewLeaveModalVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isNewLeaveModalLoading = false;
        this.isNewLeaveEmployeeSelectLoading = false;
        this.isNewLeaveLeaveTypeSelectLoading = false;
        this.isNewLeaveReportToSelectLoading = false;
        this.newLeaveEmployeeValue = null;
        this.newLeaveLeaveTypeValue = null;
        this.newLeaveStatusValue = 0;
        this.newLeaveStatusOptions = [
            { id: 0, text: 'Pending' },
            { id: 1, text: 'Approved' },
        ];
        this.newLeaveFromDateValue = null;
        this.newLeaveFromTypeValue = 0;
        this.newLeaveToDateValue = null;
        this.newLeaveToTypeValue = 0;
        this.newLeaveReportToValue = null;
    }
    set isNewLeaveModalVisible(value) {
        this._isNewLeaveModalVisible = value;
        this.initializeNewLeaveModel();
    }
    get isNewLeaveModalVisible() {
        return this._isNewLeaveModalVisible;
    }
    ngOnInit() { }
    initializeNewLeaveModel() {
        this.isNewLeaveModalLoading = false;
        this.isNewLeaveEmployeeSelectLoading = true;
        this.newLeaveEmployeeOptions = [];
        this.newLeaveLeaveTypeOptions = [];
        this.newLeaveReportToOptions = [];
        this.newLeaveStatusValue = 0;
        this.newLeaveFromTypeValue = 0;
        this.newLeaveToTypeValue = 0;
        this.newLeaveEmployeeValue = this.currentUserEmployee;
        this.onNewLeaveEmployeeSelect(this.currentUserEmployee);
        this._supervisorApiService
            .getSupervisors(1, this.currentUserEmployee.id)
            .subscribe((response) => {
            if (response.success) {
                this.newLeaveEmployeeOptions = [
                    this.currentUserEmployee,
                    ...src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(response.result),
                ];
                this.isNewLeaveEmployeeSelectLoading = false;
            }
            else {
                this.message.create('error', response.message);
            }
        });
    }
    onNewLeaveEmployeeSelect(value) {
        this.newLeaveLeaveTypeOptions = [];
        this.newLeaveReportToOptions = [];
        this.newLeaveLeaveTypeValue = null;
        this.newLeaveReportToValue = null;
        if (value.id == this.currentUserEmployee.id) {
            this.newLeaveStatusValue = 0;
        }
        // Get report to
        this.isNewLeaveReportToSelectLoading = true;
        this._supervisorApiService
            .getSupervisors(0, value.id)
            .subscribe((response) => {
            if (response.success) {
                this.newLeaveReportToOptions = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(response.result);
                if (this.newLeaveReportToOptions.length > 0)
                    this.newLeaveReportToValue = this.newLeaveReportToOptions[0];
                this.isNewLeaveReportToSelectLoading = false;
            }
            else {
                this.message.create('error', response.message);
            }
        });
        // Get available Leave Types
        this.isNewLeaveLeaveTypeSelectLoading = true;
        this._leaveAllowanceApiService
            .getAll(value.id, new Date().getFullYear())
            .subscribe((response) => {
            if (response.success) {
                let tempLeaveTypeOptions = [];
                for (let leaveAllowance of response.result) {
                    tempLeaveTypeOptions.push(leaveAllowance.leave_type);
                }
                this.newLeaveLeaveTypeOptions = tempLeaveTypeOptions;
                console.log(this.newLeaveLeaveTypeOptions);
            }
            else {
                this.message.create('error', response.message);
            }
            this.isNewLeaveLeaveTypeSelectLoading = false;
        }, (err) => {
            this.message.create('error', err.error.message);
            this.isNewLeaveLeaveTypeSelectLoading = false;
        });
    }
    get isNewLeaveSubmitDisabled() {
        return (this.newLeaveEmployeeValue == null ||
            this.newLeaveLeaveTypeValue == null ||
            this.newLeaveFromDateValue == null ||
            this.newLeaveStatusValue == null ||
            this.newLeaveReportToValue == null);
    }
    onNewLeaveCancel() {
        this.isNewLeaveModalVisible = false;
        this.isNewLeaveModalVisibleChange.emit(false);
    }
    onNewLeaveSubmit() {
        this.isNewLeaveModalLoading = true;
        let requestBody = {};
        requestBody['supervisor_id'] = this.newLeaveReportToValue.id;
        requestBody['leave_type_id'] = this.newLeaveLeaveTypeValue.id;
        requestBody['from_date'] = this.newLeaveFromDateValue;
        requestBody['from_type'] = this.newLeaveFromTypeValue;
        requestBody['to_date'] = this.newLeaveToDateValue;
        requestBody['to_type'] = this.newLeaveToTypeValue;
        requestBody['status'] = this.newLeaveStatusValue;
        this._leaveApiService.requestLeave(requestBody).subscribe((response) => {
            if (response.success) {
                this.message.success(response.message);
                this.onNewCreate.emit(response.result);
                this.onNewLeaveCancel();
            }
            else {
                this.message.error(response.message);
            }
            this.isNewLeaveModalLoading = false;
        }, (err) => {
            this.message.error(err.error.message);
            this.isNewLeaveModalLoading = false;
        });
    }
}
NewLeaveDialogComponent.ɵfac = function NewLeaveDialogComponent_Factory(t) { return new (t || NewLeaveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_supervisor_api_service__WEBPACK_IMPORTED_MODULE_3__["SupervisorApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_leave_allowance_api_service__WEBPACK_IMPORTED_MODULE_4__["LeaveAllowanceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_leave_api_service__WEBPACK_IMPORTED_MODULE_5__["LeaveApiService"])); };
NewLeaveDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewLeaveDialogComponent, selectors: [["app-new-leave-dialog"]], inputs: { isNewLeaveModalVisible: "isNewLeaveModalVisible", currentUserEmployee: "currentUserEmployee" }, outputs: { onNewCreate: "onNewCreate", isNewLeaveModalVisibleChange: "isNewLeaveModalVisibleChange" }, decls: 3, vars: 4, consts: [["nzTitle", "New Leave", 3, "nzVisible", "nzOkLoading", "nzOkDisabled", "nzOkText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["newLeaveModal", ""], [4, "nzModalContent"], ["label", "Employee", "displayProperty", "name", 3, "options", "value", "isLoading", "valueChange"], [1, "spacer"], ["label", "Leave Type", "placeholder", "Select leave type", "displayProperty", "name", 3, "options", "value", "disabled", "isLoading", "valueChange"], [1, "flex-row", 2, "align-items", "flex-end"], ["label", "From date", 2, "flex", "1", 3, "value", "valueChange"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], [1, "flex-row", 2, "align-items", "center", "height", "30px", "margin-left", "12px"], ["nz-radio", "", 3, "nzValue", "nzDisabled"], ["label", "To date (Optional)", 2, "flex", "1", 3, "disabled", "value", "valueChange"], ["label", "Status", "displayProperty", "text", 3, "options", "value", "disabled", "valueChange"], ["label", "Report to", "displayProperty", "name", 3, "options", "disabled", "isLoading", "value", "valueChange"]], template: function NewLeaveDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NewLeaveDialogComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isNewLeaveModalVisible = $event; })("nzOnCancel", function NewLeaveDialogComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.onNewLeaveCancel(); })("nzOnOk", function NewLeaveDialogComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.currentUserEmployee != null ? ctx.onNewLeaveSubmit() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewLeaveDialogComponent_ng_container_2_Template, 30, 31, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isNewLeaveModalVisible)("nzOkLoading", ctx.isNewLeaveModalLoading)("nzOkDisabled", ctx.isNewLeaveSubmitDisabled)("nzOkText", ctx.newLeaveEmployeeValue == null || ctx.newLeaveEmployeeValue != null && ctx.currentUserEmployee != null && ctx.newLeaveEmployeeValue.id == ctx.currentUserEmployee.id ? "Request" : "Create");
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalContentDirective"], _custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_7__["CustomSelectComponentComponent"], _custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_8__["CustomDatePickerComponentComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__["NzRadioComponent"]], styles: [".spacer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy1sZWF2ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibmV3LWxlYXZlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "0U9+":
/*!****************************************************************************************!*\
  !*** ./src/app/component/custom-select-component/custom-select-component.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CustomSelectComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSelectComponentComponent", function() { return CustomSelectComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CustomSelectComponentComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 4);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", ctx_r0.value != null && ctx_r0.value.id == null ? option_r1.id : option_r1)("nzLabel", option_r1[ctx_r0.displayProperty]);
} }
class CustomSelectComponentComponent {
    constructor() {
        this.disabled = false;
        this.label = '';
        this.isLoading = false;
        this.placeholder = '';
        this.displayProperty = '';
        this.options = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
CustomSelectComponentComponent.ɵfac = function CustomSelectComponentComponent_Factory(t) { return new (t || CustomSelectComponentComponent)(); };
CustomSelectComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSelectComponentComponent, selectors: [["app-custom-select-component"]], inputs: { disabled: "disabled", label: "label", isLoading: "isLoading", placeholder: "placeholder", displayProperty: "displayProperty", value: "value", options: "options" }, outputs: { valueChange: "valueChange" }, decls: 5, vars: 6, consts: [[2, "display", "flex", "flex-direction", "column"], [1, "label"], [3, "nzDisabled", "ngModel", "nzPlaceHolder", "nzLoading", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function CustomSelectComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomSelectComponentComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.value = $event; })("ngModelChange", function CustomSelectComponentComponent_Template_nz_select_ngModelChange_3_listener() { return ctx.valueChange.emit(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomSelectComponentComponent_nz_option_4_Template, 1, 2, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disabled)("ngModel", ctx.value)("nzPlaceHolder", ctx.placeholder)("nzLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 10pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1c3RvbS1zZWxlY3QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJjdXN0b20tc2VsZWN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "1dOZ":
/*!***************************************************!*\
  !*** ./src/app/service/attendance-api.service.ts ***!
  \***************************************************/
/*! exports provided: AttendanceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceApiService", function() { return AttendanceApiService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-api.service */ "Thbc");



class AttendanceApiService {
    constructor(baseApiService) {
        this.baseApiService = baseApiService;
    }
    getAttendance(employee_id, month, year, date) {
        return this.baseApiService.get(`attendance?emp_id=${employee_id}${month != null ? '&month=' + month : ''}${year != null ? '&year=' + year : ''}${date != null ? '&date=' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'yyyy-MM-dd', 'en-us') : ''}`);
    }
    checkIn() {
        return this.baseApiService.post(`attendance/check-in`, {});
    }
    checkOut() {
        return this.baseApiService.put(`attendance/check-out`, {});
    }
    createAttendance(attendance) {
        return this.baseApiService.post('attendance', attendance);
    }
    updateAttendance(attendance) {
        return this.baseApiService.put(`attendance/${attendance.id}`, attendance);
    }
    deleteAttendance(attendance_id) {
        return this.baseApiService.delete(`attendance/${attendance_id}`);
    }
}
AttendanceApiService.ɵfac = function AttendanceApiService_Factory(t) { return new (t || AttendanceApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"])); };
AttendanceApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttendanceApiService, factory: AttendanceApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1yoe":
/*!*****************************************************************!*\
  !*** ./src/app/page/dashboard-page/dashboard-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var src_app_util_common_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/util/common-api-util */ "jjfJ");
/* harmony import */ var src_app_util_date_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/date-util */ "qqfZ");
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_attendance_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/attendance-api.service */ "1dOZ");
/* harmony import */ var src_app_service_leave_allowance_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/leave-allowance-api.service */ "gCE5");
/* harmony import */ var src_app_service_leave_type_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/leave-type-api.service */ "kUND");
/* harmony import */ var src_app_service_overtime_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/overtime-api.service */ "pCso");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _component_dialog_new_leave_dialog_new_leave_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../component/dialog/new-leave-dialog/new-leave-dialog.component */ "0GDw");
/* harmony import */ var _component_dialog_new_overtime_dialog_new_overtime_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../component/dialog/new-overtime-dialog/new-overtime-dialog.component */ "dhkV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");



















function DashboardPageComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardPageComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.actionButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx_r0.isCheckinButtonLoading || ctx_r0.attendanceResult == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.checkAction == 0 ? "Check In" : ctx_r0.checkAction == 1 ? "Check Out" : ctx_r0.checkAction == 2 ? "Check In OT" : ctx_r0.checkAction == 3 ? "Check Out OT" : "", " ");
} }
const _c0 = function () { return { color: "#ce2783", "font-size": "12pt", margin: "0 4px" }; };
function DashboardPageComponent_tr_29_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 31);
} if (rf & 2) {
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", data_r11.leave.leave_type.name + " (" + (data_r11.leave.type == 0 ? "Full Day" : data_r11.leave.type == 1 ? "AM" : "PM") + ")")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
} }
const _c1 = function () { return { color: "#6767ec", "font-size": "12pt", margin: "0 4px" }; };
function DashboardPageComponent_tr_29_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
} if (rf & 2) {
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, data_r11.overtime.request_start_datetime, "shortTime") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, data_r11.overtime.request_end_datetime, "shortTime"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1));
} }
function DashboardPageComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DashboardPageComponent_tr_29_i_10_Template, 1, 3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DashboardPageComponent_tr_29_i_11_Template, 3, 9, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r11.employee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r11.employee.department.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r11.attendance ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, data_r11.attendance.check_in_time, "shortTime") + " - " + (data_r11.attendance.check_out_time ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 8, data_r11.attendance.check_out_time, "shortTime") : "") : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r11.leave != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r11.overtime != null);
} }
function DashboardPageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Holiday:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.attendanceResult.holiday.name, " ");
} }
function DashboardPageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Leave:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.attendanceResult.leave.leave_type.name + "(" + (ctx_r5.attendanceResult.leave.type == 0 ? "Full Day" : ctx_r5.attendanceResult.leave.type == 1 ? "AM" : "PM") + ")", " ");
} }
function DashboardPageComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 33);
} }
function DashboardPageComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Overtime:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 4, ctx_r8.attendanceResult.overtime.request_start_datetime, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.attendanceResult.overtime.actual_start_datetime ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 7, ctx_r8.attendanceResult.overtime.actual_start_datetime, "shortTime") : "--:--", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 10, ctx_r8.attendanceResult.overtime.request_end_datetime, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.attendanceResult.overtime.actual_end_datetime ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 13, ctx_r8.attendanceResult.overtime.actual_end_datetime, "shortTime") : "--:--", " ");
} }
const _c2 = function (a1) { return { x: "100%", y: a1 }; };
class DashboardPageComponent {
    constructor(message, attendanceApiService, _leaveAllowanceApiService, _leaveTypeApiService, overtimeApiService) {
        this.message = message;
        this.attendanceApiService = attendanceApiService;
        this._leaveAllowanceApiService = _leaveAllowanceApiService;
        this._leaveTypeApiService = _leaveTypeApiService;
        this.overtimeApiService = overtimeApiService;
        this.now = new Date();
        this.isCheckinButtonLoading = false;
        this.checkinButtonLabelId = 0;
        this.isNewLeaveModalVisible = false;
        this.isNewOvertimeModalVisible = false;
        this.attendanceResultList = [];
        this.tableHeight = '500px';
        this.departmentFilterList = [];
        this.departmentFilterFunction = (departmentIdList, attendanceResultItem) => departmentIdList.some((departmentId) => attendanceResultItem.employee.department.id == departmentId);
        this.attendanceFilterList = [
            {
                text: 'Not Checked in',
                value: 0,
            },
            {
                text: 'Late Check in',
                value: 1,
            },
        ];
        this.attendanceFilterFunction = (attendanceIdList, attendanceResultItem) => attendanceIdList.some((attendanceId) => attendanceId == 0
            ? attendanceResultItem.attendance == null
            : attendanceResultItem.attendance &&
                src_app_util_date_util__WEBPACK_IMPORTED_MODULE_1__["DateUtil"].compareDateTimes(attendanceResultItem.attendance.check_in_time, new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8).getTime()) < 0);
        this.checkWeekend = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_1__["DateUtil"].checkWeekend;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        //TODO: implement apis necessary for startup
        this.initializeCurrentUser();
        this.getAttendanceResults();
    }
    initializeCurrentUser() {
        let currentUserDataJsonString = localStorage.getItem('current_employee');
        let decryptedUserData = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_2__["EncryptionUtil"].decryptData(currentUserDataJsonString);
        this.currentUserEmployee = decryptedUserData;
        src_app_util_common_api_util__WEBPACK_IMPORTED_MODULE_0__["CommonApiUtil"].checkLeaveAllowanceUpdate(this._leaveAllowanceApiService, this._leaveTypeApiService, this.currentUserEmployee, this.message);
    }
    getAttendanceResults() {
        this.isCheckinButtonLoading = true;
        // TODO: get API
        this.attendanceApiService
            .getAttendance(null, null, null, new Date().getTime())
            .subscribe((response) => {
            if (response.success) {
                this.attendanceResultList = response.result;
                this.attendanceResult = response.result.find((ar) => ar.employee.id == this.currentUserEmployee.id);
                let tempDepartmentFilterList = [];
                for (let tempAttendanceResult of response.result) {
                    if (tempDepartmentFilterList.filter((tempDepartmentFilterItem) => tempDepartmentFilterItem.value ==
                        tempAttendanceResult.employee.department.id).length == 0) {
                        tempDepartmentFilterList.push({
                            text: tempAttendanceResult.employee.department.name,
                            value: tempAttendanceResult.employee.department.id,
                        });
                    }
                }
                this.departmentFilterList = tempDepartmentFilterList;
            }
            else {
                this.message.create('error', response.message ? response.message : response.toString());
            }
            this.isCheckinButtonLoading = false;
        }, (err) => {
            this.message.create('error', err.error.message ? err.error.message : err.toString());
            this.isCheckinButtonLoading = false;
        });
    }
    actionButtonClicked() {
        this.isCheckinButtonLoading = true;
        let subscription = this.checkAction == 0
            ? this.attendanceApiService.checkIn()
            : this.checkAction == 1
                ? this.attendanceApiService.checkOut()
                : this.checkAction == 2
                    ? this.overtimeApiService.checkIn()
                    : this.checkAction == 3
                        ? this.overtimeApiService.checkOut()
                        : null;
        if (!subscription) {
            return;
        }
        subscription.subscribe((response) => {
            if (response.success) {
                this.message.create('success', response.message);
                // overtime or attendance
                if (response.result.request_start_datetime != null) {
                    this.attendanceResult.overtime = response.result;
                }
                else {
                    this.attendanceResult.attendance = response.result;
                }
            }
            else {
                this.message.create('error', response.message);
            }
            this.isCheckinButtonLoading = false;
        }, (err) => {
            this.message.create('error', err.error.message ? err.error.message : err.toString());
            this.isCheckinButtonLoading = false;
        });
    }
    // ng zorro table is designed to have fixed width and height
    // if we want it to become scrollable
    // but we needed the height to change according to browser window resize
    calculateTableHeight(dashboardBody) {
        this.tableHeight =
            dashboardBody == null
                ? '500px'
                : dashboardBody.nativeElement.clientHeight + 'px';
    }
    // 0 = checkin
    // 1 = checkout
    // 2 = checkin OT
    // 3 = checkout OT
    // 4 = none
    get checkAction() {
        if (this.attendanceResult) {
            if (this.checkWeekend(this.attendanceResult.date) ||
                this.attendanceResult.holiday ||
                (this.attendanceResult.leave && this.attendanceResult.leave.type == 0)) {
                if (this.attendanceResult.overtime) {
                    if (!this.attendanceResult.overtime.actual_start_datetime &&
                        !this.attendanceResult.overtime.actual_end_datetime) {
                        return 2;
                    }
                    else if (this.attendanceResult.overtime.actual_start_datetime &&
                        !this.attendanceResult.overtime.actual_end_datetime) {
                        return 3;
                    }
                    else {
                        return 4;
                    }
                }
                else {
                    return 4;
                }
            }
            else {
                if (this.attendanceResult.attendance) {
                    if (this.attendanceResult.attendance.check_out_time) {
                        if (this.attendanceResult.overtime) {
                            if (!this.attendanceResult.overtime.actual_start_datetime &&
                                !this.attendanceResult.overtime.actual_end_datetime) {
                                return 2;
                            }
                            else if (this.attendanceResult.overtime.actual_start_datetime &&
                                !this.attendanceResult.overtime.actual_end_datetime) {
                                return 3;
                            }
                            else {
                                return 4;
                            }
                        }
                        else {
                            return 4;
                        }
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    return 0;
                }
            }
        }
        else {
            return 4;
        }
    }
}
DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) { return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_attendance_api_service__WEBPACK_IMPORTED_MODULE_5__["AttendanceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_leave_allowance_api_service__WEBPACK_IMPORTED_MODULE_6__["LeaveAllowanceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_leave_type_api_service__WEBPACK_IMPORTED_MODULE_7__["LeaveTypeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_overtime_api_service__WEBPACK_IMPORTED_MODULE_8__["OvertimeApiService"])); };
DashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardPageComponent, selectors: [["app-dashboard-page"]], decls: 55, vars: 35, consts: [[1, "body-container"], [1, "flex-row"], [2, "margin-left", "auto"], ["nz-button", "", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 2, "margin-right", "4px", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "calendar"], ["nz-icon", "", "nzType", "clock-circle"], [3, "currentUserEmployee", "isNewLeaveModalVisible", "isNewLeaveModalVisibleChange"], [3, "currentUserEmployee", "isNewOvertimeModalVisible", "isNewOvertimeModalVisibleChange"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "ngIf"], [1, "flex-row", 3, "resize"], ["dashboardBody", ""], [2, "flex", "1"], [3, "nzData", "nzFrontPagination", "nzScroll", "nzLoading"], ["todayAttendanceTable", ""], [3, "nzFilters", "nzFilterFn"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "flex-direction", "column", "margin", "4px", "padding", "16px", "border", "solid 1px lightgray", "align-self", "flex-start", "width", "350px"], [2, "margin-bottom", "4px"], [2, "font-size", "10pt", "color", "gray"], ["style", "margin-bottom: 4px", 4, "ngIf"], [2, "margin", "8px 0 12px 0", "border-top", "solid 0.5px lightgray", "align-self", "stretch"], [2, "flex", "1", "display", "flex", "flex-direction", "column", "margin-right", "8px"], [2, "font-size", "10pt", "color", "gray", "white-space", "nowrap"], [2, "font-size", "20pt", "white-space", "nowrap"], [2, "flex", "1", "display", "flex", "border-left", "solid 0.5px lightgray", "flex-direction", "column", "padding-left", "8px"], ["style", "\n          margin: 12px 0 12px 0;\n          border-top: solid 0.5px lightgray;\n          align-self: stretch;\n        ", 4, "ngIf"], ["style", "color: gray; margin-bottom: 4px; font-size: 10pt", 4, "ngIf"], ["class", "flex-row", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nz-tooltip", "", "nz-icon", "", "nzType", "minus-circle", 3, "nzTooltipTitle", "ngStyle", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "nzType", "clock-circle", 3, "nzTooltipTitle", "ngStyle", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "nzType", "minus-circle", 3, "nzTooltipTitle", "ngStyle"], ["nz-tooltip", "", "nz-icon", "", "nzType", "clock-circle", 3, "nzTooltipTitle", "ngStyle"], [2, "margin", "12px 0 12px 0", "border-top", "solid 0.5px lightgray", "align-self", "stretch"], [2, "color", "gray", "margin-bottom", "4px", "font-size", "10pt"], [2, "align-self", "center", "font-size", "20pt", "white-space", "nowrap"]], template: function DashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardPageComponent_Template_button_click_6_listener() { return ctx.isNewLeaveModalVisible = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardPageComponent_Template_button_click_8_listener() { return ctx.isNewOvertimeModalVisible = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "app-new-leave-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isNewLeaveModalVisibleChange", function DashboardPageComponent_Template_app_new_leave_dialog_isNewLeaveModalVisibleChange_10_listener($event) { return ctx.isNewLeaveModalVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "app-new-overtime-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isNewOvertimeModalVisibleChange", function DashboardPageComponent_Template_app_new_overtime_dialog_isNewOvertimeModalVisibleChange_11_listener($event) { return ctx.isNewOvertimeModalVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DashboardPageComponent_button_12_Template, 2, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function DashboardPageComponent_Template_div_resize_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14); return ctx.calculateTableHeight(_r1); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Checkin/Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DashboardPageComponent_tr_29_Template, 12, 11, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, DashboardPageComponent_div_36_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, DashboardPageComponent_div_37_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Check In Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Check Out Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, DashboardPageComponent_div_52_Template, 1, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, DashboardPageComponent_span_53_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, DashboardPageComponent_div_54_Template, 15, 16, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Request Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Request Overtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentUserEmployee", ctx.currentUserEmployee)("isNewLeaveModalVisible", ctx.isNewLeaveModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentUserEmployee", ctx.currentUserEmployee)("isNewOvertimeModalVisible", ctx.isNewOvertimeModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.checkAction != 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzData", ctx.attendanceResultList)("nzFrontPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c2, ctx.tableHeight))("nzLoading", ctx.isCheckinButtonLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFilters", ctx.departmentFilterList)("nzFilterFn", ctx.departmentFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFilters", ctx.attendanceFilterList)("nzFilterFn", ctx.attendanceFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](35, 24, ctx.now, "fullDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attendanceResult && ctx.attendanceResult.holiday);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attendanceResult && ctx.attendanceResult.leave && ctx.attendanceResult.leave.status == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.attendanceResult && ctx.attendanceResult.attendance ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](45, 27, ctx.attendanceResult.attendance.check_in_time, "shortTime") : "--:--", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.attendanceResult && ctx.attendanceResult.attendance && ctx.attendanceResult.attendance.check_out_time ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](51, 30, ctx.attendanceResult.attendance.check_out_time, "shortTime") : "--:--", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attendanceResult && ctx.attendanceResult.overtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attendanceResult && ctx.attendanceResult.overtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attendanceResult && ctx.attendanceResult.overtime);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], _component_dialog_new_leave_dialog_new_leave_dialog_component__WEBPACK_IMPORTED_MODULE_15__["NewLeaveDialogComponent"], _component_dialog_new_overtime_dialog_new_overtime_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NewOvertimeDialogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "2JEh":
/*!*********************************************************!*\
  !*** ./src/app/page/leave-page/leave-page.component.ts ***!
  \*********************************************************/
/*! exports provided: LeavePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavePageComponent", function() { return LeavePageComponent; });
/* harmony import */ var src_app_model_leave_allowance_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/leave-allowance-model */ "FlN3");
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var src_app_util_common_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/common-api-util */ "jjfJ");
/* harmony import */ var src_app_util_date_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/date-util */ "qqfZ");
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_leave_allowance_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/leave-allowance-api.service */ "gCE5");
/* harmony import */ var src_app_service_leave_type_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/leave-type-api.service */ "kUND");
/* harmony import */ var src_app_service_leave_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/leave-api.service */ "XYED");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _component_dialog_new_leave_dialog_new_leave_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../component/dialog/new-leave-dialog/new-leave-dialog.component */ "0GDw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../component/month-year-select-component/month-year-select-component.component */ "jvD1");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../component/employee-search-component/employee-search-component.component */ "iUhQ");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _component_custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../component/custom-select-component/custom-select-component.component */ "0U9+");




























const _c0 = ["employeeSearchComponent"];
function LeavePageComponent_app_employee_search_component_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-employee-search-component", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectEmployee", function LeavePageComponent_app_employee_search_component_13_Template_app_employee_search_component_onSelectEmployee_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.onSelectEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LeavePageComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Reported from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzFilters", ctx_r3.reportFromFilterList)("nzFilterFn", ctx_r3.reportFromFilterFunction);
} }
function LeavePageComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Reported to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzFilters", ctx_r4.reportToFilterList)("nzFilterFn", ctx_r4.reportToFilterFunction);
} }
function LeavePageComponent_tr_38_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r14.employee.name, " ");
} }
function LeavePageComponent_tr_38_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r14.supervisor.name, " ");
} }
const _c1 = function () { return { color: "#e34850", "font-size": "12pt" }; };
function LeavePageComponent_tr_38_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_38_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.onLeaveResponseClick(data_r14, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r17.leaveUpdatingId == data_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Reject")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return { color: "#379947", "font-size": "12pt" }; };
function LeavePageComponent_tr_38_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_38_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.onLeaveResponseClick(data_r14, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r18.leaveUpdatingId == data_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Approve")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
} }
function LeavePageComponent_tr_38_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnConfirm", function LeavePageComponent_tr_38_a_18_Template_a_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.onLeaveDeleteClick(data_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Delete")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c1));
} }
const _c3 = function (a0) { return { color: a0 }; };
function LeavePageComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LeavePageComponent_tr_38_td_1_Template, 3, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LeavePageComponent_tr_38_td_8_Template, 3, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LeavePageComponent_tr_38_a_16_Template, 2, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LeavePageComponent_tr_38_a_17_Template, 2, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, LeavePageComponent_tr_38_a_18_Template, 2, 3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.isRequested);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r5.showDateAndMonth(data_r14.leave_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r14.leave_type.name + " " + (data_r14.type == 0 ? "(Full)" : data_r14.type == 1 ? "(AM)" : "(PM)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isRequested);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, data_r14.status == 0 ? "#2680eb" : data_r14.status == 1 ? "green" : data_r14.status == 2 ? "red" : "grey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r14.status == 0 ? "Pending" : data_r14.status == 1 ? "Approved" : data_r14.status == 2 ? "Rejected" : "Cancelled", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r5.showDateAndMonth(data_r14.created_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.currentUserEmployee.id == data_r14.supervisor.id && data_r14.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.currentUserEmployee.id == data_r14.supervisor.id && data_r14.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.currentUserEmployee.id == data_r14.employee.id && data_r14.status == 0 || ctx_r5.currentUserEmployee.role == 0);
} }
function LeavePageComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LeavePageComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.allowanceUpdateMessage);
} }
function LeavePageComponent_tr_56_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r33.used_days);
} }
function LeavePageComponent_tr_56_nz_input_number_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-number", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LeavePageComponent_tr_56_nz_input_number_7_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r38.leaveAllowanceEditData.used_days = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", ctx_r35.isLeaveAllowanceDeleteLoading)("ngModel", ctx_r35.leaveAllowanceEditData.used_days)("nzMin", 0)("nzMax", data_r33.leave_type.leave_days)("nzStep", 1);
} }
const _c4 = function () { return { color: "gray", "font-size": "12pt" }; };
function LeavePageComponent_tr_56_td_10_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_56_td_10_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r43.onLeaveAllowanceCancelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Cancel")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c4));
} }
function LeavePageComponent_tr_56_td_10_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_56_td_10_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r45.onLeaveAllowanceSaveClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r42.leaveAllowanceEditData.id == data_r33.id && ctx_r42.isLeaveAllowanceSaveLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Save")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
} }
const _c5 = function () { return { color: "#2680eb", "font-size": "12pt" }; };
function LeavePageComponent_tr_56_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LeavePageComponent_tr_56_td_10_a_1_Template, 2, 3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LeavePageComponent_tr_56_td_10_a_2_Template, 2, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_56_td_10_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); const data_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r48.onLeaveAllowanceEditClick(data_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnConfirm", function LeavePageComponent_tr_56_td_10_Template_a_nzOnConfirm_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); const data_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r51.onLeaveAllowanceDeleteClick(data_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r36.leaveAllowanceEditData && ctx_r36.leaveAllowanceEditData.id == data_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r36.leaveAllowanceEditData && ctx_r36.leaveAllowanceEditData.id == data_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Edit")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r36.isLeaveAllowanceDeleteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Delete")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c1));
} }
function LeavePageComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LeavePageComponent_tr_56_span_6_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LeavePageComponent_tr_56_nz_input_number_7_Template, 1, 5, "nz-input-number", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LeavePageComponent_tr_56_td_10_Template, 7, 9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r33.leave_type.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r33.leave_type.leave_days);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r9.leaveAllowanceEditData && ctx_r9.leaveAllowanceEditData.id == data_r33.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.leaveAllowanceEditData && ctx_r9.leaveAllowanceEditData.id == data_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r33.leave_type.leave_days - data_r33.used_days);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.isCurrentYear && 2 > ctx_r9.currentUserEmployee.role);
} }
function LeavePageComponent_tr_57_app_custom_select_component_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-custom-select-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function LeavePageComponent_tr_57_app_custom_select_component_2_Template_app_custom_select_component_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r61.leaveAllowanceEditData.leave_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r54.allLeaveTypeList)("value", ctx_r54.leaveAllowanceEditData.leave_type);
} }
function LeavePageComponent_tr_57_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r55.leaveAllowanceEditData.leave_type.leave_days);
} }
function LeavePageComponent_tr_57_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r56.leaveAllowanceEditData.used_days);
} }
function LeavePageComponent_tr_57_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r57.leaveAllowanceEditData.leave_type.leave_days - ctx_r57.leaveAllowanceEditData.used_days);
} }
function LeavePageComponent_tr_57_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_57_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r63.onLeaveAllowanceCancelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Cancel")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c4));
} }
function LeavePageComponent_tr_57_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_57_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r65.onLeaveAllowanceSaveClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r59.leaveAllowanceEditData.id == null && ctx_r59.isLeaveAllowanceSaveLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "Save")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
} }
function LeavePageComponent_tr_57_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_tr_57_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r67.onLeaveAllowanceNewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "New")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c2));
} }
function LeavePageComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LeavePageComponent_tr_57_app_custom_select_component_2_Template, 1, 2, "app-custom-select-component", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LeavePageComponent_tr_57_span_4_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LeavePageComponent_tr_57_span_6_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LeavePageComponent_tr_57_span_8_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LeavePageComponent_tr_57_a_10_Template, 2, 3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LeavePageComponent_tr_57_a_11_Template, 2, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, LeavePageComponent_tr_57_a_12_Template, 2, 3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null && ctx_r10.leaveAllowanceEditData.leave_type != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null && ctx_r10.leaveAllowanceEditData.leave_type != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r10.leaveAllowanceEditData && ctx_r10.leaveAllowanceEditData.id == null));
} }
const _c6 = function (a1) { return { x: "100%", y: a1 }; };
class LeavePageComponent {
    constructor(cdRef, message, _leaveAllowanceApiService, _leaveTypeApiService, _leaveApiService) {
        this.cdRef = cdRef;
        this.message = message;
        this._leaveAllowanceApiService = _leaveAllowanceApiService;
        this._leaveTypeApiService = _leaveTypeApiService;
        this._leaveApiService = _leaveApiService;
        this.selectedEmployee = null;
        this.currentUserEmployee = null;
        this.showDateAndMonth = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_3__["DateUtil"].showDateAndMonth;
        this.isCurrentYear = true;
        this.leaveList = [];
        this.leaveAllowanceList = [];
        this.allLeaveTypeList = [];
        this.isLeaveTableLoading = false;
        this.isLeaveAllowanceTableLoading = false;
        this.isLeaveAllowanceSaveLoading = false;
        this.isLeaveAllowanceDeleteLoading = false;
        this.isRequested = false;
        this.leaveUpdatingId = null;
        this.tableHeight = '500px';
        this.isNewLeaveModalVisible = false;
        this.leaveDataLength = 0;
        this.leaveAllowanceDataLength = 0;
        this.dateSortFunction = (a, b) => {
            let aDate = new Date(a.date);
            let bDate = new Date(b.date);
            return bDate.getTime() - aDate.getTime();
        };
        this.dateFilterList = [
            { text: 'January', value: 0 },
            { text: 'February', value: 1 },
            { text: 'March', value: 2 },
            { text: 'April', value: 3 },
            { text: 'May', value: 4 },
            { text: 'June', value: 5 },
            { text: 'July', value: 6 },
            { text: 'August', value: 7 },
            { text: 'September', value: 8 },
            { text: 'October', value: 9 },
            { text: 'November', value: 10 },
            { text: 'December', value: 11 },
        ];
        this.leaveTypeFilterList = [];
        this.reportToFilterList = [];
        this.reportFromFilterList = [];
        this.statusFilterList = [
            { text: 'Pending', value: 0 },
            { text: 'Approved', value: 1 },
            { text: 'Rejected', value: 2 },
            { text: 'Cancelled', value: 3 },
        ];
        this.dateFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => new Date(item.leave_date).getMonth() == statusId);
        this.requestedDateFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => new Date(item.created_date).getMonth() == statusId);
        this.leaveTypeFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.leave_type.id == statusId);
        this.reportToFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.supervisor.id == statusId);
        this.reportFromFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.supervisor.id == statusId);
        this.statusFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.status == statusId);
        this.isLeaveDeleteLoading = false;
    }
    ngOnInit() {
        this.initializeCurrentUser();
        if (this.currentUserEmployee.role < 2) {
            let waitComponentToLoadInterval = setInterval(() => {
                if (this.employeeSearchComponent1 != null) {
                    // set current employee in employeeSearch component on left panel
                    this.employeeSearchComponent1.employees = [this.currentUserEmployee];
                    this.employeeSearchComponent1.selectedEmployee =
                        this.currentUserEmployee;
                    this.calculateTableHeight();
                    clearInterval(waitComponentToLoadInterval);
                }
            }, 500);
        }
        this.getAllLeaveTypes();
        this.onSelectEmployee(this.currentUserEmployee);
    }
    // get current user data from localStorage
    initializeCurrentUser() {
        let currentUserDataJsonString = localStorage.getItem('current_employee');
        let decryptedUserData = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_4__["EncryptionUtil"].decryptData(currentUserDataJsonString);
        this.currentUserEmployee = decryptedUserData;
    }
    getAllLeaveTypes() {
        this._leaveTypeApiService.getAll().subscribe((response) => {
            if (response.success) {
                this.allLeaveTypeList = response.result;
            }
            else {
                this.message.error(response.message);
            }
        });
    }
    onRequestedChange(value, year) {
        this.getLeaves(this.selectedEmployee.id, year);
    }
    onSelectEmployee(employee) {
        this.selectedEmployee = employee;
        this.getLeaves(employee.id, new Date().getFullYear());
        this.getLeaveAllowance(employee.id, new Date().getFullYear());
    }
    onLeaveFilterChange(event, leaveTable) {
        this.leaveDataLength = leaveTable.data.length;
        this.cdRef.detectChanges();
    }
    onLeaveAllowanceFilterChange(event, leaveAllowanceTable) {
        this.leaveAllowanceDataLength = leaveAllowanceTable.data.length;
        this.cdRef.detectChanges();
    }
    onYearChange(event) {
        this.getLeaves(this.selectedEmployee.id, event.year);
        this.getLeaveAllowance(this.selectedEmployee.id, event.year);
        this.isCurrentYear = event.year == new Date().getFullYear();
    }
    getLeaves(emp_id, year) {
        this.isLeaveTableLoading = true;
        this.leaveList = [];
        let tempReportToFilterList = [];
        this._leaveApiService
            .getAllLeaves(emp_id, year, this.isRequested)
            .subscribe((response) => {
            if (response.success) {
                this.leaveList = response.result;
                for (let tempLeave of response.result) {
                    if (tempReportToFilterList.filter((tempReportTo) => tempReportTo.value == this.isRequested
                        ? tempLeave.employee.id
                        : tempLeave.supervisor.id).length == 0) {
                        tempReportToFilterList.push({
                            text: this.isRequested
                                ? tempLeave.employee.name
                                : tempLeave.supervisor.name,
                            value: this.isRequested
                                ? tempLeave.employee.id
                                : tempLeave.supervisor.id,
                        });
                    }
                }
                this.isRequested
                    ? (this.reportFromFilterList = tempReportToFilterList)
                    : (this.reportToFilterList = tempReportToFilterList);
            }
            else {
                this.message.error(response.message);
            }
            this.isLeaveTableLoading = false;
        }, (err) => {
            this.message.error(err.error.message);
            this.isLeaveTableLoading = false;
        });
    }
    getLeaveAllowance(emp_id, year) {
        this.isLeaveAllowanceTableLoading = true;
        this.leaveAllowanceList = [];
        this.leaveTypeFilterList = [];
        let tempLeaveTypesFilterList = [];
        this._leaveAllowanceApiService.getAll(emp_id, year).subscribe((response) => {
            if (response.success) {
                this.leaveAllowanceList = response.result;
                for (let tempLeaveAllowance of response.result) {
                    if (tempLeaveTypesFilterList.filter((tempLeaveType) => tempLeaveType.value == tempLeaveAllowance.leave_type.id).length == 0) {
                        tempLeaveTypesFilterList.push({
                            text: tempLeaveAllowance.leave_type.name,
                            value: tempLeaveAllowance.leave_type.id,
                        });
                    }
                }
                this.leaveTypeFilterList = tempLeaveTypesFilterList;
                this.isLeaveAllowanceTableLoading = false;
                if (year == new Date().getFullYear()) {
                    this.checkLeaveAllowanceUpdate(this.leaveAllowanceList);
                }
            }
            else {
                this.message.error(response.message);
            }
            this.isLeaveAllowanceTableLoading = false;
        }, (err) => {
            this.message.error(err.error.message);
            this.isLeaveAllowanceTableLoading = false;
        });
    }
    checkLeaveAllowanceUpdate(leaveAllowanceList = null) {
        src_app_util_common_api_util__WEBPACK_IMPORTED_MODULE_2__["CommonApiUtil"].checkLeaveAllowanceUpdate(this._leaveAllowanceApiService, this._leaveTypeApiService, this.selectedEmployee, this.message, leaveAllowanceList);
    }
    onNewLeaveCreated(leave) {
        if (this.selectedEmployee.id == leave.emp.id) {
            this.leaveList.push(leave);
        }
    }
    onLeaveResponseClick(leave, response) {
        this.leaveUpdatingId = leave.id;
        let tempLeave = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(leave);
        tempLeave.status = response ? 1 : 2;
        this._leaveApiService.updateLeave(tempLeave).subscribe((response) => {
            if (response.success) {
                this.leaveList = this.leaveList.map((l) => l.id == response.result.id ? response.result : l);
                this.message.success(response.message);
            }
            else {
                this.message.error(response.message);
            }
            this.leaveUpdatingId = null;
        }, (err) => {
            this.message.error(err.error.message);
            this.leaveUpdatingId = null;
        });
    }
    onLeaveDeleteClick(leave) {
        this.isLeaveDeleteLoading = true;
        this.leaveDeleteLoadingId = leave.id;
        this._leaveApiService.deleteLeave(leave.id).subscribe((response) => {
            if (response.success) {
                this.leaveList = this.leaveList.filter((l) => l.id != leave.id);
                this.message.success(response.message);
            }
            else {
                this.message.error(response.message);
            }
            this.isLeaveDeleteLoading = false;
            this.leaveDeleteLoadingId = null;
        }, (err) => {
            this.message.error(err.error.message);
            this.isLeaveDeleteLoading = false;
            this.leaveDeleteLoadingId = null;
        });
    }
    onLeaveAllowanceSaveClick() {
        if (this.leaveAllowanceEditData.leave_type == null) {
            this.message.error('You must choose leave type!');
            return;
        }
        this.isLeaveAllowanceSaveLoading = true;
        let subscription = this.leaveAllowanceEditData.id == null
            ? this._leaveAllowanceApiService.createLeaveAllowance(this.leaveAllowanceEditData)
            : this._leaveAllowanceApiService.updateLeaveAllowance(this.leaveAllowanceEditData);
        subscription.subscribe((response) => {
            if (response.success) {
                this.leaveAllowanceList = [
                    ...this.leaveAllowanceList,
                    response.result,
                ];
                this.message.success(response.message);
                this.leaveAllowanceEditData = null;
                this.checkLeaveAllowanceUpdate(this.leaveAllowanceList);
            }
            else {
                this.message.error(response.message);
            }
            this.isLeaveAllowanceSaveLoading = false;
        }, (err) => {
            this.message.error(err.error.message);
            this.isLeaveAllowanceSaveLoading = false;
        });
    }
    onLeaveAllowanceDeleteClick(leaveAllowance) {
        this._leaveAllowanceApiService
            .deleteLeaveAllowance(leaveAllowance.id)
            .subscribe((response) => {
            if (response.success) {
                this.leaveAllowanceList = this.leaveAllowanceList.filter((la) => la.id != leaveAllowance.id);
                this.message.success(response.message);
            }
            else {
                this.message.error(response.message);
            }
            this.isLeaveAllowanceDeleteLoading = false;
        }, (err) => {
            this.message.error(err.error.message);
            this.isLeaveAllowanceDeleteLoading = false;
        });
    }
    onLeaveAllowanceCancelClick() {
        this.leaveAllowanceEditData = null;
    }
    onLeaveAllowanceEditClick(leaveAllowance) {
        this.leaveAllowanceEditData = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(leaveAllowance);
    }
    onLeaveAllowanceNewClick() {
        this.leaveAllowanceEditData = new src_app_model_leave_allowance_model__WEBPACK_IMPORTED_MODULE_0__["LeaveAllowance"]();
        this.leaveAllowanceEditData.employee = this.selectedEmployee;
    }
    // ng zorro table is designed to have fixed width and height
    // if we want it to become scrollable
    // but we needed the height to change according to browser window resize
    calculateTableHeight() {
        let tableParentElement = document.getElementsByClassName('leave-body')[0];
        this.tableHeight =
            tableParentElement == null
                ? '500px'
                : tableParentElement.clientHeight - 285 + 'px';
    }
}
LeavePageComponent.ɵfac = function LeavePageComponent_Factory(t) { return new (t || LeavePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_leave_allowance_api_service__WEBPACK_IMPORTED_MODULE_7__["LeaveAllowanceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_leave_type_api_service__WEBPACK_IMPORTED_MODULE_8__["LeaveTypeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_leave_api_service__WEBPACK_IMPORTED_MODULE_9__["LeaveApiService"])); };
LeavePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LeavePageComponent, selectors: [["app-leave-page"]], viewQuery: function LeavePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.employeeSearchComponent1 = _t.first);
    } }, decls: 58, vars: 35, consts: [[1, "body-container", 3, "resize"], [1, "flex-row"], [2, "flex", "1"], ["nz-button", "", "nzType", "link", "routerLink", "/leave/leave-type"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "plus"], [3, "currentUserEmployee", "isNewLeaveModalVisible", "isNewLeaveModalVisibleChange", "onNewCreate"], [1, "leave-body"], [3, "onSelectEmployee", 4, "ngIf"], [1, "leave-content"], ["type", "year", 3, "onChange"], ["monthYearSelectComponent", ""], ["nz-checkbox", "", 2, "align-self", "flex-end", "margin", "8px 0", 3, "ngModel", "ngModelChange"], ["nzTitle", "Records"], ["size", "small", "nzFrontPagination", "false", 2, "flex", "1", 3, "nzBordered", "nzLoading", "nzData", "nzScroll", "nzFooter", "nzCurrentPageDataChange"], ["leaveTable", ""], [3, "nzFilters", "nzFilterFn", 4, "ngIf"], ["nzSortOrder", "descend", 3, "nzSortFn", "nzFilters", "nzFilterFn"], [3, "nzFilters", "nzFilterFn"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], ["nzTitle", "Allowance"], [1, "tab-body"], ["leaveAllowanceTable", ""], ["style", "text-align: right", 4, "ngIf"], [4, "ngIf"], [3, "onSelectEmployee"], ["employeeSearchComponent", ""], [3, "ngStyle"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this leave data?", "nzPopconfirmPlacement", "top", 3, "nzOnConfirm", 4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click"], ["nz-icon", "", "nz-tooltip", "", "nzType", "close", 3, "nzTooltipTitle", "ngStyle"], ["nz-icon", "", "nz-tooltip", "", "nzType", "check", 3, "nzTooltipTitle", "ngStyle"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this leave data?", "nzPopconfirmPlacement", "top", 3, "nzOnConfirm"], ["nz-icon", "", "nz-tooltip", "", "nzType", "delete", 3, "nzTooltipTitle", "ngStyle"], ["colspan", "5"], [3, "nzDisabled", "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange", 4, "ngIf"], [3, "nzDisabled", "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"], ["nz-button", "", "nzType", "link", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-icon", "", "nz-tooltip", "", "nzType", "edit", 3, "nzTooltipTitle", "ngStyle"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this leave data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm"], ["placeholder", "Leave Type", "displayProperty", "name", 3, "options", "value", "valueChange", 4, "ngIf"], ["placeholder", "Leave Type", "displayProperty", "name", 3, "options", "value", "valueChange"], ["nz-icon", "", "nz-tooltip", "", "nzType", "plus", 3, "nzTooltipTitle", "ngStyle"]], template: function LeavePageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function LeavePageComponent_Template_div_resize_0_listener() { return ctx.calculateTableHeight(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Leave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Leave Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LeavePageComponent_Template_button_click_8_listener() { return ctx.isNewLeaveModalVisible = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "New Leave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "app-new-leave-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("isNewLeaveModalVisibleChange", function LeavePageComponent_Template_app_new_leave_dialog_isNewLeaveModalVisibleChange_11_listener($event) { return ctx.isNewLeaveModalVisible = $event; })("onNewCreate", function LeavePageComponent_Template_app_new_leave_dialog_onNewCreate_11_listener($event) { return ctx.onNewLeaveCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LeavePageComponent_app_employee_search_component_13_Template, 2, 0, "app-employee-search-component", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "app-month-year-select-component", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function LeavePageComponent_Template_app_month_year_select_component_onChange_15_listener($event) { return ctx.onYearChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LeavePageComponent_Template_label_ngModelChange_17_listener($event) { return ctx.isRequested = $event; })("ngModelChange", function LeavePageComponent_Template_label_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16); return ctx.onRequestedChange($event, _r1.getYear); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Requested");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "nz-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "nz-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzCurrentPageDataChange", function LeavePageComponent_Template_nz_table_nzCurrentPageDataChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); return ctx.onLeaveFilterChange($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LeavePageComponent_th_25_Template, 2, 2, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Leave Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LeavePageComponent_th_30_Template, 2, 2, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Requested Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, LeavePageComponent_tr_38_Template, 19, 12, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "nz-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "nz-table", 14, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzCurrentPageDataChange", function LeavePageComponent_Template_nz_table_nzCurrentPageDataChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); return ctx.onLeaveAllowanceFilterChange($event, _r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Leave Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, LeavePageComponent_th_53_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, LeavePageComponent_tr_55_Template, 3, 1, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, LeavePageComponent_tr_56_Template, 11, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, LeavePageComponent_tr_57_Template, 13, 7, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentUserEmployee", ctx.currentUserEmployee)("isNewLeaveModalVisible", ctx.isNewLeaveModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", 2 > ctx.currentUserEmployee.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.isRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzBordered", true)("nzLoading", ctx.isLeaveTableLoading)("nzData", ctx.leaveList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c6, ctx.tableHeight))("nzFooter", "Total: " + ctx.leaveDataLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSortFn", ctx.dateSortFunction)("nzFilters", ctx.dateFilterList)("nzFilterFn", ctx.dateFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzFilters", ctx.leaveTypeFilterList)("nzFilterFn", ctx.leaveTypeFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzFilters", ctx.statusFilterList)("nzFilterFn", ctx.statusFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSortFn", ctx.dateSortFunction)("nzFilters", ctx.dateFilterList)("nzFilterFn", ctx.requestedDateFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r2.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzBordered", true)("nzLoading", ctx.isLeaveAllowanceTableLoading)("nzData", ctx.leaveAllowanceList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](33, _c6, ctx.tableHeight))("nzFooter", "Total: " + ctx.leaveAllowanceDataLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCurrentYear && 2 > ctx.currentUserEmployee.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.allowanceUpdateMessage != null && ctx.isCurrentYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r6.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCurrentYear && 2 > ctx.currentUserEmployee.role);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["NzBreadCrumbItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], _component_dialog_new_leave_dialog_new_leave_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NewLeaveDialogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_18__["MonthYearSelectComponentComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__["NzTabComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_23__["EmployeeSearchComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzTooltipDirective"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_25__["NzPopconfirmDirective"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_26__["NzInputNumberComponent"], _component_custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_27__["CustomSelectComponentComponent"]], styles: [".leave-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  overflow: hidden;\n}\n.leave-body[_ngcontent-%COMP%]   .leave-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 0 16px;\n}\n.leave-body[_ngcontent-%COMP%]   .leave-content[_ngcontent-%COMP%]    >  {\n  height: 100%;\n}\n.leave-body[_ngcontent-%COMP%]   .leave-content[_ngcontent-%COMP%]    >   .ant-tabs {\n  height: 100%;\n}\n.leave-body[_ngcontent-%COMP%]   .leave-content[_ngcontent-%COMP%]    >   .ant-tabs .ant-tabs-content-holder, .leave-body[_ngcontent-%COMP%]   .leave-content[_ngcontent-%COMP%]    >   .ant-tabs .ant-tabs-content, .leave-body[_ngcontent-%COMP%]   .leave-content[_ngcontent-%COMP%]    >   .ant-tabs .ant-tabs-tabpane {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFDTTtFQUNFLFlBQUE7QUFDUjtBQUNROzs7RUFHRSxZQUFBO0FBQ1YiLCJmaWxlIjoibGVhdmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWF2ZS1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmxlYXZlLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAxNnB4O1xuXG4gICAgJiA+IHtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgOjpuZy1kZWVwIC5hbnQtdGFicyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAuYW50LXRhYnMtY29udGVudC1ob2xkZXIsXG4gICAgICAgIC5hbnQtdGFicy1jb250ZW50LFxuICAgICAgICAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AGcp":
/*!**************************************************************************************!*\
  !*** ./src/app/component/custom-input-component/custom-input-component.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomInputComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInputComponentComponent", function() { return CustomInputComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







function CustomInputComponentComponent_ng_template_5_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomInputComponentComponent_ng_template_5_i_0_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.showPassword = !ctx_r4.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r2.showPassword ? "eye-invisible" : "eye");
} }
function CustomInputComponentComponent_ng_template_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "loading");
} }
function CustomInputComponentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomInputComponentComponent_ng_template_5_i_0_Template, 1, 1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomInputComponentComponent_ng_template_5_i_1_Template, 1, 1, "i", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type == "password" && !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
} }
class CustomInputComponentComponent {
    constructor() {
        this.disabled = false;
        this.isLoading = false;
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.type = 'text';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPassword = false;
    }
    ngOnInit() { }
}
CustomInputComponentComponent.ɵfac = function CustomInputComponentComponent_Factory(t) { return new (t || CustomInputComponentComponent)(); };
CustomInputComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomInputComponentComponent, selectors: [["app-custom-input-component"]], inputs: { disabled: "disabled", isLoading: "isLoading", label: "label", placeholder: "placeholder", value: "value", type: "type" }, outputs: { valueChange: "valueChange" }, decls: 7, vars: 6, consts: [[2, "display", "flex", "flex-direction", "column"], [1, "label"], [3, "nzSuffix"], ["nz-input", "", 3, "disabled", "placeholder", "ngModel", "type", "ngModelChange"], ["suffixTemplate", ""], ["nz-icon", "", 3, "nzType", "click", 4, "ngIf"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType", "click"], ["nz-icon", "", 3, "nzType"]], template: function CustomInputComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomInputComponentComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("ngModelChange", function CustomInputComponentComponent_Template_input_ngModelChange_4_listener() { return ctx.valueChange.emit(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomInputComponentComponent_ng_template_5_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx.isLoading)("placeholder", ctx.placeholder)("ngModel", ctx.value)("type", ctx.showPassword ? "text" : ctx.type);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: [".label[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 10pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1c3RvbS1pbnB1dC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImN1c3RvbS1pbnB1dC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cl9/":
/*!*****************************************************************************!*\
  !*** ./src/app/page/forgot-password-page/forgot-password-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_auth_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth-api.service */ "U9D5");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/custom-input-component/custom-input-component.component */ "AGcp");










function ForgotPasswordPageComponent_app_custom_input_component_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-input-component", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ForgotPasswordPageComponent_app_custom_input_component_9_Template_app_custom_input_component_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.email);
} }
function ForgotPasswordPageComponent_app_custom_input_component_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-input-component", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ForgotPasswordPageComponent_app_custom_input_component_10_Template_app_custom_input_component_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.code);
} }
function ForgotPasswordPageComponent_app_custom_input_component_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-input-component", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ForgotPasswordPageComponent_app_custom_input_component_11_Template_app_custom_input_component_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.newPassword);
} }
function ForgotPasswordPageComponent_app_custom_input_component_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-input-component", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ForgotPasswordPageComponent_app_custom_input_component_12_Template_app_custom_input_component_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.confirmPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.confirmPassword);
} }
function ForgotPasswordPageComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordPageComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.pre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.isLoading);
} }
class ForgotPasswordPageComponent {
    constructor(authApiService, message, router) {
        this.authApiService = authApiService;
        this.message = message;
        this.router = router;
        this.current = 0;
        this.email = '';
        this.code = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.isLoading = false;
    }
    ngOnInit() { }
    pre() {
        this.current -= 1;
    }
    next() {
        this.changeContent();
    }
    done() {
        console.log('done');
    }
    changeContent() {
        this.isLoading = true;
        switch (this.current) {
            case 0: {
                if (!this.isEmailValid)
                    return;
                this.authApiService.forgetPassword(this.email).subscribe((response) => {
                    if (response.success) {
                        this.current += 1;
                        this.code = '';
                        this.message.create('success', response.message);
                    }
                    else {
                        this.showErrorMessageFromApi(response);
                    }
                    this.isLoading = false;
                }, (error) => this.showErrorMessageFromApi(error));
                break;
            }
            case 1: {
                if (!this.isEmailValid)
                    return;
                if (!this.isCodeValid)
                    return;
                this.authApiService
                    .validateVerfifcationCode(this.email, this.code)
                    .subscribe((response) => {
                    if (response.success) {
                        this.current += 1;
                        this.newPassword = '';
                        this.confirmPassword = '';
                        this.message.create('success', response.message);
                    }
                    else {
                        this.showErrorMessageFromApi(response);
                    }
                    this.isLoading = false;
                }, (error) => {
                    console.log(error);
                    this.showErrorMessageFromApi(error);
                });
                break;
            }
            case 2: {
                if (!this.isEmailValid)
                    return;
                if (!this.isCodeValid)
                    return;
                if (!this.isPasswordsValid)
                    return;
                this.authApiService
                    .resetPassword(this.email, this.code, this.newPassword)
                    .subscribe((response) => {
                    if (response.success) {
                        this.current += 1;
                        this.newPassword = '';
                        this.confirmPassword = '';
                        this.message.create('success', response.message);
                        this.router.navigateByUrl('/login');
                    }
                    else {
                        this.showErrorMessageFromApi(response);
                    }
                    this.isLoading = false;
                }, (error) => this.showErrorMessageFromApi(error));
                break;
            }
            default: {
            }
        }
    }
    showErrorMessageFromApi(error) {
        this.message.create('error', error.error && error.error.message
            ? error.error.message
            : error.message
                ? error.message
                : error);
        this.isLoading = false;
    }
    isEmailValid() {
        if (this.email.length < 1) {
            this.message.create('error', 'Please enter your email!');
            return false;
        }
        let emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!emailRegExp.test(this.email)) {
            this.message.create('error', 'Email is invalid!');
            return false;
        }
        return true;
    }
    isCodeValid() {
        if (this.code.length < 1) {
            this.message.create('error', 'Please enter the code!');
            return false;
        }
        if (this.code.length != 6) {
            this.message.create('error', 'Invalid code!');
            return false;
        }
        return true;
    }
    isPasswordsValid() {
        if (this.newPassword.length < 1) {
            this.message.create('error', 'Please enter new password!');
            return false;
        }
        if (this.confirmPassword != this.newPassword) {
            this.message.create('error', "Passwords don't match!");
            return false;
        }
        return true;
    }
}
ForgotPasswordPageComponent.ɵfac = function ForgotPasswordPageComponent_Factory(t) { return new (t || ForgotPasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_api_service__WEBPACK_IMPORTED_MODULE_1__["AuthApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgotPasswordPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordPageComponent, selectors: [["app-forgot-password-page"]], decls: 22, vars: 10, consts: [[1, "container"], [1, "card"], [1, "card-title"], [3, "nzCurrent"], ["nzTitle", "Request Code"], ["nzTitle", "Verification"], ["nzTitle", "Change Password"], [1, "steps-content"], ["label", "Email", 3, "value", "valueChange", 4, "ngIf"], ["label", "Code", 3, "value", "valueChange", 4, "ngIf"], ["label", "New Password", "type", "password", 3, "value", "valueChange", 4, "ngIf"], ["label", "Confirm Password", "type", "password", 3, "value", "valueChange", 4, "ngIf"], [1, "steps-action"], ["nz-button", "", "nzType", "default", "routerLink", "/login", 3, "disabled"], [2, "margin-right", "auto"], ["nz-button", "", "nzType", "default", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click"], ["label", "Email", 3, "value", "valueChange"], ["label", "Code", 3, "value", "valueChange"], ["label", "New Password", "type", "password", 3, "value", "valueChange"], ["label", "Confirm Password", "type", "password", 3, "value", "valueChange"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-steps", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgotPasswordPageComponent_app_custom_input_component_9_Template, 1, 1, "app-custom-input-component", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgotPasswordPageComponent_app_custom_input_component_10_Template, 1, 1, "app-custom-input-component", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotPasswordPageComponent_app_custom_input_component_11_Template, 1, 1, "app-custom-input-component", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordPageComponent_app_custom_input_component_12_Template, 1, 1, "app-custom-input-component", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordPageComponent_button_18_Template, 3, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordPageComponent_Template_button_click_19_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.current == 1 && ctx.code.length != 6)("nzLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current === 2 ? "Reset" : "Next");
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_4__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_4__["NzStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_9__["CustomInputComponentComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: lightgray;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 8px 12px 16px 12px;\n  min-width: 600px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 8px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .steps-action[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7QUFDTjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFGTjtBQUtJO0VBQ0UsaUJBQUE7QUFITiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuXG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHggMTJweCAxNnB4IDEycHg7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgID4gKiB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgLnN0ZXBzLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIC5zdGVwcy1hY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Ctdw":
/*!***************************************************************!*\
  !*** ./src/app/page/overtime-page/overtime-page.component.ts ***!
  \***************************************************************/
/*! exports provided: OvertimePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimePageComponent", function() { return OvertimePageComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/date-util */ "qqfZ");
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_overtime_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/overtime-api.service */ "pCso");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _component_dialog_new_overtime_dialog_new_overtime_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../component/dialog/new-overtime-dialog/new-overtime-dialog.component */ "dhkV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/month-year-select-component/month-year-select-component.component */ "jvD1");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../component/employee-search-component/employee-search-component.component */ "iUhQ");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");





















const _c0 = ["employeeSearchComponent"];
function OvertimePageComponent_app_employee_search_component_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-employee-search-component", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectEmployee", function OvertimePageComponent_app_employee_search_component_11_Template_app_employee_search_component_onSelectEmployee_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onSelectEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OvertimePageComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Report from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFilters", ctx_r3.reportFromFilterList)("nzFilterFn", ctx_r3.reportFromFilterFunction);
} }
function OvertimePageComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Report to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFilters", ctx_r4.reportToFilterList)("nzFilterFn", ctx_r4.reportToFilterFunction);
} }
function OvertimePageComponent_tr_33_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.emp.name, " ");
} }
function OvertimePageComponent_tr_33_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.request_emp.name, " ");
} }
const _c1 = function () { return { color: "#e34850", "font-size": "12pt" }; };
function OvertimePageComponent_tr_33_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OvertimePageComponent_tr_33_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onOvertimeResponseClick(data_r9, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r12.overtimeUpdatingId == data_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Reject")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return { color: "#379947", "font-size": "12pt" }; };
function OvertimePageComponent_tr_33_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OvertimePageComponent_tr_33_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onOvertimeResponseClick(data_r9, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r13.overtimeUpdatingId == data_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Approve")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c2));
} }
function OvertimePageComponent_tr_33_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function OvertimePageComponent_tr_33_a_25_Template_a_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.onOvertimeDeleteClick(data_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r14.overtimeDeletingId == data_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Delete")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
} }
const _c3 = function (a0) { return { color: a0 }; };
function OvertimePageComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OvertimePageComponent_tr_33_td_1_Template, 3, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Start - End");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Checkin - Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, OvertimePageComponent_tr_33_td_15_Template, 3, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, OvertimePageComponent_tr_33_a_23_Template, 2, 4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, OvertimePageComponent_tr_33_a_24_Template, 2, 4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, OvertimePageComponent_tr_33_a_25_Template, 2, 4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.isRequested);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.showDateAndMonth(data_r9.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.showTimeIn12(data_r9.request_start_datetime) + " - " + ctx_r5.showTimeIn12(data_r9.request_end_datetime));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((data_r9.actual_start_datetime ? ctx_r5.showTimeIn12(data_r9.actual_start_datetime) : "--:-- ") + " - " + (data_r9.actual_end_datetime ? ctx_r5.showTimeIn12(data_r9.actual_end_datetime) : " --:--"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.isRequested);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c3, data_r9.status == 0 ? "#2680eb" : data_r9.status == 1 ? "green" : data_r9.status == 2 ? "red" : "grey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.status == 0 ? "Pending" : data_r9.status == 1 ? "Approved" : data_r9.status == 2 ? "Rejected" : "Cancelled", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.showDateAndMonth(data_r9.created_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentUserEmployee.id == data_r9.request_emp.id && data_r9.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentUserEmployee.id == data_r9.request_emp.id && data_r9.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentUserEmployee.id == data_r9.emp.id && data_r9.status == 0 || ctx_r5.currentUserEmployee.role == 0);
} }
const _c4 = function (a1) { return { x: "100%", y: a1 }; };
class OvertimePageComponent {
    constructor(_message, _overtimeApiService, cdRef) {
        this._message = _message;
        this._overtimeApiService = _overtimeApiService;
        this.cdRef = cdRef;
        this.showDateAndMonth = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].showDateAndMonth;
        this.showTimeIn12 = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].showTimeIn12;
        this.tableHeight = '500px';
        this.overtimeDataLength = 0;
        this.isNewOvertimeModalVisible = false;
        this.overtimeDeletingId = null;
        this.overtimeUpdatingId = null;
        this.isRequested = false;
        this.isOvertimeTableLoading = false;
        this.overtimeList = [];
        this.dateSortFunction = (a, b) => {
            let aDate = new Date(a.date);
            let bDate = new Date(b.date);
            return bDate.getTime() - aDate.getTime();
        };
        this.dateFilterList = [
            { text: 'January', value: 0 },
            { text: 'February', value: 1 },
            { text: 'March', value: 2 },
            { text: 'April', value: 3 },
            { text: 'May', value: 4 },
            { text: 'June', value: 5 },
            { text: 'July', value: 6 },
            { text: 'August', value: 7 },
            { text: 'September', value: 8 },
            { text: 'October', value: 9 },
            { text: 'November', value: 10 },
            { text: 'December', value: 11 },
        ];
        this.dateFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => new Date(item.date).getMonth() == statusId);
        this.requestedDateFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => new Date(item.created_date).getMonth() == statusId);
        this.reportToFilterList = [];
        this.reportFromFilterList = [];
        this.reportToFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.request_emp.id == statusId);
        this.reportFromFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.request_emp.id == statusId);
        this.statusFilterList = [
            { text: 'Pending', value: 0 },
            { text: 'Approved', value: 1 },
            { text: 'Rejected', value: 2 },
            { text: 'Cancelled', value: 3 },
        ];
        this.statusFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => item.status == statusId);
    }
    ngOnInit() {
        this.initializeCurrentUser();
        if (this.currentUserEmployee.role < 2) {
            let waitComponentToLoadInterval = setInterval(() => {
                if (this.employeeSearchComponent1 != null) {
                    // set current employee in employeeSearch component on left panel
                    this.employeeSearchComponent1.employees = [this.currentUserEmployee];
                    this.employeeSearchComponent1.selectedEmployee =
                        this.currentUserEmployee;
                    this.onSelectEmployee(this.currentUserEmployee);
                    clearInterval(waitComponentToLoadInterval);
                }
            }, 500);
        }
    }
    initializeCurrentUser() {
        let currentUserDataJsonString = localStorage.getItem('current_employee');
        let decryptedUserData = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_3__["EncryptionUtil"].decryptData(currentUserDataJsonString);
        this.currentUserEmployee = decryptedUserData;
    }
    onSelectEmployee(employee) {
        this.selectedEmployee = employee;
        this.getOvertime(employee.id, new Date().getFullYear());
    }
    onOvertimeFilterChange(event, overtimeTable) {
        this.overtimeDataLength = overtimeTable.data.length;
        this.cdRef.detectChanges();
    }
    onRequestedChange(value, year) {
        this.getOvertime(this.selectedEmployee.id, year);
    }
    getOvertime(emp_id, year) {
        this.isOvertimeTableLoading = true;
        let tempReportToFilterList = [];
        this._overtimeApiService
            .getOvertime(emp_id, year, this.isRequested)
            .subscribe((response) => {
            if (response.success) {
                this.overtimeList = response.result;
                for (let tempLeave of response.result) {
                    if (tempReportToFilterList.filter((tempReportTo) => tempReportTo.value == this.isRequested
                        ? tempLeave.emp.id
                        : tempLeave.request_emp.id).length == 0) {
                        tempReportToFilterList.push({
                            text: this.isRequested
                                ? tempLeave.emp.name
                                : tempLeave.request_emp.name,
                            value: this.isRequested
                                ? tempLeave.emp.id
                                : tempLeave.request_emp.id,
                        });
                    }
                }
                this.isRequested
                    ? (this.reportFromFilterList = tempReportToFilterList)
                    : (this.reportToFilterList = tempReportToFilterList);
            }
            else {
                this._message.error(response.message);
            }
            this.isOvertimeTableLoading = false;
        }, (err) => {
            this._message.error(err.error.message);
            this.isOvertimeTableLoading = false;
        });
    }
    get totalOvertimeDuration() {
        let totalDuration = 0;
        for (let overtime of this.overtimeList) {
            if (overtime.actual_start_datetime && overtime.actual_end_datetime) {
                totalDuration += moment__WEBPACK_IMPORTED_MODULE_0__(overtime.actual_end_datetime).diff(moment__WEBPACK_IMPORTED_MODULE_0__(overtime.actual_start_datetime));
            }
        }
        return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](totalDuration).format('HH:mm');
    }
    onNewOvertimeCreated(overtime) {
        if (overtime.emp.id == this.selectedEmployee.id) {
            this.overtimeList.push(overtime);
        }
    }
    onYearChange(event) {
        this.getOvertime(this.selectedEmployee.id, event.year);
    }
    onOvertimeResponseClick(overtime, response) {
        this.overtimeUpdatingId = overtime.id;
        let tempOvertime = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(overtime);
        tempOvertime.status = response ? 1 : 2;
        this._overtimeApiService.updateOvertime(tempOvertime).subscribe((response) => {
            if (response.success) {
                this.overtimeList = this.overtimeList.map((ot) => ot.id == response.result.id ? response.result : ot);
                this._message.success(response.message);
            }
            else {
                this._message.error(response.message);
            }
            this.overtimeUpdatingId = null;
        }, (err) => {
            console.log(err);
            this._message.error(err.error.message);
            this.overtimeUpdatingId = null;
        });
    }
    onOvertimeDeleteClick(overtime) {
        this.overtimeDeletingId = overtime.id;
        this._overtimeApiService.deleteOvertime(overtime.id).subscribe((response) => {
            if (response.success) {
                this.overtimeList = this.overtimeList.filter((ot) => ot.id != overtime.id);
                this._message.success(response.message);
            }
            else {
                this._message.error(response.message);
            }
            this.overtimeDeletingId = null;
        }, (err) => {
            this._message.error(err.error.message);
            this.overtimeDeletingId = null;
        });
    }
    calculateTableHeight() {
        let tableParentElement = document.getElementsByClassName('overtime-body')[0];
        this.tableHeight =
            tableParentElement == null
                ? '500px'
                : tableParentElement.clientHeight - 220 + 'px';
    }
}
OvertimePageComponent.ɵfac = function OvertimePageComponent_Factory(t) { return new (t || OvertimePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_overtime_api_service__WEBPACK_IMPORTED_MODULE_6__["OvertimeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
OvertimePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OvertimePageComponent, selectors: [["app-overtime-page"]], viewQuery: function OvertimePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.employeeSearchComponent1 = _t.first);
    } }, decls: 34, vars: 22, consts: [[1, "body-container", 3, "resize"], [1, "flex-row"], [2, "flex", "1"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "plus"], [3, "currentUserEmployee", "isNewOvertimeModalVisible", "isNewOvertimeModalVisibleChange", "onNewCreated"], [1, "overtime-body"], [3, "onSelectEmployee", 4, "ngIf"], [1, "overtime-content"], ["type", "year", 3, "onChange"], ["monthYearSelectComponent", ""], ["nz-checkbox", "", 2, "align-self", "flex-end", "margin", "8px 0", 3, "ngModel", "ngModelChange"], ["size", "small", "nzFrontPagination", "false", 2, "flex", "1", 3, "nzBordered", "nzLoading", "nzData", "nzScroll", "nzFooter", "nzCurrentPageDataChange"], ["overtimeTable", ""], ["colspan", "3", 3, "nzFilters", "nzFilterFn", 4, "ngIf"], ["colspan", "2", "nzSortOrder", "descend", 3, "nzSortFn", "nzFilters", "nzFilterFn"], ["colspan", "5"], ["colspan", "2", 3, "nzFilters", "nzFilterFn"], ["colspan", "1", 2, "text-align", "right"], [4, "ngFor", "ngForOf"], [3, "onSelectEmployee"], ["employeeSearchComponent", ""], ["colspan", "3", 3, "nzFilters", "nzFilterFn"], ["colspan", "3", 4, "ngIf"], ["colspan", "2"], [2, "display", "flex", "flex-direction", "column"], [2, "font-size", "9pt", "color", "gray"], [2, "font-size", "10pt"], [2, "font-size", "9pt", "color", "gray", "margin-top", "8px"], [2, "font-size", "12pt"], ["colspan", "2", 3, "ngStyle"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this overtime data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm", 4, "ngIf"], ["colspan", "3"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click"], ["nz-icon", "", "nz-tooltip", "", "nzType", "close", 3, "nzTooltipTitle", "ngStyle"], ["nz-icon", "", "nz-tooltip", "", "nzType", "check", 3, "nzTooltipTitle", "ngStyle"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this overtime data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm"], ["nz-icon", "", "nz-tooltip", "", "nzType", "delete", 3, "nzTooltipTitle", "ngStyle"]], template: function OvertimePageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function OvertimePageComponent_Template_div_resize_0_listener() { return ctx.calculateTableHeight(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Overtime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OvertimePageComponent_Template_button_click_6_listener() { return ctx.isNewOvertimeModalVisible = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "New Overtime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-new-overtime-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isNewOvertimeModalVisibleChange", function OvertimePageComponent_Template_app_new_overtime_dialog_isNewOvertimeModalVisibleChange_9_listener($event) { return ctx.isNewOvertimeModalVisible = $event; })("onNewCreated", function OvertimePageComponent_Template_app_new_overtime_dialog_onNewCreated_9_listener($event) { return ctx.onNewOvertimeCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, OvertimePageComponent_app_employee_search_component_11_Template, 2, 0, "app-employee-search-component", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "app-month-year-select-component", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function OvertimePageComponent_Template_app_month_year_select_component_onChange_13_listener($event) { return ctx.onYearChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function OvertimePageComponent_Template_label_ngModelChange_15_listener($event) { return ctx.isRequested = $event; })("ngModelChange", function OvertimePageComponent_Template_label_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); return ctx.onRequestedChange($event, _r1.getYear); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Requested");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzCurrentPageDataChange", function OvertimePageComponent_Template_nz_table_nzCurrentPageDataChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18); return ctx.onOvertimeFilterChange($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, OvertimePageComponent_th_21_Template, 2, 2, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Time Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, OvertimePageComponent_th_26_Template, 2, 2, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Request Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, OvertimePageComponent_tr_33_Template, 26, 13, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentUserEmployee", ctx.currentUserEmployee)("isNewOvertimeModalVisible", ctx.isNewOvertimeModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", 2 > ctx.currentUserEmployee.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.isRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzBordered", true)("nzLoading", ctx.isOvertimeTableLoading)("nzData", ctx.overtimeList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c4, ctx.tableHeight))("nzFooter", "Total: " + ctx.overtimeDataLength + " | Total overtime duration: " + ctx.totalOvertimeDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSortFn", ctx.dateSortFunction)("nzFilters", ctx.dateFilterList)("nzFilterFn", ctx.dateFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFilters", ctx.statusFilterList)("nzFilterFn", ctx.statusFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSortFn", ctx.dateSortFunction)("nzFilters", ctx.dateFilterList)("nzFilterFn", ctx.requestedDateFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r2.data);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], _component_dialog_new_overtime_dialog_new_overtime_dialog_component__WEBPACK_IMPORTED_MODULE_12__["NewOvertimeDialogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_14__["MonthYearSelectComponentComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeSearchComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__["NzTooltipDirective"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_20__["NzPopconfirmDirective"]], styles: [".overtime-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  overflow: hidden;\n}\n.overtime-body[_ngcontent-%COMP%]   .overtime-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.overtime-body[_ngcontent-%COMP%]   .overtime-content[_ngcontent-%COMP%]:last-child {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL292ZXJ0aW1lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0UsT0FBQTtBQUNOIiwiZmlsZSI6Im92ZXJ0aW1lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcnRpbWUtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5vdmVydGltZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "DmG7":
/*!*******************************************************************!*\
  !*** ./src/app/page/attendance-page/attendance-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: AttendancePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageComponent", function() { return AttendancePageComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/date-util */ "qqfZ");
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_attendance_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/attendance-api.service */ "1dOZ");
/* harmony import */ var src_app_service_holiday_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/holiday-api.service */ "cs5C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/month-year-select-component/month-year-select-component.component */ "jvD1");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../component/employee-search-component/employee-search-component.component */ "iUhQ");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../component/custom-input-component/custom-input-component.component */ "AGcp");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var _component_custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../component/custom-date-picker-component/custom-date-picker-component.component */ "SwAD");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");





















const _c0 = ["employeeSearchComponent1"];
const _c1 = ["monthYearSelectComponent"];
function AttendancePageComponent_app_employee_search_component_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-employee-search-component", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectEmployee", function AttendancePageComponent_app_employee_search_component_6_Template_app_employee_search_component_onSelectEmployee_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onSelectEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showEmployeeDetails", true);
} }
function AttendancePageComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th");
} }
function AttendancePageComponent_tr_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.showDayOnly(data_r8.date));
} }
function AttendancePageComponent_tr_26_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.isCreateHolidayLoading ? null : ctx_r22.onCreateHolidayCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Cancel")("nzType", "close");
} }
function AttendancePageComponent_tr_26_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-custom-input-component", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AttendancePageComponent_tr_26_span_5_Template_app_custom_input_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.editHoliday.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r11.editHoliday.name);
} }
function AttendancePageComponent_tr_26_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.onCreateHolidayStart(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Add new holiday");
} }
function AttendancePageComponent_tr_26_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function AttendancePageComponent_tr_26_i_7_Template_i_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.isCreateHolidayLoading ? null : ctx_r29.onDeleteHoliday(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Remove holiday")("nzType", ctx_r13.isCreateHolidayLoading ? "loading" : "delete");
} }
function AttendancePageComponent_tr_26_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r32.isCreateHolidayLoading ? null : ctx_r32.onCreateHolidaySave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", "Save")("nzType", ctx_r14.isCreateHolidayLoading ? "loading" : "check");
} }
function AttendancePageComponent_tr_26_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 31);
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", data_r8.holiday.name);
} }
function AttendancePageComponent_tr_26_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-custom-date-picker-component", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AttendancePageComponent_tr_26_div_13_Template_app_custom_date_picker_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r35.editAttendance.check_in_time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r16.editAttendance.check_in_time);
} }
function AttendancePageComponent_tr_26_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-custom-date-picker-component", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AttendancePageComponent_tr_26_div_17_Template_app_custom_date_picker_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r37.editAttendance.check_out_time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r17.editAttendance.check_out_time);
} }
const _c2 = function (a0) { return { color: a0, "font-size": "12pt", margin: "0 4px" }; };
function AttendancePageComponent_tr_26_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 33);
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r18.getLeaveTooltopTitle(data_r8.leave))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, ctx_r18.checkToday(data_r8.date) ? "white" : "#ce2783"));
} }
function AttendancePageComponent_tr_26_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 34);
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r19.getOvertimeTooltopTitle(data_r8.overtime))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, ctx_r19.checkToday(data_r8.date) ? "white" : "#6767ec"));
} }
const _c3 = function (a0) { return { color: a0, "font-size": "12pt" }; };
function AttendancePageComponent_tr_26_td_23_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_td_23_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r46.startEdit(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, ctx_r41.checkToday(data_r8.date) ? "white" : "#379947"));
} }
function AttendancePageComponent_tr_26_td_23_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_td_23_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r50.startEdit(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, ctx_r42.checkToday(data_r8.date) ? "white" : "#2680eb"));
} }
function AttendancePageComponent_tr_26_td_23_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_td_23_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r54.stopEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, ctx_r43.checkToday(data_r8.date) ? "white" : "grey"));
} }
function AttendancePageComponent_tr_26_td_23_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttendancePageComponent_tr_26_td_23_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r57.saveEdit(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r44.isUpdateLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c3, ctx_r44.checkToday(data_r8.date) ? "white" : "#2d9d78"));
} }
function AttendancePageComponent_tr_26_td_23_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function AttendancePageComponent_tr_26_td_23_a_5_Template_a_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r61.deleteAttendance(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r45.isDeleteAttendanceLoading && data_r8.date == ctx_r45.editDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c3, ctx_r45.checkToday(data_r8.date) ? "white" : "#e34850"));
} }
function AttendancePageComponent_tr_26_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AttendancePageComponent_tr_26_td_23_a_1_Template, 2, 3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AttendancePageComponent_tr_26_td_23_a_2_Template, 2, 3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AttendancePageComponent_tr_26_td_23_a_3_Template, 2, 3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AttendancePageComponent_tr_26_td_23_a_4_Template, 2, 4, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AttendancePageComponent_tr_26_td_23_a_5_Template, 2, 4, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.date != ctx_r20.editDate && data_r8.attendance == null && !ctx_r20.checkWeekend(data_r8.date) && data_r8.holiday == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.date != ctx_r20.editDate && data_r8.attendance != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.date == ctx_r20.editDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.date == ctx_r20.editDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.attendance != null && data_r8.date != ctx_r20.editDate);
} }
function AttendancePageComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function AttendancePageComponent_tr_26_Template_td_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67); const data_r8 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r66.currentUserEmployee.role == 2 ? null : ctx_r66.onDateColumnMouseEnter(data_r8); })("mouseleave", function AttendancePageComponent_tr_26_Template_td_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r68.currentUserEmployee.role == 2 ? null : ctx_r68.onDateColumnMouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AttendancePageComponent_tr_26_span_3_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AttendancePageComponent_tr_26_i_4_Template, 1, 2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AttendancePageComponent_tr_26_span_5_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AttendancePageComponent_tr_26_i_6_Template, 1, 1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AttendancePageComponent_tr_26_i_7_Template, 1, 2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AttendancePageComponent_tr_26_i_8_Template, 1, 2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AttendancePageComponent_tr_26_i_9_Template, 1, 1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AttendancePageComponent_tr_26_div_13_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AttendancePageComponent_tr_26_div_17_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AttendancePageComponent_tr_26_i_21_Template, 1, 4, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AttendancePageComponent_tr_26_i_22_Template, 1, 4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AttendancePageComponent_tr_26_td_23_Template, 6, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r4.checkToday(data_r8.date) ? "green-table-row" : ctx_r4.checkWeekend(data_r8.date) || data_r8.holiday != null ? "disabled-table-row" : data_r8.attendance == null ? "dark-table-row" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r4.editHoliday != null && ctx_r4.editHoliday.date == data_r8.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.editHoliday != null && ctx_r4.editHoliday.date == data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.editHoliday != null && ctx_r4.editHoliday.date == data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.hoverDate == data_r8.date && ctx_r4.isHolidayCreateDeleteVisible && data_r8.holiday == null && !(ctx_r4.editHoliday != null && ctx_r4.editHoliday.date == data_r8.date) && 2 > ctx_r4.currentUserEmployee.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentUserEmployee.role != 2 && data_r8.holiday != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.editHoliday != null && ctx_r4.editHoliday.date == data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.holiday != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r4.editDate === data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r8.attendance != null && data_r8.attendance.check_in_time != null ? ctx_r4.showTimeIn12(data_r8.attendance.check_in_time) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.editDate === data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r4.editDate === data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r8.attendance != null && data_r8.attendance.check_out_time != null ? ctx_r4.showTimeIn12(data_r8.attendance.check_out_time) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.editDate === data_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r8.attendance != null && data_r8.attendance.check_out_time != null ? ctx_r4.calculateWorkingHour(data_r8.attendance.check_in_time, data_r8.attendance.check_out_time, data_r8.leave) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.leave != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r8.overtime != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", 2 > ctx_r4.currentUserEmployee.role);
} }
const _c4 = function (a1) { return { x: "100%", y: a1 }; };
class AttendancePageComponent {
    constructor(message, attendanceApiService, holidayApiService, router) {
        this.message = message;
        this.attendanceApiService = attendanceApiService;
        this.holidayApiService = holidayApiService;
        this.router = router;
        // To use static DateUtil functions in HTML side,
        // we need to assign them into a local variable
        this.showDayOnly = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].showDayOnly;
        this.showTimeIn12 = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].showTimeIn12;
        this.checkWeekend = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].checkWeekend;
        this.checkToday = src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].checkToday;
        this.tableHeight = '500px';
        this.currentUserEmployee = null;
        this.selectedEmployee = null;
        this.hoverDate = null;
        this.isHolidayCreateDeleteVisible = false;
        this.editHoliday = null;
        this.isCreateHolidayLoading = false;
        // table related
        this.isAttendanceTableLoading = false;
        this.isUpdateLoading = false;
        this.isDeleteAttendanceLoading = false;
        this.attendanceResultList = [];
        this.editDate = null;
        this.editProperty = null;
        this.dateSortFunction = (a, b) => {
            let aDate = new Date(a.date);
            let bDate = new Date(b.date);
            return bDate.getTime() - aDate.getTime();
        };
        this.dateFilterList = [
            { text: 'Weekends', value: 0 },
            { text: 'Weekdays', value: 1 },
            { text: 'Holidays', value: 2 },
        ];
        this.dateFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => statusId == 0
            ? this.checkWeekend(item.date)
            : statusId == 1
                ? !this.checkWeekend(item.date)
                : item.holiday != null);
        this.remarksFilterList = [
            { text: 'Leave', value: 0 },
            { text: 'Overtime', value: 1 },
            { text: 'No Attendance', value: 2 },
        ];
        this.remarksFilterFunction = (statusIdList, item) => statusIdList.some((statusId) => statusId == 0
            ? item.leave != null
            : statusId == 1
                ? item.overtime != null
                : item.attendance == null);
    }
    ngOnInit() {
        this.initializeCurrentUser();
        if (this.currentUserEmployee.role < 2) {
            let waitComponentToLoadInterval = setInterval(() => {
                if (this.employeeSearchComponent1 != null) {
                    // set current employee in employeeSearch component on left panel
                    this.employeeSearchComponent1.employees = [this.currentUserEmployee];
                    this.employeeSearchComponent1.selectedEmployee =
                        this.currentUserEmployee;
                    this.onSelectEmployee(this.currentUserEmployee);
                    this.calculateTableHeight();
                    clearInterval(waitComponentToLoadInterval);
                }
            }, 500);
        }
        else {
            let waitComponentToLoadInterval = setInterval(() => {
                if (this.monthYearSelectComponent != null) {
                    this.onSelectEmployee(this.currentUserEmployee);
                    this.calculateTableHeight();
                    clearInterval(waitComponentToLoadInterval);
                }
            }, 500);
        }
    }
    // get current user data from localStorage
    initializeCurrentUser() {
        let currentUserDataJsonString = localStorage.getItem('current_employee');
        let decryptedUserData = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_3__["EncryptionUtil"].decryptData(currentUserDataJsonString);
        this.currentUserEmployee = decryptedUserData;
    }
    onSelectEmployee(employee) {
        this.selectedEmployee = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(employee);
        this.getAttendance(this.selectedEmployee.id, this.monthYearSelectComponent.date.getMonth(), this.monthYearSelectComponent.date.getFullYear());
    }
    // ng zorro table is designed to have fixed width and height
    // if we want it to become scrollable
    // but we needed the height to change according to browser window resize
    calculateTableHeight() {
        let tableParentElement = document.getElementById('table-parent');
        this.tableHeight =
            tableParentElement == null
                ? '500px'
                : tableParentElement.clientHeight - 87 + 'px';
    }
    //TODO: implement real get attendance api
    getAttendance(employee_id, month, year) {
        this.isAttendanceTableLoading = true;
        this.attendanceApiService
            .getAttendance(employee_id, month, year)
            .subscribe((response) => {
            if (response.success) {
                this.attendanceResultList = response.result;
            }
            else {
                this.attendanceResultList = [];
                this.message.create('error', response.message);
            }
            this.isAttendanceTableLoading = false;
        });
    }
    startEdit(data) {
        this.editDate = data.date;
        if (data.attendance) {
            this.editAttendance = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(data.attendance);
        }
        else {
            let checkinTime = new Date(data.date);
            checkinTime.setHours(8);
            let checkoutTime = new Date(data.date);
            checkoutTime.setHours(17);
            this.editAttendance = {
                emp: this.selectedEmployee,
                date: data.date,
                check_in_time: checkinTime.getTime(),
                check_out_time: checkoutTime.getTime(),
            };
        }
    }
    stopEdit() {
        this.editAttendance = null;
        this.editDate = null;
        return;
    }
    //TODO: implement real create/update attendance api
    saveEdit(data) {
        this.isUpdateLoading = true;
        //TODO: Create/Update attendance API
        if (this.editAttendance.id == null) {
            this.attendanceApiService
                .createAttendance({
                date: data.date,
                emp: this.selectedEmployee,
                check_in_time: this.editAttendance.check_in_time,
                check_out_time: this.editAttendance.check_out_time,
            })
                .subscribe((response) => {
                if (response.success) {
                    data.attendance = response.result;
                    this.message.create('success', response.message);
                    this.editAttendance = null;
                    this.editDate = null;
                }
                else {
                    this.message.create('error', response.message);
                }
                this.isUpdateLoading = false;
            });
        }
        else {
            this.attendanceApiService
                .updateAttendance(this.editAttendance)
                .subscribe((response) => {
                if (response.success) {
                    data.attendance = response.result;
                    this.message.create('success', response.message);
                    this.editAttendance = null;
                    this.editDate = null;
                }
                else {
                    this.message.create('error', response.message);
                }
                this.isUpdateLoading = false;
            });
        }
    }
    //TODO: implement real delete attendance api
    deleteAttendance(data) {
        this.isDeleteAttendanceLoading = true;
        this.editDate = data.date;
        this.attendanceApiService
            .deleteAttendance(data.attendance.id)
            .subscribe((response) => {
            if (response.success) {
                delete this.attendanceResultList.filter((att) => src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].compareDates(att.date, data.date) == 0)[0].attendance;
                this.message.create('success', response.message);
            }
            else {
                this.message.create('error', response.message);
            }
            this.editDate = null;
            this.isDeleteAttendanceLoading = false;
        });
    }
    onMonthChange(event) {
        this.getAttendance(this.selectedEmployee.id, event.month, event.year);
    }
    // working_hour = check_out_time - check_in_time - 1hr(lunch break)
    calculateWorkingHour(checkinTime, checkoutTime, leave) {
        return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](moment__WEBPACK_IMPORTED_MODULE_0__(checkoutTime).diff(moment__WEBPACK_IMPORTED_MODULE_0__(checkinTime)))
            .format('HH:mm');
    }
    getLeaveTooltopTitle(leave) {
        return (leave.leave_type.name +
            ' ' +
            (leave.type == 1 ? '(AM)' : leave.type == 2 ? '(PM)' : ''));
    }
    getOvertimeTooltopTitle(overtime) {
        return ('Overtime (' +
            src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].showTimeIn12(overtime.request_start_datetime) +
            ' - ' +
            src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].showTimeIn12(overtime.request_end_datetime) +
            ')');
    }
    onCreateHolidayStart(data) {
        this.editHoliday = {
            name: '',
            date: data.date,
        };
    }
    onCreateHolidayCancel() {
        this.editHoliday = null;
    }
    onCreateHolidaySave() {
        if (!(this.editHoliday != null && this.editHoliday.name != '')) {
            this.message.create('error', 'Holiday name cannot be blank!');
            return;
        }
        this.isCreateHolidayLoading = true;
        this.holidayApiService
            .createHoliday(this.editHoliday)
            .subscribe((response) => {
            if (response.success) {
                this.attendanceResultList.filter((att) => src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].compareDates(att.date, response.result.date) == 0)[0].holiday = response.result;
                this.message.create('success', response.message);
                this.editHoliday = null;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isCreateHolidayLoading = false;
        });
    }
    onDeleteHoliday(attendanceResult) {
        this.isCreateHolidayLoading = true;
        this.holidayApiService
            .deleteHoliday(attendanceResult.holiday.id)
            .subscribe((response) => {
            if (response.success) {
                this.attendanceResultList.find((att) => src_app_util_date_util__WEBPACK_IMPORTED_MODULE_2__["DateUtil"].compareDates(att.date, attendanceResult.date) == 0).holiday = null;
                this.message.create('success', response.message);
                this.editHoliday = null;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isCreateHolidayLoading = false;
        });
    }
    onDateColumnMouseEnter(data) {
        this.isHolidayCreateDeleteVisible = true;
        this.hoverDate = data.date;
    }
    onDateColumnMouseLeave() {
        this.isHolidayCreateDeleteVisible = false;
        this.hoverDate = null;
    }
}
AttendancePageComponent.ɵfac = function AttendancePageComponent_Factory(t) { return new (t || AttendancePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_attendance_api_service__WEBPACK_IMPORTED_MODULE_6__["AttendanceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_holiday_api_service__WEBPACK_IMPORTED_MODULE_7__["HolidayApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AttendancePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AttendancePageComponent, selectors: [["app-attendance-page"]], viewQuery: function AttendancePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.employeeSearchComponent1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthYearSelectComponent = _t.first);
    } }, decls: 27, vars: 15, consts: [[1, "body-container", 3, "resize"], [1, "flex-row"], [1, "attendance-body"], [3, "showEmployeeDetails", "onSelectEmployee", 4, "ngIf"], ["id", "table-parent", 1, "flex-column", 2, "align-items", "stretch", "width", "100%"], [3, "allowFuture", "onChange"], ["monthYearSelectComponent", ""], ["size", "small", "nzFrontPagination", "false", 2, "flex", "1", 3, "nzBordered", "nzLoading", "nzData", "nzScroll"], ["attendanceTable", ""], ["nzSortOrder", "descend", 3, "nzSortFn", "nzFilters", "nzFilterFn"], [3, "nzFilters", "nzFilterFn"], [4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "showEmployeeDetails", "onSelectEmployee"], ["employeeSearchComponent1", ""], [3, "ngClass"], [3, "mouseenter", "mouseleave"], [1, "flex-row", 2, "justify-content", "space-between", "align-items", "center"], ["nz-tooltip", "", "nz-icon", "", "style", "font-size: 12pt", 3, "nzTooltipTitle", "nzType", "click", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "style", "font-size: 12pt", "nzType", "plus", 3, "nzTooltipTitle", "click", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "style", "font-size: 12pt", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this holiday?", "nzPopconfirmPlacement", "top", 3, "nzTooltipTitle", "nzType", "nzOnConfirm", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "style", "font-size: 12pt", "nzType", "calendar", 3, "nzTooltipTitle", 4, "ngIf"], [3, "hidden"], ["class", "flex-row", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "nzType", "minus-circle", 3, "nzTooltipTitle", "ngStyle", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", "nzType", "clock-circle", 3, "nzTooltipTitle", "ngStyle", 4, "ngIf"], ["style", "text-align: right", 4, "ngIf"], ["nz-tooltip", "", "nz-icon", "", 2, "font-size", "12pt", 3, "nzTooltipTitle", "nzType", "click"], ["placeholder", "Name", 2, "flex", "1", 3, "value", "valueChange"], ["nz-tooltip", "", "nz-icon", "", "nzType", "plus", 2, "font-size", "12pt", 3, "nzTooltipTitle", "click"], ["nz-tooltip", "", "nz-icon", "", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this holiday?", "nzPopconfirmPlacement", "top", 2, "font-size", "12pt", 3, "nzTooltipTitle", "nzType", "nzOnConfirm"], ["nz-tooltip", "", "nz-icon", "", "nzType", "calendar", 2, "font-size", "12pt", 3, "nzTooltipTitle"], ["type", "time", 2, "flex", "1", 3, "value", "valueChange"], ["nz-tooltip", "", "nz-icon", "", "nzType", "minus-circle", 3, "nzTooltipTitle", "ngStyle"], ["nz-tooltip", "", "nz-icon", "", "nzType", "clock-circle", 3, "nzTooltipTitle", "ngStyle"], [2, "text-align", "right"], ["nz-button", "", "nzType", "link", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this attendance data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm", 4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "plus", 3, "ngStyle"], ["nz-icon", "", "nzType", "edit", 3, "ngStyle"], ["nz-icon", "", "nzType", "close", 3, "ngStyle"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "check", 3, "ngStyle"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this attendance data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm"], ["nz-icon", "", "nzType", "delete", 3, "ngStyle"]], template: function AttendancePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function AttendancePageComponent_Template_div_resize_0_listener() { return ctx.calculateTableHeight(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Attendance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AttendancePageComponent_app_employee_search_component_6_Template, 2, 1, "app-employee-search-component", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-month-year-select-component", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function AttendancePageComponent_Template_app_month_year_select_component_onChange_8_listener($event) { return ctx.onMonthChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Checkin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Working Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Remarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AttendancePageComponent_th_24_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AttendancePageComponent_tr_26_Template, 24, 18, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", 2 > ctx.currentUserEmployee.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowFuture", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzBordered", true)("nzLoading", ctx.isAttendanceTableLoading)("nzData", ctx.attendanceResultList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c4, ctx.tableHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSortFn", ctx.dateSortFunction)("nzFilters", ctx.dateFilterList)("nzFilterFn", ctx.dateFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFilters", ctx.remarksFilterList)("nzFilterFn", ctx.remarksFilterFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", 2 > ctx.currentUserEmployee.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r2.data);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_11__["MonthYearSelectComponentComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeSearchComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_17__["CustomInputComponentComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmDirective"], _component_custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_19__["CustomDatePickerComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__["NzButtonComponent"]], styles: [".attendance-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  overflow: hidden;\n}\n.attendance-body[_ngcontent-%COMP%]     .green-table-row.ant-table-row {\n  background-color: #4bc35f;\n  color: white;\n}\n.attendance-body[_ngcontent-%COMP%]     .green-table-row.ant-table-row:hover > td {\n  background-color: #44b556;\n}\n.attendance-body[_ngcontent-%COMP%]     .disabled-table-row.ant-table-row {\n  background-color: #b3b3b3;\n  color: white;\n}\n.attendance-body[_ngcontent-%COMP%]     .disabled-table-row.ant-table-row:hover > td {\n  background-color: #b3b3b3;\n}\n.attendance-body[_ngcontent-%COMP%]     .dark-table-row.ant-table-row {\n  background-color: #eaeaea;\n}\n.attendance-body[_ngcontent-%COMP%]     .dark-table-row.ant-table-row:hover > td {\n  background-color: #e1e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F0dGVuZGFuY2UtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSx5QkFBQTtBQUVOO0FBRUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBSjtBQUNJO0VBQ0UseUJBQUE7QUFDTjtBQUdFO0VBQ0UseUJBQUE7QUFESjtBQUVJO0VBQ0UseUJBQUE7QUFBTiIsImZpbGUiOiJhdHRlbmRhbmNlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXR0ZW5kYW5jZS1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJiA6Om5nLWRlZXAgLmdyZWVuLXRhYmxlLXJvdy5hbnQtdGFibGUtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMzVmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAmOmhvdmVyID4gdGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU1NjtcbiAgICB9XG4gIH1cblxuICAmIDo6bmctZGVlcCAuZGlzYWJsZWQtdGFibGUtcm93LmFudC10YWJsZS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgICY6aG92ZXIgPiB0ZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xuICAgIH1cbiAgfVxuXG4gICYgOjpuZy1kZWVwIC5kYXJrLXRhYmxlLXJvdy5hbnQtdGFibGUtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgICY6aG92ZXIgPiB0ZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "FlN3":
/*!************************************************!*\
  !*** ./src/app/model/leave-allowance-model.ts ***!
  \************************************************/
/*! exports provided: LeaveAllowance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveAllowance", function() { return LeaveAllowance; });
class LeaveAllowance {
    constructor() {
        this.used_days = 0;
        this.del_flag = 0;
    }
}


/***/ }),

/***/ "HFTl":
/*!*************************************************!*\
  !*** ./src/app/service/employee-api.service.ts ***!
  \*************************************************/
/*! exports provided: EmployeeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeApiService", function() { return EmployeeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EmployeeApiService {
    constructor(baseApiService, http) {
        this.baseApiService = baseApiService;
        this.http = http;
    }
    getEmployees(keyword, departmentId) {
        return this.baseApiService.get(`employee?${keyword != null && keyword != '' ? 'keyword=' + keyword : ''}${departmentId != null && departmentId > -1
            ? (keyword != null && keyword != '' ? '&' : '') +
                'department_id=' +
                departmentId
            : ''}`);
    }
    createEmployee(employee) {
        return this.baseApiService.post(`employee`, employee);
    }
    getEmployeeById(employee_id) {
        return this.baseApiService.get(`employee/${employee_id}`);
    }
    updateEmployee(employee) {
        return this.baseApiService.put(`employee/${employee.id}`, employee);
    }
    deleteEmployee(id) {
        return this.baseApiService.delete(`employee/${id}`);
    }
    changePassword(old_password, new_password) {
        return this.baseApiService.post(`employee/change-password`, {
            old_password,
            new_password,
        });
    }
    uploadImage(id, data) {
        return this.baseApiService.formPut(`employee/${id}/upload-image`, data);
    }
}
EmployeeApiService.ɵfac = function EmployeeApiService_Factory(t) { return new (t || EmployeeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EmployeeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeApiService, factory: EmployeeApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JJIN":
/*!*******************************************************************!*\
  !*** ./src/app/page/leave-type-page/leave-type-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeaveTypePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypePageComponent", function() { return LeaveTypePageComponent; });
/* harmony import */ var src_app_model_leave_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/leave-type-model */ "dA0N");
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_leave_type_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/leave-type-api.service */ "kUND");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/month-year-select-component/month-year-select-component.component */ "jvD1");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");



















function LeaveTypePageComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LeaveTypePageComponent_tr_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r5.name);
} }
function LeaveTypePageComponent_tr_22_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LeaveTypePageComponent_tr_22_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.editingLeaveType.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.isDeleteLoading)("ngModel", ctx_r7.editingLeaveType.name);
} }
function LeaveTypePageComponent_tr_22_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", data_r5.leave_days, " days");
} }
function LeaveTypePageComponent_tr_22_nz_input_number_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-number", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LeaveTypePageComponent_tr_22_nz_input_number_6_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.editingLeaveType.leave_days = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabled", ctx_r9.isDeleteLoading)("ngModel", ctx_r9.editingLeaveType.leave_days)("nzMin", 0)("nzStep", 1);
} }
function LeaveTypePageComponent_tr_22_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", data_r5.valid_at, " months");
} }
function LeaveTypePageComponent_tr_22_nz_input_number_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-number", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LeaveTypePageComponent_tr_22_nz_input_number_9_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.editingLeaveType.valid_at = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabled", ctx_r11.isDeleteLoading)("ngModel", ctx_r11.editingLeaveType.valid_at)("nzMin", 0)("nzStep", 1);
} }
const _c0 = function () { return { color: "gray", "font-size": "12pt" }; };
function LeaveTypePageComponent_tr_22_td_10_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaveTypePageComponent_tr_22_td_10_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r26.onCancelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Cancel")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
} }
const _c1 = function () { return { color: "#379947", "font-size": "12pt" }; };
function LeaveTypePageComponent_tr_22_td_10_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaveTypePageComponent_tr_22_td_10_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r28.onSaveClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx_r23.editingLeaveType.id == data_r5.id && ctx_r23.isLeaveTypeSaveLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Save")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return { color: "#2680eb", "font-size": "12pt" }; };
function LeaveTypePageComponent_tr_22_td_10_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaveTypePageComponent_tr_22_td_10_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.onEditClick(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Edit")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c2));
} }
const _c3 = function () { return { color: "#e34850", "font-size": "12pt" }; };
function LeaveTypePageComponent_tr_22_td_10_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnConfirm", function LeaveTypePageComponent_tr_22_td_10_a_4_Template_a_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.onDeleteClick(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx_r25.isDeleteLoading && ctx_r25.editingLeaveType.id == data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Delete")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c3));
} }
function LeaveTypePageComponent_tr_22_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LeaveTypePageComponent_tr_22_td_10_a_1_Template, 2, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LeaveTypePageComponent_tr_22_td_10_a_2_Template, 2, 4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LeaveTypePageComponent_tr_22_td_10_a_3_Template, 2, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LeaveTypePageComponent_tr_22_td_10_a_4_Template, 2, 4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.editingLeaveType && ctx_r12.editingLeaveType.id == data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.editingLeaveType && ctx_r12.editingLeaveType.id == data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r12.editingLeaveType && ctx_r12.editingLeaveType.id == data_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r12.editingLeaveType && ctx_r12.editingLeaveType.id == data_r5.id));
} }
function LeaveTypePageComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LeaveTypePageComponent_tr_22_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LeaveTypePageComponent_tr_22_input_3_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LeaveTypePageComponent_tr_22_span_5_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LeaveTypePageComponent_tr_22_nz_input_number_6_Template, 1, 4, "nz-input-number", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LeaveTypePageComponent_tr_22_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LeaveTypePageComponent_tr_22_nz_input_number_9_Template, 1, 4, "nz-input-number", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LeaveTypePageComponent_tr_22_td_10_Template, 5, 4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r3.editingLeaveType && ctx_r3.editingLeaveType.id == data_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.editingLeaveType && ctx_r3.editingLeaveType.id == data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r3.editingLeaveType && ctx_r3.editingLeaveType.id == data_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.editingLeaveType && ctx_r3.editingLeaveType.id == data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r3.editingLeaveType && ctx_r3.editingLeaveType.id == data_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.editingLeaveType && ctx_r3.editingLeaveType.id == data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.isCurrentYear && 1 > ctx_r3.currentUserEmployee.role);
} }
function LeaveTypePageComponent_tr_23_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LeaveTypePageComponent_tr_23_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r45.editingLeaveType.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r39.editingLeaveType.name);
} }
function LeaveTypePageComponent_tr_23_nz_input_number_4_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-number", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LeaveTypePageComponent_tr_23_nz_input_number_4_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r47.editingLeaveType.leave_days = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r40.editingLeaveType.leave_days)("nzMin", 0)("nzStep", 1);
} }
function LeaveTypePageComponent_tr_23_nz_input_number_6_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-number", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LeaveTypePageComponent_tr_23_nz_input_number_6_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r49.editingLeaveType.valid_at = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "months");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r41.editingLeaveType.valid_at)("nzMin", 0)("nzStep", 1);
} }
function LeaveTypePageComponent_tr_23_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaveTypePageComponent_tr_23_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r51.onCancelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Cancel")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
} }
function LeaveTypePageComponent_tr_23_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaveTypePageComponent_tr_23_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r53.onSaveClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx_r43.editingLeaveType.id == null && ctx_r43.isLeaveTypeSaveLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "Save")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
} }
function LeaveTypePageComponent_tr_23_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaveTypePageComponent_tr_23_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r55.onNewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", "New")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
} }
function LeaveTypePageComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LeaveTypePageComponent_tr_23_input_2_Template, 1, 1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LeaveTypePageComponent_tr_23_nz_input_number_4_Template, 2, 3, "nz-input-number", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LeaveTypePageComponent_tr_23_nz_input_number_6_Template, 2, 3, "nz-input-number", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LeaveTypePageComponent_tr_23_a_8_Template, 2, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LeaveTypePageComponent_tr_23_a_9_Template, 2, 4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LeaveTypePageComponent_tr_23_a_10_Template, 2, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editingLeaveType && ctx_r4.editingLeaveType.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editingLeaveType && ctx_r4.editingLeaveType.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editingLeaveType && ctx_r4.editingLeaveType.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editingLeaveType && ctx_r4.editingLeaveType.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editingLeaveType && ctx_r4.editingLeaveType.id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r4.editingLeaveType && ctx_r4.editingLeaveType.id == null));
} }
const _c4 = function (a1) { return { x: "100%", y: a1 }; };
class LeaveTypePageComponent {
    constructor(_leaveTypeApiService, _message) {
        this._leaveTypeApiService = _leaveTypeApiService;
        this._message = _message;
        this.tableHeight = '500px';
        this.leaveTypeList = [];
        this.isLeaveTypeTableLoading = false;
        this.leaveTypeDataLength = 0;
        this.isCurrentYear = true;
        this.isLeaveTypeSaveLoading = false;
        this.isLeaveTypeDeleteLoading = false;
    }
    ngOnInit() {
        this.getLeaveTypes(new Date().getFullYear());
        this.initializeCurrentUser();
    }
    // get current user data from localStorage
    initializeCurrentUser() {
        let currentUserDataJsonString = localStorage.getItem('current_employee');
        let decryptedUserData = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_2__["EncryptionUtil"].decryptData(currentUserDataJsonString);
        this.currentUserEmployee = decryptedUserData;
    }
    getLeaveTypes(year) {
        this.isLeaveTypeTableLoading = true;
        let tempLeaveTypeList = [];
        //TODO api connect
        this._leaveTypeApiService.getAll(year).subscribe((response) => {
            if (response.success) {
                this.leaveTypeList = response.result;
            }
            else {
                this._message.create('error', response.message);
            }
            this.isLeaveTypeTableLoading = false;
        }, (err) => {
            this._message.create('error', err.error.message);
            this.isLeaveTypeTableLoading = false;
        });
    }
    onNewClick() {
        this.editingLeaveType = new src_app_model_leave_type_model__WEBPACK_IMPORTED_MODULE_0__["LeaveType"]();
    }
    onEditClick(leaveType) {
        this.editingLeaveType = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_1__["CloneUtil"].clone(leaveType);
    }
    onSaveClick() {
        if (this.editingLeaveType.name.length < 1) {
            this._message.create('error', 'Please give leave type a name.');
            return;
        }
        if (this.editingLeaveType.leave_days < 1) {
            this._message.create('error', 'Leave days cannot be zero.');
            return;
        }
        if (this.editingLeaveType.valid_at < 0) {
            this._message.create('error', 'Leave type cannot become valid at less than zero month.');
            return;
        }
        this.isLeaveTypeSaveLoading = true;
        let subscription = this.editingLeaveType.id == null
            ? this._leaveTypeApiService.createNew(this.editingLeaveType)
            : this._leaveTypeApiService.update(this.editingLeaveType);
        subscription.subscribe((response) => {
            if (response.success) {
                if (this.editingLeaveType.id == null)
                    this.leaveTypeList = [...this.leaveTypeList, response.result];
                else {
                    console.log(response.result);
                    this.leaveTypeList = this.leaveTypeList.map((lt) => lt.id == response.result.id ? response.result : lt);
                }
                this._message.create('success', response.message);
                this.editingLeaveType = null;
            }
            else {
                this._message.create('error', response.message);
            }
            this.isLeaveTypeSaveLoading = false;
        }, (err) => {
            console.log(err);
            this._message.create('error', err.error.message);
            this.isLeaveTypeSaveLoading = false;
        });
    }
    onDeleteClick(leaveType) {
        this.isLeaveTypeDeleteLoading = true;
        this.editingLeaveType = leaveType;
        this._leaveTypeApiService.delete(leaveType.id).subscribe((response) => {
            if (response.success) {
                this.leaveTypeList = this.leaveTypeList.filter((lt) => lt.id != leaveType.id);
                this._message.create('success', response.message);
            }
            else {
                this._message.create('error', response.message);
            }
            this.editingLeaveType = null;
            this.isLeaveTypeDeleteLoading = false;
        }, (err) => {
            this._message.create('error', err.error.message);
            this.isLeaveTypeDeleteLoading = false;
            this.editingLeaveType = null;
        });
    }
    onCancelClick() {
        this.editingLeaveType = null;
    }
    onLeaveTypeFilterChange(event, leaveTypeTable) { }
    onYearChange(event) {
        this.getLeaveTypes(event.year);
        this.isCurrentYear = new Date().getFullYear() == event.year;
    }
    calculateTableHeight() {
        let tableParentElement = document.getElementsByClassName('leave-type-body')[0];
        this.tableHeight =
            tableParentElement == null
                ? '500px'
                : tableParentElement.clientHeight - 35 + 'px';
    }
}
LeaveTypePageComponent.ɵfac = function LeaveTypePageComponent_Factory(t) { return new (t || LeaveTypePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_leave_type_api_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTypeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
LeaveTypePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LeaveTypePageComponent, selectors: [["app-leave-type-page"]], decls: 24, vars: 10, consts: [[1, "body-container", 3, "resize"], ["routerLink", "/leave"], [1, "leave-type-body"], ["type", "year", 3, "onChange"], ["monthYearSelectComponent", ""], ["size", "small", "nzFrontPagination", "false", 2, "flex", "1", 3, "nzBordered", "nzLoading", "nzData", "nzScroll", "nzFooter", "nzCurrentPageDataChange"], ["leaveTypeTable", ""], ["style", "text-align: right", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "text-align", "right"], ["placeholder", "Leave Type Name", "nz-input", "", "type", "text", "name", "", "id", "", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], [3, "nzDisabled", "ngModel", "nzMin", "nzStep", "ngModelChange", 4, "ngIf"], ["placeholder", "Leave Type Name", "nz-input", "", "type", "text", "name", "", "id", "", 3, "disabled", "ngModel", "ngModelChange"], [3, "nzDisabled", "ngModel", "nzMin", "nzStep", "ngModelChange"], ["nz-button", "", "nzType", "link", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this leave data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm", 4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-icon", "", "nz-tooltip", "", "nzType", "close", 3, "nzTooltipTitle", "ngStyle"], ["nz-button", "", "nzType", "link", 3, "nzLoading", "click"], ["nz-icon", "", "nz-tooltip", "", "nzType", "check", 3, "nzTooltipTitle", "ngStyle"], ["nz-icon", "", "nz-tooltip", "", "nzType", "edit", 3, "nzTooltipTitle", "ngStyle"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to delete this leave data?", "nzPopconfirmPlacement", "top", 3, "nzLoading", "nzOnConfirm"], ["nz-icon", "", "nz-tooltip", "", "nzType", "delete", 3, "nzTooltipTitle", "ngStyle"], ["placeholder", "Leave Type Name", "nz-input", "", "type", "text", "name", "", "id", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzMin", "nzStep", "ngModelChange", 4, "ngIf"], ["placeholder", "Leave Type Name", "nz-input", "", "type", "text", "name", "", "id", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "nzMin", "nzStep", "ngModelChange"], ["nz-icon", "", "nz-tooltip", "", "nzType", "plus", 3, "nzTooltipTitle", "ngStyle"]], template: function LeaveTypePageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function LeaveTypePageComponent_Template_div_resize_0_listener() { return ctx.calculateTableHeight(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Leave Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-month-year-select-component", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function LeaveTypePageComponent_Template_app_month_year_select_component_onChange_8_listener($event) { return ctx.onYearChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCurrentPageDataChange", function LeaveTypePageComponent_Template_nz_table_nzCurrentPageDataChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11); return ctx.onLeaveTypeFilterChange($event, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Leave Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Valid At");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LeaveTypePageComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LeaveTypePageComponent_tr_22_Template, 11, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LeaveTypePageComponent_tr_23_Template, 11, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBordered", true)("nzLoading", ctx.isLeaveTypeTableLoading)("nzData", ctx.leaveTypeList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c4, ctx.tableHeight))("nzFooter", "Total: " + ctx.leaveTypeDataLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCurrentYear && 1 > ctx.currentUserEmployee.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCurrentYear && 1 > ctx.currentUserEmployee.role);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_8__["MonthYearSelectComponentComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzThMeasureDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__["NzInputNumberComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmDirective"]], styles: [".leave-type-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlLXR5cGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImxlYXZlLXR5cGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWF2ZS10eXBlLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIl19 */"] });


/***/ }),

/***/ "KAX7":
/*!******************************************!*\
  !*** ./src/app/constants/secret-keys.ts ***!
  \******************************************/
/*! exports provided: ENCRYPTION_SECRET_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCRYPTION_SECRET_KEY", function() { return ENCRYPTION_SECRET_KEY; });
const ENCRYPTION_SECRET_KEY = 'SysExeMM2021';


/***/ }),

/***/ "KgNH":
/*!***************************************************!*\
  !*** ./src/app/service/supervisor-api.service.ts ***!
  \***************************************************/
/*! exports provided: SupervisorApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorApiService", function() { return SupervisorApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class SupervisorApiService {
    constructor(baseApiService) {
        this.baseApiService = baseApiService;
    }
    getSupervisors(type, id) {
        return this.baseApiService.get(`supervisor?emp_id=${id}&type=${type}`);
    }
    removeSupervisor(employee_id, supervisor_id) {
        return this.baseApiService.delete(`supervisor?emp_id=${employee_id}&supervisor_id=${supervisor_id}`);
    }
    addSupervisor(employee_id, supervisor_id) {
        return this.baseApiService.post(`supervisor`, {
            employee_id,
            supervisor_id,
        });
    }
}
SupervisorApiService.ɵfac = function SupervisorApiService_Factory(t) { return new (t || SupervisorApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
SupervisorApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupervisorApiService, factory: SupervisorApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "O0qO":
/*!*****************************************!*\
  !*** ./src/app/util/encryption-util.ts ***!
  \*****************************************/
/*! exports provided: EncryptionUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionUtil", function() { return EncryptionUtil; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_secret_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/secret-keys */ "KAX7");


class EncryptionUtil {
    static encryptData(data) {
        try {
            return crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(JSON.stringify(data), _constants_secret_keys__WEBPACK_IMPORTED_MODULE_1__["ENCRYPTION_SECRET_KEY"]).toString();
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
    static decryptData(data) {
        try {
            if (data == null)
                return null;
            const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(data, _constants_secret_keys__WEBPACK_IMPORTED_MODULE_1__["ENCRYPTION_SECRET_KEY"]);
            if (bytes.toString()) {
                return JSON.parse(JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8)));
            }
            return JSON.parse(data);
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SwAD":
/*!**************************************************************************************************!*\
  !*** ./src/app/component/custom-date-picker-component/custom-date-picker-component.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CustomDatePickerComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatePickerComponentComponent", function() { return CustomDatePickerComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");






function CustomDatePickerComponentComponent_nz_date_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-date-picker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomDatePickerComponentComponent_nz_date_picker_3_Template_nz_date_picker_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.date = $event; })("ngModelChange", function CustomDatePickerComponentComponent_nz_date_picker_3_Template_nz_date_picker_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dateChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx_r0.disabled)("nzPlaceHolder", ctx_r0.placeholder)("ngModel", ctx_r0.date);
} }
function CustomDatePickerComponentComponent_nz_time_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomDatePickerComponentComponent_nz_time_picker_4_Template_nz_time_picker_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.date = $event; })("ngModelChange", function CustomDatePickerComponentComponent_nz_time_picker_4_Template_nz_time_picker_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.dateChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.date)("nzDisabled", ctx_r1.disabled)("nzPlaceHolder", ctx_r1.placeholder);
} }
class CustomDatePickerComponentComponent {
    constructor() {
        this.type = 'date';
        this.disabled = false;
        this.label = '';
        this.placeholder = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.date = null;
    }
    set value(timestamp) {
        this.date = timestamp ? new Date(timestamp) : null;
    }
    ngOnInit() { }
    dateChange() {
        var _a;
        this.valueChange.emit((_a = this.date) === null || _a === void 0 ? void 0 : _a.getTime());
    }
}
CustomDatePickerComponentComponent.ɵfac = function CustomDatePickerComponentComponent_Factory(t) { return new (t || CustomDatePickerComponentComponent)(); };
CustomDatePickerComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomDatePickerComponentComponent, selectors: [["app-custom-date-picker-component"]], inputs: { type: "type", disabled: "disabled", label: "label", placeholder: "placeholder", value: "value" }, outputs: { valueChange: "valueChange" }, decls: 5, vars: 3, consts: [[2, "display", "flex", "flex-direction", "column"], [1, "label"], [3, "nzDisabled", "nzPlaceHolder", "ngModel", "ngModelChange", 4, "ngIf"], ["nzFormat", "hh:mm a", 3, "ngModel", "nzDisabled", "nzPlaceHolder", "ngModelChange", 4, "ngIf"], [3, "nzDisabled", "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzFormat", "hh:mm a", 3, "ngModel", "nzDisabled", "nzPlaceHolder", "ngModelChange"]], template: function CustomDatePickerComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomDatePickerComponentComponent_nz_date_picker_3_Template, 1, 3, "nz-date-picker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomDatePickerComponentComponent_nz_time_picker_4_Template, 1, 3, "nz-time-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type != "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "time");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_2__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_4__["NzTimePickerComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 10pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1c3RvbS1kYXRlLXBpY2tlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImN1c3RvbS1kYXRlLXBpY2tlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


// import { MessagingService } from './service/messaging.service';
class AppComponent {
    constructor() {
        this.title = 'inhouse-demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Thbc":
/*!*********************************************!*\
  !*** ./src/app/service/base-api.service.ts ***!
  \*********************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/api-constants */ "fIz6");
/* harmony import */ var _util_encryption_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BaseApiService {
    constructor(http) {
        this.http = http;
    }
    getHeaders() {
        let encryptedAuthToken = localStorage.getItem('auth_token');
        let authToken = _util_encryption_util__WEBPACK_IMPORTED_MODULE_1__["EncryptionUtil"].decryptData(encryptedAuthToken);
        let basicHeaders = {
            'Content-Type': 'application/json',
        };
        if (authToken) {
            basicHeaders['Authorization'] = 'Token ' + authToken;
            return basicHeaders;
        }
        else {
            return basicHeaders;
        }
    }
    get(url) {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].BASE_URL + url, {
            headers: this.getHeaders(),
        });
    }
    post(url, body) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].BASE_URL + url, body, {
            headers: this.getHeaders(),
        });
    }
    put(url, body) {
        return this.http.put(_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].BASE_URL + url, body, {
            headers: this.getHeaders(),
        });
    }
    formPut(url, body) {
        return this.http.put(_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].BASE_URL + url, body, {
            headers: {
                Authorization: 'Token ' +
                    _util_encryption_util__WEBPACK_IMPORTED_MODULE_1__["EncryptionUtil"].decryptData(localStorage.getItem('auth_token')),
            },
        });
    }
    delete(url) {
        return this.http.delete(_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].BASE_URL + url, {
            headers: this.getHeaders(),
        });
    }
}
BaseApiService.ɵfac = function BaseApiService_Factory(t) { return new (t || BaseApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BaseApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BaseApiService, factory: BaseApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "U9D5":
/*!*********************************************!*\
  !*** ./src/app/service/auth-api.service.ts ***!
  \*********************************************/
/*! exports provided: AuthApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApiService", function() { return AuthApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class AuthApiService {
    constructor(baseApiService) {
        this.baseApiService = baseApiService;
    }
    login(username, password) {
        return this.baseApiService.post('auth/login', { username, password });
    }
    forgetPassword(email) {
        return this.baseApiService.post('auth/forget-password', { email });
    }
    validateVerfifcationCode(email, verificationCode) {
        return this.baseApiService.post('auth/validate-vcode', {
            email,
            verification_code: verificationCode,
        });
    }
    resetPassword(email, verificationCode, newPassword) {
        return this.baseApiService.post('auth/reset-password', {
            email,
            verification_code: verificationCode,
            password: newPassword,
        });
    }
}
AuthApiService.ɵfac = function AuthApiService_Factory(t) { return new (t || AuthApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
AuthApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthApiService, factory: AuthApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UeAQ":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        let authToken = localStorage.getItem('auth_token');
        if (!authToken) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WsIo":
/*!*****************************************************************!*\
  !*** ./src/app/page/not-found-page/not-found-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 4, vars: 1, consts: [[3, "routerLink"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404: Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "XYED":
/*!**********************************************!*\
  !*** ./src/app/service/leave-api.service.ts ***!
  \**********************************************/
/*! exports provided: LeaveApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApiService", function() { return LeaveApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class LeaveApiService {
    constructor(_baseApiService) {
        this._baseApiService = _baseApiService;
    }
    getAllLeaves(emp_id, year, isRequested = false) {
        return this._baseApiService.get(`leave?${(isRequested ? 'supervisor_id=' : 'employee_id=') + emp_id}&year=${year}`);
    }
    saveLeave(leave) {
        return this._baseApiService.post(`leave`, leave);
    }
    requestLeave(leave) {
        return this._baseApiService.post(`leave/request`, leave);
    }
    updateLeave(leave) {
        return this._baseApiService.put(`leave/${leave.id}`, leave);
    }
    deleteLeave(id) {
        return this._baseApiService.post(`leave/${id}`, {});
    }
}
LeaveApiService.ɵfac = function LeaveApiService_Factory(t) { return new (t || LeaveApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
LeaveApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeaveApiService, factory: LeaveApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Yro/":
/*!****************************************************************************************!*\
  !*** ./src/app/component/employee-card-component/employee-card-component.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmployeeCardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCardComponentComponent", function() { return EmployeeCardComponentComponent; });
/* harmony import */ var src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/api-constants */ "fIz6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");







function EmployeeCardComponentComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.getImageUrl(ctx_r0.employee.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EmployeeCardComponentComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
} }
function EmployeeCardComponentComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeCardComponentComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onDetailsClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class EmployeeCardComponentComponent {
    constructor(router) {
        this.router = router;
        this.isSelected = false;
        this.showDetails = false;
        this.ApiConstants = src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"];
    }
    ngOnInit() { }
    onDetailsClicked() {
        // to reload if on same page
        this.router.navigate(['']).then(() => {
            this.router.navigate(['/employee', { employee_id: this.employee.id }], {
                replaceUrl: true,
            });
        });
    }
    getImageUrl(url) {
        if (url.startsWith('http') || url.includes(src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].HOST_URL)) {
            return url;
        }
        else {
            return src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__["ApiConstants"].HOST_URL + url;
        }
    }
}
EmployeeCardComponentComponent.ɵfac = function EmployeeCardComponentComponent_Factory(t) { return new (t || EmployeeCardComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmployeeCardComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeeCardComponentComponent, selectors: [["app-employee-card-component"]], inputs: { employee: "employee", isSelected: "isSelected", showDetails: "showDetails" }, decls: 16, vars: 10, consts: [[1, "employee-card-container", 3, "ngStyle"], [1, "employee-card-header"], ["style", "width: 40px; height: 40px", 3, "src", 4, "ngIf"], ["nz-icon", "", "nzType", "user", "class", "image-placeholder", 4, "ngIf"], [2, "flex", "1"], [1, "card-title"], [1, "card-subtitle"], ["nz-button", "", "nzType", "link", 3, "click", 4, "ngIf"], [1, "employee-card-content"], ["nz-icon", "", "nzType", "apartment"], ["nz-icon", "", "nzType", "deployment-unit"], [2, "width", "40px", "height", "40px", 3, "src"], ["nz-icon", "", "nzType", "user", 1, "image-placeholder"], ["nz-button", "", "nzType", "link", 3, "click"]], template: function EmployeeCardComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeCardComponentComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmployeeCardComponentComponent_i_3_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmployeeCardComponentComponent_a_9_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.isSelected ? "#e6f7ff" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.employee.image_url && ctx.employee.image_url != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.employee.image_url || ctx.employee.image_url == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.employee.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.employee.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employee.position, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employee.department == null ? "" : ctx.employee.department.name, " Department ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"]], styles: [".employee-card-container[_ngcontent-%COMP%] {\n  border: solid 1px #e6f7ff;\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: ease-in 0.2s;\n}\n.employee-card-container[_ngcontent-%COMP%]   .employee-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 8px;\n}\n.employee-card-container[_ngcontent-%COMP%]   .employee-card-header[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.employee-card-container[_ngcontent-%COMP%]   .employee-card-header[_ngcontent-%COMP%]    > .image-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  line-height: 40px;\n}\n.employee-card-container[_ngcontent-%COMP%]   .employee-card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12pt;\n}\n.employee-card-container[_ngcontent-%COMP%]   .employee-card-header[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  color: gray;\n}\n.employee-card-container[_ngcontent-%COMP%]   .employee-card-content[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: gray;\n}\n.employee-card-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.employee-card-container[_ngcontent-%COMP%]:hover {\n  border: solid 1px #1890ff;\n  transition: ease-in 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtcGxveWVlLWNhcmQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxpQkFBQTtBQUNOO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFGTjtBQU9JO0VBQ0UsV0FBQTtBQUxOO0FBU0U7RUFDRSxnQkFBQTtBQVBKO0FBVUU7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBUkoiLCJmaWxlIjoiZW1wbG95ZWUtY2FyZC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtY2FyZC1jb250YWluZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTZmN2ZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuXG4gIC5lbXBsb3llZS1jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICA+IGltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICA+IC5pbWFnZS1wbGFjZWhvbGRlciB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgIH1cblxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxuXG4gIC5lbXBsb3llZS1jYXJkLWNvbnRlbnQge1xuICAgID4gaSB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gIH1cblxuICA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMxODkwZmY7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _page_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page/login-page/login-page.component */ "ntdR");
/* harmony import */ var _page_forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./page/forgot-password-page/forgot-password-page.component */ "Cl9/");
/* harmony import */ var _page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./page/main-page/main-page.component */ "qqXn");
/* harmony import */ var _page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./page/employee-page/employee-page.component */ "w+FS");
/* harmony import */ var _page_attendance_page_attendance_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./page/attendance-page/attendance-page.component */ "DmG7");
/* harmony import */ var _page_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./page/dashboard-page/dashboard-page.component */ "1yoe");
/* harmony import */ var _page_leave_page_leave_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./page/leave-page/leave-page.component */ "2JEh");
/* harmony import */ var _page_overtime_page_overtime_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./page/overtime-page/overtime-page.component */ "Ctdw");
/* harmony import */ var _page_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./page/not-found-page/not-found-page.component */ "WsIo");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var _page_attendance_detail_page_attendance_detail_page_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./page/attendance-detail-page/attendance-detail-page.component */ "dZE4");
/* harmony import */ var _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./component/employee-search-component/employee-search-component.component */ "iUhQ");
/* harmony import */ var _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./component/custom-input-component/custom-input-component.component */ "AGcp");
/* harmony import */ var _component_custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./component/custom-select-component/custom-select-component.component */ "0U9+");
/* harmony import */ var _component_custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./component/custom-date-picker-component/custom-date-picker-component.component */ "SwAD");
/* harmony import */ var _component_employee_card_component_employee_card_component_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./component/employee-card-component/employee-card-component.component */ "Yro/");
/* harmony import */ var _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./component/month-year-select-component/month-year-select-component.component */ "jvD1");
/* harmony import */ var _page_leave_type_page_leave_type_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./page/leave-type-page/leave-type-page.component */ "JJIN");
/* harmony import */ var _component_dialog_new_leave_dialog_new_leave_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./component/dialog/new-leave-dialog/new-leave-dialog.component */ "0GDw");
/* harmony import */ var _component_dialog_new_overtime_dialog_new_overtime_dialog_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./component/dialog/new-overtime-dialog/new-overtime-dialog.component */ "dhkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/core */ "fXoL");





















































const icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["EyeInvisibleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["EyeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["HomeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["CheckOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["ContainerOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["IdcardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["ApartmentOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["DeploymentUnitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["SaveOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["LoadingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["ArrowLeftOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["ArrowRightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["UserAddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["DeleteOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["PlusCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["ClockCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["MinusCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["CalendarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["PlusOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_39__["EditOutline"],
];
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"] }, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_29__["NzMessageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"].forRoot(icons),
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["NzBreadCrumbModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectModule"],
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__["NzPopconfirmModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__["NzDatePickerModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_19__["NzAlertModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__["NzModalModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTableModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__["NzCheckboxModule"],
            ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_23__["NzTimePickerModule"],
            ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_24__["NzStepsModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__["NzTabsModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__["NzUploadModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__["NzRadioModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__["NzInputNumberModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _page_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_30__["LoginPageComponent"],
        _page_forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordPageComponent"],
        _page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_32__["MainPageComponent"],
        _page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_33__["EmployeePageComponent"],
        _page_attendance_page_attendance_page_component__WEBPACK_IMPORTED_MODULE_34__["AttendancePageComponent"],
        _page_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_35__["DashboardPageComponent"],
        _page_leave_page_leave_page_component__WEBPACK_IMPORTED_MODULE_36__["LeavePageComponent"],
        _page_overtime_page_overtime_page_component__WEBPACK_IMPORTED_MODULE_37__["OvertimePageComponent"],
        _page_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_38__["NotFoundPageComponent"],
        _page_attendance_detail_page_attendance_detail_page_component__WEBPACK_IMPORTED_MODULE_40__["AttendanceDetailPageComponent"],
        _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_41__["EmployeeSearchComponentComponent"],
        _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_42__["CustomInputComponentComponent"],
        _component_custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_43__["CustomSelectComponentComponent"],
        _component_custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_44__["CustomDatePickerComponentComponent"],
        _component_employee_card_component_employee_card_component_component__WEBPACK_IMPORTED_MODULE_45__["EmployeeCardComponentComponent"],
        _component_month_year_select_component_month_year_select_component_component__WEBPACK_IMPORTED_MODULE_46__["MonthYearSelectComponentComponent"],
        _page_leave_type_page_leave_type_page_component__WEBPACK_IMPORTED_MODULE_47__["LeaveTypePageComponent"],
        _component_dialog_new_leave_dialog_new_leave_dialog_component__WEBPACK_IMPORTED_MODULE_48__["NewLeaveDialogComponent"],
        _component_dialog_new_overtime_dialog_new_overtime_dialog_component__WEBPACK_IMPORTED_MODULE_49__["NewOvertimeDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["NzBreadCrumbModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__["NzPopconfirmModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__["NzDatePickerModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_19__["NzAlertModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__["NzModalModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTableModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__["NzCheckboxModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_23__["NzTimePickerModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_24__["NzStepsModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__["NzTabsModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__["NzUploadModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__["NzRadioModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__["NzInputNumberModule"]] }); })();


/***/ }),

/***/ "bsAs":
/*!************************************!*\
  !*** ./src/app/util/clone-util.ts ***!
  \************************************/
/*! exports provided: CloneUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneUtil", function() { return CloneUtil; });
class CloneUtil {
    static clone(object) {
        return JSON.parse(JSON.stringify(object));
    }
}


/***/ }),

/***/ "cs5C":
/*!************************************************!*\
  !*** ./src/app/service/holiday-api.service.ts ***!
  \************************************************/
/*! exports provided: HolidayApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayApiService", function() { return HolidayApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class HolidayApiService {
    constructor(baseApiService) {
        this.baseApiService = baseApiService;
    }
    createHoliday(holiday) {
        return this.baseApiService.post('holiday', holiday);
    }
    deleteHoliday(holiday_id) {
        return this.baseApiService.post(`holiday/${holiday_id}`, {});
    }
}
HolidayApiService.ɵfac = function HolidayApiService_Factory(t) { return new (t || HolidayApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
HolidayApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HolidayApiService, factory: HolidayApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dA0N":
/*!*******************************************!*\
  !*** ./src/app/model/leave-type-model.ts ***!
  \*******************************************/
/*! exports provided: LeaveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveType", function() { return LeaveType; });
class LeaveType {
    constructor() {
        this.name = '';
        this.leave_days = 0;
        this.valid_at = 0;
    }
}


/***/ }),

/***/ "dZE4":
/*!*********************************************************************************!*\
  !*** ./src/app/page/attendance-detail-page/attendance-detail-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AttendanceDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceDetailPageComponent", function() { return AttendanceDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AttendanceDetailPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AttendanceDetailPageComponent.ɵfac = function AttendanceDetailPageComponent_Factory(t) { return new (t || AttendanceDetailPageComponent)(); };
AttendanceDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttendanceDetailPageComponent, selectors: [["app-attendance-detail-page"]], decls: 9, vars: 0, consts: [[1, "body-container"], ["routerLink", "/attendance"]], template: function AttendanceDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Attendance Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "attendance-detail page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "dhkV":
/*!***************************************************************************************!*\
  !*** ./src/app/component/dialog/new-overtime-dialog/new-overtime-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NewOvertimeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOvertimeDialogComponent", function() { return NewOvertimeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_overtime_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/overtime-model */ "k9zA");
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_overtime_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/overtime-api.service */ "pCso");
/* harmony import */ var src_app_service_supervisor_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/supervisor-api.service */ "KgNH");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom-select-component/custom-select-component.component */ "0U9+");
/* harmony import */ var _custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom-date-picker-component/custom-date-picker-component.component */ "SwAD");










function NewOvertimeDialogComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-custom-select-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newOvertime.emp = $event; })("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNewOvertimeEmployeeSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-custom-date-picker-component", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_date_picker_component_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.newOvertime.date = $event; })("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_date_picker_component_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDateChose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-custom-date-picker-component", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_date_picker_component_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.newOvertime.request_start_datetime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-custom-date-picker-component", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_date_picker_component_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newOvertime.request_end_datetime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-custom-select-component", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newOvertime.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-custom-select-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewOvertimeDialogComponent_ng_container_2_Template_app_custom_select_component_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.newOvertime.request_emp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newOvertimeEmployeeOptions)("value", ctx_r1.newOvertime.emp)("isLoading", ctx_r1.isNewOvertimeEmployeeSelectLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.newOvertime.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.newOvertime.date == null)("value", ctx_r1.newOvertime.request_start_datetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.newOvertime.date == null)("value", ctx_r1.newOvertime.request_end_datetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newOvertimeStatusOptions)("value", ctx_r1.newOvertime.status)("disabled", ctx_r1.newOvertime.emp == null || ctx_r1.newOvertime.emp != null && ctx_r1.newOvertime.emp.id == ctx_r1.currentUserEmployee.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.newOvertimeReportToOptions)("disabled", ctx_r1.newOvertime.emp == null)("isLoading", ctx_r1.isNewOvertimeReportToSelectLoading)("value", ctx_r1.newOvertime.request_emp);
} }
class NewOvertimeDialogComponent {
    constructor(message, _overtimeApiService, _supervisorApiService) {
        this.message = message;
        this._overtimeApiService = _overtimeApiService;
        this._supervisorApiService = _supervisorApiService;
        this._isNewOvertimeModalVisible = false;
        this.isNewOvertimeModalVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNewCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isNewOvertimeModalLoading = false;
        this.isNewOvertimeEmployeeSelectLoading = false;
        this.isNewOvertimeReportToSelectLoading = false;
        this.newOvertimeEmployeeOptions = [];
        this.newOvertimeStatusOptions = [
            { id: 0, text: 'Pending' },
            { id: 1, text: 'Approved' },
        ];
        this.newOvertimeReportToOptions = [];
    }
    set isNewOvertimeModalVisible(value) {
        this._isNewOvertimeModalVisible = value;
        this.newOvertime = new src_app_model_overtime_model__WEBPACK_IMPORTED_MODULE_1__["Overtime"]();
        this.initializeNewOvertimeModel();
    }
    get isNewOvertimeModalVisible() {
        return this._isNewOvertimeModalVisible;
    }
    ngOnInit() { }
    initializeNewOvertimeModel() {
        this.isNewOvertimeModalLoading = false;
        this.isNewOvertimeEmployeeSelectLoading = true;
        this.newOvertimeEmployeeOptions = [];
        this.newOvertimeReportToOptions = [];
        this.newOvertime.status = 0;
        this.newOvertime.emp = this.currentUserEmployee;
        this.onNewOvertimeEmployeeSelect(this.currentUserEmployee);
        this._supervisorApiService
            .getSupervisors(1, this.currentUserEmployee.id)
            .subscribe((response) => {
            if (response.success) {
                this.newOvertimeEmployeeOptions = [
                    this.currentUserEmployee,
                    ...src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_2__["CloneUtil"].clone(response.result),
                ];
                this.isNewOvertimeEmployeeSelectLoading = false;
            }
            else {
                this.message.create('error', response.message);
            }
        });
    }
    onNewOvertimeEmployeeSelect(value) {
        this.newOvertimeReportToOptions = [];
        this.newOvertime.request_emp = null;
        if (value.id == this.currentUserEmployee.id) {
            this.newOvertime.status = 0;
        }
        // Get report to
        this.isNewOvertimeReportToSelectLoading = true;
        this._supervisorApiService
            .getSupervisors(0, value.id)
            .subscribe((response) => {
            if (response.success) {
                this.newOvertimeReportToOptions = response.result;
                if (this.newOvertimeReportToOptions.length > 0)
                    this.newOvertime.request_emp = this.newOvertimeReportToOptions[0];
                this.isNewOvertimeReportToSelectLoading = false;
            }
            else {
                this.message.create('error', response.message);
            }
        });
    }
    get isNewOvertimeSubmitDisabled() {
        return (this.newOvertime.emp == null ||
            this.newOvertime.date == null ||
            this.newOvertime.request_start_datetime == null ||
            this.newOvertime.request_end_datetime == null ||
            this.newOvertime.status == null ||
            this.newOvertime.request_emp == null);
    }
    onDateChose(value) {
        this.newOvertime.request_start_datetime = value;
        this.newOvertime.request_end_datetime = value;
    }
    onNewOvertimeSubmit() {
        this.isNewOvertimeModalLoading = true;
        let subscription = this.currentUserEmployee.id == this.newOvertime.emp.id
            ? this._overtimeApiService.requestOvertime(this.newOvertime)
            : this._overtimeApiService.createOvertime(this.newOvertime);
        subscription.subscribe((response) => {
            if (response.success) {
                this.message.success(response.message);
                this.onNewCreated.emit(response.result);
                this.onNewOvertimeCancel();
            }
            else {
                this.message.error(response.message);
            }
            this.isNewOvertimeModalLoading = false;
        }, (err) => {
            console.log(err);
            this.message.error(err.error.message);
            this.isNewOvertimeModalLoading = false;
        });
    }
    onNewOvertimeCancel() {
        this.isNewOvertimeModalVisible = false;
        this.isNewOvertimeModalVisibleChange.emit(false);
    }
}
NewOvertimeDialogComponent.ɵfac = function NewOvertimeDialogComponent_Factory(t) { return new (t || NewOvertimeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_overtime_api_service__WEBPACK_IMPORTED_MODULE_4__["OvertimeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_supervisor_api_service__WEBPACK_IMPORTED_MODULE_5__["SupervisorApiService"])); };
NewOvertimeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewOvertimeDialogComponent, selectors: [["app-new-overtime-dialog"]], inputs: { isNewOvertimeModalVisible: "isNewOvertimeModalVisible", currentUserEmployee: "currentUserEmployee" }, outputs: { isNewOvertimeModalVisibleChange: "isNewOvertimeModalVisibleChange", onNewCreated: "onNewCreated" }, decls: 3, vars: 4, consts: [["nzTitle", "New Overtime", 3, "nzVisible", "nzOkLoading", "nzOkDisabled", "nzOkText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["newOvertimeModal", ""], [4, "nzModalContent"], ["label", "Employee", "displayProperty", "name", 3, "options", "value", "isLoading", "valueChange"], [1, "spacer"], ["label", "Date", 2, "flex", "1", 3, "value", "valueChange"], [1, "flex-row"], ["label", "Start Time", "type", "time", 2, "flex", "1", 3, "disabled", "value", "valueChange"], [2, "width", "8px"], ["label", "End Time", "type", "time", 2, "flex", "1", 3, "disabled", "value", "valueChange"], ["label", "Status", "displayProperty", "text", 3, "options", "value", "disabled", "valueChange"], ["label", "Report to", "displayProperty", "name", 3, "options", "disabled", "isLoading", "value", "valueChange"]], template: function NewOvertimeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NewOvertimeDialogComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isNewOvertimeModalVisible = $event; })("nzOnCancel", function NewOvertimeDialogComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.onNewOvertimeCancel(); })("nzOnOk", function NewOvertimeDialogComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.currentUserEmployee != null ? ctx.onNewOvertimeSubmit() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewOvertimeDialogComponent_ng_container_2_Template, 13, 15, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isNewOvertimeModalVisible)("nzOkLoading", ctx.isNewOvertimeModalLoading)("nzOkDisabled", ctx.isNewOvertimeSubmitDisabled)("nzOkText", ctx.newOvertime.emp == null || ctx.newOvertime.emp != null && ctx.currentUserEmployee != null && ctx.newOvertime.emp.id == ctx.currentUserEmployee.id ? "Request" : "Create");
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalContentDirective"], _custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_7__["CustomSelectComponentComponent"], _custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_8__["CustomDatePickerComponentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctb3ZlcnRpbWUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "fIz6":
/*!********************************************!*\
  !*** ./src/app/constants/api-constants.ts ***!
  \********************************************/
/*! exports provided: ApiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConstants", function() { return ApiConstants; });
class ApiConstants {
}
ApiConstants.HOST_URL = 'http://178.128.109.10';
ApiConstants.BASE_URL = ApiConstants.HOST_URL + '/api/';


/***/ }),

/***/ "gCE5":
/*!********************************************************!*\
  !*** ./src/app/service/leave-allowance-api.service.ts ***!
  \********************************************************/
/*! exports provided: LeaveAllowanceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveAllowanceApiService", function() { return LeaveAllowanceApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class LeaveAllowanceApiService {
    constructor(_baseApiService) {
        this._baseApiService = _baseApiService;
    }
    getAll(emp_id, year) {
        return this._baseApiService.get(`leave_allowance?emp_id=${emp_id}${year ? '&year=' + year : ''}`);
    }
    createLeaveAllowance(leaveAlowance) {
        return this._baseApiService.post(`leave_allowance`, leaveAlowance);
    }
    updateLeaveAllowance(leaveAllowance) {
        return this._baseApiService.put(`leave_allowance/${leaveAllowance.id}`, leaveAllowance);
    }
    deleteLeaveAllowance(id) {
        return this._baseApiService.post(`leave_allowance/${id}`, {});
    }
}
LeaveAllowanceApiService.ɵfac = function LeaveAllowanceApiService_Factory(t) { return new (t || LeaveAllowanceApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
LeaveAllowanceApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeaveAllowanceApiService, factory: LeaveAllowanceApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iUhQ":
/*!********************************************************************************************!*\
  !*** ./src/app/component/employee-search-component/employee-search-component.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmployeeSearchComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSearchComponentComponent", function() { return EmployeeSearchComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_employee_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/employee-api.service */ "HFTl");
/* harmony import */ var src_app_service_department_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/department-api.service */ "tRQI");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _employee_card_component_employee_card_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../employee-card-component/employee-card-component.component */ "Yro/");














function EmployeeSearchComponentComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const department_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", department_r2.id)("nzLabel", department_r2.name);
} }
function EmployeeSearchComponentComponent_app_employee_card_component_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-employee-card-component", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeSearchComponentComponent_app_employee_card_component_8_Template_app_employee_card_component_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const employee_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onEmployeeCardClicked(employee_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showDetails", ctx_r1.showEmployeeDetails)("employee", employee_r3)("isSelected", ctx_r1.selectedEmployee && ctx_r1.selectedEmployee.id == employee_r3.id);
} }
class EmployeeSearchComponentComponent {
    constructor(message, employeeApiService, departmentApiService) {
        this.message = message;
        this.employeeApiService = employeeApiService;
        this.departmentApiService = departmentApiService;
        this.onSelectEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showEmployeeDetails = false;
        this.keyword = '';
        this.isDepartmentsLoading = true;
        this.departments = [];
        this.employees = [];
        this.isLoading = false;
        this.selectedEmployee = null;
        this.selectedDepartmentId = -1;
        this.onEmployeeCardClicked = (employee) => {
            this.selectedEmployee = employee;
            this.onSelectEmployee.emit(employee);
        };
    }
    ngOnInit() {
        this.getDepartments();
    }
    search() {
        this.isLoading = true;
        this.employeeApiService
            .getEmployees(this.keyword, this.selectedDepartmentId)
            .subscribe((response) => {
            if (response.success) {
                this.employees = response.result;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isLoading = false;
        });
    }
    getDepartments() {
        this.departmentApiService
            .getDepartments()
            .subscribe((response) => {
            if (response.success) {
                this.departments = response.result;
            }
            this.isDepartmentsLoading = false;
        });
    }
    setEmployees(employees) {
        this.employees = employees;
    }
    reset() {
        this.getDepartments();
        this.employees = [];
        this.keyword = '';
        this.selectedDepartmentId = -1;
    }
}
EmployeeSearchComponentComponent.ɵfac = function EmployeeSearchComponentComponent_Factory(t) { return new (t || EmployeeSearchComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_employee_api_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_department_api_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentApiService"])); };
EmployeeSearchComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeSearchComponentComponent, selectors: [["app-employee-search-component"]], inputs: { showEmployeeDetails: "showEmployeeDetails" }, outputs: { onSelectEmployee: "onSelectEmployee" }, decls: 9, vars: 8, consts: [[1, "employee-search-container"], [1, "employee-filter-container"], ["nz-input", "", "placeholder", "Name or code", 3, "ngModel", "disabled", "ngModelChange"], ["nzAllowClear", "", "nzPlaceHolder", "Department", 3, "ngModel", "nzLoading", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzShape", "circle", 3, "disabled", "nzLoading", "click"], ["nz-icon", "", "nzType", "search"], [1, "employee-result-container"], [3, "showDetails", "employee", "isSelected", "click", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [3, "showDetails", "employee", "isSelected", "click"]], template: function EmployeeSearchComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeeSearchComponentComponent_Template_input_ngModelChange_2_listener($event) { return ctx.keyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeeSearchComponentComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.selectedDepartmentId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeSearchComponentComponent_nz_option_4_Template, 1, 2, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeSearchComponentComponent_Template_button_click_5_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmployeeSearchComponentComponent_app_employee_card_component_8_Template, 1, 3, "app-employee-card-component", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword)("disabled", ctx.isDepartmentsLoading || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDepartmentId)("nzLoading", ctx.isDepartmentsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.keyword.length == 0 && ctx.selectedDepartmentId == -1)("nzLoading", ctx.isDepartmentsLoading || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], _employee_card_component_employee_card_component_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeCardComponentComponent"]], styles: [".employee-search-container[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  border-right: solid 1px lightgray;\n  padding-right: 8px;\n}\n.employee-search-container[_ngcontent-%COMP%]   .employee-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n}\n.employee-search-container[_ngcontent-%COMP%]   .employee-filter-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 4px;\n}\n.employee-search-container[_ngcontent-%COMP%]   .employee-filter-container[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  flex: 0;\n  margin-right: 0;\n}\n.employee-search-container[_ngcontent-%COMP%]   .employee-result-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtcGxveWVlLXNlYXJjaC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtBQUNOO0FBRUk7RUFDRSxPQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR0U7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJlbXBsb3llZS1zZWFyY2gtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcGxveWVlLXNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuXG4gIC5lbXBsb3llZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICA+IDpsYXN0LWNoaWxkIHtcbiAgICAgIGZsZXg6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG4gIC5lbXBsb3llZS1yZXN1bHQtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "jjfJ":
/*!*****************************************!*\
  !*** ./src/app/util/common-api-util.ts ***!
  \*****************************************/
/*! exports provided: CommonApiUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonApiUtil", function() { return CommonApiUtil; });
class CommonApiUtil {
    static checkLeaveAllowanceUpdate(leaveAllowanceApiService, leaveTypeApiService, employee, message, leaveAllowanceList = null) {
        let tempLeaveAllowanceList = leaveAllowanceList;
        let leaveTypeList = [];
        let checkWithLeaveType = () => {
            leaveTypeApiService.getAll().subscribe((rsp) => {
                if (rsp.success) {
                    leaveTypeList = rsp.result;
                    let leaveTypeNameList = [];
                    for (let leaveType of leaveTypeList) {
                        if (leaveType.valid_at >=
                            new Date(new Date().getTime() -
                                new Date(employee.joined_date).getTime()).getMonth() &&
                            leaveAllowanceList.filter((la) => la.leave_type.id == leaveType.id).length == 0) {
                            leaveTypeNameList.push(leaveType.name);
                        }
                    }
                    if (leaveTypeNameList.length > 0) {
                        message.info(employee.name +
                            "'s leave allowance need update for " +
                            leaveTypeNameList.join(', ') +
                            '. Please inform admin or HR.', {
                            nzDuration: 5000,
                        });
                    }
                }
                else {
                    console.log(rsp);
                    message.error(rsp.message);
                }
            }, (err) => {
                console.log(err);
                message.error(err.error.message);
            });
        };
        if (tempLeaveAllowanceList != null) {
            checkWithLeaveType();
        }
        else {
            leaveAllowanceApiService.getAll(employee.id).subscribe((response) => {
                if (response.success) {
                    leaveAllowanceList = response.result;
                    checkWithLeaveType();
                }
                else {
                    console.log(response);
                    message.error(response.message);
                }
            }, (err) => {
                console.log(err);
                message.error(err.error.message);
            });
        }
    }
}


/***/ }),

/***/ "jvD1":
/*!************************************************************************************************!*\
  !*** ./src/app/component/month-year-select-component/month-year-select-component.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MonthYearSelectComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthYearSelectComponentComponent", function() { return MonthYearSelectComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






class MonthYearSelectComponentComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = 'month';
        this.allowFuture = false;
        this.monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        this.date = new Date(new Date().getFullYear(), new Date().getMonth());
    }
    get getMonth() {
        return this.monthNames[this.date.getMonth()];
    }
    get getYear() {
        return this.date.getFullYear();
    }
    ngOnInit() { }
    checkDisableNext() {
        if (this.allowFuture) {
            return false;
        }
        else {
            let today = new Date();
            return (this.date.getFullYear() == today.getFullYear() &&
                (this.type == 'year' || this.date.getMonth() == today.getMonth()));
        }
    }
    onArrowClicked(type, event) {
        if (this.type == 'year') {
            this.date = new Date(this.date.setFullYear(type == 'left'
                ? this.date.getFullYear() - 1
                : this.date.getFullYear() + 1));
        }
        else {
            this.date = new Date(this.date.setMonth(type == 'left' ? this.date.getMonth() - 1 : this.date.getMonth() + 1));
        }
        this.onChange.emit({
            month: this.type == 'year' ? null : this.date.getMonth(),
            year: this.getYear,
        });
    }
}
MonthYearSelectComponentComponent.ɵfac = function MonthYearSelectComponentComponent_Factory(t) { return new (t || MonthYearSelectComponentComponent)(); };
MonthYearSelectComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthYearSelectComponentComponent, selectors: [["app-month-year-select-component"]], inputs: { type: "type", allowFuture: "allowFuture" }, outputs: { onChange: "onChange" }, decls: 7, vars: 3, consts: [[1, "flex-row", 2, "width", "100%"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "arrow-left"], [2, "flex", "1", "text-align", "center"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], ["nz-icon", "", "nzType", "arrow-right"]], template: function MonthYearSelectComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthYearSelectComponentComponent_Template_button_click_1_listener($event) { return ctx.onArrowClicked("left", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthYearSelectComponentComponent_Template_button_click_5_listener($event) { return ctx.onArrowClicked("right", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.type == "year" ? null : ctx.getMonth, " ", ctx.getYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checkDisableNext());
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb250aC15ZWFyLXNlbGVjdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "k9zA":
/*!*****************************************!*\
  !*** ./src/app/model/overtime-model.ts ***!
  \*****************************************/
/*! exports provided: Overtime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overtime", function() { return Overtime; });
class Overtime {
}


/***/ }),

/***/ "kUND":
/*!***************************************************!*\
  !*** ./src/app/service/leave-type-api.service.ts ***!
  \***************************************************/
/*! exports provided: LeaveTypeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypeApiService", function() { return LeaveTypeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class LeaveTypeApiService {
    constructor(_baseApiService) {
        this._baseApiService = _baseApiService;
    }
    getAll(year) {
        return this._baseApiService.get(`leave_type${year ? '?year=' + year : ''}`);
    }
    createNew(leaveType) {
        return this._baseApiService.post(`leave_type`, leaveType);
    }
    update(leaveType) {
        return this._baseApiService.put(`leave_type/${leaveType.id}`, leaveType);
    }
    delete(id) {
        return this, this._baseApiService.post(`leave_type/${id}`, {});
    }
}
LeaveTypeApiService.ɵfac = function LeaveTypeApiService_Factory(t) { return new (t || LeaveTypeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
LeaveTypeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeaveTypeApiService, factory: LeaveTypeApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ntdR":
/*!*********************************************************!*\
  !*** ./src/app/page/login-page/login-page.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_auth_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth-api.service */ "U9D5");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");











function LoginPageComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.isPasswordVisible = !ctx_r2.isPasswordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r1.isPasswordVisible ? "eye" : "eye-invisible");
} }
class LoginPageComponent {
    constructor(router, message, authApiService) {
        this.router = router;
        this.message = message;
        this.authApiService = authApiService;
        this.username = '';
        this.password = '';
        this.isPasswordVisible = false;
        this.isLoading = false;
    }
    ngOnInit() { }
    login() {
        this.isLoading = true;
        // TODO: Implement login with real api
        this.authApiService.login(this.username, this.password).subscribe((response) => {
            if (response.success) {
                let encryptedUserDataJsonString = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_0__["EncryptionUtil"].encryptData(JSON.stringify(response.result.data));
                let encryptedToken = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_0__["EncryptionUtil"].encryptData(JSON.stringify(response.result.token));
                if (encryptedUserDataJsonString == null || encryptedToken == null) {
                    this.message.create('error', 'Something went wrong encrypting user session. Please contact the developer.');
                    return;
                }
                localStorage.setItem('current_employee', encryptedUserDataJsonString);
                localStorage.setItem('auth_token', encryptedToken);
                this.router.navigateByUrl('');
                this.message.create('success', response.message);
            }
            else {
                this.message.create('error', response.message);
            }
            this.isLoading = false;
        }, (err) => {
            this.message.create('error', err.error.message);
            this.isLoading = false;
        });
    }
    onPasswordKeydown(event) {
        if (event.key && event.key == 'Enter')
            this.login();
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 16, vars: 5, consts: [[1, "container"], [1, "card"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["nz-input", "", "placeholder", "Username", 3, "ngModel", "ngModelChange"], [3, "nzSuffix"], ["nz-input", "", "placeholder", "Password", 3, "type", "ngModel", "ngModelChange", "keydown"], ["suffixTemplate", ""], ["routerLink", "/login/forgot-password"], ["nz-button", "", "nzType", "primary", "nzBlock", "", 3, "nzLoading", "click"], ["nz-icon", "", 3, "nzType", "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "In-House");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.password = $event; })("keydown", function LoginPageComponent_Template_input_keydown_9_listener($event) { return ctx.onPasswordKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginPageComponent_ng_template_10_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_14_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.isPasswordVisible ? "text" : "password")("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.isLoading);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputGroupWhitSuffixOrPrefixDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: lightgray;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  padding: 8px 12px 16px 12px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7QUFDTiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG5cbiAgLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDE2cHggMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgICA+ICoge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "pCso":
/*!*************************************************!*\
  !*** ./src/app/service/overtime-api.service.ts ***!
  \*************************************************/
/*! exports provided: OvertimeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeApiService", function() { return OvertimeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class OvertimeApiService {
    constructor(_baseApiService) {
        this._baseApiService = _baseApiService;
    }
    getOvertime(emp_id, year, isRequested = false) {
        return this._baseApiService.get(`overtime?${(isRequested ? 'request_emp_id=' : 'emp_id=') + emp_id}&year=${year}`);
    }
    checkIn() {
        return this._baseApiService.put(`overtime/check-in`, {});
    }
    checkOut() {
        return this._baseApiService.put(`overtime/check-out`, {});
    }
    createOvertime(overtime) {
        return this._baseApiService.post(`overtime`, overtime);
    }
    requestOvertime(overtime) {
        return this._baseApiService.post(`overtime/request`, overtime);
    }
    updateOvertime(overtime) {
        return this._baseApiService.put(`overtime/${overtime.id}`, overtime);
    }
    deleteOvertime(id) {
        return this._baseApiService.delete(`overtime/${id}`);
    }
}
OvertimeApiService.ɵfac = function OvertimeApiService_Factory(t) { return new (t || OvertimeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
OvertimeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OvertimeApiService, factory: OvertimeApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qqXn":
/*!*******************************************************!*\
  !*** ./src/app/page/main-page/main-page.component.ts ***!
  \*******************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");







class MainPageComponent {
    constructor(router) {
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() { }
    logout() {
        this.isLoading = true;
        localStorage.removeItem('auth_token');
        localStorage.removeItem('current_employee');
        this.router.navigateByUrl('/login');
        this.isLoading = false;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 23, vars: 6, consts: [[1, "container"], [1, "nav-wrapper"], ["nz-menu", "", "nzMode", "inline", "nzTheme", "dark", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Dashboard", "nzSelected", "", "routerLink", "/dashboard", 3, "nzMatchRouter"], ["nz-icon", "", "nzType", "home"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Attendance", "routerLink", "/attendance", 3, "nzMatchRouter"], ["nz-icon", "", "nzType", "check"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Leave", "routerLink", "/leave", 3, "nzMatchRouter"], ["nz-icon", "", "nzType", "calendar"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Overtime", "routerLink", "/overtime", 3, "nzMatchRouter"], ["nz-icon", "", "nzType", "clock-circle"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Employees", "routerLink", "/employee", 3, "nzMatchRouter"], ["nz-icon", "", "nzType", "team"], ["nzSelected", "false", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Logout", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to log out?", "nzPopconfirmPlacement", "right", 2, "width", "100%", "margin-bottom", "24px", "text-align", "center", "cursor", "pointer", 3, "nzOnConfirm"], ["nz-icon", "", "nzType", "logout"], [1, "body-wrapper"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function MainPageComponent_Template_li_nzOnConfirm_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMatchRouter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMatchRouter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMatchRouter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMatchRouter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMatchRouter", true);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuItemDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__["NzTooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_6__["NzPopconfirmDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  margin-top: auto;\n}\n.container[_ngcontent-%COMP%]   .body-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  max-width: calc(100vw - 80px);\n  overflow: auto;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ047QUFDTTtFQUNFLGdCQUFBO0FBQ1I7QUFJRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0FBSEoiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIC5uYXYtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgPiB1bCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgPiA6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvZHktd3JhcHBlciB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "qqfZ":
/*!***********************************!*\
  !*** ./src/app/util/date-util.ts ***!
  \***********************************/
/*! exports provided: DateUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtil", function() { return DateUtil; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class DateUtil {
    static showDayOnly(date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(DateUtil.convertAnythingIntoDate(date), 'dd (E)', 'en-US');
    }
    static showDateAndMonth(date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(DateUtil.convertAnythingIntoDate(date), 'dd MMM (E)', 'en-US');
    }
    static showFullDate(date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(DateUtil.convertAnythingIntoDate(date), 'dd MMM yyyy (E)', 'en-US');
    }
    static showTimeIn24(date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(DateUtil.convertAnythingIntoDate(date), 'hh:mm', 'en-US');
    }
    static showTimeIn12(date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(DateUtil.convertAnythingIntoDate(date), 'hh:mm a', 'en-US');
    }
    static checkWeekend(date) {
        let convertedDate = DateUtil.convertAnythingIntoDate(date);
        return convertedDate.getDay() == 0 || convertedDate.getDay() == 6;
    }
    static checkToday(date) {
        let todayDate = new Date();
        let incomingDate = DateUtil.convertAnythingIntoDate(date);
        return (todayDate.getDate() == incomingDate.getDate() &&
            todayDate.getMonth() == incomingDate.getMonth() &&
            todayDate.getFullYear() == incomingDate.getFullYear());
    }
    // return zero      =>  if dates are same date regardless of time
    // return negative  =>  if date1 comes after date2
    // return positive  =>  if date2 comes after date1
    static compareDates(date1, date2) {
        let convertedDate1 = DateUtil.convertAnythingIntoDate(date1);
        let convertedDate2 = DateUtil.convertAnythingIntoDate(date2);
        if (convertedDate1.getDate() == convertedDate2.getDate() &&
            convertedDate1.getMonth() == convertedDate2.getMonth() &&
            convertedDate1.getFullYear() == convertedDate2.getFullYear()) {
            return 0;
        }
        return convertedDate2.getTime() - convertedDate1.getTime();
    }
    // return zero      =>  if dates are same date and time (seconds neglected)
    // return negative  =>  if date1 comes after date2
    // return positive  =>  if date2 comes after date1
    static compareDateTimes(date1, date2) {
        let convertedDate1 = DateUtil.convertAnythingIntoDate(date1);
        let convertedDate2 = DateUtil.convertAnythingIntoDate(date2);
        if (convertedDate1.getDate() == convertedDate2.getDate() &&
            convertedDate1.getMonth() == convertedDate2.getMonth() &&
            convertedDate1.getFullYear() == convertedDate2.getFullYear() &&
            convertedDate1.getHours() == convertedDate2.getHours() &&
            convertedDate1.getMinutes() == convertedDate2.getMinutes()) {
            return 0;
        }
        return convertedDate2.getTime() - convertedDate1.getTime();
    }
}
DateUtil.convertAnythingIntoDate = (date) => {
    return typeof date == 'number'
        ? new Date(date)
        : typeof date == 'string'
            ? new Date(Date.parse(date))
            : date;
};


/***/ }),

/***/ "tRQI":
/*!***************************************************!*\
  !*** ./src/app/service/department-api.service.ts ***!
  \***************************************************/
/*! exports provided: DepartmentApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentApiService", function() { return DepartmentApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Thbc");


class DepartmentApiService {
    constructor(baseApiService) {
        this.baseApiService = baseApiService;
    }
    getDepartments() {
        return this.baseApiService.get('department');
    }
    deleteDepartment(id, replaceDepartmentId) {
        return this.baseApiService.post(`department/${id}`, {
            replace_department_id: replaceDepartmentId,
        });
    }
    createDepartment(name) {
        return this.baseApiService.post('department', { name });
    }
}
DepartmentApiService.ɵfac = function DepartmentApiService_Factory(t) { return new (t || DepartmentApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"])); };
DepartmentApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentApiService, factory: DepartmentApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_attendance_page_attendance_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/attendance-page/attendance-page.component */ "DmG7");
/* harmony import */ var _page_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/dashboard-page/dashboard-page.component */ "1yoe");
/* harmony import */ var _page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/employee-page/employee-page.component */ "w+FS");
/* harmony import */ var _page_forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/forgot-password-page/forgot-password-page.component */ "Cl9/");
/* harmony import */ var _page_leave_page_leave_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/leave-page/leave-page.component */ "2JEh");
/* harmony import */ var _page_leave_type_page_leave_type_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/leave-type-page/leave-type-page.component */ "JJIN");
/* harmony import */ var _page_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/login-page/login-page.component */ "ntdR");
/* harmony import */ var _page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/main-page/main-page.component */ "qqXn");
/* harmony import */ var _page_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/not-found-page/not-found-page.component */ "WsIo");
/* harmony import */ var _page_overtime_page_overtime_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/overtime-page/overtime-page.component */ "Ctdw");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth-guard.service */ "UeAQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    {
        path: '',
        component: _page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard',
            },
            {
                path: 'dashboard',
                component: _page_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__["DashboardPageComponent"],
                data: { customBreadcrumb: 'Dashboard' },
            },
            { path: 'employee', component: _page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_3__["EmployeePageComponent"] },
            {
                path: 'attendance',
                component: _page_attendance_page_attendance_page_component__WEBPACK_IMPORTED_MODULE_1__["AttendancePageComponent"],
            },
            { path: 'overtime', component: _page_overtime_page_overtime_page_component__WEBPACK_IMPORTED_MODULE_10__["OvertimePageComponent"] },
            {
                path: 'leave',
                children: [
                    { path: '', component: _page_leave_page_leave_page_component__WEBPACK_IMPORTED_MODULE_5__["LeavePageComponent"] },
                    { path: 'leave-type', component: _page_leave_type_page_leave_type_page_component__WEBPACK_IMPORTED_MODULE_6__["LeaveTypePageComponent"] },
                ],
            },
        ],
    },
    {
        path: 'login',
        children: [
            { path: '', component: _page_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"] },
            { path: 'forgot-password', component: _page_forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageComponent"] },
        ],
    },
    { path: '404', component: _page_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundPageComponent"] },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w+FS":
/*!***************************************************************!*\
  !*** ./src/app/page/employee-page/employee-page.component.ts ***!
  \***************************************************************/
/*! exports provided: EmployeePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageComponent", function() { return EmployeePageComponent; });
/* harmony import */ var src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/util/clone-util */ "bsAs");
/* harmony import */ var src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/encryption-util */ "O0qO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/api-constants */ "fIz6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_department_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/department-api.service */ "tRQI");
/* harmony import */ var src_app_service_supervisor_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/supervisor-api.service */ "KgNH");
/* harmony import */ var src_app_service_employee_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/employee-api.service */ "HFTl");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/employee-search-component/employee-search-component.component */ "iUhQ");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../component/custom-input-component/custom-input-component.component */ "AGcp");
/* harmony import */ var _component_custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../component/custom-select-component/custom-select-component.component */ "0U9+");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _component_custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../component/custom-date-picker-component/custom-date-picker-component.component */ "SwAD");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _component_employee_card_component_employee_card_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../component/employee-card-component/employee-card-component.component */ "Yro/");


























const _c0 = ["employeeSearchComponent1"];
const _c1 = ["employeeSearchComponent2"];
const _c2 = ["txtDepartmentName"];
function EmployeePageComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onAddNewEmployeeClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Create New Employee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-upload", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Click to Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.selectedEmployee.image_url ? ctx_r2.getImageUrl(ctx_r2.selectedEmployee.image_url) : "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?b=1&k=6&m=1016744034&s=612x612&w=0&h=dbicqM9p31ex5Lm-FpsdOjHkPZM_6Lmkb02qJO9SY5E=", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzShowUploadList", false)("nzBeforeUpload", ctx_r2.beforeUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r2.isImageUploadLoading)("disabled", !(ctx_r2.selectedEmployee.id != null && (1 > ctx_r2.currentUserEmployee.role || ctx_r2.currentUserEmployee.role > 1 && ctx_r2.currentUserEmployee.id == ctx_r2.selectedEmployee.id)));
} }
function EmployeePageComponent_div_12_app_custom_input_component_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-custom-input-component", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_app_custom_input_component_8_Template_app_custom_input_component_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r19.selectedEmployee.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r6.currentUserEmployee.role == 2 && ctx_r6.selectedEmployee.id != ctx_r6.currentUserEmployee.id)("value", ctx_r6.selectedEmployee.address);
} }
function EmployeePageComponent_div_12_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function EmployeePageComponent_div_12_button_13_Template_button_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r21.isDeleteDepartmentModalVisible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "Are you sure you want to delete ", ctx_r7.selectedEmployee.department ? ctx_r7.selectedEmployee.department.name : "a", " department?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r7.selectedEmployee.department == null);
} }
function EmployeePageComponent_div_12_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-custom-select-component", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_ng_container_15_Template_app_custom_select_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r23.replaceDepartment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r8.replaceDepartment)("options", ctx_r8.replaceableDepartments);
} }
function EmployeePageComponent_div_12_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r25.isCreateDepartmentModalVisible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_div_12_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-custom-input-component", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_ng_container_18_Template_app_custom_input_component_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.newDepartmentName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r10.newDepartmentName);
} }
function EmployeePageComponent_div_12_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r30.onSaveEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r11.isCreateEmployeeLoading);
} }
function EmployeePageComponent_div_12_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function EmployeePageComponent_div_12_button_25_Template_button_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r32.onDeleteEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "Are you sure you want to delete ", ctx_r12.selectedEmployee.name, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r12.isDeleteEmployeeLoading)("nzType", "primary");
} }
function EmployeePageComponent_div_12_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r34.isChangePasswordModalVisible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", "default");
} }
function EmployeePageComponent_div_12_ng_container_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_ng_container_28_ng_template_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r42.isOldPasswordVisible = !ctx_r42.isOldPasswordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r37.isOldPasswordVisible ? "eye-invisible" : "eye");
} }
function EmployeePageComponent_div_12_ng_container_28_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_ng_container_28_ng_template_7_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r44.isNewPasswordVisible = !ctx_r44.isNewPasswordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r39.isNewPasswordVisible ? "eye-invisible" : "eye");
} }
function EmployeePageComponent_div_12_ng_container_28_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_ng_container_28_ng_template_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r46.isConfirmPasswordVisible = !ctx_r46.isConfirmPasswordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r41.isConfirmPasswordVisible ? "eye-invisible" : "eye");
} }
function EmployeePageComponent_div_12_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-input-group", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_div_12_ng_container_28_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r48.oldPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EmployeePageComponent_div_12_ng_container_28_ng_template_3_Template, 1, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-input-group", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_div_12_ng_container_28_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r50.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EmployeePageComponent_div_12_ng_container_28_ng_template_7_Template, 1, 1, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-input-group", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_div_12_ng_container_28_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r51.confirmPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EmployeePageComponent_div_12_ng_container_28_ng_template_11_Template, 1, 1, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r14.isOldPasswordVisible ? "text" : "password")("ngModel", ctx_r14.oldPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r14.isNewPasswordVisible ? "text" : "password")("ngModel", ctx_r14.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r14.isConfirmPasswordVisible ? "text" : "password")("ngModel", ctx_r14.confirmPassword);
} }
function EmployeePageComponent_div_12_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_div_12_app_employee_card_component_36_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-employee-card-component", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_app_employee_card_component_36_Template_app_employee_card_component_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54); const supervisor_r52 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r53.onSelectExistingSupervisor(supervisor_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supervisor_r52 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("employee", supervisor_r52)("showDetails", true)("isSelected", ctx_r16.selectedExistingSupervisor && ctx_r16.selectedExistingSupervisor.id == supervisor_r52.id);
} }
function EmployeePageComponent_div_12_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_div_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r55.onRemoveSupervisor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeePageComponent_div_12_div_37_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r57.onAddSupervisor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r17.selectedExistingSupervisor == null || ctx_r17.selectedEmployee.id == null)("nzLoading", ctx_r17.isSupervisorRemoveLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r17.selectedSupervisor == null || ctx_r17.selectedEmployee.id == null)("nzLoading", ctx_r17.isSupervisorAddLoading);
} }
function EmployeePageComponent_div_12_app_employee_search_component_38_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-employee-search-component", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectEmployee", function EmployeePageComponent_div_12_app_employee_search_component_38_Template_app_employee_search_component_onSelectEmployee_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r59.onSelectSupervisor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showEmployeeDetails", true);
} }
function EmployeePageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-custom-input-component", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_input_component_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r61.selectedEmployee.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-custom-input-component", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_input_component_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r63.selectedEmployee.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-custom-input-component", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_input_component_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r64.selectedEmployee.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-custom-input-component", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_input_component_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r65.selectedEmployee.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-custom-input-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_input_component_valueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r66.selectedEmployee.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EmployeePageComponent_div_12_app_custom_input_component_8_Template, 1, 2, "app-custom-input-component", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-custom-input-component", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_input_component_valueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r67.selectedEmployee.position = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-custom-select-component", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_select_component_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r68.selectedEmployee.department = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, EmployeePageComponent_div_12_button_13_Template, 2, 2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-modal", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function EmployeePageComponent_div_12_Template_nz_modal_nzVisibleChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r69.isDeleteDepartmentModalVisible = $event; })("nzOnCancel", function EmployeePageComponent_div_12_Template_nz_modal_nzOnCancel_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r70.isDeleteDepartmentModalVisible = false; })("nzOnOk", function EmployeePageComponent_div_12_Template_nz_modal_nzOnOk_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r71.onDeleteDepartment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, EmployeePageComponent_div_12_ng_container_15_Template, 2, 2, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, EmployeePageComponent_div_12_button_16_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-modal", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function EmployeePageComponent_div_12_Template_nz_modal_nzVisibleChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r72.isCreateDepartmentModalVisible = $event; })("nzOnCancel", function EmployeePageComponent_div_12_Template_nz_modal_nzOnCancel_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r73.isCreateDepartmentModalVisible = false; })("nzOnOk", function EmployeePageComponent_div_12_Template_nz_modal_nzOnOk_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r74.onCreateDepartment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, EmployeePageComponent_div_12_ng_container_18_Template, 3, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "app-custom-select-component", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_select_component_valueChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r75.selectedEmployee.role = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "app-custom-date-picker-component", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmployeePageComponent_div_12_Template_app_custom_date_picker_component_valueChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r76.selectedEmployee.joined_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, EmployeePageComponent_div_12_button_24_Template, 3, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, EmployeePageComponent_div_12_button_25_Template, 2, 3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, EmployeePageComponent_div_12_button_26_Template, 3, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "nz-modal", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function EmployeePageComponent_div_12_Template_nz_modal_nzVisibleChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r77.isChangePasswordModalVisible = $event; })("nzOnCancel", function EmployeePageComponent_div_12_Template_nz_modal_nzOnCancel_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r78.isChangePasswordModalVisible = false; })("nzOnOk", function EmployeePageComponent_div_12_Template_nz_modal_nzOnOk_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r79.onChangePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, EmployeePageComponent_div_12_ng_container_28_Template, 13, 9, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Report to");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, EmployeePageComponent_div_12_div_35_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, EmployeePageComponent_div_12_app_employee_card_component_36_Template, 1, 3, "app-employee-card-component", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, EmployeePageComponent_div_12_div_37_Template, 5, 4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, EmployeePageComponent_div_12_app_employee_search_component_38_Template, 2, 1, "app-employee-search-component", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2)("value", ctx_r3.selectedEmployee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2)("value", ctx_r3.selectedEmployee.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2 && ctx_r3.selectedEmployee.id != ctx_r3.currentUserEmployee.id)("value", ctx_r3.selectedEmployee.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2)("value", ctx_r3.selectedEmployee.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2 && ctx_r3.selectedEmployee.id != ctx_r3.currentUserEmployee.id)("value", ctx_r3.selectedEmployee.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee.role != 2 || ctx_r3.selectedEmployee.id == ctx_r3.currentUserEmployee.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2)("value", ctx_r3.selectedEmployee.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2)("isLoading", ctx_r3.isDepartmentLoading)("value", ctx_r3.selectedEmployee.department)("options", ctx_r3.departments);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee.role == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx_r3.isDeleteDepartmentModalVisible)("nzOkLoading", ctx_r3.isDeleteDepartmentLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee.role == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx_r3.isCreateDepartmentModalVisible)("nzOkLoading", ctx_r3.isCreateDepartmentLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role != 0)("value", ctx_r3.selectedEmployee.role)("options", ctx_r3.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentUserEmployee.role == 2)("value", ctx_r3.selectedEmployee.joined_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r3.currentUserEmployee.role == 2 && ctx_r3.selectedEmployee.id != ctx_r3.currentUserEmployee.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee.role != 2 && ctx_r3.currentUserEmployee.id != ctx_r3.selectedEmployee.id && ctx_r3.selectedEmployee.id != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee.id == ctx_r3.selectedEmployee.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx_r3.isChangePasswordModalVisible)("nzOkLoading", ctx_r3.isChangePasswordLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isSupervisorsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.supervisors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee && ctx_r3.currentUserEmployee.role != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentUserEmployee && ctx_r3.currentUserEmployee.role != 2);
} }
class EmployeePageComponent {
    constructor(route, message, departmentApiService, supervisorApiService, employeeApiService) {
        this.route = route;
        this.message = message;
        this.departmentApiService = departmentApiService;
        this.supervisorApiService = supervisorApiService;
        this.employeeApiService = employeeApiService;
        this.ApiConstants = src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["ApiConstants"];
        this.roles = [
            { id: 0, name: 'Admin' },
            { id: 1, name: 'HR' },
            { id: 2, name: 'Employee' },
        ];
        this.departments = [];
        this.isImageUploadLoading = false;
        this.isLoading = false;
        this.currentUserEmployee = null;
        this.selectedEmployee = null;
        this.supervisors = [];
        this.selectedExistingSupervisor = null;
        this.selectedSupervisor = null;
        this.isDepartmentLoading = false;
        this.isCreateEmployeeLoading = false;
        this.isSupervisorsLoading = false;
        this.isSupervisorAddLoading = false;
        this.isSupervisorRemoveLoading = false;
        this.isDeleteEmployeeLoading = false;
        // variables for create department dialog
        this.isCreateDepartmentModalVisible = false;
        this.newDepartmentName = '';
        this.isCreateDepartmentLoading = false;
        // variables for delete department dialog
        this.isDeleteDepartmentModalVisible = false;
        this.replaceDepartment = null;
        this.isDeleteDepartmentLoading = false;
        // variables for change password dialog
        this.isChangePasswordModalVisible = false;
        this.isOldPasswordVisible = false;
        this.oldPassword = '';
        this.isNewPasswordVisible = false;
        this.newPassword = '';
        this.isConfirmPasswordVisible = false;
        this.confirmPassword = '';
        this.isChangePasswordLoading = false;
        this.beforeUpload = (file) => {
            this.handleUpload(file);
            return false;
        };
        // check if this is navigated with employee id
        let strParam = this.route.snapshot.paramMap.get('employee_id');
        this.navigatedEmployeeId = strParam == null ? null : Number(strParam);
    }
    ngOnInit() {
        this.initializeCurrentUser();
        this.getDepartments();
        if (this.navigatedEmployeeId != null) {
            this.getEmployeeById(this.navigatedEmployeeId);
        }
        else {
            let waitComponentToLoadInterval = setInterval(() => {
                if (this.employeeSearchComponent1 != null) {
                    // set current employee in employeeSearch component on left panel
                    this.employeeSearchComponent1.employees = [this.currentUserEmployee];
                    this.employeeSearchComponent1.selectedEmployee =
                        this.currentUserEmployee;
                    this.onSelectEmployee(this.currentUserEmployee);
                    clearInterval(waitComponentToLoadInterval);
                }
            }, 500);
        }
    }
    // get current user data from localStorage
    initializeCurrentUser() {
        let currentUserDataJsonString = localStorage.getItem('current_employee');
        let decryptedUserData = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_1__["EncryptionUtil"].decryptData(currentUserDataJsonString);
        this.currentUserEmployee = decryptedUserData;
        let currentAuthTokenJsonString = localStorage.getItem('auth_token');
        let decryptedAuthToken = src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_1__["EncryptionUtil"].decryptData(currentAuthTokenJsonString);
        this.authToken = decryptedAuthToken;
    }
    getDepartments() {
        this.isDepartmentLoading = true;
        this.departmentApiService
            .getDepartments()
            .subscribe((response) => {
            if (response.success) {
                this.departments = response.result;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isDepartmentLoading = false;
        });
    }
    getEmployeeById(employee_id) {
        this.isLoading = true;
        this.employeeApiService
            .getEmployeeById(employee_id)
            .subscribe((response) => {
            if (response.success) {
                this.employeeSearchComponent1.employees = [
                    response.result,
                ];
                this.employeeSearchComponent1.selectedEmployee = response.result;
                this.onSelectEmployee(response.result);
            }
            else {
                this.message.create('error', response.message);
            }
            this.isLoading = false;
        });
    }
    onSelectEmployee(employee) {
        this.selectedEmployee = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_0__["CloneUtil"].clone(employee);
        this.supervisors = []; //set empty before fetching another supervisors list
        this.selectedExistingSupervisor = null;
        this.isSupervisorsLoading = true;
        for (let department of this.departments) {
            if (department.id == this.selectedEmployee.department.id) {
                this.selectedEmployee.department = department;
                break;
            }
        }
        // TODO: get supervisors API
        this.supervisorApiService
            .getSupervisors(0, this.selectedEmployee.id)
            .subscribe((response) => {
            if (response.success) {
                this.supervisors = response.result;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isSupervisorsLoading = false;
        });
    }
    onCreateDepartment() {
        if (this.newDepartmentName.length == 0) {
            this.message.create('error', 'Please enter department name!');
            return;
        }
        this.isCreateDepartmentLoading = true;
        this.departmentApiService
            .createDepartment(this.newDepartmentName)
            .subscribe((response) => {
            var _a, _b;
            if (response.success) {
                this.departments.push(response.result);
                (_a = this.employeeSearchComponent1) === null || _a === void 0 ? void 0 : _a.departments.push(response.result);
                (_b = this.employeeSearchComponent2) === null || _b === void 0 ? void 0 : _b.departments.push(response.result);
                this.message.create('success', response.message);
                this.newDepartmentName = '';
                this.isCreateDepartmentModalVisible = false;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isCreateDepartmentLoading = false;
        });
    }
    onDeleteDepartment() {
        if (this.replaceDepartment == null) {
            this.message.create('error', 'Please choose a department to replace with!');
            return;
        }
        this.isDeleteDepartmentLoading = true;
        //TODO: create department API
        this.departmentApiService
            .deleteDepartment(this.selectedEmployee.department.id, this.replaceDepartment.id)
            .subscribe((response) => {
            if (response.success) {
                this.departments = this.departments.filter((dep) => dep.id != this.selectedEmployee.department.id);
                // update employee search components
                if (this.employeeSearchComponent1.selectedDepartmentId ==
                    this.selectedEmployee.department.id) {
                    this.employeeSearchComponent1.selectedDepartmentId =
                        this.replaceDepartment.id;
                }
                this.employeeSearchComponent1.departments =
                    this.employeeSearchComponent1.departments.filter((dep) => dep.id != this.selectedEmployee.department.id);
                this.employeeSearchComponent1.employees
                    .filter((emp) => emp.department.id == this.selectedEmployee.department.id)
                    .forEach((emp) => (emp.department = this.replaceDepartment));
                if (this.employeeSearchComponent2.selectedDepartmentId ==
                    this.selectedEmployee.department.id) {
                    this.employeeSearchComponent2.selectedDepartmentId =
                        this.replaceDepartment.id;
                }
                this.employeeSearchComponent2.departments =
                    this.employeeSearchComponent2.departments.filter((dep) => dep.id != this.selectedEmployee.department.id);
                this.employeeSearchComponent2.employees
                    .filter((emp) => emp.department.id == this.selectedEmployee.department.id)
                    .forEach((emp) => (emp.department = this.replaceDepartment));
                if (this.currentUserEmployee.id == this.selectedEmployee.id) {
                    this.currentUserEmployee = this.selectedEmployee;
                    localStorage.setItem('current_employee', JSON.stringify(this.selectedEmployee));
                }
                this.selectedEmployee.department = this.replaceDepartment;
                //show message
                this.message.create('success', response.message);
            }
            else {
                this.message.create('error', response.message);
            }
            this.isDeleteDepartmentModalVisible = false;
            this.isDeleteDepartmentLoading = false;
        });
    }
    onChangePassword() {
        if (this.newPassword != this.confirmPassword) {
            this.message.create('error', "New passwords don't match!");
            return;
        }
        this.isChangePasswordLoading = true;
        this.employeeApiService
            .changePassword(this.oldPassword, this.newPassword)
            .subscribe((response) => {
            if (response.success) {
                this.message.create('success', response.message);
                this.oldPassword = '';
                this.newPassword = '';
                this.confirmPassword = '';
                this.isChangePasswordModalVisible = false;
            }
            else {
                this.message.create('error', response.message);
            }
            this.isChangePasswordLoading = false;
        });
    }
    onDeleteEmployee() {
        this.isDeleteEmployeeLoading = true;
        //TODO: Delete employee API
        this.employeeApiService
            .deleteEmployee(this.selectedEmployee.id)
            .subscribe((response) => {
            if (response.success) {
                this.employeeSearchComponent1.employees =
                    this.employeeSearchComponent1.employees.filter((emp) => emp.id != this.selectedEmployee.id);
                this.employeeSearchComponent2.employees =
                    this.employeeSearchComponent2.employees.filter((emp) => emp.id != this.selectedEmployee.id);
                this.message.create('success', response.message);
            }
            else {
                this.message.create('error', response.message);
            }
            this.isDeleteEmployeeLoading = false;
            this.selectedEmployee = null;
        });
    }
    onAddNewEmployeeClicked() {
        this.selectedEmployee = {
            id: null,
            username: '',
            image_url: null,
            name: '',
            code: '',
            role: 2,
            position: '',
            email: '',
            phone: '',
            address: '',
            joined_date: null,
            department: null,
        };
        this.supervisors = [];
    }
    get replaceableDepartments() {
        return this.departments.filter((dev) => dev.id != this.selectedEmployee.department.id);
    }
    onSelectExistingSupervisor(employee) {
        this.selectedExistingSupervisor = employee;
    }
    onSelectSupervisor(employee) {
        this.selectedSupervisor = employee;
    }
    onAddSupervisor() {
        if (this.selectedEmployee.id == this.selectedSupervisor.id) {
            this.message.create('error', 'You cannot be your own supervisor!');
            return;
        }
        if (this.supervisors.filter((sup) => sup.id == this.selectedSupervisor.id)
            .length > 0) {
            this.message.create('error', 'Selected supervisor already added!');
            return;
        }
        this.isSupervisorAddLoading = true;
        //TODO: add supervisor API
        this.supervisorApiService
            .addSupervisor(this.selectedEmployee.id, this.selectedSupervisor.id)
            .subscribe((response) => {
            if (response.success) {
                this.message.create('success', response.message);
                this.supervisors.push(response.result.supervisor);
            }
            else {
                this.message.create('error', response.message);
            }
            this.selectedSupervisor = null;
            this.isSupervisorAddLoading = false;
        });
    }
    onRemoveSupervisor() {
        this.isSupervisorRemoveLoading = true;
        //TODO: remove supervisor API
        this.supervisorApiService
            .removeSupervisor(this.selectedEmployee.id, this.selectedExistingSupervisor.id)
            .subscribe((response) => {
            if (response.success) {
                this.message.create('success', response.message);
                this.supervisors = this.supervisors.filter((sup) => sup.id != this.selectedExistingSupervisor.id);
            }
            else {
                this.message.create('error', response.message);
            }
            this.selectedExistingSupervisor = null;
            this.isSupervisorRemoveLoading = false;
        });
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    handleChange(info) {
        if (info.type == 'start')
            this.handleUpload(info.file);
    }
    handleUpload(image) {
        const formData = new FormData();
        formData.append('image', image);
        this.isImageUploadLoading = true;
        this.employeeApiService
            .uploadImage(this.selectedEmployee.id, formData)
            .subscribe((response) => {
            if (response.success) {
                this.selectedEmployee = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_0__["CloneUtil"].clone(response.result);
                if (this.currentUserEmployee.id == this.selectedEmployee.id) {
                    this.currentUserEmployee = response.result;
                    localStorage.setItem('current_employee', src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_1__["EncryptionUtil"].encryptData(JSON.stringify(this.currentUserEmployee)));
                }
                this.message.create('success', response.message);
            }
            else {
                this.message.create('error', response.message);
            }
            this.isImageUploadLoading = false;
        });
    }
    onSaveEmployee() {
        let invalidField = null;
        let invalidType = null;
        let emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let phoneRegExp = new RegExp(/^[0-9+-]+$/g);
        let selectedRole = this.selectedEmployee.role.id != null
            ? this.selectedEmployee.role.id
            : this.selectedEmployee.role;
        if (this.selectedEmployee.username == '') {
            invalidField = 'Username';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.name == '') {
            invalidField = 'Name';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.code == '') {
            invalidField = 'Employee Code';
            invalidType = 'empty';
        }
        else if (!(selectedRole == 0 || selectedRole == 1 || selectedRole == 2)) {
            invalidField = 'Role';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.position == '') {
            invalidField = 'Position';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.email == '') {
            invalidField = 'Email';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.phone == '') {
            invalidField = 'Phone';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.address == '') {
            invalidField = 'Address';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.joined_date == null) {
            invalidField = 'Joined Date';
            invalidType = 'empty';
        }
        else if (this.selectedEmployee.department == null) {
            invalidField = 'Department';
            invalidType = 'empty';
        }
        else if (!emailRegExp.test(this.selectedEmployee.email)) {
            invalidField = 'Email';
            invalidType = 'invalid';
        }
        else if (!phoneRegExp.test(this.selectedEmployee.phone)) {
            invalidField = 'Phone';
            invalidType = 'invalid';
        }
        if (invalidField != null) {
            this.message.create('error', `Field '${invalidField}' is ${invalidType}!`);
            return;
        }
        this.isCreateEmployeeLoading = true;
        //temp
        this.selectedEmployee.joined_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.selectedEmployee.joined_date, 'yyyy-MM-dd', 'en-US');
        if (this.selectedEmployee.id == null) {
            this.employeeApiService
                .createEmployee(this.selectedEmployee)
                .subscribe((response) => {
                if (response.success) {
                    this.employeeCreateUpdateOnSuccess(response);
                }
                else {
                    this.message.create('error', response.message);
                }
                this.isCreateEmployeeLoading = false;
            });
        }
        else {
            let copyEmployee = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_0__["CloneUtil"].clone(this.selectedEmployee);
            delete copyEmployee.image_url;
            this.employeeApiService
                .updateEmployee(copyEmployee)
                .subscribe((response) => {
                if (response.success) {
                    this.employeeCreateUpdateOnSuccess(response);
                }
                else {
                    this.message.create('error', response.message);
                }
                this.isCreateEmployeeLoading = false;
            });
        }
    }
    employeeCreateUpdateOnSuccess(response) {
        var _a;
        this.employeeSearchComponent1.reset();
        (_a = this.employeeSearchComponent2) === null || _a === void 0 ? void 0 : _a.reset();
        this.employeeSearchComponent1.employees = [response.result];
        this.selectedEmployee = src_app_util_clone_util__WEBPACK_IMPORTED_MODULE_0__["CloneUtil"].clone(response.result);
        this.selectedEmployee.department = this.departments.filter((dep) => dep.id == this.selectedEmployee.department.id)[0];
        if (this.currentUserEmployee.id == this.selectedEmployee.id) {
            this.currentUserEmployee = response.result;
            localStorage.setItem('current_employee', src_app_util_encryption_util__WEBPACK_IMPORTED_MODULE_1__["EncryptionUtil"].encryptData(JSON.stringify(this.currentUserEmployee)));
        }
        this.message.create('success', response.message);
    }
    getImageUrl(url) {
        if (url.startsWith('http') || url.includes(src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["ApiConstants"].HOST_URL)) {
            return url;
        }
        else {
            return src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["ApiConstants"].HOST_URL + url;
        }
    }
}
EmployeePageComponent.ɵfac = function EmployeePageComponent_Factory(t) { return new (t || EmployeePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_department_api_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_supervisor_api_service__WEBPACK_IMPORTED_MODULE_8__["SupervisorApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_employee_api_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeApiService"])); };
EmployeePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmployeePageComponent, selectors: [["app-employee-page"]], viewQuery: function EmployeePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.employeeSearchComponent1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.employeeSearchComponent2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.txtDepartmentName = _t.first);
    } }, decls: 13, vars: 3, consts: [[1, "body-container"], [1, "flex-row"], [2, "flex", "1", "display", "flex", "flex-direction", "row-reverse"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "ngIf"], [1, "employee-body"], [3, "onSelectEmployee"], ["employeeSearchComponent1", ""], [1, "employee-detail-container", "flex-row"], ["class", "flex-column image-container", 4, "ngIf"], ["class", "flex-column employee-detail-body", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "user-add"], [1, "flex-column", "image-container"], [3, "src"], [2, "margin-top", "4px", 3, "nzShowUploadList", "nzBeforeUpload"], ["nz-button", "", 3, "nzLoading", "disabled"], ["nz-icon", "", "nzType", "upload"], [1, "flex-column", "employee-detail-body"], [1, "flex-row", "employee-detail-row"], ["label", "Name", 3, "disabled", "value", "valueChange"], ["label", "Employee Code", 3, "disabled", "value", "valueChange"], ["label", "Username", 3, "disabled", "value", "valueChange"], ["label", "Email", 3, "disabled", "value", "valueChange"], ["label", "Phone", 3, "disabled", "value", "valueChange"], ["label", "Address", 3, "disabled", "value", "valueChange", 4, "ngIf"], ["label", "Position", 3, "disabled", "value", "valueChange"], [1, "flex-row", 2, "align-items", "flex-end"], ["label", "Department", "displayProperty", "name", 2, "flex", "1", 3, "disabled", "isLoading", "value", "options", "valueChange"], ["nz-button", "", "nzType", "default", "nzDanger", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "right", 3, "disabled", "nzPopconfirmTitle", "nzOnConfirm", 4, "ngIf"], ["nzTitle", "Replace Department", 3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nz-button", "", "nzType", "default", "style", "color: #1890ff; border-color: #1890ff", 3, "click", 4, "ngIf"], ["nzTitle", "Create Department", 3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["label", "Roles", "displayProperty", "name", 3, "disabled", "value", "options", "valueChange"], ["label", "Joined Date", 3, "disabled", "value", "valueChange"], [2, "flex", "1"], [2, "flex", "1", "display", "flex", "flex-direction", "row-reverse", "align-items", "flex-end"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "ngIf"], ["style", "margin-right: 4px", "nz-button", "", "nzDanger", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "right", 3, "nzLoading", "nzType", "nzPopconfirmTitle", "nzOnConfirm", 4, "ngIf"], ["style", "margin-right: 4px", "nz-button", "", 3, "nzType", "click", 4, "ngIf"], ["nzTitle", "Change Password", 3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [1, "flex-row", "employee-detail-row", 2, "margin-top", "8px", "flex", "1", "overflow", "auto", "border", "solid 1px lightgrey"], [1, "supervisors-list-container", 2, "display", "flex", "flex-direction", "column", "flex", "1", "padding", "8px"], [2, "margin-bottom", "8px"], [1, "supervisors-list-body", 2, "flex", "1", "overflow", "auto"], ["style", "width: 100%; text-align: center", 4, "ngIf"], [3, "employee", "showDetails", "isSelected", "click", 4, "ngFor", "ngForOf"], ["style", "\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                margin-right: 4px;\n              ", 4, "ngIf"], [3, "showEmployeeDetails", "onSelectEmployee", 4, "ngIf"], ["label", "Address", 3, "disabled", "value", "valueChange"], ["nz-button", "", "nzType", "default", "nzDanger", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "right", 3, "disabled", "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "delete"], ["label", "Department", "displayProperty", "name", 3, "value", "options", "valueChange"], ["nz-button", "", "nzType", "default", 2, "color", "#1890ff", "border-color", "#1890ff", 3, "click"], ["nz-icon", "", "nzType", "plus-circle"], ["label", "Department Name", 3, "value", "valueChange"], ["txtDepartmentName", ""], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "save"], ["nz-button", "", "nzDanger", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "right", 2, "margin-right", "4px", 3, "nzLoading", "nzType", "nzPopconfirmTitle", "nzOnConfirm"], ["nz-button", "", 2, "margin-right", "4px", 3, "nzType", "click"], [2, "margin-bottom", "8px", 3, "nzSuffix"], ["nz-input", "", "placeholder", "Old Password", 3, "type", "ngModel", "ngModelChange"], ["oldPasswordSuffixTemplate", ""], ["nz-input", "", "placeholder", "New Password", 3, "type", "ngModel", "ngModelChange"], ["newPasswordSuffixTemplate", ""], [3, "nzSuffix"], ["nz-input", "", "placeholder", "Confirm Password", 3, "type", "ngModel", "ngModelChange"], ["confirmPasswordSuffixTemplate", ""], ["nz-icon", "", 3, "nzType", "click"], [2, "width", "100%", "text-align", "center"], ["nz-icon", "", "nzType", "loading"], [3, "employee", "showDetails", "isSelected", "click"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "margin-right", "4px"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "nzDanger", "", 3, "disabled", "nzLoading", "click"], ["nz-icon", "", "nzType", "arrow-right"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "disabled", "nzLoading", "click"], ["nz-icon", "", "nzType", "arrow-left"], [3, "showEmployeeDetails", "onSelectEmployee"], ["employeeSearchComponent2", ""]], template: function EmployeePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EmployeePageComponent_button_6_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-employee-search-component", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectEmployee", function EmployeePageComponent_Template_app_employee_search_component_onSelectEmployee_8_listener($event) { return ctx.onSelectEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EmployeePageComponent_div_11_Template, 6, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, EmployeePageComponent_div_12_Template, 39, 37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentUserEmployee.role != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedEmployee && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedEmployee && !ctx.isLoading);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["NzBreadCrumbItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _component_employee_search_component_employee_search_component_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeSearchComponentComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_16__["NzUploadComponent"], _component_custom_input_component_custom_input_component_component__WEBPACK_IMPORTED_MODULE_17__["CustomInputComponentComponent"], _component_custom_select_component_custom_select_component_component__WEBPACK_IMPORTED_MODULE_18__["CustomSelectComponentComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalContentDirective"], _component_custom_date_picker_component_custom_date_picker_component_component__WEBPACK_IMPORTED_MODULE_20__["CustomDatePickerComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_21__["NzPopconfirmDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _component_employee_card_component_employee_card_component_component__WEBPACK_IMPORTED_MODULE_24__["EmployeeCardComponentComponent"]], styles: [".employee-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  overflow: hidden;\n}\n.employee-body[_ngcontent-%COMP%]   .employee-detail-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n}\n.employee-body[_ngcontent-%COMP%]   .employee-detail-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin-right: 12px;\n}\n.employee-body[_ngcontent-%COMP%]   .employee-detail-container[_ngcontent-%COMP%]   .employee-detail-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.employee-body[_ngcontent-%COMP%]   .employee-detail-container[_ngcontent-%COMP%]   .employee-detail-body[_ngcontent-%COMP%]   .employee-detail-row[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.employee-body[_ngcontent-%COMP%]   .employee-detail-container[_ngcontent-%COMP%]   .employee-detail-body[_ngcontent-%COMP%]   .employee-detail-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 4px;\n}\n.employee-body[_ngcontent-%COMP%]   .employee-detail-container[_ngcontent-%COMP%]   .employee-detail-body[_ngcontent-%COMP%]   .employee-detail-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n  .ant-input-disabled, .ant-input[disabled][_ngcontent-%COMP%],   .ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {\n  color: #000000aa !important;\n}\n@media only screen and (min-width: 1500px) {\n  .supervisors-list-body[_ngcontent-%COMP%]     .employee-card-container {\n    width: calc(50% - 4px);\n    display: inline-block;\n  }\n  .supervisors-list-body[_ngcontent-%COMP%]    > app-employee-card-component[_ngcontent-%COMP%]:nth-child(2n)     .employee-card-container {\n    margin-left: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtcGxveWVlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ047QUFFSTtFQUNFLE9BQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7QUFBUjtBQUNRO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0FBQ1Y7QUFFUTtFQUNFLGVBQUE7QUFBVjtBQU9BOzs7RUFLRSwyQkFBQTtBQU5GO0FBU0E7RUFFSTtJQUNFLHNCQUFBO0lBQ0EscUJBQUE7RUFQSjtFQVNFO0lBR0UsZ0JBQUE7RUFUSjtBQUNGIiwiZmlsZSI6ImVtcGxveWVlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5lbXBsb3llZS1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgIC5lbXBsb3llZS1kZXRhaWwtYm9keSB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAuZW1wbG95ZWUtZGV0YWlsLXJvdyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgPiAqIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgPiA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAuYW50LWlucHV0LWRpc2FibGVkLFxuLmFudC1pbnB1dFtkaXNhYmxlZF0sXG46Om5nLWRlZXBcbiAgLmFudC1zZWxlY3QtZGlzYWJsZWQuYW50LXNlbGVjdDpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KVxuICAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gIGNvbG9yOiAjMDAwMDAwYWEgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgLnN1cGVydmlzb3JzLWxpc3QtYm9keSB7XG4gICAgOjpuZy1kZWVwIC5lbXBsb3llZS1jYXJkLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICA+IGFwcC1lbXBsb3llZS1jYXJkLWNvbXBvbmVudDpudGgtY2hpbGQoMm4pXG4gICAgICA6Om5nLWRlZXBcbiAgICAgIC5lbXBsb3llZS1jYXJkLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map