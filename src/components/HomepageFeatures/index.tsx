import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
		title: string;
		icon: string;
		description: ReactNode;
};

const FeatureList: FeatureItem[] = [
		{
				title: 'Scorecard',
				icon: "img/logos/scorecard.png",
				description: (
						<>
							The Scorecard application enables users to track, visualize, and review key performance indicators using color coding to highlight performance.
						</>
				),
		},
		{
				title: 'Bottleneck Analysis (BNA)',
				icon: "img/logos/bna.png",
				description: (
						<>
							Bottleneck Analysis (BNA) is a DHIS2 application that helps identify and determine the bottlenecks using the Tanahashi model & identify the root causes.
						</>
				),
		},
		{
				title: 'Action Tracker',
				icon: "img/logos/bna-action-tracker.png",
				description: (
						<>
							The Action Tracker is a DHIS2 application that enables users to plan & track  activities/actions resulting from root cause analysis from the BNA app.
						</>
				),
		},
		{
				title: 'Standalone Action Tracker',
				icon: "img/logos/standalone-action-tracker.png",
				description: (
						<>
								The Standalone Action Tracker is a DHIS2 custom application designed to help teams plan, coordinate, and follow through on priority actions within DHIS2.
						</>
				),
		},
];

function Feature({title, icon, description}: FeatureItem) {
		return (
				<div className={clsx('col col--4')}>
						<div className="text--center">
								<img alt={title} style={{height: 120, width: "auto"}} src={icon} className={styles.featureSvg} role="img"/>
						</div>
						<div className="text--center padding-horiz--md">
								<Heading as="h3">{title}</Heading>
								<p>{description}</p>
						</div>
				</div>
		);
}

export default function HomepageFeatures(): ReactNode {
		return (
				<section className={styles.features}>
						<div className="container">
								<div className="row">
										{FeatureList.map((props, idx) => (
												<Feature key={idx} {...props} />
										))}
								</div>
						</div>
				</section>
		);
}
