<%*
let filetype = await tp.system.suggester(["Basic"],["Basic"], false, "Template?")
if (filetype === "Basic")
tp.file.include("[[Basic template]]")
%>