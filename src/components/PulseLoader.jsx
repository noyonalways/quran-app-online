import React from "react";

const PulseLoader = () => {
	return (
		<div className=" rounded-md p-3 w-full mx-auto">
			<div className="animate-pulse flex w-full">
				<div className="flex-1 space-y-6 py-1">
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="h-6 bg-slate-200 rounded"></div>
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-4">
							<div className="h-6 bg-slate-200 rounded col-span-2"></div>

							<div className="h-6 bg-slate-200 rounded"></div>
						</div>
						<div className="h-65 bg-slate-200 rounded"></div>
						<div className="h-65 bg-slate-200 rounded"></div>
						<div className="h-65 bg-slate-200 rounded"></div>
						<div className="h-65 bg-slate-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PulseLoader;
