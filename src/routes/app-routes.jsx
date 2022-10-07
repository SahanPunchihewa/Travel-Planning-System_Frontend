import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";

// Pages

import {
	Sample,
	HotelOwnerLogin,
	Home,
	HotelPackageList,
	HotelPackageCreate,
	CampingPackageCreate,
	CampingPackageList,
	VehicleList,
	VehicleCreate,
	CampingPackageEdit,

	/* Tour Guide */
	TourGuideRegister,
	TourGuideLogin,

	/* Tour Package */
	TourPackageCreate,
	TourPackageList,
	Userprofile,
	CustomerSignup,
} from "../pages";

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

					<Route path="/tour-package" element={<TourPackageList />} />
					<Route path="/hotel-package-create" element={<HotelPackageCreate />} />

					<Route path="/camping-package-create" element={<CampingPackageCreate />} />

					<Route path="/vehicle-create" element={<VehicleCreate />} />
					<Route path="/vehicle" element={<VehicleList />} />
					<Route path="/camping-package-edit/:id" element={<CampingPackageEdit />} />

					{/* Tour Guide */}
					<Route path="/tour-guide-register" element={<TourGuideRegister />} />
					<Route path="/tour-guide-login" element={<TourGuideLogin />} />

					{/*Tour Package */}
					<Route path="/tour-package-create" element={<TourPackageCreate />} />
					<Route path="/tour-package-list" element={<TourPackageList />} />

					<Route path="/vehicle-profile" element={<Userprofile />} />

					<Route path="/customersignup" element={<CustomerSignup />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
