function daily_note_pin(){
  const activeFile = app.workspace.getActiveLeaf();
  app.workspace.iterateAllLeaves((leaf) => {
    leaf.detach();
  })
  app.commands.executeCommandById("daily-notes:")
  app.commands.executeCommandById("workspace:toggle-pin");
  console.log("pin");
  return "";
}

module.exports = daily_note_pin;
