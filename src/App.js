import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/home'))

const App = () => {
	return (
		<div className="bg-red-500 h-[300px] w-[300px]">
			<BrowserRouter>
				<Suspense fallback={<p>Loading...</p>}>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App