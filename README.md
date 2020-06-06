# 3D Cafe

The set-up used to load the scenes in this repo was with Browserify and Python / npm HTTP server (other tools could be used, with appropriate modification).

For example, to load the scenes in the samples folder, run the following:

1. Install [Browserify](http://browserify.org/#install)
2. Run ```browserify samples/<.js> -o bundle.js```
3. Use either the Python or the npm HTTP server (refer [here](https://threejs.org/docs/index.html#manual/en/introduction/How-to-run-things-locally) for instructions)