import {Component} from '@angular/core';

export interface PeriodicElement {
  "Test Name": string;
  "Doctor": string;
  "Test Created": string;
  "Test Is Passed": string;
  "Result": number | null;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {"Test Name": 'Hydrogen', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'---', "Result":null},
  {"Test Name": 'Helium', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023 ', "Result":5},
  {"Test Name": 'Lithium', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'--- ', "Result":null},
  {"Test Name": 'Beryllium', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023 ', "Result":8},
  {"Test Name": 'Boron', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023', "Result":3},
  {"Test Name": 'Carbon', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023', "Result":10},
  {"Test Name": 'Nitrogen', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023', "Result":5},
  {"Test Name": 'Oxygen', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023', "Result":8},
  {"Test Name": 'Fluorine', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'31/05/2023', "Result":5},
  {"Test Name": 'Neon', "Doctor": 'Mykola', "Test Created": '31/05/2023', "Test Is Passed":'--- ', "Result":null},
];

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})

export class TestListComponent {
  displayedColumns: string[] = ['Test Name', 'Doctor', 'Test Created', 'Test Is Passed', 'Result'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addTest() {

  };

  removeTest() {

  };

}
