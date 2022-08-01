import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/header';

@Component({
  selector: 'app-common-plugin',
  templateUrl: './common-plugin.component.html',
  styleUrls: ['./common-plugin.component.scss']
})
export class CommonPluginComponent implements OnInit, AfterViewInit {

  private editor!: EditorJS;

  @ViewChild('editor', { read: ElementRef, static: true })
  private editorWrapper!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.editor = new EditorJS({
      holder: this.editorWrapper.nativeElement,
      minHeight: 200,
      tools: {
        header: {
          class: Header as any,
          inlineToolbar: ['bold', 'italic']
        }
      }
    });
  }

  showContent() {
    this.editor.save().then((data) => {
      console.dir(data);
    });
  }

}
