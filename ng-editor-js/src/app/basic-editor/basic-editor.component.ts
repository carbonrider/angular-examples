import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'app-basic-editor',
  templateUrl: './basic-editor.component.html',
  styleUrls: ['./basic-editor.component.scss']
})
export class BasicEditorComponent implements OnInit, AfterViewInit {

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
      holder: this.editorElement.nativeElement
    });
  }

  showEditorData() {
    this.editor.save().then(data => {
      console.dir(data);
    })
  }

}
