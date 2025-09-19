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
								The scorecard app is a performance monitoring tool that allows users to track the comparative performance of indicators over time and against different organization units and/or levels. With easy to use colour coded outputs, the scorecard is meant to allow users to make data-driven decisions using the performance outlined on via the scorecard app’s outputs.
						</>
				),
		},
		{
				title: 'Bottleneck Analysis (BNA)',
				icon: "img/logos/bna.png",
				description: (
						<>
								Bottleneck analysis (BNA) is a structured analysis of the determinants of coverage for a wide range of interventions delivered through the health sector, useful to supporting targeted operational planning. It is a systematic, outcome-based approach to equitable health programming and real-time monitoring that strengthens the health system, complementing and building on what exists.
						</>
				),
		},
		{
				title: 'Action Tracker',
				icon: "img/logos/bna-action-tracker.png",
				description: (
						<>
								The action tracker is a management tool that helps improve effective coverage of priority interventions at district and community level, covering various intervention such as maternal, newborn, and child health (MNCH), HIV, and nutrition.
						</>
				),
		},
		{
				title: 'Standalone Action Tracker',
				icon: "img/logos/standalone-action-tracker.png",
				description: (
						<>
								The action tracker is a management tool that helps improve effective coverage of priority interventions at district and community level, covering various interventions such as maternal, newborn, and child health (MNCH), HIV, and nutrition.
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
