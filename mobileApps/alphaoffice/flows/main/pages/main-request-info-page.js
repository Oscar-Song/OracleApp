define([], () => {
  'use strict';

  class PageModule {}

  PageModule.prototype.isFormValid = function(form) {
    var tracker = document.getElementById(form)

    if (tracker.valid === "valid") {
      return true
    } else {
      tracker.showMessages();
      tracker.focusOn("@firstInvalidShown")
      return false;
    }
  }
  
//    this.emailPatternValidator = ko.observableArray([
//           new AsyncRegExpValidator(
//             {
//               pattern: "[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*",
//               hint: "enter a valid email format",
//               messageDetail: "Not a valid email format"
//             }
//           )
//         ]);
  

  return PageModule;
});