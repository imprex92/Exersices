export interface ToolTipSettings {
	showDelay: number,
  	hideDelay: number,
  	touchendHideDelay: number,
	position: string,
}
enum positionSetting {
	'left',
	'right',
	'above',
	'below',
	'before',
	'after'
}

// Vad är det som händer här!? Fråga läraren.
// Alternativ interface --> MatTooltipDefaultOptions