import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'itau-main-containers',
  templateUrl: './main-containers.component.html',
  styleUrls: ['./main-containers.component.scss']
})
export class MainContainersComponent {
  links = [
    { title: 'Dashboard', url: '/dashboard' },
  ];

  constructor(public route: ActivatedRoute, private sidebarService: NbSidebarService) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
