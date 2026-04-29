import { Component, signal ,viewChild,ViewChild,ViewContainerRef} from '@angular/core';
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
import { TableForm } from './practice/forms-06/table-form/table-form';
import { RxjsForkjoinCombinelatestDemo } from './practice/rxjs-07/rxjs-forkjoin-combinelatest-demo/rxjs-forkjoin-combinelatest-demo';
import { JsonComp } from './json-comp/json-comp';
import { HelloDynamicComponent } from './practice/hello-dynamic-component/hello-dynamic-component';
import { FormControlExample } from './practice/forms-06/form-control-example/form-control-example';
import { VirtualScrollRenderUserList } from './practice/virtual-scroll-render-user-list/virtual-scroll-render-user-list';
import { Basics01 } from './practice/basics-01/basics-01';
import { ContentHeader } from './practice/basics-01/content-header/content-header';
import { LayoutParent } from './practice/basics-01/layout-parent/layout-parent';
import { PipeDemo } from './practice/pipe-demo/pipe-demo';
import { InfiniteScroll } from './practice/infinite-scroll/infinite-scroll';
import { PaginationDemo } from './practice/pagination-demo/pagination-demo';
import { ServicesDi04 } from './practice/services-di-04/services-di-04';
import { SkillFormArray } from './practice/forms-06/skill-form-array/skill-form-array';
import { POCPractise } from './poc-practise/poc-practise';
import { BehaviorsubjectSubjectDemo } from './practice/rxjs-07/behaviorsubject-subject-demo/behaviorsubject-subject-demo';
import { ChangeDetectionParent } from './practice/change-detection-08/change-detection-parent/change-detection-parent';
import { DynamicForms } from './practice/dynamic-forms/dynamic-forms';
// import { DynamicReacticeForms } from './practice/dynamic-reactice-forms/dynamic-reactice-forms';
@Component({
  selector: 'app-root',
  // imports: [SkillFormArray,ServicesDi04,PaginationDemo,InfiniteScroll,PipeDemo,Basics01, VirtualScrollRenderUserList,FormControlExample,JsonComp, RxjsForkjoinCombinelatestDemo, TableForm, SignalsAngular1909,EmployeeFormArray, RouterOutlet,InputChildDemo,Components02,CustomDirective,StructureDir,RegisterForms,ComponentA,ComponentB,SwitchmapSearch,ZoneMode],
  imports:[DynamicForms,ChangeDetectionParent,BehaviorsubjectSubjectDemo,SignalsAngular1909,POCPractise,ZoneMode,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend_learning_withStandalone');
  constructor(){}


  
  // 3. Capture the container reference
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  // 4. Method that creates the component dynamically
  load() {
    // 5. Remove anything previously inside container
    this.container.clear();

    // 6. Create component inside that container
    const cmp = this.container.createComponent(HelloDynamicComponent);

    // 7. Pass input data to dynamic component
    cmp.instance.name = 'Ali';
  }

}
