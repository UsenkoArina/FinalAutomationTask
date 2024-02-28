# @wip
Feature: Cart Functionality

    Scenario: The user adds items to the cart, and the quantity of items increases
        Given I am on the home page
        And I have no items in my cart
        When I select "Women -> Evening Dresses" menu item
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        When I select "Women -> Summer Dresses" menu item
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        Then The quantity of items in the cart should be 2
        And The total price in the cart should reflect the correct amount