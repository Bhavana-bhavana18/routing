import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { TimesDirective } from '../times.directive';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule, TimesDirective],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;
  constructor() {}

  ngOnInit(): void {}
}
