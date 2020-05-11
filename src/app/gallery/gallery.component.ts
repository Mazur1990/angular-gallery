import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent  {

  pictures = [
    'https://images.unsplash.com/photo-1538405505827-e519f0efb68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1558648243-33c2ca3bf161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    'https://images.unsplash.com/photo-1579487685737-e435a87b2518?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  ];

  currentIndex = 0;

  constructor() {
    setInterval(() =>{
      this.currentIndex = this.currentIndex + 1
      if (this.currentIndex === this.pictures.length){
        this.currentIndex = 0
      }
    }, 2000)
  }


  handleClick(index) {
    this.currentIndex = index
  }

  arrowNext() {
    this.currentIndex = this.currentIndex + 1
    if (this.currentIndex === this.pictures.length){
      this.currentIndex = 0
    }
  }
  
  arrowPrev() {
    this.currentIndex = this.currentIndex - 1
    if (this.currentIndex === -1){
      this.currentIndex = 2
    }
  }
  

}
