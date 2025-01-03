import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DividerComponent } from "../../shared/divider/divider.component";
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../accordion/accordion.component";
import { title } from 'process';

@Component({
  selector: 'app-mod-home',
  standalone: true,
  imports: [ModalComponent, DividerComponent, CommonModule, AccordionComponent],
  templateUrl: './mod-home.component.html',
  styleUrl: './mod-home.component.css'
})
export class ModHomeComponent {
  modalOpen = false;

  items = [
    {title: 'Why is the sky blue',content: 'The sky is blue because it is'},
    {title: 'What does an orange tests like?', content: 'An orange tastes like an orange'},
    {title: 'What color is that cat', content: 'The cat is an orange color'}
  ];

  onClick()
  {
    this.modalOpen = !this.modalOpen;
  }

}
