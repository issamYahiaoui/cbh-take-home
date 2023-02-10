const { deterministicPartitionKey } = require("./dpk");
const { generatePartitionKey } = require("./helpers");

jest.mock('./helpers')

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Returns partition key from event when provided", () => {
    const event = { partitionKey: "dummy-partition-key" }
    const result = deterministicPartitionKey(event)
    expect(result).toBe(event.partitionKey)
  });

  it("Generates partition key from event data when partition key is not provided", () => {
    const event = { payload: "dummy-partition-key" }
    generatePartitionKey.mockImplementation(() => "dummy-generated-partition-key")
    const result = deterministicPartitionKey(event)
    expect(result).toBe("dummy-generated-partition-key")
    expect(generatePartitionKey).toHaveBeenCalledWith(JSON.stringify(event))
  });

  it("Generates partition key from candidate when length > MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "c".repeat(MAX_PARTITION_KEY_LENGTH + 1) }
    generatePartitionKey.mockImplementation(() => "dummy-generated-partition-key")
    const result = deterministicPartitionKey(event)
    expect(result).toBe("dummy-generated-partition-key")
    expect(generatePartitionKey).toHaveBeenCalledWith(event.partitionKey)
  });

  it("Stringify candidate when type is not string", () => {
    const event = {
      partitionKey: {
        payload: "dummy-partition-key"
      }
    }
    const result = deterministicPartitionKey(event)
    expect(result).toBe(JSON.stringify(event.partitionKey))
  });
});
