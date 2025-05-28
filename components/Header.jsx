import React from "react"

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 container py-4 max-w-[1440px] h-16 flex items-center mx-auto bg-gray-100 border-b border-gray-300">
			<h3 className=" w-42 px-8">BearForge</h3>
			<div className="flex justify-between items-center w-full px-8 ">
				<div>Dashboard</div>
				<div className="flex items-center gap-4">
					<div>PH1</div>
					<div>PH2</div>
					<div>PH3</div>
					<div className="flex justify-center items-center  w-12 h-12 border border-gray-400 rounded-4xl">
						MJ
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
