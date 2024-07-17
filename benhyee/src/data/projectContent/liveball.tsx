import React from "react";

export function liveball() {
	return {
		date: "7 May 2023",
		title: "LiveBall Tennis App",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
"           Loadcell Data Compression Algorithm"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.diagram {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
                        <h2> Origin </h2>
                        Tennis coaches host a weekly game called LiveBall with players from his class. 
                        The objective of the game is to earn points in a king-of-the-hill style competition: players accumulate time while on the hill and cease accumulating when they're pushed off and sent to the challenger side. 
                        The game consists of multiple rounds, and points are awarded based on who ends the round on the champion side, who holds the longest time during the round, and who achieves the highest cumulative time across the entire session, which typically includes multiple rounds.
                    </div>
                    <div className="paragraph">
                        <h2> Problem </h2>

                        Tennis coaches encounter several significant challenges while running a LiveBall session. 
                        Firstly, the champions change multiple times during each round, sometimes in rapid succession. 
                        To manage this, he utilizes a timer app to track the time when the champions switch, while also keeping track of which players occupy the champion side.
                        <br /> <br />
                        Moreover, each round is time-constrained, requiring the tennis coach to balance the timer with ensuring a fair amount of time for the round to conclude. 
                        Juggling these tasks while maintaining a smooth transition poses logistical and enjoyment challenges for the game.
                        <br /> <br />
                        After each session, the tennis coach must manually input the times of each champion and the winners of each round into a Google Sheet created by Timothy. 
                        This data entry process is time-consuming and prone to errors. 
                        Finally, there is a lack of a user-friendly interface to effectively track the game's progression and timing.
                        <br /> <br />
                        Overall, the combination of manual data entry processes and the absence of a suitable interface adds complexity to managing LiveBall sessions and diminishes the overall experience for both the coaches and the players.
                    </div>

					<div className="paragraph">
                        <h2> Solution </h2>
                        Phase 1 of the project involves creating an exact replica of a coaches current workflow with an app designed to automate LiveBall logistics. 
                        The goal is to provide an MVP (Minimum Viable Product) that demonstrates how the game can still be played in the same manner while enjoying the benefits of automated time and statistics tracking.
                        <ul>
                            <li><strong>Timer Automation:</strong> Develop a timer feature within the app to automatically track the duration of each round and the time each player spends on the champion side. This eliminates the need for manual time tracking.</li>
                            <li><strong>Champion Side Identification:</strong> Implement a functionality to record and display which players are on the champion side during each round. This information is crucial for determining point allocation.</li>
                            <li><strong>Session Record Storage:</strong> Create a feature that allows data to seamlessly integrate in with his daily and monthly emails. Instead of manually inputting into Google Sheets, data will be processed and stored automatically through the game’s session.</li>
                            <li><strong>Session Statistics Generation:</strong> Enable the app to generate session statistics automatically based on the recorded data. This includes calculating total session time, individual player times, and round winners for a Session (one day) or Month view.</li>
                            <li><strong>User Interface:</strong> Design a user-friendly interface for the coach to interact with during LiveBall sessions. The interface should be intuitive and easy to navigate, providing all necessary information at a glance.</li>
                        </ul>
                        By implementing these features in Phase 1, the coaches administrative burden will be significantly reduced, and both he and the players can enjoy a smoother and more efficient LiveBall experience. 
                        This phase serves as a proof of concept for the automated solutions and sets the foundation for future improvements in subsequent phases.
                        <br /> <br />

                        The agreement is that none of his current workflows should be affected, but he should see some of the benefits of automating some of the administrative tasks like manual data entry. 
                        So, it's important to mention the scope of Phase 1 and what is deemed out of scope, just so that there is a differentiation of what the vision is for Phase 1 and the future.                  
                    </div>
                    <div className="paragraph">
                        <h2> Technologies Used </h2>

                        We utilized SwiftUI to design the visual elements for the iOS App, which interacts with the backend through HTTPS endpoints. 
                        These endpoints handle the submission of Round records and the retrieval of class names and players associated with those classes, simplifying session creation for users. 
                        The app's timer logic and player scores are managed through the SwiftUI state machine and buffers that store session records.
                        <br /> <br />

                        Our backend, built with the Serverless Framework library, offers advantages such as avoiding the need for a dedicated server instance, thereby reducing maintenance costs. 
                        This serverless approach allows us to pay based on per request usage and enables rapid deployment and simplified development, crucial for meeting our one-month deadline. 
                        For relational data, we opted for a SQL database via AWS RDS, chosen for its faster queries and scalability for larger datasets. 
                        Timothy, with expertise in this area, developed essential queries and inserts crucial for Lambda's implementation.
                        <br /> <br />

                        Considering ease of adoption, we designed the app with reusability in mind. 
                        Some data sources, like Google Sheets, continue to be maintained by the coach, so we integrated the Google Sheets API for fetching player names, class names, and class emails. 
                        This approach allows coaches to easily add or remove players and classes, while providing us with a convenient and cost-effective method for storing and retrieving this information.
                        <br /> <br />

                        The automated email service is a standalone lambda built within the Serverless Framework. 
                        Emails are triggered by a programmed timer based on specified times and frequencies. 
                        Session emails are sent once at 9 PM, while month recap emails are scheduled for 9 PM on the last day of the month.
                        <br /> <br />

                        When triggered, the lambda fetches data from the database, including all classes that occurred on the specified day and player stats for both the class and the entire month. 
                        If no classes occurred on that day, no message is generated. 
                        The fetched data is then packaged into an HTML body and combined with contacts fetched from Google Sheets to create email drafts. 
                        These drafts are then ready to be sent from the liveballapp@gmail.com address. 
                        While the goal is to transition to automatically sending emails, using drafts initially ensures that message content and statistics are correct.
                        <br /> <br />

                        Additionally, we've integrated CircleCI for continuous integration and continuous deployment (CI/CD), although it's currently utilized sparingly, as we only have a development stage rather than a production stage. 
                        However, it will become more useful if we undertake additional work in different phases.
                        <br /> <br />

                        For distributing the app, we've activated our Apple developer account, granting us access to TestFlight. 
                        Using TestFlight, we can submit new builds, which triggers the service to send out invite emails to a predetermined set of contacts. 
                        These recipients can then download the build for testing. 
                        This method provides an efficient distribution process without the need to release the app onto the App Store, which has its own challenges, as we'll address in the next section.
                    </div>
                    <h2> IOS App Fetch/Insert Design</h2>
                    <img src="../Liveball_fetch.png" className="diagram"/>

                    <h2> Automated Email Service</h2>
                    <img src="../Liveball_email.png" className="diagram"/>

                    <h2> Scaling User Accounts</h2>
                    <img src="../Liveball_users.png" className="diagram"/>



				</div>
			</React.Fragment>
		)
	}
}