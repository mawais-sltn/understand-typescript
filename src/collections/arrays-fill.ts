export enum TimeMeasureUnits {
  MINUTE_SECONDS = 60,
  HOUR_SECONDS = 60 * TimeMeasureUnits.MINUTE_SECONDS,
  DAY_SECONDS = 24 * TimeMeasureUnits.HOUR_SECONDS,
}

export enum DigitalMeasureUnits {
  MB = 1024 * 1024,
  TB = DigitalMeasureUnits.MB * 1024 * 1024,
}

const PERIOD_5_MIN = 300;
const THROUGHPUT_MB_PER_TB = 50;
const MIN_THROUGHPUT_MIB = 1;
const INTERVAL_30_DAYS = 30;

const REQUIRED_AMOUNT_OF_METRIC_POINTS = (INTERVAL_30_DAYS * TimeMeasureUnits.DAY_SECONDS) / PERIOD_5_MIN;

function setCloudwatchMetrics(minRequiredThroughput: number) {
  const metricData = [
    {
      Values: new Array(REQUIRED_AMOUNT_OF_METRIC_POINTS).fill(
        minRequiredThroughput * DigitalMeasureUnits.MB * PERIOD_5_MIN,
      ),
    },
  ];
  console.log(metricData);
}

setCloudwatchMetrics(MIN_THROUGHPUT_MIB);
setCloudwatchMetrics(THROUGHPUT_MB_PER_TB);
