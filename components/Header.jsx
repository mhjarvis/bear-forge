import React from "react"

const Header = () => {
	return (
		<header className="fixed left-0 top-0 right-0 py-4 h-16 flex items-center mx-auto bg-gray-100 border-b border-gray-300">
			<div className="flex justify-between items-center w-full px-8 ">
				<div className="text-xl">Dashboard</div>
				<div className="flex items-center gap-4 text-gray-500">
					<div>PH1</div>
					<div>PH2</div>
					<div>PH3</div>
					<div className="flex justify-center items-center w-10 h-10 border text-gray-700 border-gray-400 rounded-4xl">
						MJ
					</div>
					<div className="flex flex-col text-xs">
						<h4 className="text-gray-900">Markus Jarvis</h4>
						<p>markus.jarvis@email.com</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
