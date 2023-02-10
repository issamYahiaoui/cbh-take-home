const crypto = require("crypto");
const { generatePartitionKey } = require('./helpers')



const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;


exports.deterministicPartitionKey = (event) => {

  let candidate = TRIVIAL_PARTITION_KEY

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = generatePartitionKey(data)
    }
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = generatePartitionKey(candidate)
  }
  return candidate;
};