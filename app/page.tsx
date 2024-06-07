"use client";
import Nav from "./components/navbar/page";
import { Products } from "./components/products/page";
import SidebarFilter from "./components/sidebar/page";
import Slide from "./components/slide/page";
import Split from "./components/split/page";
import { FooterComp } from "./components/footer/page";

export default function Home() {
	return (
		<div className="md:container md:mx-auto">
			<Nav />
			<Slide />
			<Split />
			<div className="flex flex-col sm:flex-row gap-4">
				<SidebarFilter />
				<Products />
			</div>
			<FooterComp />
		</div>
	);
}
