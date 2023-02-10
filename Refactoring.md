# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Moved the const TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH outside the function: they can be imported from .env or config and mocked in tests easily.
2. Changed the order of the checks and moved the assignment of TRIVIAL_PARTITION_KEY to the beginning of the function to reduce the unnecessary if/else blocks.
3. Extract the repeated logic of crypto module to hide the implmentation details and renamed it to a more readable name `generateParitionKey`
4. Created a `helpers` file and move `generateParitionKey` so it can be mocked easily in tests.