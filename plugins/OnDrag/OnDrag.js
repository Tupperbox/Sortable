import dispatchEvent from '../../src/EventDispatcher.js';

function OnDragPlugin() {
	function OnDrag() { }

	OnDrag.prototype = {
		dragOver(evt) {
			const { sortable, rootEl, dragEl, originalEvent } = evt;
			dispatchEvent({
				sortable,
				rootEl,
				name: 'drag',
				targetEl: dragEl,
				originalEvent
			});
		},

		dragEnter(evt) {
		}
	};

	return Object.assign(OnDrag, {
		pluginName: 'onDrag'
	});
}

export default OnDragPlugin;