import { 
  Component, 
  ElementRef, 
  HostListener, 
  inject, 
  input, 
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control',
   // '(click)' :'onclic()' //To get the event alternative approach than HostListner
  }
})
export class ControlComponent {
label = input.required<string>(); 
//To get the event
@HostListener('click') onclick(){
  console.log('clicked')
}
//This will provide you the value of host element ex 'app-control' 
private el = inject(ElementRef)
 onclic(){
   console.log('clicked!')
   console.log(this.el)
}
}
