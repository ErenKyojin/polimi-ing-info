/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MathJaxWikiLinks
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var MathJaxWikiLinks = class extends import_obsidian.Plugin {
  async onload() {
    await (0, import_obsidian.loadMathJax)();
    this.registerMarkdownPostProcessor((element, context) => {
      element.querySelectorAll(".internal-link").forEach((link) => {
        let linkText = link.textContent.trim();
        if (linkText.contains("$")) {
          let isMath = false;
          let sections = linkText.split("$");
          link.innerText = "";
          for (let i = 0; i < sections.length; i++) {
            let text = sections[i];
            if (text != "") {
              if (isMath) {
                let mathLink = link.createSpan();
                mathLink.replaceWith((0, import_obsidian.renderMath)(text, false));
              } else {
                let wordLink = link.createSpan();
                wordLink.innerText += text;
              }
            }
            isMath = !isMath;
          }
          (0, import_obsidian.finishRenderMath)();
        }
      });
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBsb2FkTWF0aEpheCwgZmluaXNoUmVuZGVyTWF0aCwgcmVuZGVyTWF0aCB9IGZyb20gJ29ic2lkaWFuJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRoSmF4V2lraUxpbmtzIGV4dGVuZHMgUGx1Z2luIHtcblxuXHRhc3luYyBvbmxvYWQoKSB7XG5cbiAgICAgICAgYXdhaXQgbG9hZE1hdGhKYXgoKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKChlbGVtZW50LCBjb250ZXh0KSA9PiB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludGVybmFsLWxpbmsnKS5mb3JFYWNoKChsaW5rKSA9PiB7XG5cdFx0XHRcdGxldCBsaW5rVGV4dCA9IGxpbmsudGV4dENvbnRlbnQudHJpbSgpO1xuXG5cdFx0XHRcdGlmIChsaW5rVGV4dC5jb250YWlucyhcIiRcIikpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgaXNNYXRoID0gZmFsc2U7XG5cdFx0XHRcdFx0bGV0IHNlY3Rpb25zID0gbGlua1RleHQuc3BsaXQoXCIkXCIpO1xuXG5cdFx0XHRcdFx0bGluay5pbm5lclRleHQgPSAnJztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRsZXQgdGV4dCA9IHNlY3Rpb25zW2ldO1xuXG5cdFx0XHRcdFx0XHRpZiAodGV4dCAhPSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpc01hdGgpIHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgbWF0aExpbmsgPSBsaW5rLmNyZWF0ZVNwYW4oKTtcblx0XHRcdFx0XHRcdFx0XHRtYXRoTGluay5yZXBsYWNlV2l0aChyZW5kZXJNYXRoKHRleHQsIGZhbHNlKSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHdvcmRMaW5rID0gbGluay5jcmVhdGVTcGFuKCk7XG5cdFx0XHRcdFx0XHRcdFx0d29yZExpbmsuaW5uZXJUZXh0ICs9IHRleHQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aXNNYXRoID0gIWlzTWF0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmaW5pc2hSZW5kZXJNYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFrRTtBQUdsRSxJQUFxQixtQkFBckIsY0FBOEMsdUJBQU87QUFBQSxFQUVwRCxNQUFNLFNBQVM7QUFFUixVQUFNLGlDQUFZO0FBRWxCLFNBQUssOEJBQThCLENBQUMsU0FBUyxZQUFZO0FBRXJELGNBQVEsaUJBQWlCLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQ3JFLFlBQUksV0FBVyxLQUFLLFlBQVksS0FBSztBQUVyQyxZQUFJLFNBQVMsU0FBUyxHQUFHLEdBQUc7QUFFM0IsY0FBSSxTQUFTO0FBQ2IsY0FBSSxXQUFXLFNBQVMsTUFBTSxHQUFHO0FBRWpDLGVBQUssWUFBWTtBQUNqQixtQkFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN6QyxnQkFBSSxPQUFPLFNBQVM7QUFFcEIsZ0JBQUksUUFBUSxJQUFJO0FBQ2Ysa0JBQUksUUFBUTtBQUNYLG9CQUFJLFdBQVcsS0FBSyxXQUFXO0FBQy9CLHlCQUFTLFlBQVksZ0NBQVcsTUFBTSxLQUFLLENBQUM7QUFBQSxjQUM3QyxPQUFPO0FBQ04sb0JBQUksV0FBVyxLQUFLLFdBQVc7QUFDL0IseUJBQVMsYUFBYTtBQUFBLGNBQ3ZCO0FBQUEsWUFDRDtBQUVBLHFCQUFTLENBQUM7QUFBQSxVQUNYO0FBRUEsZ0RBQWlCO0FBQUEsUUFDTjtBQUFBLE1BQ0osQ0FBQztBQUFBLElBQ0wsQ0FBQztBQUFBLEVBQ1I7QUFDRDsiLAogICJuYW1lcyI6IFtdCn0K
