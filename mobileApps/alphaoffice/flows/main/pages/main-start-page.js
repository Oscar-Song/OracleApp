define([], () => {
  'use strict';

  class PageModule {
  }

  return PageModule;
});


require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojvalidation-datetime',
  'ojs/ojvalidation-number'],
    function(oj, ko, $)
    {    
      function DemoViewModel() 
      {
        var self = this;
        // for salary fields
        var priceOptions = {style: 'currency', currency: 'USD'};
        var salaryConverter =
          oj.Validation.converterFactory("number").createConverter(priceOptions);
        }
});  