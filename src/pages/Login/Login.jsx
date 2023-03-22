import React from "react";
import quran from "../../assets/quran_2.png";

const Login = () => {
	return (
		<section>
			<style>
				{`<style>
                    * {
                        margin:0;
                        padding:0;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .input {
                        transition: border 0.2s ease-in-out;
                        min-width: 280px
                    }
                    
                    .input:focus+.label,
                    .input:active+.label,
                    .input.filled+.label {
                        font-size: .75rem;
                        transition: all 0.2s ease-out;
                        top: -0.9rem;
                        padding: 0 5px 0 5px;
                        margin: 0 5px 0 5px;
                    }
                    .label {
                        transition: all 0.2s ease-out;
                        top: 0.4rem;
                        left: 0;
                    }
                </style>`}
			</style>
			<div className="container">
				<div class="md:h-screen relative md:flex justify-center items-center dark:text-gray-200">
					<div class="md:border md:border-gray-300 bg-white dark:bg-slate-600 md:dark:border-slate-600  md:shadow-lg shadow-none rounded px-3 py-6 md:px-8 md:py-5">
						<div class="flex flex-col items-center space-y-3">
							<img
								src={quran}
								className="w-32 dark:bg-slate-200 dark:h-32 rounded-full dark:object-contain dark:p-3"
								alt=""
							/>
							<span class="text-2xl font-bold leading-normal">
								Log In
							</span>
						</div>
						<form class="my-8 space-y-6">
							<div class="relative mb-2">
								<input
									id="email"
									class="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-slate-700 focus:ring-1 focus:ring-slate-700 focus:outline-none input active:outline-none dark:bg-slate-500 text-white"
									type="text"
									autofocus
								/>
								<label
									for="email"
									class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-white dark:bg-slate-500 dark:text-gray-200"
								>
									Email
								</label>
							</div>
							<div class="relative mb-2">
								<input
									id="name"
									class="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-slate-700 focus:ring-1 focus:ring-slate-700 focus:outline-none input active:outline-none dark:bg-slate-500 text-white"
									type="text"
									autofocus
								/>
								<label
									for="name"
									class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-white dark:bg-slate-500 dark:text-gray-200"
								>
									Password
								</label>
							</div>
							<div class="space-y-9">
								<div class="text-sm flex justify-between items-center">
									<a
										class="font-bold text-blue-500 py-2 px-2 rounded -ml-2 hover:bg-blue-50 hover:text-blue-700"
										href="#"
									>
										Create account
									</a>
									<button class="py-2 px-6 rounded text-white btn bg-blue-500 hover:bg-blue-600">
										Next
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
