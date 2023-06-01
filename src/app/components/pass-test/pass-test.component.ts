import {Component, OnInit} from '@angular/core';
import {PassTestService} from "../../services/pass-test.service";
import {IPassTest} from "../../interface/pass-test.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-create-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.scss']
})
export class PassTestComponent implements OnInit {
  test: IPassTest;

  constructor(private passTestService: PassTestService,
              private activatedRoute: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const testId = params['testId'];
      console.log(testId, 1111)
      this.uploadTest(testId);
    })
  };

  uploadTest(id: number): void {
    this.passTestService.getTestById(id).subscribe({
      next: (value) => {
        this.test = value
      }
    })
  };

}
