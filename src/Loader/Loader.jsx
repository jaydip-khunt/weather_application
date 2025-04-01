import React from "react";
function Loader() {
	return (
		<div>
			<div className="fixed bg-opacity-40 backdrop-blur-sm  h-modal h-full animated fadeInDown  bg-gray-600 overflow-auto z-[9999999] inset-0">
				<div className="flex justify-center items-center h-screen">
					<div className="spinner" />
				</div>
			</div>
		</div>
	);
}

export default Loader;