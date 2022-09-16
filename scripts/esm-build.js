import build from './build.js';

export default ([
	{
		input: 'entry/entry-core.js',
		output: Object.assign({}, build.output, {
			file: 'modular/sortable.core.esm.mjs',
			format: 'esm'
		})
	},
	{
		input: 'entry/entry-defaults.js',
		output: Object.assign({}, build.output, {
			file: 'modular/sortable.esm.mjs',
			format: 'esm'
		})
	},
	{
		input: 'entry/entry-complete.js',
		output: Object.assign({}, build.output, {
			file: 'modular/sortable.complete.esm.mjs',
			format: 'esm'
		})
	}
]).map(config => {
	let buildCopy = { ...build };
	return Object.assign(buildCopy, config);
});
