import '../MonacoEnvironment';
import * as React from 'react';
import * as monaco from 'monaco-editor';

const SAMPLE = `
function x() {
  console.log('Hello world!');
};
`.substring(1);

export class Editor extends React.PureComponent {
  private div!: HTMLDivElement;
  private divRef = (ref: HTMLDivElement) => (this.div = ref);

  public componentDidMount() {
    monaco.editor.create(this.div, {
      value: SAMPLE,
      language: 'typescript',
    });
  }

  public render() {
    const style = { width: 500, height: 300, border: `solid 1px ` };
    return <div ref={this.divRef} style={style} />;
  }
}

export default Editor;
