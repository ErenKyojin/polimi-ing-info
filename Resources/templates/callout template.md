<%*
//get selection
noteContent = tp.file.selection();
calloutTitle = await tp.system.prompt("Callout title?")
//get array of lines
lines = noteContent.split('\n')
//make a new string with > prepended to each line
let newContent = "";
lines.forEach(l => {
	newContent += '> ' + l + "\n";
})
//remove the last newline character
newContent = newContent.replace(/\n$/, "");

//define callout header
header = `> [!${calloutTitle}]-\n`
// Return the complete callout block
return header + newContent;
%>

