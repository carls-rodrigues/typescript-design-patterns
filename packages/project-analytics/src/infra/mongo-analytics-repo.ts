import { Analytics } from '../analytics/analytics';
import { ErrorAnalytics } from '../analytics/error-analytics';

export class MongoAnalyticsRepository implements Analytics, ErrorAnalytics {
  saveError(error: any): void {
    throw new Error('Method not implemented.');
  }
  save(type: string, data: any): void {
    throw new Error('Method not implemented.');
  }
}
