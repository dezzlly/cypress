# Task 19.1


Feature: As a user I want to be sure that the garage page works correctly

    Feature Description Checking garage page

    Background:
        Given I go to homepage
        Then I click the "signUp" button 
        Then create user

    Scenario: Check that the user can add a car and fuel expense
        Given I go to homepage
        Then I click the "signIn" button xpath
        Then log in with saved credentials
        Then I click the "addCarButton" button xpath
        Then I select the "brand" auto "<brand>"
        Then I select the "model" auto "<model>"
        Then I fill "milesField" field with "<milesField>"
        Then I click the "addButton" button xpath
        Then the "miles" should have value "<milesField>"
        Then the "carName" should contain the text "<carName>"
        Then I click the "addFuelExpenseButton" button xpath  
        Then I clear "expenseDate" field
        Then I select the "expenseDate" in calendar
        Then I clear "expenseMileage" field
        Then I fill "expenseMileage" field with "<expenseMileage>"
        Then I fill "expenseLiters" field with "<expenseLiters>"
        Then I fill "expenseTotalCost" field with "<expenseTotalCost>"
        Then I click the "addButton" button xpath
        Then the "2nd" "fuelProperty" should contain the text "<expenseMileage>" xpath
        Then the "3rd" "fuelProperty" should contain the text "<expenseLiters>" xpath
        Then the "4th" "fuelProperty" should contain the text "<expenseTotalCost>" xpath

        Examples:
        |brand  |model  |milesField|carName        |expenseMileage|expenseLiters|expenseTotalCost|
        |BMW    |X6     |1000      |BMW X6         |1200          |50           |500             |
        # |Porsche|Cayenne|700       |Porsche Cayenne|900           |70           |700             |        