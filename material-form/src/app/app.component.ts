import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-form';
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
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
    const allowedFileTypes = ['application/csv']; // Define the allowed file types here
    if (allowedFileTypes.indexOf(this.file.type) === -1) {
      this.errorMessage = 'Invalid file type. Please upload a CSV file';
    } else {
      // Proceed with file upload logic
      this.errorMessage = " "; // Reset the error message if the file type is valid
      console.log("files : ", this.file );
    }
  }
}
