import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Gratitude - About"
        description="About page for Gratitude App"
      />
    }
  >
    <p>
      Ever since I was a kid my mom raised me to think on the bright side when I
      was having a tough day. She encouraged me to think about what I was
      thankful for when all I wanted to do was dwell in the negatives. Going
      back and forth with her to list something we were grateful for would
      always flip my mood from frustration / depression to content and even joy.
    </p>
    <p>
      This app is a pet project Ive been wanting to create since I first started
      coding. Its features and environment are simplistice and Im not even
      starting from scratch (shout out to{' '}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> for
      provoiding a
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        {' '}
        Nextjs boilerplate template
      </a>
      ), but Im using this to encourage me right after being laid off from a
      work environment I loved. This will be one of many projects that Ill be
      working on, but this one is special to me simply because its a memorial of
      what my mother taught me that has carried me to better places throughout
      my entire life.
    </p>
  </Main>
);

export default About;
