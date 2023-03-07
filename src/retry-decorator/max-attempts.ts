import { Retryable, BackOffPolicy } from 'typescript-retry-decorator';

let count = 1;

class RetryExample {
  @Retryable({
    maxAttempts: 3,
    backOffPolicy: BackOffPolicy.FixedBackOffPolicy,
    backOff: 5000,
  })
  static async fixedBackOffRetry() {
    console.info(`Calling fixedBackOffRetry 1s for the ${count++} time at ${new Date().toLocaleTimeString()}`);
    throw new Error('I failed!');
  }
}

void (async () => {
  try {
    resetCount();
    await RetryExample.fixedBackOffRetry();
  } catch (error) {
    console.info(`All retry done as expected, final message: '${JSON.stringify(error)}'`);
  }
})();

function resetCount() {
  count = 1;
}
