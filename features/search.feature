# @wip
Feature: Functionality of the search system

    Scenario: The user enters a specific query into the search system
        Given I am on the home page
        When I enter "Blouse" into the search box
        And I clicks on the search button
        Then The search results should be displayed
        Then Each result should contain the text "Blouse"