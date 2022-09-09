import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";

// Pages
import { Sample, HotelOwnerLogin, Home, HotelPackageList, CampingPackageList } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sample" element={<Sample />} />
					<Route path="/hotel-login" element={<HotelOwnerLogin />} />
					<Route path="/hotel-package" element={<HotelPackageList />} />
					<Route path="/camping-package" element={<CampingPackageList />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
