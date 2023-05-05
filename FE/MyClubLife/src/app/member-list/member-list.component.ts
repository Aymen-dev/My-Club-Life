import { Component } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {

  members = ['Ahmed ben ayed', 'Amine ben salah', 'Aymen Ben Mariem', 'Ahmed zagalouloulou', 'Brahim'];
  studentEmail?: string;
  
  removeMember(member: string) {
    const index = this.members.indexOf(member);
    let deletedMember;
    if (index >= 0)
      deletedMember = this.members.splice(index, 1)[0];
    console.log(deletedMember);
  }

  addMember() {
    console.log(this.studentEmail);
  }
}
