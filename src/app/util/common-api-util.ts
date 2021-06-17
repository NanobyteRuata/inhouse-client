import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee } from '../model/employee-model';
import { LeaveAllowance } from '../model/leave-allowance-model';
import { Response } from '../model/response-model';

export class CommonApiUtil {
  static checkLeaveAllowanceUpdate(
    leaveAllowanceApiService,
    leaveTypeApiService,
    employee: Employee,
    message: NzMessageService,
    leaveAllowanceList: LeaveAllowance[] = null,
  ) {
    let tempLeaveAllowanceList = leaveAllowanceList;
    let leaveTypeList = [];

    let checkWithLeaveType = () => {
      leaveTypeApiService.getAll().subscribe(
        (rsp: Response) => {
          if (rsp.success) {
            leaveTypeList = rsp.result;
            let leaveTypeNameList = [];
            for (let leaveType of leaveTypeList) {
              if (
                leaveType.valid_at >=
                  new Date(
                    new Date().getTime() -
                      new Date(employee.joined_date).getTime(),
                  ).getMonth() &&
                leaveAllowanceList.filter(
                  (la) => la.leave_type.id == leaveType.id,
                ).length == 0
              ) {
                leaveTypeNameList.push(leaveType.name);
              }
            }
            if (leaveTypeNameList.length > 0) {
              message.info(
                employee.name +
                  "'s leave allowance need update for " +
                  leaveTypeNameList.join(', ') +
                  '. Please inform admin or HR.',
                {
                  nzDuration: 5000,
                },
              );
            }
          } else {
            console.log(rsp);
            message.error(rsp.message);
          }
        },
        (err) => {
          console.log(err);
          message.error(err.error.message);
        },
      );
    };

    if (tempLeaveAllowanceList != null) {
      checkWithLeaveType();
    } else {
      leaveAllowanceApiService.getAll(employee.id).subscribe(
        (response: Response) => {
          if (response.success) {
            leaveAllowanceList = response.result;
            checkWithLeaveType();
          } else {
            console.log(response);
            message.error(response.message);
          }
        },
        (err) => {
          console.log(err);
          message.error(err.error.message);
        },
      );
    }
  }
}
