import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcForm;
  fuelRequired = "0.0";

  constructor(private router: Router) {
    setTimeout(()=>{},400);
    this.fuelRequired = "0.0";
   }

  ngOnInit(): void {
    this.fuelRequired = "0.0";
    this.calcForm = new FormGroup({
      lapTime: new FormControl("", [Validators.required, Validators.minLength(1)]),
      fuelRate: new FormControl("", [Validators.required, Validators.minLength(1)]),
      totalTime: new FormControl("", [Validators.required, Validators.minLength(1)]),
      additionalLaps: new FormControl("", [Validators.required, Validators.minLength(1)]),
    });
  }
  
  onClickSubmit(data) {
    console.log(((((parseFloat(data.totalTime)*60)/parseFloat(data.lapTime)) + 1) * parseFloat(data.fuelRate)).toFixed(1));
    this.fuelRequired = ((((parseFloat(data.totalTime)*60)/parseFloat(data.lapTime)) + parseFloat(data.additionalLaps)) * parseFloat(data.fuelRate)).toFixed(1);
  }

  toggle(){
    setTimeout(()=>this.router.navigateByUrl("/lap"), 400);
  }
}
