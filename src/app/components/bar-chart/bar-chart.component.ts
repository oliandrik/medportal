import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarchartComponent {
  public multi = [
    {
      name: 'Пацієнт 1',
      series: [
        {
          name: 'тест 1',
          value: 50,
        },
        {
          name: 'тест 2',
          value: 46,
        },
        {
          name: 'тест 3',
          value: 41,
        },
      ],
    },

    {
      name: 'Пацієнт 2',
      series: [
        {
          name: 'тест 1',
          value: 46,
        },
        {
          name: 'тест 2',
          value: 35,
        },
      ],
    },

    {
      name: 'Пацієнт 3',
      series: [
        {
          name: 'тест 1',
          value: 38,
        },
        {
          name: 'тест 2',
          value: 35,
        },
        {
          name: 'тест 3',
          value: 32,
        },
      ],
    },

    {
      name: 'Пацієнт 4',
      series: [
        {
          name: 'тест 1',
          value: 48,
        },
        {
          name: 'тест 2',
          value: 40,
        },
        {
          name: 'тест 3',
          value: 32,
        },
      ],
    },
  ];

  view: any = [800, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  colorScheme: Color = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
    name: '',
    selectable: false,
    group: ScaleType.Ordinal,
  };

  constructor() {
    Object.assign(this, ...this.multi);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
