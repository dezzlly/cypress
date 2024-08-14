# Task 18.1


Feature: As a user I want to be sure that the login works correct

    Feature Description Checking login

    Background:
        Given I go to homepage

    Scenario: Check that the user can successfully registered
        Then I click the "signUp" button 
        Then create user
    
    Scenario: Check that the user can successfully login
        Given I go to homepage
        Then I click the "signIn" button xpath
        Then log in with saved credentials        