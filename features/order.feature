@wip
Feature: Checkout Process

    Scenario: Unregistered user proceeding with checkout
        Given I am on the home page
        And I have no items in my cart
        When I select "Women" menu item
        And I click on a product
        And I select color
        And I click the Add to Card button
        And I click on the close window button
        And I click on the cart button
        And I click the Proceed to checkout button
        Then I am on the authentication page
