import React from "react";
import { amazongo } from "./projectContent/amazongo";
import { betterment } from "./projectContent/betterment";
import { bouldering } from "./projectContent/bouldering";
import { ccwd } from "./projectContent/ccwd";
import { liveball } from "./projectContent/liveball";

export type ProjectType = {
	title: string;
	description: string;
	logo: string;
	linkText: string;
	link: string;
	downloadLink?: string;
	content?: ProjectContent;
  };

export type ProjectContent = {
	date: string;
	title: string;
	description: string;
	keywords: string[];
	style: string;
	body: React.ReactNode;
  };


const PROJECT_INFO = {
	projects: [
		{
			title: "Loadcell Data Compression Algorithm",
			description:
				"Developed a compression and encoding algorithm that are executed on wireless IoT devices to save bandwidth",
			logo: "loadcell.png",
			linkText: "View Project Details",
			link: "ccwd",
			downloadLink:"https://ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11940320",
			content: ccwd()
		},

		{
			title: "LiveBall - Tennis App",
			description:
				"Developed an iOS app to automate a new tennis format designed in response to the growing popularity of pickleball.",
			logo: "Liveball.jpeg",
			linkText: "View Project Details",
			link: "liveball",
			content: liveball()
		},

		{
			title: "Betterment LLM",
			description:
				"Developed an LLM content advisor using chat log data from suicide hotline conversations.",
			logo: "Betterment.png",
			linkText: "View Project Details",
			link: "betterment",
			content: betterment()
		},

		{
			title: "Amazon Go",
			description:
				"Developed sensor drivers for IoT infrastructure for Amazon Go.",
			logo: "AmazonGo.png",
			linkText: "View Project Details",
			link: "amazongo",
			content: amazongo()
		},

		{
			title: "Bouldering",
			description:
				"Climbing can have projects too!",
			logo: "climbing.png",
			linkText: "View Project Details",
			link: "bouldering",
			content: bouldering()
		}
	],
}

export default PROJECT_INFO;
