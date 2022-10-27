import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';

export interface NavigationProps {
	locale: string;
	links: {
		link: {
			url: string;
		};
		label: string;
	}[];
	logo: {
		filename: string;
		alt: string;
	};
}

export const Navigation = ({ logo, links, locale }: NavigationProps) => {
	return (
		<Navbar>
			<Navbar.Start>
				<Dropdown>
					<Button color="ghost" tabIndex={0} className="lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</Button>
					<Dropdown.Menu
						tabIndex={0}
						className="menu-compact mt-3 w-52"
					>
						<Dropdown.Item>Item 1</Dropdown.Item>
						<li tabIndex={0}>
							<a className="justify-between">
								Parent
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</a>
							<ul className="bg-base-100 p-2">
								{links.map((link, key) => (
									<li key={key}>
										<a href={link.link.url}>{link.label}</a>
									</li>
								))}
							</ul>
						</li>
						<Dropdown.Item>Item 3</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<a href="/">
					<img src={logo.filename} alt={logo.alt} className="h-12" />
				</a>
			</Navbar.Start>
			<Navbar.End className="hidden lg:flex">
				<Menu horizontal className="p-0">
					{links.map((link, key) => (
						<Menu.Item key={key}>
							<a href={link.link.url}>{link.label}</a>
						</Menu.Item>
					))}
				</Menu>
			</Navbar.End>
		</Navbar>
	);
};
