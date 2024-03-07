import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormControl, Validator} from '@angular/forms';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  // public formControl: FormControl;

  @Input() propertyName: string;
  @Input() inputValue: string;
  @Input() formChild : any;
  formControl: any;
  form: any;


}

