import { Footer as DFooter } from 'react-daisyui';

export interface FooterProps {
	locale: string;
	footerNavigation: {
		links?: {
			url: string;
		}[];
	};
}

export const Footer = ({ footerNavigation, locale }: FooterProps) => {
	return (
		<DFooter className="bg-neutral p-10 text-neutral-content mt-auto">
			<div>
				<DFooter.Title>Services</DFooter.Title>
				<a className="link link-hover">Branding</a>
				<a className="link link-hover">Design</a>
				<a className="link link-hover">Marketing</a>
				<a className="link link-hover">Advertisement</a>
			</div>
			<div>
				<DFooter.Title>Company</DFooter.Title>
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Jobs</a>
				<a className="link link-hover">Press kit</a>
			</div>
			<div>
				<DFooter.Title>Legal</DFooter.Title>
				<a className="link link-hover">Terms of use</a>
				<a className="link link-hover">Privacy policy</a>
				<a className="link link-hover">Cookie policy</a>
			</div>
		</DFooter>
	);
};
