"use client";
import { Dropdown } from "flowbite-react";
import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Filter = () => {
	return (
		<Dropdown
			className="bg-yellow-700"
			label="Choose Filter Option"
			dismissOnClick={false}>
			<Dropdown.Item icon={FaArrowTrendDown}>Inc Price</Dropdown.Item>
			<Dropdown.Item icon={FaArrowTrendUp}>Dec Price</Dropdown.Item>
		</Dropdown>
	);
};

export default Filter;
