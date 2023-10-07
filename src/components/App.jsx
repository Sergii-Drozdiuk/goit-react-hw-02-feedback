import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	buttons = ['good', 'neutral', 'bad'];
	title = 'Please leave feedback';
	statisticsTitle = 'Statistics'
	notificationText = 'There is no feedback'

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return (good + neutral + bad);
	};

	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good * 100) / this.countTotalFeedback());
	};

	onChangeFeedback = newState => {
		this.setState(prevState => ({
			[newState]: prevState[newState] + 1,
		}));
	};

	render() {
		return (
			<>
				<Section title={this.title}>
					<FeedbackOptions
						buttons={this.buttons}
						onChangeFeedback={this.onChangeFeedback}
					/>
					<StatisticsTitle
						title={this.statisticsTitle}
					/>
          {this.countTotalFeedback() ? (
            <Statistics
               feedback={this.state}
					totalFeedback={this.countTotalFeedback()}
					positiveFeedback={this.countPositiveFeedbackPercentage()}
				/>
					) : (
				<Notification notificationText={this.notificationText}/>
					)}
				</Section>
			</>
		);
	}
}

