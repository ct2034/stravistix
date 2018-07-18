import { GraphPointModel } from "../../../shared/models/graphs/graph-point.model";
import { MarkerModel } from "./marker.model";
import { BaseLineModel } from "./base-line.model";
import * as _ from "lodash";

export class ViewableFitnessDataModel {

	public readonly trainingZonesBaseLines: BaseLineModel[] =
		[
			{value: 25, label: "Freshness"},
			{value: 5, label: "Neutral"},
			{value: -10, label: "Optimal"},
			{value: -30, label: "Overload"}
		];

	public fatigueLine: GraphPointModel[] = [];
	public fitnessLine: GraphPointModel[] = [];
	public formLine: GraphPointModel[] = [];
	public fitnessTrendLines: GraphPointModel[][] = [];
	public markers: MarkerModel[] = [];

	public previewFatigueLine: GraphPointModel[] = [];
	public previewFitnessLine: GraphPointModel[] = [];
	public previewFormLine: GraphPointModel[] = [];
	public activeLine: GraphPointModel[] = [];

	constructor(markers: MarkerModel[],
				fatigueLine: GraphPointModel[],
				fitnessLine: GraphPointModel[],
				formLine: GraphPointModel[],
				previewFatigueLine: GraphPointModel[],
				previewFitnessLine: GraphPointModel[],
				previewFormLine: GraphPointModel[],
				activeLine: GraphPointModel[]) {

		this.markers = markers;

		this.fatigueLine = fatigueLine;
		this.fitnessLine = fitnessLine;
		this.formLine = formLine;
		this.previewFatigueLine = previewFatigueLine;
		this.previewFitnessLine = previewFitnessLine;
		this.previewFormLine = previewFormLine;
		this.activeLine = activeLine;

		this.fitnessTrendLines.push(MG.convert.date(this.fatigueLine, "date"));
		this.fitnessTrendLines.push(MG.convert.date(this.fitnessLine, "date"));
		this.fitnessTrendLines.push(MG.convert.date(this.formLine, "date"));
		this.fitnessTrendLines.push(MG.convert.date(this.previewFatigueLine, "date"));
		this.fitnessTrendLines.push(MG.convert.date(this.previewFitnessLine, "date"));
		this.fitnessTrendLines.push(MG.convert.date(this.previewFormLine, "date"));
		this.fitnessTrendLines.push(MG.convert.date(this.activeLine, "date"));
	}

	public getBaseLines(isTrainingZonesEnabled: boolean): BaseLineModel[] {

		let baseLines = [];

		if (isTrainingZonesEnabled) {
			baseLines.push(this.trainingZonesBaseLines);
			baseLines = _.flatten(baseLines);
		}

		return baseLines;
	}
}
