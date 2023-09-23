// import { useRouter } from 'next/router';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Gratitude"
          description="A Pet Project done By Keturah Howard - React application with the Next.js framework."
        />
      }
    >
      <h3>Under construction 👷‍♀️</h3>
    </Main>
  );
};

export default Index;
