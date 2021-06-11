export class LeaveType {
  id?: number;
  name: string;
  leave_days: number; //days
  valid_at: number; //months

  constructor() {
    this.name = '';
    this.leave_days = 0;
    this.valid_at = 0;
  }
}
