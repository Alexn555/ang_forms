# Ang-forms 

A simple Angular 4 base application
Based on pattern Angular 4, Systemjs, SCSS 
Written in Typescript


Contains:
   src/   - all styling files
   
     app /
     
	     common / common libraries, utilities
		    animations/
			modules / 
			pipes /
			services /
			templates /
			util /
		 core /  base module of components like header, footer etc
		    header, footer, page_not_found
		 public_zone / public module (not user or admin zone)
		    games /
			heroes /
			dynamic_list /
			contact /
			
		 rollup-config.ts - rollup i.e create bundle
		 app.componet.ts - starting (layout) component
		 app.module.ts -> bootstrap (stringing point)
	bs-config.json  - configuration for lite-server (npm lite-server)	

	
To minify scss and create css bundle
to build css -> gulp build:css

To start application

1. cmd -> cd [path to project]
2. cmd -> npm install
3. cmd -> npm run start
4. will open in browser (Chrome, Firefox) link: http://localhost:8080
5. page opens and navigate through links

