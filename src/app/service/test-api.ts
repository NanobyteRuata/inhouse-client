import { observable, Observable } from 'rxjs';
import { CloneUtil } from '../util/clone-util';
import { EncryptionUtil } from '../util/encryption-util';

export class TestApi {
  public static getDepartments() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          code: 200,
          success: true,
          message: 'Successfully retrieved all departments!',
          result: this.departments,
          error: null,
        });
      }, 500);
    });
  }

  public static createDepartment(name: string) {
    return new Observable((observer) => {
      setTimeout(() => {
        let newDepartment = {
          id: this.departments.length,
          name: name,
        };
        this.departments.push(newDepartment);
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully created new department.',
          result: newDepartment,
          error: null,
        });
      }, 500);
    });
  }

  public static deleteDepartment(id: number, replaceDepartmentId: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let deletedDepartment = CloneUtil.clone(
          this.departments.filter((dep) => dep.id == id)[0]
        );
        this.departments = this.departments.filter((dep) => dep.id != id);
        for (let employee of this.employees) {
          if (employee.department_id == id) {
            employee.department_id = replaceDepartmentId;
          }
        }
        observer.next({
          code: 201,
          success: true,
          message: 'Deleted a department successfully!',
          result: deletedDepartment,
          error: null,
        });
      }, 1000);
    });
  }

  public static login(username: string, password: string) {
    return new Observable((observer) => {
      setTimeout(() => {
        let result: any = null;
        let filteredEmployees: any[] = this.employees.filter(
          (emp) => emp.username == username && emp.password == password
        );
        if (filteredEmployees.length > 0) {
          result = filteredEmployees[0];
          result.department = this.departments.filter(
            (dep) => dep.id == result.department_id
          )[0];
          result = CloneUtil.clone(result);
          delete result.department_id;
        }
        if (result) {
          observer.next({
            code: 200,
            success: true,
            message: 'Successfully logged in!',
            result: {
              employee: result,
              auth_token: 'asdasdasdasd',
            },
            error: null,
          });
        } else {
          observer.next({
            code: 404,
            success: false,
            message: 'Failed to log in!',
            result: null,
            error: null,
          });
        }
      }, 2000);
    });
  }

  static getEmployeesByFilter(keyword: string = '', departmentId: number = -1) {
    return new Observable((observer) => {
      setTimeout(() => {
        let result: any[] = CloneUtil.clone(this.employees);
        if (keyword.length > 0) {
          result = result.filter(
            (emp) => emp.name.includes(keyword) || emp.code.includes(keyword)
          );
        }
        if (departmentId > -1) {
          result = result.filter((emp) => emp.department_id == departmentId);
        }
        result.forEach((res) => {
          res.department = this.departments.filter(
            (dep) => dep.id == res.department_id
          )[0];

          delete res.department_id;
        });
        observer.next({
          code: 200,
          success: true,
          message: 'Successfully retrieved employees!',
          result: result,
          error: null,
        });
      }, 1000);
    });
  }

  static getEmployeeById(employee_id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let result: any = CloneUtil.clone(
          this.employees.filter((emp) => emp.id == employee_id)[0]
        );
        result.department = this.departments.filter(
          (dep) => dep.id == result.department_id
        )[0];
        observer.next({
          code: 200,
          success: true,
          message: 'Successfully retrieved employee!',
          result: result,
          error: null,
        });
      }, 1000);
    });
  }

  static createEmployee(employee: any) {
    return new Observable((observer) => {
      setTimeout(() => {
        let newEmployee = {
          id: this.employees.length,
          username: employee.username,
          name: employee.name,
          image_url: null,
          password: 'default',
          code: employee.code,
          role: employee.role,
          position: employee.position,
          email: employee.email,
          phone: employee.phone,
          address: employee.address,
          joined_date: employee.joined_date,
          department_id: employee.department.id,
        };
        this.employees.push(newEmployee);
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully created new Employee',
          result: newEmployee,
          error: null,
        });
      });
    });
  }

  static updateEmployee(updateEmployee: any) {
    return new Observable((observer) => {
      setTimeout(() => {
        let data = this.employees.filter((emp) => emp.id == updateEmployee.id);
        if (data.length > 0) {
          let employee: any = data[0];
          for (let property in employee) {
            if (property == 'password') continue;
            if (property == 'department_id' || property == 'department') {
              employee['department_id'] = updateEmployee.department.id;
            }
            if (
              updateEmployee[property] != null ||
              updateEmployee[property] != '' ||
              updateEmployee[property] != employee[property]
            ) {
              if (property == 'role' && updateEmployee[property].id != null) {
                employee[property] = updateEmployee[property].id;
                continue;
              }
              employee[property] = updateEmployee[property];
            }
          }
          observer.next({
            code: 201,
            success: true,
            message: 'Successfully updated an employee',
            result: employee,
            error: null,
          });
        } else {
          observer.next({
            code: 404,
            success: false,
            message: 'Failed to update an employee!',
            result: null,
            error: null,
          });
        }
      }, 1000);
    });
  }

  static deleteEmployee(id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let deletedEmployee = this.employees.filter((emp) => emp.id == id);
        this.employees = this.employees.filter((emp) => emp.id != id);
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully deleted an employee',
          result: deletedEmployee,
          error: null,
        });
      }, 1000);
    });
  }

  static changePassword(
    employee_id: number,
    old_password: string,
    new_password: string
  ) {
    return new Observable((observer) => {
      let employee = this.employees.filter((emp) => emp.id == employee_id)[0];
      if (employee.password == old_password) {
        employee.password = new_password;
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully changed password',
          result: employee,
          error: null,
        });
      } else {
        observer.next({
          code: 404,
          success: false,
          message: 'Failed to change password!',
          result: null,
          error: null,
        });
      }
    });
  }

  // type = 0 for supervisors, 1 for juniors
  public static getSupervisors(type: number, id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let result = [];
        let employees: any[] = this.employees;
        for (let supervisor of this.supervisors) {
          if (type == 0 && supervisor.employee_id == id) {
            let employee = employees.filter(
              (emp) => emp.id == supervisor.supervisor_id
            )[0];
            result.push(employee);
          } else if (type == 1 && supervisor.supervisor_id == id) {
            let employee = employees.filter(
              (emp) => emp.id == supervisor.employee_id
            )[0];
            result.push(employee);
          }
        }
        observer.next({
          code: 200,
          success: true,
          message: `Successfully retrieved ${
            type == 0 ? 'supervisors' : 'juniors'
          } list!`,
          result: result,
          error: null,
        });
      }, 1000);
    });
  }

  static addSupervisor(employee_id: number, supervisor_id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        this.supervisors.push({
          employee_id: employee_id,
          supervisor_id: supervisor_id,
        });
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully added a supervisor!',
          result: this.employees.filter((emp) => emp.id == supervisor_id)[0],
          error: null,
        });
      }, 500);
    });
  }

  static removeSupervisor(employee_id: number, supervisor_id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        this.supervisors = this.supervisors.filter(
          (sup) =>
            !(
              sup.employee_id == employee_id &&
              sup.supervisor_id == supervisor_id
            )
        );
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully removed a supervisor!',
          result: this.employees.filter((emp) => emp.id == supervisor_id)[0],
          error: null,
        });
      }, 500);
    });
  }

  static getAttendance(employee_id: number, month: number, year: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let currentUserDataJsonString =
          localStorage.getItem('current_employee');
        let decryptedUserData = EncryptionUtil.decryptData(
          currentUserDataJsonString
        );
        let currentUserEmployee = decryptedUserData;

        if (
          currentUserEmployee.id != employee_id &&
          currentUserEmployee.role == 2 &&
          this.supervisors.findIndex(
            (sup) =>
              sup.supervisor_id == currentUserEmployee.id &&
              sup.employee_id == employee_id
          ) == -1
        ) {
          observer.next({
            code: 401,
            success: false,
            message:
              "You are not authorized to view this user's attendance data!",
            result: null,
            error: null,
          });
          return;
        }
        let resultList: any[] = [];
        let daysCount: number = new Date(
          new Date(year, month + 1, 1).getTime() - 86400000
        ).getDate();

        for (let i = 1; i <= daysCount; i++) {
          let date = new Date(year, month, i);
          resultList.push({
            date: date.getTime(),
            attendance: this.attendances.filter((att) => {
              let attDate = new Date(att.date);
              if (
                !(
                  attDate.getDate() == date.getDate() &&
                  attDate.getMonth() == date.getMonth() &&
                  attDate.getFullYear() == date.getFullYear()
                )
              ) {
                return false;
              }
              if (att.employee_id != employee_id) {
                return false;
              }
              return true;
            })[0],
            leave: this.leaves.filter((leave) => {
              let leaveDate = new Date(leave.date);
              if (
                !(
                  leaveDate.getDate() == date.getDate() &&
                  leaveDate.getMonth() == date.getMonth() &&
                  leaveDate.getFullYear() == date.getFullYear()
                )
              ) {
                return false;
              }
              if (leave.employee_id != employee_id) {
                return false;
              }
              return true;
            })[0],
            holiday: this.holidays.filter((holiday) => {
              let holidayDate = new Date(holiday.date);
              if (
                !(
                  holidayDate.getDate() == date.getDate() &&
                  holidayDate.getMonth() == date.getMonth() &&
                  holidayDate.getFullYear() == date.getFullYear()
                )
              ) {
                return false;
              }
              return true;
            })[0],
            overtime: this.overtimes.filter((overtime) => {
              let overtimeDate = new Date(overtime.date);
              if (
                !(
                  overtimeDate.getDate() == date.getDate() &&
                  overtimeDate.getMonth() == date.getMonth() &&
                  overtimeDate.getFullYear() == date.getFullYear()
                )
              ) {
                return false;
              }
              if (overtime.employee_id != employee_id) {
                return false;
              }
              return true;
            })[0],
          });
        }
        observer.next({
          code: 200,
          success: true,
          message: 'Successfully retrieved attendance data!',
          result: resultList,
          error: null,
        });
      }, 1000);
    });
  }

  static createAttendance(newAttendance: any) {
    return new Observable((observer) => {
      setTimeout(() => {
        newAttendance['id'] = this.attendances.length;
        this.attendances.push(newAttendance);
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully created new attendance!',
          result: newAttendance,
          error: null,
        });
      }, 1000);
    });
  }

  static checkIn() {
    return new Observable((observer) => {
      setTimeout(() => {
        let currentUserDataJsonString =
          localStorage.getItem('current_employee');
        let decryptedUserData = EncryptionUtil.decryptData(
          currentUserDataJsonString
        );
        let currentUserEmployee = decryptedUserData;

        let today = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ).getTime();
        let todayAttendance = this.attendances.find((att) => att.date == today);
        if (todayAttendance != null && todayAttendance.checkin_time != null) {
          observer.next({
            code: 400,
            success: false,
            message: 'Already checked in!',
            result: null,
            error: null,
          });
        } else {
          todayAttendance = {
            id: this.attendances.length,
            employee_id: currentUserEmployee.id,
            date: today,
            checkin_time: new Date().getTime(),
            checkout_time: null,
          };
          this.attendances.push(todayAttendance);
          observer.next({
            code: 201,
            success: false,
            message: 'Check in success!',
            result: null,
            error: null,
          });
        }
      }, 1000);
    });
  }

  static updateAttendance(updateAttendance: any) {
    return new Observable((observer) => {
      setTimeout(() => {
        let attendance: any = this.attendances.filter(
          (att) => att.id == updateAttendance.id
        )[0];
        for (let prop in attendance) {
          if (attendance[prop] != updateAttendance[prop]) {
            attendance[prop] = updateAttendance[prop];
          }
        }
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully updated new attendance!',
          result: this.attendances.filter(
            (att) => att.id == updateAttendance.id
          )[0],
          error: null,
        });
      }, 1000);
    });
  }

  static deleteAttendance(attendance_id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let attendance = this.attendances.filter(
          (att) => att.id == attendance_id
        )[0];
        this.attendances = this.attendances.filter(
          (att) => att.id != attendance_id
        );
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully deleted attendance!',
          result: attendance,
          error: null,
        });
      }, 1000);
    });
  }

  static createHoliday(holiday: any) {
    return new Observable((observer) => {
      setTimeout(() => {
        if (
          this.attendances.findIndex((att) => {
            let attDate = new Date(att.date);
            let holidayDate = new Date(holiday.date);
            return (
              attDate.getDate() == holidayDate.getDate() &&
              attDate.getMonth() == holidayDate.getMonth() &&
              attDate.getFullYear() == holidayDate.getFullYear()
            );
          }) < 0
        ) {
          holiday.id = this.holidays.length;
          this.holidays.push(holiday);

          observer.next({
            code: 201,
            success: true,
            message: 'Successfully created a holiday!',
            result: holiday,
            error: null,
          });
        } else {
          observer.next({
            code: 404,
            success: false,
            message: "There is someone's attendance data on this day!",
            result: null,
            error: null,
          });
        }
      }, 1000);
    });
  }

  static deleteHoliday(holiday_id: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        let holiday = this.holidays.filter((hol) => hol.id == holiday_id)[0];
        this.holidays = this.holidays.filter((hol) => hol.id != holiday_id);
        observer.next({
          code: 201,
          success: true,
          message: 'Successfully deleted holiday!',
          result: holiday,
          error: null,
        });
      }, 1000);
    });
  }

  // ---------- Databases ---------- //
  //                |
  //                |
  //                |
  //               \ /
  //                V

  public static departments = [
    {
      id: 0,
      name: 'Administration',
    },
    {
      id: 1,
      name: 'Human Resource',
    },
    {
      id: 2,
      name: 'Development',
    },
  ];

  static employees = [
    {
      id: 0,
      username: 'emp1',
      password: 'emp1emp1',
      image_url:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'Employee 1',
      code: 'SysExeMM001',
      role: 0,
      position: 'Director',
      email: 'emp1@exe.com',
      phone: '09000000001',
      address: 'Address 1, address 2, address 1',
      joined_date: 1582997400000,
      department_id: 0,
    },
    {
      id: 1,
      username: 'emp2',
      password: 'emp2emp2',
      image_url: null,
      name: 'Employee 2',
      code: 'SysExeMM002',
      role: 0,
      position: 'Manager',
      email: 'emp2@exe.com',
      phone: '09000000002',
      address: 'Address 2, address 2, address 2',
      joined_date: 1582997400000,
      department_id: 0,
    },
    {
      id: 2,
      username: 'emp3',
      password: 'emp3emp3',
      image_url:
        'http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
      name: 'Employee 3',
      code: 'SysExeMM003',
      role: 1,
      position: 'Human Resource Manager',
      email: 'emp3@exe.com',
      phone: '09000000003',
      address: 'Address 3, address 3, address 3',
      joined_date: 1582997400000,
      department_id: 1,
    },
    {
      id: 3,
      username: 'emp4',
      password: 'emp4emp4',
      image_url:
        'https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg',
      name: 'Employee 4',
      code: 'SysExeMM004',
      role: 1,
      position: 'Human Resource Officer',
      email: 'emp4@exe.com',
      phone: '09000000004',
      address: 'Address 4, address 4, address 4',
      joined_date: 1582997400000,
      department_id: 1,
    },
    {
      id: 4,
      username: 'emp5',
      password: 'emp5emp5',
      image_url: 'https://i.redd.it/rkrhnaamp5h01.jpg',
      name: 'Employee 5',
      code: 'SysExeMM005',
      role: 2,
      position: 'Team Leader',
      email: 'emp5@exe.com',
      phone: '09000000005',
      address: 'Address 5, address 5, address 5',
      joined_date: 1582997400000,
      department_id: 2,
    },
    {
      id: 5,
      username: 'emp6',
      password: 'emp6emp6',
      image_url:
        'https://i1.sndcdn.com/avatars-000583246488-dhm5la-t500x500.jpg',
      name: 'Employee 6',
      code: 'SysExeMM006',
      role: 2,
      position: 'Senior Developer',
      email: 'emp6@exe.com',
      phone: '09000000006',
      address: 'Address 6, address 6, address 6',
      joined_date: 1582997400000,
      department_id: 2,
    },
    {
      id: 6,
      username: 'emp7',
      password: 'emp7emp7',
      image_url:
        'https://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg',
      name: 'Employee 7',
      code: 'SysExeMM007',
      role: 2,
      position: 'Senior Developer',
      email: 'emp7@exe.com',
      phone: '09000000007',
      address: 'Address 7, address 7, address 7',
      joined_date: 1582997400000,
      department_id: 2,
    },
    {
      id: 7,
      username: 'emp8',
      password: 'emp8emp8',
      image_url:
        'https://i1.sndcdn.com/avatars-000339084123-nag0p1-t500x500.jpg',
      name: 'Employee 8',
      code: 'SysExeMM008',
      role: 2,
      position: 'Developer',
      email: 'emp8@exe.com',
      phone: '09000000008',
      address: 'Address 8, address 8, address 8',
      joined_date: 1582997400000,
      department_id: 2,
    },
    {
      id: 8,
      username: 'emp9',
      password: 'emp9emp9',
      image_url: 'https://i.imgur.com/u9Moab8.jpg',
      name: 'Employee 9',
      code: 'SysExeMM009',
      role: 2,
      position: 'Developer',
      email: 'emp9@exe.com',
      phone: '09000000009',
      address: 'Address 9, address 9, address 9',
      joined_date: 1582997400000,
      department_id: 2,
    },
    {
      id: 9,
      username: 'emp10',
      password: 'emp10emp10',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaL8ADYeMTI_d05vO12jbizVKahEtBc_nmQ&usqp=CAU',
      name: 'Employee 10',
      code: 'SysExeMM0010',
      role: 2,
      position: 'Junior Developer',
      email: 'emp10@exe.com',
      phone: '09000000010',
      address: 'Address 10, address 10, address 10',
      joined_date: 1582997400000,
      department_id: 2,
    },
  ];

  static supervisors = [
    {
      employee_id: 0,
      supervisor_id: 1,
    },
    {
      employee_id: 1,
      supervisor_id: 0,
    },
    {
      employee_id: 2,
      supervisor_id: 1,
    },
    {
      employee_id: 3,
      supervisor_id: 1,
    },
    {
      employee_id: 3,
      supervisor_id: 2,
    },
    {
      employee_id: 4,
      supervisor_id: 1,
    },
    {
      employee_id: 4,
      supervisor_id: 2,
    },
    {
      employee_id: 4,
      supervisor_id: 3,
    },
    {
      employee_id: 5,
      supervisor_id: 2,
    },
    {
      employee_id: 5,
      supervisor_id: 3,
    },
    {
      employee_id: 5,
      supervisor_id: 4,
    },
    {
      employee_id: 6,
      supervisor_id: 2,
    },
    {
      employee_id: 6,
      supervisor_id: 3,
    },
    {
      employee_id: 6,
      supervisor_id: 4,
    },
    {
      employee_id: 7,
      supervisor_id: 2,
    },
    {
      employee_id: 7,
      supervisor_id: 3,
    },
    {
      employee_id: 7,
      supervisor_id: 4,
    },
    {
      employee_id: 8,
      supervisor_id: 2,
    },
    {
      employee_id: 8,
      supervisor_id: 3,
    },
    {
      employee_id: 8,
      supervisor_id: 4,
    },
    {
      employee_id: 9,
      supervisor_id: 2,
    },
    {
      employee_id: 9,
      supervisor_id: 3,
    },
    {
      employee_id: 9,
      supervisor_id: 4,
    },
    {
      employee_id: 9,
      supervisor_id: 5,
    },
    {
      employee_id: 9,
      supervisor_id: 6,
    },
  ];

  static attendances = [
    {
      id: 0,
      employee_id: 0,
      date: 1619976600000,
      checkin_time: 1620004800000,
      checkout_time: 1620037800000,
    },
    {
      id: 1,
      employee_id: 2,
      date: 1619976600000,
      checkin_time: 1620004800000,
      checkout_time: 1620038100000,
    },
    {
      id: 2,
      employee_id: 4,
      date: 1619976600000,
      checkin_time: 1620005700000,
      checkout_time: 1620038100000,
    },
    {
      id: 3,
      employee_id: 0,
      date: 1620063000000,
      checkin_time: 1620004800000,
      checkout_time: 1620124500000,
    },
    {
      id: 4,
      employee_id: 0,
      date: 1620149400000,
      checkin_time: 1620178500000,
      checkout_time: 1620210900000,
    },
    {
      id: 5,
      employee_id: 2,
      date: 1620149400000,
      checkin_time: 1620177600000,
      checkout_time: 1620210900000,
    },
    {
      id: 6,
      employee_id: 2,
      date: 1619544600000,
      checkin_time: 1619572800000,
      checkout_time: 1619605800000,
    },
    {
      id: 7,
      employee_id: 4,
      date: 1619544600000,
      checkin_time: 1619572800000,
      checkout_time: 1619605800000,
    },
    {
      id: 8,
      employee_id: 2,
      date: 1619631000000,
      checkin_time: 1619660100000,
      checkout_time: 1619692500000,
    },
    {
      id: 9,
      employee_id: 4,
      date: 1619631000000,
      checkin_time: 1619659200000,
      checkout_time: 1619692200000,
    },
    {
      id: 10,
      employee_id: 0,
      date: 1619631000000,
      checkin_time: 1619659800000,
      checkout_time: 1619674200000,
    },
  ];

  static leaves = [
    {
      id: 0,
      employee_id: 0,
      date: 1620322200000,
      leave_type: {
        id: 0,
        name: 'Casual Leave',
        leave_days: 6.0,
        valid_at: 6,
      },
      type: 2, // 0 = full day, 1 = AM, 2 = PM
      report_to_id: 1,
      status: 0, // 0 = pending, 1 = approved, 2 = rejected
    },
  ];

  static overtimes = [
    {
      id: 0,
      employee_id: 0,
      date: 1620149400000,
      from_time: 1620212400000,
      to_time: 1620219600000,
      checkin_time: 1620212400000,
      checkout_time: 1620219300000,
      report_to_id: 1,
      status: 0, // 0 = pending, 1 = approved, 2 = rejected
    },
  ];

  static holidays = [
    {
      id: 0,
      name: 'Holiday Name',
      date: 1620235800000,
    },
  ];
}
