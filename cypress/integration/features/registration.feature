# Task 18.1


Feature: As a user I want to be sure that the registration form works correct

    Feature Description Checking registration form

    Background:
        Given I go to homepage
        Then I click the "signUp" button 


    Scenario: Check text elements
        Then the "<element>" should contain the text "<text>" xpath

        Examples:
        |element                 |text             |
        |registration modal title|Registration     |
        |name label              |Name             |
        |last name label         |Last name        |
        |email label             |Email            |
        |password label          |Password         |
        |re-enter password label |Re-enter password|
        |registrationButton      |Register         |


        Scenario: Check Name and Last Name fields when user enters correct data
        Then I fill "<field name>" field with "<data1>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should not exist        
        Then the "<field name>" should have border-color "rgb(206, 212, 218)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data2>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should not exist         
        Then the "<field name>" should have border-color "rgb(206, 212, 218)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "Al "
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should not exist         
        Then the "<field name>" should have border-color "rgb(206, 212, 218)"

        Examples:
        |field name|data1|data2               |
        |name      |Al   |AleksanderAleksander|
        |lastName  |Os   |AleksanderAleksander|


    Scenario: Check Email field when user enters correct data
        Then I fill "email" field with "<email>"
        Then I remove focus from the "email" field
        Then the "allert for field" should not exist        
        Then the "email" should have border-color "rgb(206, 212, 218)"

        Examples:
        |email              |
        |tester@gmail.com   |
        |tester123@gmail.com|
        |tes.ter@gmail.com  |
        |3457890@gmail.com  |


    Scenario: Check Name and Last Name fields when user enters correct data
        Then I fill "password" field with "<data>"
        Then I remove focus from the "password" field
        Then the "allert for field" should not exist     
        Then the "password" should have border-color "rgb(206, 212, 218)"
        Then I fill "repeatPassword" field with "<data>"
        Then I remove focus from the "repeatPassword" field
        Then the "allert for field" should not exist
        Then the "repeatPassword" should have border-color "rgb(206, 212, 218)"

        Examples:
        |data           |
        |Qa12345!       |
        |Qa1234567890qA!|

    
    Scenario: Check errors when fields is empty
        Then I click the "<field name>" field
        Then I remove focus from the "<field name>" field
        Then the "<allert>" should contain the text "<text allert>"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        
        Examples:
        |field name    |allert          |text allert               |
        |name          |allert for field|Name required             |
        |lastName      |allert for field|Last name required        |
        |email         |allert for field|Email required            |
        |password      |allert for field|Password required         |
        |repeatPassword|allert for field|Re-enter password required|


    Scenario: Check errors for Name and Last Name fields when user enters incorrect data
        Then I fill "<field name>" field with "<data1>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "<text allert>"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data2>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "<text allert>"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data3>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "<text allert>"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data4>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "<text allert1>"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data5>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "<text allert1>"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"

        Examples:
        |field name|data1|data2|data3|data4|data5                |text allert         |text allert1                                    |
        |name      |234  |сми  |!£   |A    |AleksanderAleksanderA|Name is invalid     |Name has to be from 2 to 20 characters long     |
        |lastName  |789  |куа  |#%^  |O    |AleksanderAleksanderA|Last name is invalid|Last name has to be from 2 to 20 characters long|
    

    Scenario: Check errors for Email field when user enters incorrect data
        Then I fill "email" field with "<email>"
        Then I remove focus from the "email" field
        Then the "allert for field" should contain the text "Email is incorrect"
        Then the "email" should have border-color "rgb(220, 53, 69)"

        Examples:
        |email            |
        |üüüüüöö@gmail.com|
        |ыыыыыыы@gmail.com|
        |!!!!!!!@gmail.com|
        |qqqqqqgmail.com  |
        |qqqqqqqqq@       |
        |qqqqqqqqq@gmail  |


    Scenario: Check errors for Password and Re-enter password fields when user enters incorrect data
        Then I fill "<field name>" field with "<data1>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data2>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data3>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data4>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        Then I clear "<field name>" field
        Then I fill "<field name>" field with "<data5>"
        Then I remove focus from the "<field name>" field
        Then the "allert for field" should contain the text "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        Then the "<field name>" should have border-color "rgb(220, 53, 69)"
        
        Examples:
        |field name    |data1   |data2   |data3  |data4  |data5           |
        |password      |qa123456|QA123456|Qawsedr|Qa12345|Qa1234567890qaws|
        |repeatPassword|qa123456|QA123456|Qawsedr|Qa12345|Qa1234567890qaws|


    Scenario: Check errors Re-enter password field when Re-enter password does't match with Password
        Then I fill "password" field with "Qa12345!"
        Then I fill "repeatPassword" field with "Qa12345!!"
        Then I remove focus from the "repeatPassword" field
        Then the "allert for field" should contain the text "Passwords do not match"
        Then the "repeatPassword" should have border-color "rgb(220, 53, 69)"


    Scenario: Check that the button Register is disabled when user entered some incorrect data
        Then I fill "name" field with "<name data>"
        Then I fill "lastName" field with "<last name data>"
        Then I fill "email" field with "<email data>"
        Then I fill "password" field with "<password data>"
        Then I fill "repeatPassword" field with "<re-enter password data>"
        Then the "registrationButton" should have attribute "disabled"

        Examples:
        |name data|last name data|email data       |password data|re-enter password data|
        |A        |Os            |test123@gmail.com|Qa12345!     |Qa12345!              |
        |Al       |O             |test123@gmail.com|Qa12345!     |Qa12345!              |
        |Al       |Os            |test123gmail.com |Qa12345!     |Qa12345!              |
        |Al       |Os            |test123@gmail.com|Qa12345      |Qa12345!              |
        |Al       |Os            |test123@gmail.com|Qa12345!     |Qa12345               |