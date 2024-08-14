# Task 17.1



Feature: As a user I want to check all buttons and links in header and footer

    Feature Description Checking all buttons and links in header and footer

    Scenario: Check all buttons in header
        Given I go to homepage
        Then And find all <elementType> in <sectionName> and check their content
        |content     |
        |About       |
        |Contacts    |
        |Guest log in|
        |Sign In     |

        Examples:
        |  elementType  | sectionName | 
        |  buttons      | header      | 
    

    Scenario: Check all links in footer
        Given I go to homepage
        Then And find all <elementType> in <sectionName> and check their content
        |content                                                       |
        |https://www.facebook.com/Hillel.IT.School                     |
        |https://t.me/ithillel_kyiv                                    |
        |https://www.youtube.com/user/HillelITSchool?sub_confirmation=1|
        |https://www.instagram.com/hillel_itschool/                    |
        |https://www.linkedin.com/school/ithillel/                     |
        |https://ithillel.ua                                           |
        |mailto:developer@ithillel.ua                                  |

        Examples:
        |  elementType  | sectionName | 
        |  links        | footer      | 
        

    Scenario: Check all buttons in footer
        Given I go to homepage
        Then And find all <elementType> in <sectionName> and check their content   

        Examples:
        |  elementType  | sectionName | 
        |  buttons      | footer      | 