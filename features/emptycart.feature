# @wip

Feature: Cart Functionality

    Scenario: The user deletes an item from the cart, and the cart becomes empty
        Given I am on the home page
        And I have no items in my cart
        When I select "Women -> Evening Dresses" menu item
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        Then The quantity of items in the cart should be 1
        And I click the Proceed to checkout button
        Then I click on the delete button
        Then The quantity of items in the cart should be 0