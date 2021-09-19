export const EventListenerManager = (() => {
	let listeners = {};

	const add = (domElement, event, callback) => {
		if (
			!listeners.hasOwnProperty(domElement) ||
			!listeners[domElement].hasOwnProperty(event)
		) {
			// either we don't have the domElement property,
			//   or that domElement hasn't registered this event.
			//   either way, we go ahead and make one.
			listeners[domElement] = listeners.hasOwnProperty(domElement)
				? listeners[domElement]
				: {};

			listeners[domElement][event] = [callback];
		} else {
			// does this particular domElement already have this callback registered?
			listeners[domElement][event] = listeners[domElement][event].includes(
				callback
			)
				? listeners[domElement][event]
				: // if not, add it!
				  [...listeners[domElement][event], callback];
		}
		// finally, let's go ahead and add the listener.
		domElement.addEventListener(event, callback);
	};

	const remove = (domElement, event, callback) => {
		// first, we remove the callback from the listeners object...
		if (listeners[domElement] && listeners[domElement][event]) {
			listeners[domElement][event] = listeners[domElement][event].filter(
				cb => cb !== callback
			);
		}
		// and we remove the listener...
		domElement.removeEventListener(event, callback);

		// and again, we return this for chaining
		return this;
	};

	const list = (domElement, event = null) => {
		if (!domElement) throw new Error('get: domElement is required!');
		if (event) {
			return listeners[domElement][event];
		} else {
			return listeners[domElement];
		}
	};
	const removeAll = (domElement, event = null) => {
		if (!domElement) throw new Error('removeAll: domElement is required!');
		if (event) {
			// here, we're only removing all of a given event type:
			if (listeners[domElement] && listeners[domElement][event]) {
				// we create a new array, so we can mutate the original without
				//  breaking our forEach!
				[...listeners[domElement][event]].forEach(callback => {
					remove(domElement, event, callback);
				});
			}
		} else {
			// in this case, we want to remove all event listeners from the given
			//   dom element. Whee!!!
			if (listeners[domElement]) {
				const events = Object.keys(listeners[domElement]);
				// given the events, we can recursively call the removeAll for each event!
				events.forEach(event => removeAll(domElement, event));
			}
		}
		// and as always, return this
		return this;
	};

	return {
		add,
		remove,
		removeAll,
		list,
	};
})();
