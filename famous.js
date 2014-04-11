if (Meteor.isClient) {
  Famous.loaded(function () {
      var Engine = Famous.Engine,
          Surface = Famous.Surface,
          View = Famous.View,
          Transform = Famous.Transform,
          ScrollView = Famous.Scrollview
          Modifier = Famous.Modifier;

      var mainCtx = Engine.createContext();

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

      mainCtx.add(scrollView);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
 