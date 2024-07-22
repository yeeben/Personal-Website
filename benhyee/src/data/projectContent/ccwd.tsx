import React from "react";

export function ccwd() {
	return {
		date: "7 May 2023",
		title: "Loadcell Data Compression Algorithm",
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

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
                        <h2> Problem </h2>
						There was a push from management to cut costs and build a future IoT infrastructure using wireless sensors. 
						The team set requirements to ensure long battery life, low data usage, and the same level of accuracy. 
						In order to meet these criteria, we had to come up with a solution to compress the data streaming from the load cells, while maintaining backwards compatibility with the existing infrastructure.
						What resulted was a low power and low bandwidth algorithm that could be deployed on existing and next generation load cells.           
					</div>
					
					<div className="paragraph">
						<h2> Solution </h2>
						We leveraged the fact that our sensors wouldn't be detecting anything most of the time. 
						These steady state "zeroes" would be the foundation of a run length encoder that would count the number of zeroes in a row and encode the word into a single byte.
						For non-zero values, we used a simple delta encoding scheme to reduce the number of bits needed to represent the data. 
						Payloads were a formation of these delta and run length encoded values, forming a highly compressed data stream that benefited from low variability in the data.
						We also took advantage of the fact that the load cells were physically attached to a flat surface. This allowed us to use algebra to consolidate data from individual load cells into a single rigid planar surface. 
						As a result, we reduced our data stream count from four separate load cells to three related linear equations.					
					</div>
					<div className="paragraph">
						<h2> Process </h2>
						The implmentation and integration was handled by me and a former colleague. We went through the painstaking process of rewriting a prototype from python to C.
						Each step along the way, we needed to ensure the data was being encoded and decoded correctly, so we wrote a series of integration tests to verify the algorithm's components.
						After we had a standalone C library, we integrated the library into our existing loadcell product, which required redefining how data was ingested and processed.
						Instead of passing data from a CSV file of example loadcell data, we were using the raw stream of data from the loadcells, so verify accuracy was a new challenge.
						Once we had a way to plot and decompress the data we were outputting for the loadcell sensors, we finally had an end to end prototype that we could show to the wireless team.
						
					</div>
					<div className="paragraph">
						<h2> Impact </h2>
						If originally each loadcell sample was made up of 4 bytes, and we were sampling each loadcell at 480Hz, then we were sending 1920 bytes per second from 4 loadcells.
						After implementing the compression algorithm, we were able to fit in a 90 byte payload where each byte could hold a max of 63 samples, or 5670 samples in one payload.
						So our data usage went from sending 4 bytes per sample to 0.015 * 3 channels = 0.045 bytes per sample, a 88.89 compression ratio at peak efficiency.

					</div>

					<img src="../patent.png" className="diagram"/>

				</div>
			</React.Fragment>
		)
	}
}