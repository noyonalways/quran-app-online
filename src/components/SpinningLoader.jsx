import React from "react";

const SpinningLoader = () => {
	return (
		<div className="flex justify-center min-h-[60vh] items-center">
			<div className="custom-loader text-slate-300">
				<style jsx>
					{`
						.custom-loader {
							width: 50px;
							height: 50px;
							display: grid;
							
							background: radial-gradient(
								farthest-side,
								currentColor calc(100% - 6px),
								#0000 calc(100% - 5px) 0
							);
							-webkit-mask: radial-gradient(
								farthest-side,
								#0000 calc(100% - 13px),
								#000 calc(100% - 12px)
							);
							border-radius: 50%;
							animation: s9 2s infinite linear;
						}
						.custom-loader::before,
						.custom-loader::after {
							content: "";
							grid-area: 1/1;
							background: linear-gradient(currentColor 0 0) center,
								linear-gradient(currentColor 0 0) center;
							background-size: 100% 10px, 10px 100%;
							background-repeat: no-repeat;
						}
						.custom-loader::after {
							transform: rotate(45deg);
						}

						@keyframes s9 {
							100% {
								transform: rotate(1turn);
							}
						}
					`}
				</style>
			</div> <span className="text-2xl ml-3">Loading...</span>
		</div>
	);
};

export default SpinningLoader;