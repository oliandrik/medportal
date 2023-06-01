import {Component, OnInit} from '@angular/core';
import {ITestList} from "../../interface";
import {TestListService} from "../../services/test-list.service";
import {EditCreateTestListModalComponent} from "../edit-create-test-list-modal/edit-create-test-list-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
              private dialog: MatDialog) {
  };

  ngOnInit(): void {
    this.testListService.getAllList().subscribe(value => {
      if(value.length > 0){
        this.dataSource = value
      console.log(this.dataSource)
      }
    })
  };


  addTest() {

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
}
