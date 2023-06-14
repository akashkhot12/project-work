import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;
  title = 'material-form';
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
  name :string =""
  file:any;
  getName(name:string){
    this.name = name ;
  }

  submit(){
    let formData = new FormData();
    formData.set('name' , this.name);
    formData.set('file',this.file)
    console.log(formData);
  }
  errorMessage:string | undefined ;
getFile(event : any){
  this.file = event.target.files[0];
  const allowedFileTypes = ['text/csv'];
  const fileSizeInBytes = this.file.size
  const allowedFileSizeInBytes =1048576
  if (fileSizeInBytes > allowedFileSizeInBytes && allowedFileTypes.indexOf(this.file.type) === -1 ){
    this.errorMessage = '*Invalid, file type should be csv and size should be less than 1mb .';
    event.target.value = null;
  }else if (allowedFileTypes.indexOf(this.file.type) === -1){
    this.errorMessage = '*Invalid file type. Please upload csv file';
    event.target.value = null;
  }else if (fileSizeInBytes > allowedFileSizeInBytes){
    this.errorMessage = '*File size exceeds the limit (1mb).';
    event.target.value = null;
  }else{
    this.errorMessage = " ";
    console.log("files : ", this.file );
  }

  }

  validateFileUpload(): void {
    const file: File = this['fileInput'].nativeElement.files[0];
    const maxSize: number = 20 * 1024 * 1024; // 20MB in bytes

    if (file.size > maxSize) {
      alert('File size exceeds the limit of 20MB.');
      this['fileInput'].nativeElement.value = ''; // Clear the selected file
    }
}
}
