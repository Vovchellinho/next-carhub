'use client';

import Image from "next/image";
import type { CustomButtonProps } from "@/types";

const CustomButton = ({title, btnType = "button", containerStyles, handleClick}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className="flex-1">
				{title}
			</span>
		</button>
	);
};

export default CustomButton;