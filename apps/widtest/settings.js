(function(back) {
  E.showMenu({
    "" : { "title" : "Test Widget" },
    "< Back" : () => back(),
    'Test': {
      value: false,
      format: v => v?"True":"False",
      onchange: v => {
      }
    },
  });
})
