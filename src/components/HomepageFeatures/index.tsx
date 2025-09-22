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
						</>
				),
		},
		{
				title: 'Bottleneck Analysis (BNA)',
				icon: "img/logos/bna.png",
				description: (
						<>
						</>
				),
		},
		{
				title: 'Action Tracker',
				icon: "img/logos/bna-action-tracker.png",
				description: (
						<>
						</>
				),
		},
		{
				title: 'Standalone Action Tracker',
				icon: "img/logos/standalone-action-tracker.png",
				description: (
						<>
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
