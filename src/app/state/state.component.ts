import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit , OnDestroy {
  multiSelect1: { name: string; }[];

  constructor(@Inject (DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.multiSelect1 = [{name: 'Karnataka'}, {name: 'Andhra Pradesh'}, {name: 'Tamil Nadu'},
    {name: 'Maharashtra'}, {name: 'Kerala'}, {name: 'Telangana'}];
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
