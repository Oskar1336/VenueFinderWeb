

export function searchForEvent(event, eventList) {
	for (var i = 0; i < eventList.length; i++) {
		if (JSON.stringify(event) === JSON.stringify(eventList[i])) {
			return true;
		}
	}
	return false;
};