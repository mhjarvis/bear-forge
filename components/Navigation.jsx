import React from "react"

const Navigation = () => {
	return (
		<nav className="fixed left-0 top-16 z-50 h-screen w-42 bg-gray-100 p-8 border-r border-gray-300">
			<h2 className="text-gray-500 uppercase text-xs mb-4">Main Menu</h2>
			<div className="flex flex-col border-b text-md text-gray-700 border-gray-300">
				{/* Add your nav items here */}
				<a href="#" className="mb-4  hover:underline">
					Dashboard
				</a>
				<a href="#" className="mb-4 hover:underline">
					Builder
				</a>
				<a href="#" className="mb-4  hover:underline">
					Cardio
				</a>
				<a href="#" className="mb-4  hover:underline">
					Calendar
				</a>
			</div>
			<h2 className="text-gray-500 uppercase text-xs mt-4 mb-4">Account</h2>
			<div className="flex flex-col text-gray-700">
				{/* Add your nav items here */}
				<a href="#" className="mb-4  hover:underline">
					Information
				</a>
				<a href="#" className="mb-4  hover:underline">
					Settings
				</a>
				<a href="#" className="mb-4 hover:underline">
					Log Out{" "}
				</a>
			</div>
		</nav>
	)
}

export default Navigation
