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
    e.link = function (e, t, a) {
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
        this.setState({ markdown: e.target.value });
      }
      handleEditorMaximize() {
        // Toggle the editor maximized state
        this.setState({ editorMaximized: !this.state.editorMaximized });
      }
      handlePreviewMaximize() {
        this.setState({ previewMaximized: !this.state.previewMaximized });
      }
      // Render the component next
      render() {
        // Determine the class names and icon based on the state
        const e = this.state.editorMaximized
          ? ["editorWrap maximized", "previewWrap hide", "fa fa-compress"]
          : this.state.previewMaximized
          ? ["editorWrap hide", "previewWrap maximized", "fa fa-compress"]
          : ["editorWrap", "previewWrap", "fa fa-arrows-alt"];
  
        // Return the React elements
        return React.createElement(
          "div",
          null,
          // Editor section
          React.createElement(
            "div",
            {
              className: e[0], // Apply class name based on state
            },
            // Editor toolbar with maximize/minimize button
            React.createElement(a, {
              icon: e[2], // Icon class name based on state
              onClick: this.handleEditorMaximize, // Event handler for maximizing/minimizing editor
              text: "Editor", // Button text
            }),
            // Editor component
            React.createElement(n, {
              markdown: this.state.markdown, // Pass markdown content as prop
              onChange: this.handleChange, // Event handler for changes in the editor
            })
          ),
  
          // Converter section (currently empty)
          React.createElement("div", {
            className: "converter",
          }),
  
          // Previewer section
          React.createElement(
            "div",
            {
              className: e[1], // Apply class name based on state
            },
            // Previewer toolbar with maximize/minimize button
            React.createElement(a, {
              icon: e[2], // Icon class name based on state
              onClick: this.handlePreviewMaximize, // Event handler for maximizing/minimizing previewer
              text: "Previewer", // Button text
            }),
            // Previewer component
            React.createElement(i, {
              markdown: this.state.markdown, // Pass markdown content as prop
            })
          )
        )
      }
    }
    // Toolbar component definition
    const a = (e) =>
        React.createElement(
          "div",
          {
            className: "toolbar",
          },
          React.createElement("i", {
            className: "fa fa-free-code-camp",
            title: "no-stack-dub-sack",
          }),
          e.text,
          React.createElement("i", {
            className: e.icon,
            onClick: e.onClick,
          })
        ),
      n = (e) =>
        React.createElement("textarea", {
          id: "editor",
          onChange: e.onChange,
          type: "text",
          value: e.markdown,
        }),
      i = (t) =>
        React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: marked(t.markdown, {
              renderer: e,
            }),
          },
          id: "preview",
        }),
         r = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)\n";
        ReactDOM.render(React.createElement(t, null), document.getElementById("app"))
    }();
    