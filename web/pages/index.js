export default function Home({ products }) {
  return (
    <>
      <h1>Home page</h1>
      <p>{products}</p>
    </>
  );
}

// Makes API call in the server and returns the page already whit the data, make it available globaly
export const getServerSideProps = async () => {
  return { props: { products: "bannerProducts" } };
};
