import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OperatorService } from '../operator.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorComponent implements OnInit {

  constructor(private service: OperatorService) { }

  set operator(operator: string) {
    this.service.operator = operator;
  }
  get operator() {
    return this.service.operator;
  }

  ngOnInit() {

  }

}
