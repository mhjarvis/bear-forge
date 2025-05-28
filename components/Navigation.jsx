import React from "react"

const Navigation = () => {
	return (
		<nav className="fixed left-0 top-0 z-50 h-screen w-42 bg-gray-100 border-r border-gray-300">
			{/* Logo */}
			<div className="flex items-center justify-center w-full h-16 border-b border-gray-300">
				BearForge
			</div>
			{/* Navigation Links */}
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2 px-8 pt-8 pb-4 border-b text-md text-gray-700 border-gray-200">
					<h2 className="text-gray-500 uppercase text-xs">Main Menu</h2>
					{/* Add your nav items here */}
					<a href="#" className=" hover:underline">
						Dashboard
					</a>
					<a href="#" className="hover:underline">
						Builder
					</a>
					<a href="#" className="hover:underline">
						Cardio
					</a>
					<a href="#" className="hover:underline">
						Calendar
					</a>
				</div>
				<div className="flex flex-col gap-2 px-8 py-4 text-md text-gray-700">
					<h2 className="text-gray-500 uppercase text-xs">Account</h2>
					{/* Add your nav items here */}
					<a href="#" className="hover:underline">
						Information
					</a>
					<a href="#" className="hover:underline">
						Settings
					</a>
					<a href="#" className="hover:underline">
						Log Out{" "}
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
