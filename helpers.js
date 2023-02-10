
exports.generatePartitionKey = (data, hash = "sha3-512", digest = "hex") => crypto.createHash(hash).update(data).digest(digest);

