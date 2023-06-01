import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TestListService} from "../../services/test-list.service";
import {animate, state, style, transition, trigger} from '@angular/animations';

import {ITestList} from "../../interface";
import {EditCreateTestListModalComponent} from "../edit-create-test-list-modal/edit-create-test-list-modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TestListComponent implements OnInit {
  dataSource: ITestList[] | [];
  columnsToDisplay = ['Test Name', 'Doctor', 'Test Created', 'Test Is Passed', 'Result'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: ITestList | null;

  constructor(private testListService: TestListService,
              private dialog: MatDialog,
              private router:Router) {
  };

  ngOnInit(): void {
    this.testListService.getAllList().subscribe(value => {
      if (value.length > 0) {
        this.dataSource = value.map(obj => {
          const modifiedObj = { ...obj };
          modifiedObj["Test Created"] = modifiedObj["Test Created"]?.split('T')[0];
          return modifiedObj;
        });

        console.log(this.dataSource)
      }
    })
  };

  removeTest() {

  };


  createTest() {
    this.dialog.open(EditCreateTestListModalComponent, {
        disableClose: true,
        enterAnimationDuration: '1s',
        exitAnimationDuration: '1s',
        hasBackdrop: false
      }
    )
  }

  onPassTest(testId:number):void {
    this.router.navigate(['/pass-test'], {queryParams: {testId}})
  }
}
