import {useSyncExternalStore} from 'react';

import SelectStore, {type SelectStoreSnapshot} from '../stores/SelectStore';

const selectStore = new SelectStore();

export default function useCounterStore(): [SelectStoreSnapshot, SelectStore] {
	const snapshot = useSyncExternalStore(
		onStoreChange => {
			selectStore.addListener(onStoreChange);
			return () => {
				selectStore.removeListener(onStoreChange);
			};
		},
		() => selectStore.getSnapshot(),
	);

	return [snapshot, selectStore];
}
