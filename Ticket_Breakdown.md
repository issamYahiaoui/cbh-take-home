# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here



-  Ticket 1: [Backend] Add the ability for Facilities to assign custom ids to Agents

    * Acceptance Criteria:
        *  A new field "custom_id" is added to the Agents table in the database
        * The custom id is stored in the "custom_id" field of the Agents table

    * Time/Effort Estimate: 6 hours

    * Implementation Details:
        * Write Db migration and Update the Agents table to add the "custom_id" field
        * Implement ( Update if already exists) the API to Update the Agent with custom id including all the layers ( controller, service, repository ...)
        * Implement validation to ensure that the custom id is unique ( Required if specified by Product) for each Agent within a Facility
        * Write unit tests


- Ticket 2: [Frontend] Add the ability for Facilities to assign custom ids to Agents

    * Acceptance Criteria:
        * Facilities can input a unique custom id for each Agent they work with in the platform

    * Time/Effort Estimate: 4 hours

    * Implementation Details:
        * Modify the UI for the Facilities to allow them to input the custom id for each Agent
        * Implement validation to ensure that the custom id is unique ( Required if specified by Product) for each Agent within a Facility
        * Write UI tests



- Ticket 3: Modify `getShiftsByFacility` function to include custom ids for each Agent

    * Acceptance Criteria:

       * The getShiftsByFacility function should now return the custom id for each Agent, if available, along with the existing metadata.
       * If the custom id is not available, the internal database id should be used instead.

    * Time/Effort Estimate: 2 hours

    * Implementation Details:

      * Update the getShiftsByFacility function to retrieve the custom id for each Agent, if available, from the Facilities table.
      * If the custom id is not available, the internal database id should be used instead.
      * Ensure that the correct id is returned along with the metadata for each Agent.
      * Write unit tests


- Ticket 4: Modify `generateReport` function to use custom ids instead of internal Db ids

    * Acceptance Criteria:

       * The generateReport function uses the custom id for each Agent instead of their internal database id
       * The custom id is displayed on the report generated for the Facility

    * Time/Effort Estimate: 2 hours

    * Implementation Details:

      * Modify the generateReport function to use the custom id for each Agent
      * Update the PDF template to display the custom id on the report
      * Update the getShiftsByFacility function to include the custom id
      * Write unit tests




- Ticket 5: Tests and deploy the changes to production

    * Acceptance Criteria:

       * The changes should be thoroughly tested to ensure that they work as expected and do not break existing functionality.
       * The report should correctly display the custom id for each Agent, if available, and the internal database id if not.
       * The changes should be deployed to production without any issues.
       * The changes should be functional and available to all Facilities.

    * Time/Effort Estimate: 6 hours

    * Implementation Details:
      * Write more integration/e2e tests to verify the changes.
      * Run the tests and ensure that they pass. 
      * Perform the necessary steps to deploy the changes to production.
      * Ensure that the changes are functional and available to all Facilities.   
      * Monitor the logs