import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { CloneUtil } from 'src/app/util/clone-util';
import { CustomInputComponentComponent } from 'src/app/component/custom-input-component/custom-input-component.component';
import { DepartmentApiService } from 'src/app/service/department-api.service';
import { SupervisorApiService } from 'src/app/service/supervisor-api.service';
import { EmployeeApiService } from 'src/app/service/employee-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionUtil } from 'src/app/util/encryption-util';
import { Department } from 'src/app/model/department-model';
import { Employee } from 'src/app/model/employee-model';
import { Response } from 'src/app/model/response-model';
import { formatDate } from '@angular/common';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { ApiConstants } from 'src/app/constants/api-constants';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  ApiConstants = ApiConstants;

  navigatedEmployeeId: number;
  authToken: string;

  @ViewChild('employeeSearchComponent1')
  employeeSearchComponent1!: EmployeeSearchComponentComponent;
  @ViewChild('employeeSearchComponent2')
  employeeSearchComponent2!: EmployeeSearchComponentComponent;
  @ViewChild('txtDepartmentName')
  txtDepartmentName!: CustomInputComponentComponent;

  roles = [
    { id: 0, name: 'Admin' },
    { id: 1, name: 'HR' },
    { id: 2, name: 'Employee' },
  ];
  departments: Department[] = [];

  isImageUploadLoading: boolean = false;

  isLoading: boolean = false;
  currentUserEmployee: Employee = null;
  selectedEmployee: Employee = null;
  supervisors: Employee[] = [];
  selectedExistingSupervisor: Employee = null;
  selectedSupervisor: Employee = null;

  isDepartmentLoading: boolean = false;
  isCreateEmployeeLoading: boolean = false;
  isSupervisorsLoading: boolean = false;
  isSupervisorAddLoading: boolean = false;
  isSupervisorRemoveLoading: boolean = false;
  isDeleteEmployeeLoading: boolean = false;

  // variables for create department dialog
  isCreateDepartmentModalVisible: boolean = false;
  newDepartmentName: string = '';
  isCreateDepartmentLoading: boolean = false;

  // variables for delete department dialog
  isDeleteDepartmentModalVisible: boolean = false;
  replaceDepartment: Department = null;
  isDeleteDepartmentLoading: boolean = false;

  // variables for change password dialog
  isChangePasswordModalVisible: boolean = false;
  isOldPasswordVisible: boolean = false;
  oldPassword: string = '';
  isNewPasswordVisible: boolean = false;
  newPassword: string = '';
  isConfirmPasswordVisible: boolean = false;
  confirmPassword: string = '';
  isChangePasswordLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService,
    private departmentApiService: DepartmentApiService,
    private supervisorApiService: SupervisorApiService,
    private employeeApiService: EmployeeApiService,
  ) {
    // check if this is navigated with employee id
    let strParam = this.route.snapshot.paramMap.get('employee_id');
    this.navigatedEmployeeId = strParam == null ? null : Number(strParam);
  }

  ngOnInit(): void {
    this.initializeCurrentUser();
    this.getDepartments();
    if (this.navigatedEmployeeId != null) {
      this.getEmployeeById(this.navigatedEmployeeId);
    } else {
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
    let decryptedUserData = EncryptionUtil.decryptData(
      currentUserDataJsonString,
    );
    this.currentUserEmployee = decryptedUserData;
    let currentAuthTokenJsonString = localStorage.getItem('auth_token');
    let decryptedAuthToken = EncryptionUtil.decryptData(
      currentAuthTokenJsonString,
    );
    this.authToken = decryptedAuthToken;
  }

  getDepartments() {
    this.isDepartmentLoading = true;
    this.departmentApiService
      .getDepartments()
      .subscribe((response: Response) => {
        if (response.success) {
          this.departments = response.result;
        } else {
          this.message.create('error', response.message);
        }
        this.isDepartmentLoading = false;
      });
  }

  getEmployeeById(employee_id: number) {
    this.isLoading = true;
    this.employeeApiService
      .getEmployeeById(employee_id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.employeeSearchComponent1.employees = [
            response.result as Employee,
          ];
          this.employeeSearchComponent1.selectedEmployee = response.result;
          this.onSelectEmployee(response.result as Employee);
        } else {
          this.message.create('error', response.message);
        }
        this.isLoading = false;
      });
  }

  onSelectEmployee(employee: Employee) {
    this.selectedEmployee = CloneUtil.clone(employee);
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
      .subscribe((response: Response) => {
        if (response.success) {
          this.supervisors = response.result as Employee[];
        } else {
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
      .subscribe((response: Response) => {
        if (response.success) {
          this.departments.push(response.result as Department);
          this.employeeSearchComponent1?.departments.push(response.result);
          this.employeeSearchComponent2?.departments.push(response.result);
          this.message.create('success', response.message);
          this.newDepartmentName = '';
          this.isCreateDepartmentModalVisible = false;
        } else {
          this.message.create('error', response.message);
        }
        this.isCreateDepartmentLoading = false;
      });
  }

  onDeleteDepartment() {
    if (this.replaceDepartment == null) {
      this.message.create(
        'error',
        'Please choose a department to replace with!',
      );
      return;
    }

    this.isDeleteDepartmentLoading = true;

    //TODO: create department API
    this.departmentApiService
      .deleteDepartment(
        this.selectedEmployee.department.id,
        this.replaceDepartment.id,
      )
      .subscribe((response: Response) => {
        if (response.success) {
          this.departments = this.departments.filter(
            (dep) => dep.id != this.selectedEmployee.department.id,
          );

          // update employee search components
          if (
            this.employeeSearchComponent1.selectedDepartmentId ==
            this.selectedEmployee.department.id
          ) {
            this.employeeSearchComponent1.selectedDepartmentId =
              this.replaceDepartment.id;
          }
          this.employeeSearchComponent1.departments =
            this.employeeSearchComponent1.departments.filter(
              (dep) => dep.id != this.selectedEmployee.department.id,
            );
          this.employeeSearchComponent1.employees
            .filter(
              (emp) => emp.department.id == this.selectedEmployee.department.id,
            )
            .forEach((emp) => (emp.department = this.replaceDepartment));
          if (
            this.employeeSearchComponent2.selectedDepartmentId ==
            this.selectedEmployee.department.id
          ) {
            this.employeeSearchComponent2.selectedDepartmentId =
              this.replaceDepartment.id;
          }
          this.employeeSearchComponent2.departments =
            this.employeeSearchComponent2.departments.filter(
              (dep) => dep.id != this.selectedEmployee.department.id,
            );
          this.employeeSearchComponent2.employees
            .filter(
              (emp) => emp.department.id == this.selectedEmployee.department.id,
            )
            .forEach((emp) => (emp.department = this.replaceDepartment));

          if (this.currentUserEmployee.id == this.selectedEmployee.id) {
            this.currentUserEmployee = this.selectedEmployee;
            localStorage.setItem(
              'current_employee',
              JSON.stringify(this.selectedEmployee),
            );
          }
          this.selectedEmployee.department = this.replaceDepartment;

          //show message
          this.message.create('success', response.message);
        } else {
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
      .subscribe((response: Response) => {
        if (response.success) {
          this.message.create('success', response.message);
          this.isChangePasswordModalVisible = false;
        } else {
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
      .subscribe((response: Response) => {
        if (response.success) {
          this.employeeSearchComponent1.employees =
            this.employeeSearchComponent1.employees.filter(
              (emp) => emp.id != this.selectedEmployee.id,
            );
          this.employeeSearchComponent2.employees =
            this.employeeSearchComponent2.employees.filter(
              (emp) => emp.id != this.selectedEmployee.id,
            );
          this.message.create('success', response.message);
        } else {
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
    return this.departments.filter(
      (dev) => dev.id != this.selectedEmployee.department.id,
    );
  }

  onSelectExistingSupervisor(employee: Employee) {
    this.selectedExistingSupervisor = employee;
  }

  onSelectSupervisor(employee: Employee) {
    this.selectedSupervisor = employee;
  }

  onAddSupervisor() {
    if (this.selectedEmployee.id == this.selectedSupervisor.id) {
      this.message.create('error', 'You cannot be your own supervisor!');
      return;
    }
    if (
      this.supervisors.filter((sup) => sup.id == this.selectedSupervisor.id)
        .length > 0
    ) {
      this.message.create('error', 'Selected supervisor already added!');
      return;
    }
    this.isSupervisorAddLoading = true;

    //TODO: add supervisor API
    this.supervisorApiService
      .addSupervisor(this.selectedEmployee.id, this.selectedSupervisor.id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.message.create('success', response.message);
          this.supervisors.push(response.result.supervisor);
        } else {
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
      .removeSupervisor(
        this.selectedEmployee.id,
        this.selectedExistingSupervisor.id,
      )
      .subscribe((response: Response) => {
        if (response.success) {
          this.message.create('success', response.message);
          this.supervisors = this.supervisors.filter(
            (sup) => sup.id != this.selectedExistingSupervisor.id,
          );
        } else {
          this.message.create('error', response.message);
        }
        this.selectedExistingSupervisor = null;
        this.isSupervisorRemoveLoading = false;
      });
  }

  getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.type == 'start') this.handleUpload(info.file);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.handleUpload(file);
    return false;
  };

  handleUpload(image: any): void {
    const formData = new FormData();
    formData.append('image', image);
    this.isImageUploadLoading = true;
    this.employeeApiService
      .uploadImage(this.selectedEmployee.id, formData)
      .subscribe((response: Response) => {
        if (response.success) {
          this.selectedEmployee = CloneUtil.clone(response.result);
          if (this.currentUserEmployee.id == this.selectedEmployee.id) {
            this.currentUserEmployee = response.result;
            localStorage.setItem(
              'current_employee',
              EncryptionUtil.encryptData(
                JSON.stringify(this.currentUserEmployee),
              ),
            );
          }
          this.message.create('success', response.message);
        } else {
          this.message.create('error', response.message);
        }
        this.isImageUploadLoading = false;
      });
  }

  onSaveEmployee() {
    let invalidField: string | null = null;
    let invalidType: string | null = null;
    let emailRegExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    let phoneRegExp = new RegExp(/^[0-9+-]+$/g);

    let selectedRole: number =
      (this.selectedEmployee.role as any).id != null
        ? (this.selectedEmployee.role as any).id
        : this.selectedEmployee.role;

    if (this.selectedEmployee.username == '') {
      invalidField = 'Username';
      invalidType = 'empty';
    } else if (this.selectedEmployee.name == '') {
      invalidField = 'Name';
      invalidType = 'empty';
    } else if (this.selectedEmployee.code == '') {
      invalidField = 'Employee Code';
      invalidType = 'empty';
    } else if (!(selectedRole == 0 || selectedRole == 1 || selectedRole == 2)) {
      invalidField = 'Role';
      invalidType = 'empty';
    } else if (this.selectedEmployee.position == '') {
      invalidField = 'Position';
      invalidType = 'empty';
    } else if (this.selectedEmployee.email == '') {
      invalidField = 'Email';
      invalidType = 'empty';
    } else if (this.selectedEmployee.phone == '') {
      invalidField = 'Phone';
      invalidType = 'empty';
    } else if (this.selectedEmployee.address == '') {
      invalidField = 'Address';
      invalidType = 'empty';
    } else if (this.selectedEmployee.joined_date == null) {
      invalidField = 'Joined Date';
      invalidType = 'empty';
    } else if (this.selectedEmployee.department == null) {
      invalidField = 'Department';
      invalidType = 'empty';
    } else if (!emailRegExp.test(this.selectedEmployee.email)) {
      invalidField = 'Email';
      invalidType = 'invalid';
    } else if (!phoneRegExp.test(this.selectedEmployee.phone)) {
      invalidField = 'Phone';
      invalidType = 'invalid';
    }

    if (invalidField != null) {
      this.message.create(
        'error',
        `Field '${invalidField}' is ${invalidType}!`,
      );
      return;
    }

    this.isCreateEmployeeLoading = true;

    //temp
    this.selectedEmployee.joined_date = formatDate(
      this.selectedEmployee.joined_date,
      'yyyy-MM-dd',
      'en-US',
    );

    if (this.selectedEmployee.id == null) {
      this.employeeApiService
        .createEmployee(this.selectedEmployee)
        .subscribe((response: Response) => {
          if (response.success) {
            this.employeeCreateUpdateOnSuccess(response);
          } else {
            this.message.create('error', response.message);
          }
          this.isCreateEmployeeLoading = false;
        });
    } else {
      this.employeeApiService
        .updateEmployee(this.selectedEmployee)
        .subscribe((response: Response) => {
          if (response.success) {
            this.employeeCreateUpdateOnSuccess(response);
          } else {
            this.message.create('error', response.message);
          }
          this.isCreateEmployeeLoading = false;
        });
    }
  }

  employeeCreateUpdateOnSuccess(response: Response) {
    this.employeeSearchComponent1.reset();
    this.employeeSearchComponent2?.reset();
    this.employeeSearchComponent1.employees = [response.result];
    this.selectedEmployee = CloneUtil.clone(response.result);
    this.selectedEmployee.department = this.departments.filter(
      (dep) => dep.id == this.selectedEmployee.department.id,
    )[0];
    if (this.currentUserEmployee.id == this.selectedEmployee.id) {
      this.currentUserEmployee = response.result;
      localStorage.setItem(
        'current_employee',
        EncryptionUtil.encryptData(JSON.stringify(this.currentUserEmployee)),
      );
    }
    this.message.create('success', response.message);
  }

  getImageUrl(url: string) {
    if (url.startsWith('http') || url.includes(ApiConstants.HOST_URL)) {
      return url;
    } else {
      return ApiConstants.HOST_URL + url;
    }
  }
}
