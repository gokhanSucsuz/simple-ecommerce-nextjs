"use client";

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import favIcon from "../../favicon.ico";
import { TbJewishStar } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import { FcShop } from "react-icons/fc";

export default function Nav() {
	return (
		<Navbar rounded>
			<Navbar.Brand href="http://localhost:3000">
				<FcShop className="text-5xl mx-4 py-1" />
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Simple eCommerce
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2 ">
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded
						/>
					}>
					<Dropdown.Header>
						<span className="block text-sm">Gökhan SUÇSUZ</span>
						<span className="block truncate text-sm font-medium">
							coolpisces22@gmail.com
						</span>
					</Dropdown.Header>
					<Dropdown.Item>Dashboard</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
				<DarkThemeToggle className="mx-4" />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">
					<span className="flex gap-2 items-center">
						<TbJewishStar className="text-2xl" />
						Wishlist
					</span>
				</Navbar.Link>
				<Navbar.Link href="#">
					<span className="flex gap-2 items-center">
						<BsCart4 className="text-2xl" />
						Cart
					</span>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
