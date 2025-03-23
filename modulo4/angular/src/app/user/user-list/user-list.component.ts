import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { MembersService } from '../../services/members.service';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgIf,
    SearchByLoginPipe,
    UserEditComponent,
    MatIconModule,
 ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  members: MemberEntity[] = [];
  newMember!: MemberEntity;
  memberSelected!: MemberEntity;

  constructor(
    private membersService: MembersService, 
  ){}
  
  add(): void {
    this.members.push(this.newMember);
    this.save(this.newMember);
    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  handleFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.newMember.avatar_url = reader.result as string;
    };
  }

  ngOnInit(): void {
    fetch('https://api.github.com/orgs/lemoncode/members')
      .then((response) => response.json())
      .then((result) => (this.members = result));
      this.membersService.getAll();

    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  select(member: MemberEntity): void {
    this.memberSelected = { ...member };
  }

  save(member: MemberEntity) {
    this.members = [...this.members];
    const index = this.members.findIndex((item) => item.id === member.id);
    this.members.splice(index, 1, member);
  }

  delete(member:MemberEntity){
    this.members = [...this.members];
    const index = this.members.findIndex((item) => item.id === member.id);
    this.members.splice(index,1);

  }

}
