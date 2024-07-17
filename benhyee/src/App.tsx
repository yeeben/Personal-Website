import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import ReadProject from "./components/projects/readProject";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import PROJECT_INFO from "./data/projectsInfo";


import "./App.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				{PROJECT_INFO.projects.map((project, index) => (
					<Route
					key={index}
					path={`/projects/${project.link}`}
					element={<ReadProject project={project} />}
					/>
				))}
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;