
export default function Home({ products }) {
  return (
    <>
      <div className="products-heading">
        <h2>Best selling</h2>
        <p>The bes sound in the market</p>
      </div>
      {products}
      <div className="products-container">
      </div>
    </>
  );
};


// Makes API call in the server and returns the page already whit the data, make it available globaly
export const getServerSideProps = async () => {

  return { props: { products: "bannerProducts" } };
};
