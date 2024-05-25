!function() {
    "use strict";
    marked.setOptions({
        breaks: !0,
        highlight: function(e) {
            return Prism.highlight(e, Prism.languages.javascript, "javascript")
        }
    });
    const e = new marked.Renderer;
    e.link = function(e, a) {
     return '<a target="_blank" href="'.concat(e, '">').concat(a, "</a>")
    };
 }
