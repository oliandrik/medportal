import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
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

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
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
