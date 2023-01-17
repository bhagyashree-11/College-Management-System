import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'collegeManagementSytem';
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  // *************************************************LoginTemplate******************************************************
  openModal1(template:TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}

loginEmail = "";
loginPassword = "";

login(){
  console.log('email',this.loginEmail);
  console.log('password',this.loginPassword);
  this.loginclose();
}
loginclose(){
  this.loginEmail = "";
  this.loginPassword = "";
  this.modalRef?.hide()
}
loginclose1(){
  this.loginEmail = "";
  this.loginPassword = "";
}
// **************************************************RegisterTemplate***************************************************
openModal2(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
registerName = "";
registerEmail = "";
registerMobile = "";
registerPassword = "";
registerState = "";
registerCity = "";

register(){
  console.log('Name',this.registerName);
  console.log('Email',this.registerEmail);
  console.log('Mobile',this.registerMobile);
  console.log('Password',this.registerPassword);
  console.log('State',this.registerState);
  console.log('City',this.registerCity);
  this.registerclose();
}
registerclose(){
  this.registerName = "";
  this.registerEmail = "";
  this.registerMobile = "";
  this.registerPassword = "";
  this.registerState = "";
  this.registerCity = "";
  this.modalRef?.hide()
}
registerclose1(){
  this.registerName = "";
  this.registerEmail = "";
  this.registerMobile = "";
  this.registerPassword = "";
  this.registerState = "";
  this.registerCity = "";
}
// ***********************************************************TeachersData***********************************************************
TeachersData:any = [
  { 
    Name: "Bharti Wath",
    Age: "24",
    MobileNo: "8605848795",
    Department: "IT"
  },
  {
    Name: "Yuga jamkar",
    Age: "25",
    MobileNo: "9371804015",
    Department: "Business Management" 
  },
];
teacherName = "";
teacherAge = "";
teacherMobileNo = "";
teacherDepartment = "";

teacherSelectedIndex = "";

TeachersopenModal(template: TemplateRef<any>,index:any) {
  if (index != 'null'){
    this.teacherName = this.TeachersData[index].Name;
    this.teacherAge = this.TeachersData[index].Age;
    this.teacherMobileNo = this.TeachersData[index].MobileNo;
    this.teacherDepartment = this.TeachersData[index].Department;
    this.teacherSelectedIndex = index;
  }
  this.modalRef = this.modalService.show(template);
}

submit(){
  let user = {
    Name:this.teacherName,
    Age:this.teacherAge,
    MobileNo:this.teacherMobileNo,
    Department:this.teacherDepartment
  }
  this.TeachersData.push(user);
  this.teacherclose()
}

update(){
  this.TeachersData[this.teacherSelectedIndex].Name = this.teacherName;
  this.TeachersData[this.teacherSelectedIndex].Age = this.teacherAge;
  this.TeachersData[this.teacherSelectedIndex].MobileNo = this.teacherMobileNo;
  this.TeachersData[this.teacherSelectedIndex].Department = this.teacherDepartment;
  this.teacherclose();
}

teacherclose(){
  this.teacherName = "";
  this.teacherAge = "";
  this.teacherMobileNo = "";
  this.teacherDepartment = "";
  this.modalRef?.hide()
}
teacherclose1(){
  this.teacherName = "";
  this.teacherAge = "";
  this.teacherMobileNo = "";
  this.teacherDepartment = "";
}
delete(i:any){
  this.TeachersData.splice(i,1);
}
//*******************************************************studentData*************************************************************
StudentsData:any = [
  { 
    Name: "Bharti Wath",
    DOB: "1999-03-11",
    MobileNo: "8605848795",
    Email: "bharti@gmail.com",
    Category: "OBC"
  },
  {
    Name: "Yuga Jamkar",
    DOB: "1998-08-30",
    MobileNo: "8605848795",
    Email: "yuga@gmail.com",
    Category: "OBC"
  },
];
studentName = "";
studentDOB = "";
studentMobileNo = "";
studentEmail = "";
studentCategory = "";

studentselectedIndex = "";

studentopenModal(template: TemplateRef<any>,index:any) {

  if (index != 'null'){
    this.studentName = this.StudentsData[index].Name;
    this.studentDOB = this.StudentsData[index].DOB;
    this.studentMobileNo = this.StudentsData[index].MobileNo;
    this.studentEmail = this.StudentsData[index].Email;
    this.studentCategory = this.StudentsData[index].Category;
    this.studentselectedIndex = index;
  }

  this.modalRef = this.modalService.show(template);
}
studentsubmit(){
  let user = {
    Name:this.studentName,
    DOB:this.studentDOB,
    MobileNo:this.studentMobileNo,
    Email:this.studentEmail,
    Category:this.studentCategory
  }
  this.StudentsData.push(user);
  this.studentclose();
}

studentupdate(){
  this.StudentsData[this.studentselectedIndex].Name = this.studentName;
  this.StudentsData[this.studentselectedIndex].DOB = this.studentDOB;
  this.StudentsData[this.studentselectedIndex].MobileNo = this.studentMobileNo;
  this.StudentsData[this.studentselectedIndex].Email = this.studentEmail;
  this.StudentsData[this.studentselectedIndex].Category = this.studentCategory;
  this.studentclose();
}

studentclose(){
  this.studentName = "";
  this.studentDOB = "";
  this.studentMobileNo = "";
  this.studentEmail = "";
  this.studentCategory = "";
  this.modalRef?.hide()
}

studentclose1(){
  this.studentName = "";
  this.studentDOB = "";
  this.studentMobileNo = "";
  this.studentEmail = "";
  this.studentCategory = "";
}
studentdelete(i:any){
  this.StudentsData.splice(i,1);
}

//*****************************************************StaffData****************************************************************

staffData:any = [
  { 
    Name: "Bharti Wath",
    Age: "24",
    MobileNo: "8605848795",
    Subject: "IT"
  },
  {
    Name: "Yuga jamkar", 
    Age: "25",
    MobileNo: "9371804015",
    Subject: "Business Management" 
  },
];
staffName = "";
staffAge = "";
staffMobileNo = "";
staffSubject = "";

staffselectedIndex = "";

staffopenModal(template: TemplateRef<any>,index:any) {

  if (index != 'null'){
    this.staffName = this.staffData[index].Name;
    this.staffAge = this.staffData[index].Age;
    this.staffMobileNo = this.staffData[index].MobileNo;
    this.staffSubject = this.staffData[index].Subject;
    this.staffselectedIndex = index;
  }

  this.modalRef = this.modalService.show(template);
}
staffsubmit(){
  let user = {
    Name:this.staffName,
    Age:this.staffAge,
    MobileNo:this.staffMobileNo,
    Subject:this.staffSubject
  }
  this.staffData.push(user);
}
staffupdate(){
  this.staffData[this.staffselectedIndex].Name = this.staffName;
  this.staffData[this.staffselectedIndex].Age = this.staffAge;
  this.staffData[this.staffselectedIndex].MobileNo = this.staffMobileNo;
  this.staffData[this.staffselectedIndex].Subject = this.staffSubject;
}
staffclose(){
  this.staffName = "";
  this.staffAge = "";
  this.staffMobileNo = "";
  this.staffSubject = "";
  this.modalRef?.hide()
}
staffclose1(){
  this.staffName = "";
  this.staffAge = "";
  this.staffMobileNo = "";
  this.staffSubject = "";
}
staffdelete(i:any){
  this.staffData.splice(i,1);
}

// *****************************************************ExamData***************************************************************


examData:any = [
  { 
    Subject: "IT",
    Date: "2022-08-30",
    Time: "11AM-2PM",
    Day: "Monday"
  },
  {
    Subject: "Business Management", 
    Date: "2022-08-30",
    Time: "11AM-2PM",
    Day: "Tuesday" 
  },
];
examSubject = "";
examDate = "";
examTime = "";
examDay = "";

examselectedIndex = "";

examopenModal(template: TemplateRef<any>,index:any) {

  if (index != 'null'){
    this.examSubject = this.examData[index].Subject;
    this.examDate = this.examData[index].Date;
    this.examTime = this.examData[index].Time;
    this.examDay = this.examData[index].Day;
    this.examselectedIndex = index;
  }

  this.modalRef = this.modalService.show(template);
}

examsubmit(){
  let user = {
    Subject:this.examSubject,
    Date:this.examDate,
    Time:this.examTime,
    Day:this.examDay
  }
  this.examData.push(user);
  this.examclose();
}
examudate(){
  this.examData[this.examselectedIndex].Subject = this.examSubject;
  this.examData[this.examselectedIndex].Date = this.examDate;
  this.examData[this.examselectedIndex].Time = this.examTime;
  this.examData[this.examselectedIndex].Day = this.examDay;
  this.examclose();
}
examclose(){
  this.examSubject = "";
  this.examDate = "";
  this.examTime = "";
  this.examDay = "";
  this.modalRef?.hide()
}
examclose1(){
  this.examSubject = "";
  this.examDate = "";
  this.examTime = "";
  this.examDay = "";
}
examdelete(i:any){
  this.examData.splice(i,1);
}
}