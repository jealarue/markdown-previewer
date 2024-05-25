!function () {
    "use strict";
  
    // Set options for the marked library
    marked.setOptions({
      // Enable line breaks in the markdown
      breaks: !0,
  
      // Define a function to highlight code using Prism.js
      highlight: function (e) {
        // Highlight the code as JavaScript using Prism.js
        return Prism.highlight(e, Prism.languages.javascript, "javascript");
      },
    });
  
    // Create a new instance of marked.Renderer to customize rendering
    const e = new marked.Renderer();
  
    // Override the default link rendering to open links in a new tab
    e.link = function (e, a) {
      // Return the modified HTML for the link
      return '<a target="_blank" href="'.concat(e, '">').concat(a, "</a>");
    };
  
    // Define a React component
    class t extends React.Component {
      // Constructor to initialize the component
      constructor(e) {
        // Call the parent constructor with the props
        super(e);
  
        // Set the initial state of the component
        (this.state = {
          // Initial markdown content
          markdown: r,
          // Flags to track if the editor or preview is maximized
          editorMaximized: !1,
          previewMaximized: !1,
        }),
  
        // Bind the event handlers to the current instance
        (this.handleChange = this.handleChange.bind(this)),
        (this.handleEditorMaximize = this.handleEditorMaximize.bind(this)),
        (this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this));
      }
        handleChange(e) {
        // Update the markdown content
        this.setState({ markdown: e.target.value }) 
      }
        handleEditorMaximize() {
        // Toggle the editor maximized state
        this.setState({ editorMaximized: !this.state.editorMaximized }) 
      }
        handlePreviewMaximize() {
        this.setState({ previewMaximized: !this.state.previewMaximized}) 
      }
        // Render the component next
                
        
      
    }
  };
  
