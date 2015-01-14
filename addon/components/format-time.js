import IntlComponent from './main';

var FormatTimeComponent = IntlComponent.extend({
	instrumentDisplay: '{{format-time}}',

	renderer: function (props, options) {
		return this.get('intl').formatTime(props.value, options);
	}
});

FormatTimeComponent.reopenClass({
	formatOptions: [
		'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
		'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
		'timeZoneName'
	]
});

export default FormatTimeComponent;
