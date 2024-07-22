import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';

export function bouldering() {
	return {
		date: "7 May 2023",
		title: "Bouldering Projects!",
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
				<div style={{ 
				display: 'grid', 
				gridTemplateColumns: 'repeat(auto-fit, minmax(328px, 1fr))', 
				gap: '16px', 
				justifyItems: 'center' 
				}}>
                    <div style={{ height: '500px', overflow: 'hidden' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CkUy9lVusXP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>
                    <div style={{ height: '500px', overflow: 'hidden' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CRcqXB0jvXJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>
                    <div style={{ height: '500px', overflow: 'hidden' }}>
                        <InstagramEmbed url="https://www.instagram.com/reel/CbWkXnKDKqB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>
                    <div style={{ height: '500px', overflow: 'hidden' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CTwEMJ2D2R1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>				</div>
			</React.Fragment>
		)
	}
}