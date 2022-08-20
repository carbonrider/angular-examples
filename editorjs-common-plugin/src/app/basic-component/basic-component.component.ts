import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/header';
import Table from '@editorjs/table';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.scss']
})
export class BasicComponentComponent implements OnInit, AfterViewInit {

  @ViewChild('editor', { read: ElementRef })
  editorElement: ElementRef;

  private editor: EditorJS;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeEditor();
  }

  private initializeEditor() {
    this.editor = new EditorJS({
      minHeight: 200,
      holder: this.editorElement.nativeElement,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['bold', 'italic']
        },
        table: Table
      }
    });
  }

  showEditorData() {
    this.editor.save().then(data => {
      console.dir(data);
    })
  }

}
