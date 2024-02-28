# @wip
Feature: Checking the cart operation

    Scenario: The user deletes an item from the cart, and the cart becomes empty
        Given I am on the home page
        And I have no items in my cart
        When I select "Women" menu item
        And I click on a product
        And I select color
        And I click the Add to Card button
        Then The quantity of items in the cart should be 1
        And I click the Proceed to checkout button
        Then I click on the delete button
        Then The quantity of items in the cart should be 0