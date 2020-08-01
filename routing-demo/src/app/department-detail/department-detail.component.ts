import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>
    <a class="Navigate" (click)="goPrevious()">Previous</a>
    <a class="Navigate" (click)="goNext()">Next</a>

    <div>
      <button class="goBack" (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')); //if use this method -> view won't update
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious(): void {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(): void {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  gotoDepartments(): void {
    let selectedId = this.departmentId ? this.departmentId : null;
    // optional parameter {id:1} because its value doesn't effect the path, it is just there so we can use it to highlight previously clicked one
    this.router.navigate(['/departments', { id: selectedId }]);
  }
}
