import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputChildDemo } from './practice/components-02/input-child-demo/input-child-demo';
import { Components02 } from './practice/components-02/components-02';
import { CustomDirective } from './practice/custom-directive';
import { StructureDir } from './practice/structure-dir';
import { RegisterForms } from './practice/forms-06/register-forms/register-forms';
import { ComponentA } from './practice/components-02/component-a/component-a';
import { ComponentB } from './practice/components-02/component-b/component-b';
import { SwitchmapSearch } from './practice/rxjs-07/switchmap-search/switchmap-search';
import { EmployeeFormArray } from './practice/employee-form-array/employee-form-array';
import { SignalsAngular1909 } from './practice/signals-angular19-09/signals-angular19-09';
import { ZoneMode } from './practice/components-02/zone-mode/zone-mode';
@Component({
  selector: 'app-root',
  imports: [SignalsAngular1909,EmployeeFormArray, RouterOutlet,InputChildDemo,Components02,CustomDirective,StructureDir,RegisterForms,ComponentA,ComponentB,SwitchmapSearch,ZoneMode],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend_learning_withStandalone');
}
