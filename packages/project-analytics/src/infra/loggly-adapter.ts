import { ErrorAnalytics } from '../analytics/error-analytics';

export class LogglyAdapter implements ErrorAnalytics {
  saveError(error: any): void {
    throw new Error('Method not implemented.');
  }
}
