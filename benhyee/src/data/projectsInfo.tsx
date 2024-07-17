import React from "react";

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

function ccwd() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		)
	}
}
function liveball() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		)
	}
}
function betterment() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		)
	}
}
function amazongo() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		)
	}
}
function bouldering() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		)
	}
}
export default PROJECT_INFO;
