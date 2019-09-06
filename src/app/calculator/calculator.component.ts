import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { OperatorService } from '../operator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent implements OnInit, DoCheck {

  constructor(private service: OperatorService) { }

  @Input()
  input1: number = 0;

  @Input()
  input2: number = 0;

  value: number;

  ngOnInit() {
  }

  calculate() {
    this.value = eval(this.input1 + this.service.operator + this.input2);
  }

  ngDoCheck() {
    this.calculate();
  }
}
