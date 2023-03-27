import 'styled-components';

import type Theme from './Theme';

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	export interface DefaultTheme extends Theme {}
}
