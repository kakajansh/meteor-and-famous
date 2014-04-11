if (Meteor.isClient) {

  Famous.loaded(function () {
      var Engine = Famous.Engine,
          Surface = Famous.Surface,
          View = Famous.View,
          Transform = Famous.Transform,
          // Easing = Famous.Easing,
          ScrollView = Famous.Scrollview
          Modifier = Famous.Modifier;

      function App() {
          View.apply(this, arguments);

          // assign the layout to this view
          this.add(new Surface({
              content: Famous.render(Template.hello)
          }));
      }

      App.prototype = Object.create(View.prototype);
      App.prototype.constructor = App;

      var app = new App();

      // hook the app into the context
      // var mainDisplay = Engine.createContext();

      var mainCtx = Engine.createContext();
      // mainCtx.add(app);
      // Engine.pipe(app);

      // console.log(ScrollView)

      // Create a scrollview and array to hold surfaces
      var scrollView = new ScrollView();
      var surfaces = [];

      // Create a numbered surface
      function createSurface(number) {
        return new Surface({
          size: [undefined, 100],
          content: "Surface " + number,
          classes: ["test-surface", (i % 2 ? "odd" : "even")]
        });
      }

      // Add many surfaces to the scrollView
      for (var i = 0;i < 20;i++) {
        surfaces.push(createSurface(i));
      }

      // Include the surfaces in the scrollview and pipe
      // events to it from the engine
      scrollView.sequenceFrom(surfaces);
      Engine.pipe(scrollView);

      // console.log(mainCtx.link())
      mainCtx.add(scrollView);
  });

  Template.hello.greeting = function () {
    return "Welcome to famous.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
 