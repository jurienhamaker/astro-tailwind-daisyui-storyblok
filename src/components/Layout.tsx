import type { THEME_CLASS } from '@utils/consts';
import { Theme } from 'react-daisyui';
import { Footer } from './Footer';
import { Navigation, NavigationProps } from './Navigation';

export interface LayoutProps extends NavigationProps {
	theme: THEME_CLASS;
	children: any;
}

export const Layout = ({
	children,
	locale,
	links,
	logo,
	theme,
}: LayoutProps) => {
	return (
		<Theme dataTheme={theme} className="h-screen w-full flex flex-col">
			<Navigation links={links} locale={locale} logo={logo} />

			{children}

			<Footer locale={locale} footerNavigation={{}} />
		</Theme>
	);
};
