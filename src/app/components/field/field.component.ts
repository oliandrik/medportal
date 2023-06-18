import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  template: `
    <ng-container *ngIf="!isEditing; else editMode">
      <div class="flex">
        <p>{{ value }}</p>
      </div>
    </ng-container>

    <ng-template #editMode>
      <input [(ngModel)]="value" style="width: 98%" />
    </ng-template>
  `,
})
export class FieldComponent {
  @Input() value: string;
  @Input() isEditing: boolean;
  @Output() valueChange = new EventEmitter<string>();

  constructor() {
    this.value = '';
  }
}
