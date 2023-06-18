import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  patients: any[] = [];

  ngOnInit() {
    this.patients.push(
      {
        fullname: 'Демʼяненко Д.В.',
        diagnosis: 'Артеріальна гіпертензія:',
        date: '11/06/2023',
        state: 'поганий',
      },
      {
        fullname: 'Закулісенко М.С.',
        diagnosis: 'Ревматоїдний артрит',
        date: '04/03/2023',
        state: 'середній',
      },
      {
        fullname: 'Єлісеєва Л.І.',
        diagnosis: 'Остеоартроз',
        date: '27/01/2023',
        state: 'покращений',
      },
      {
        fullname: 'Желудько У.В.',
        diagnosis: 'Хронічна хвороба нирок',
        date: '15/06/2023',
        state: 'проходження тестів',
      }
    );
  }
}
