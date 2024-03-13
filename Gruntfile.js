module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: "dist",
          keepalive: true,
          open: true,
          livereload: true,
        },
      },
    },
    concat: {
      html: {
        src: ["src/index.html"],
        dest: "dist/index.html",
      },
    },
    uglify: {
      js: {
        files: {
          "dist/js/script.js": "src/js/script.js",
        },
      },
    },
    sass: {
      dev: {
        options: {
          style: "compressed",
          "no-source-map": true,
        },
        files: {
          "dist/css/styles.css": "src/scss/styles.scss",
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      all: {
        files: ["src/scss/**/*.scss", "src/index.html", "src/js/**/*.js"],
        tasks: ["sass:dev", "concat", "uglify"],
      },
    },
    concurrent: {
      dev: {
        tasks: ["watch", "connect:server"],
        options: {
          logConcurrentOutput: true,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", [
    "sass:dev",
    "concat",
    "uglify",
    "concurrent:dev",
  ]);
};
