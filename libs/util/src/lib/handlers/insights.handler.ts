import { InsightsService } from '../services/insights.service';
import { ErrorHandler } from '@angular/core';

export class InsightsHandler extends ErrorHandler {
  constructor(private insights: InsightsService) {
    super();
  }

  handleError(error: Error) {
    super.handleError(error);
    this.insights.exception(error);
  }
}
