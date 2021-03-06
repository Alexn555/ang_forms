/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    //transpiler: 'typescript',
    //typescriptOptions: {
    //   emitDecoratorMetadata: true
    //},
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      //'ngx-pagination': 'https://npmcdn.com/ngx-pagination',
      'ngx-pagination': 'npm:ngx-pagination/dist/ngx-pagination.umd.js',
      'ng2-notify-popup' : 'npm:ng2-notify-popup/index.umd.js',
      //'ng2-notify-popup' : 'npm:ng2-notify-popup',
      'ng2-overlay' : 'npm:ng2-overlay/dist',
      'ng2-popup' : 'npm:ng2-popup/dist',

      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'lodash': 'node_modules/lodash/lodash.js'

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          },
		  ".*.scss": { 
			loader: "npm:sass-loader"
		  }
		  
          //'*.ts': {
          //   format: 'es6'
          //}
        }
      },
      rxjs: {
         defaultExtension: 'js'
      },
      'ngx-pagination': {
          defaultExtension: 'js'
      },
      'ng2-notify-popup' : {
         //main:'./index.js',
         defaultExtension : 'js'
      },
      'ng2-overlay': {
          main: 'ng2-overlay.umd.js',
          defaultExtension : 'js'
      },
      'ng2-popup': {
         main: 'ng2-popup.umd.js',
         defaultExtension : 'js'
      }

    }
  });
})(this);
