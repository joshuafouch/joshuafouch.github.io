import adapter from '@sveltejs/adapter-static';
 
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},
};
 
config.paths = { base: process.argv.includes('dev') ? '' : "/joshuafouch.github.io" }
 
export default config;
