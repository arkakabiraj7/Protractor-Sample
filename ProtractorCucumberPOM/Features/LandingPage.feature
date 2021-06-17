Feature: Test the functionality of landing page

  Scenario: verify page title
    Given When browser  opens up and  navigate to url "https://www.key.com/personal/financial-wellness/index.jsp"
    Then page should be displayed and page title should be "Financial Wellness | KeyBank"


    Scenario: verify logo of page
    Given When browser  opens up and  redirect to url "https://www.key.com/personal/financial-wellness/index.jsp"
    Then logo should be properly displayed


    Scenario: Test signOn Functionlity
     Given When browser  opens up and  get to url "https://www.key.com/personal/financial-wellness/index.jsp"
     Then I click on Sign on
     Then I click on Sign On Button
     Then SecureSignOn Page Should be displayed
     Then I enter userid "userid"
     When Click on Continue
     Then I enter password "pwd" and  page will be displayed
     When I  Click on Continue button 
     Then i should get the wrong userid id message