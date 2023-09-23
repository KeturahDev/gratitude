
- fix authentication page displays
- Remove all guestbook code
- Add schema for user posts
- Connect to database for posts
- Create display list for users posts
- Render display list to home directory
- Add portfolio pieces
- personalize styling

- add following test to about page
```
 it('should have a link to support creativedesignsguru.com', () => {
      render(<Main meta={null}>{null}</Main>);
      const aboutButton = screen.getByText("About");
      aboutButton.click();
      const boilerPlateCompanyRef = screen.getByText("CreativeDesignsGuru");

      //The convincing plee
      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(boilerPlateCompanyRef).toHaveAttribute(
        'href',
        'https://creativedesignsguru.com',
      );
    });
