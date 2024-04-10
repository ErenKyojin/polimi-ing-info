function daily_note_pin(){
  const activeFile = app.workspace.getActiveFile();
  app.workspace.iterateAllLeaves((leaf) => {
    leaf.detach();
  })
  app.commands.executeCommandById("workspace:toggle-pin");
  console.log("pin");
  return "";
}

module.exports = daily_note_pin;
