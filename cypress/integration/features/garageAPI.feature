# Task 20.1


Feature: As a user I want to be sure that the requests for garage works correctly

Feature Description Checking garage API

    Scenario: Check that the user can add a car and fuel expense  
        Given I go to homepage
        Then I click the "signUp" button 
        Then create user  
        Given I go to homepage
        Then I click the "signIn" button xpath
        Then log in with saved credentials
        Then I click the "addCarButton" button xpath
        Then I select the "brand" auto "<brand>"
        Then I select the "model" auto "<model>"
        Then I fill "milesField" field with "<milesField>"
        Then I intercept response from route "cars" when I click "addButton" button

        Examples:
        |brand  |model  |milesField|carName        |expenseMileage|expenseLiters|expenseTotalCost|
        |BMW    |X6     |1000      |BMW X6         |1200          |50           |500             |

    
    Scenario: Check car parameters via API
        Given I login via API "login"
        Then I get response from route "cars", check added ID car parameters: "BMW", "X6", "1000"


    Scenario: Add expense for car via API
        Given I login via API "login"
        Then I add expense via API route "expense" and parameters: "1200", "65", "700"


    Scenario: Add expense for car via API
        Given I go to homepage
        Then I click the "signIn" button xpath
        Then log in with saved credentials
        Then I click the "fuelExpenses" button
        Then the "2nd" "fuelProperty" should contain the text "1200" xpath
        Then the "3rd" "fuelProperty" should contain the text "65" xpath
        Then the "4th" "fuelProperty" should contain the text "700" xpath