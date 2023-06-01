import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TestListService} from "../../services/test-list.service";

@Component({
  selector: 'app-edit-create-test-list-modal',
  templateUrl: './edit-create-test-list-modal.component.html',
  styleUrls: ['./edit-create-test-list-modal.component.scss']
})
export class EditCreateTestListModalComponent {
  form: FormGroup
  error:boolean = false

  constructor(private listService: TestListService,
              private dialogRef: MatDialogRef<EditCreateTestListModalComponent>,
             ) {
    this._testForm()
  };

  _testForm(): void {
    this.form = new FormGroup({
      "Test Name": new FormControl('', [Validators.required]),
      "Doctor": new FormControl('', [Validators.required]),
      "Test Created": new FormControl('', [Validators.required]),
    })
  }

  createTest(): void {
    const newTest = {...this.form.value, "Test Is Passed":"---", "Result":null}
    console.log(newTest)
    this.listService.createTest(newTest).subscribe({
      next: (value) => {
        console.log(value)
        this.error = false
        this.dialogRef.close()
      },
      error: (e) => {
        this.error = true
        console.log(e)
      }
    })
  }

  cancel() {
    this.dialogRef.close()
  }
}
