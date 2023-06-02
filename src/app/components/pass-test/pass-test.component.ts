import {Component, OnInit} from '@angular/core';
import {PassTestService} from "../../services/pass-test.service";
import {IPassTest, ITotalScore} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";

import {IdService, TestListService} from "../../services";

@Component({
  selector: 'app-edit-create-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.scss']
})
export class PassTestComponent implements OnInit {
  test: IPassTest;
  buttonScore: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  selected: FormControl<number | null> = new FormControl(0);
  isTabDisabled: Array<number> = [];
  totalScore: ITotalScore[];
  testResult: number;
  error: boolean = false;
  testListId:number|null;

  constructor(private passTestService: PassTestService,
              private activatedRoute: ActivatedRoute,
              private testListService: TestListService,
              private idService: IdService,
              private router: Router) {
  };

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const testId = params['testId'];
      this.uploadTest(testId);
    })
    this.idService.getId().subscribe(id => {
      if (id === null) {
        console.log('ssssssssssssssss')
        this.router.navigate(['/test-list'])
      }
    })
  };


  onQuestion(index: number, score: number): void {
    const answer = {score, index};
    if (this.totalScore?.length) {
      this.totalScore.push(answer)
    } else {
      this.totalScore = [answer]
    }
    this.selected.setValue(index + 1)
    this.isTabDisabled.push(index)
  }

  onCompleteTest(): void {
    this.testResult = 0;
    if (+this.test.testId === 1) {
      this.totalScore.forEach(res => {
        if (res.index >= 0 && res.index <= 3) {
          this.testResult += res.score;
        } else if (res.index >= 4 && res.index <= 5) {
          this.testResult += res.score / 2;
        }
      });
    } else if (+this.test.testId === 2) {
      this.totalScore.forEach(res => {
        this.testResult += res.score / 10
      })
    }
////
    this.idService.getId().subscribe(id => {
      this.testListId = id
    })
    const newData = new Date().toString()
    this.testListId && this.testListService.updateTest(this.testListId, {"Test Is Passed": newData, "Result": this.testResult})
      .subscribe({
        next: (value) => {
          this.router.navigate(['./test-list'])
      this.idService.removeId()
        },
        error: (e) => {
          this.error = true;
          console.log(e)
        }
      })
  }

  uploadTest(id: number): void {
    this.passTestService.getTestById(id).subscribe({
      next: (value) => {
        this.test = value
      }
    })
  };
}
