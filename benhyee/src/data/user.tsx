const INFO = {
	main: {
		title: "Portfolio for Benhyee",
		name: "Benjamin Yee",
		email: "benjaminhyee@gmail.com",
		logo: "../logo.jpeg",
	},

	socials: {
		github: "https://github.com/yeeben",
		linkedin: "https://www.linkedin.com/in/benjamin-yee-hong",
		instagram: "https://www.instagram.com/crazybennyboy/",
	},

	homepage: {
		title: [
			"Firmware Engineer", "Climber", 
			"Full Stack Web Developer", "Electrical Engineer", 
			"IOS Developer" , "Tennis Player", "Pickleball Player",
			"Dog Dad", "Gamer"

		],
		description:
			`My name is Benjamin Yee, and welcome to my portfolio page!
			You will find all the projects I have worked on, my resume, and a little bit about me.
			`
	},

	about:{
		title: "Hey! I'm Benjamin Yee!",
		description: "About",
		sections: {
			introduction: {
				title: "",
				content: `
					I am a proud Los Angeles native, having grown up in the beautiful town of San Marino, CA. 
					Growing up surrounded by exceptional talent, I quickly learned the importance of curiosity and humility. 
					Embracing a humble attitude opened doors to new opportunities and experiences that I would have never imagined.

				`
			},
			career: {
				title: "Career Journey",
				content: `
				My career has taken me on an exciting journey through various fields and roles in technology.
				I graduated from Cal Poly San Luis Obispo with a degree in Electrical Engineering and worked at Amazon Go in Seattle.
				During my time, I got to explore various EE fields, including manufacturing, Firmware development, and hardware design.
				I left in 2024 to move back to LA and grow my skills in various stacks of software development.
				I had the opportunity to learn ML/AI best practices and freelance as an full-stack IOS developer to build my very own app.
				For more technical details, checkout my projects page or download my resume!
				`
			},
			hobbies: {
				title: "Hobbies and Interests",
				content: `
					Outside of work, I am very active with my hobbies. 
					I climb at least twice a week at a V9 | 5.12C level, mainly at Hollywood Boulders and The Post in Pasadena.
					I grew up playing tennis and still actively rally at a USTA 4.5 level. 
					Recently, I picked up Pickleball, which I enjoy as an accessible and social sport. 
					Additionally, I have a dog named Remy, who I've raised since she was a puppy. 
					She kept me sane through the pandemic and is a wonderful companion. 
					These activities not only keep me fit but also provide a perfect balance to my tech-focused career.
				`
			}
		}
	},

	projects: [
		{
			title: "Loadcell Data Compression Algorithm",
			description:
				"Developed a compression and encoding algorithm that are executed on wireless IoT devices to save bandwidth",
			logo: "loadcell.png",
			linkText: "View Project",
			link: "https://ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11940320",
		},

		{
			title: "LiveBall - Tennis App",
			description:
				"Developed an iOS app to automate a new tennis format designed in response to the growing popularity of pickleball.",
			logo: "Liveball.jpeg",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Betterment LLM",
			description:
				"Developed an LLM content advisor using chat log data from suicide hotline conversations.",
			logo: "Betterment.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Amazon Go",
			description:
				"Developed sensor drivers for IoT infrastructure for Amazon Go.",
			logo: "AmazonGo.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
