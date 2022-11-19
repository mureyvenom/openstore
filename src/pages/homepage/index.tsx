import React from 'react';
import Button from '../../components/Button';
import CategoryCard from '../../components/CategoryCard';
import CollectionCard from '../../components/CollectionCard';
import HomeBanner from '../../components/HomeBanner';
import Navbar from '../../components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <div className="py-20 px-10">
        <h2 className="text-center text-3xl mb-10">COLLECTIONS</h2>
        <div className="grid md:grid-cols-3 gap-x-5">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
        <div className="mt-10 flex justify-center">
          <Button fill>VIEW ALL</Button>
        </div>
      </div>
      <div className="py-20 px-10">
        <h2 className="text-center text-3xl mb-10">CATEGORIES</h2>
        <div className="grid md:grid-cols-4 gap-x-5">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <div className="mt-10 flex justify-center">
          <Button fill>VIEW ALL</Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
