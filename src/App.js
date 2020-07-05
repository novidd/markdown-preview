import React from 'react';
import marked from "marked";

const placeholder = 
`# This is a bold header
## This a subheader

**Bold text**

[This is a link](https://www.google.com "Google's homepage")

\`const succes = "I am inline code";\`

\`\`\`
const succesBlock = () => {
  console.log("I am block code"); 
}
succesBlock();
\`\`\`

1. I am a ordered list
1. I am a ordered list

> I am a block quote

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Image")
`;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    document.getElementById('preview').innerHTML = marked(this.state.markdown);
    marked.setOptions({
      "breaks": true
    });
    return (
      <div className="App">
        <h1>Editor</h1>
        <textarea onChange={this.handleChange} id="editor">{this.state.markdown}</textarea>
      </div>
    );
  }
}

export default App;
