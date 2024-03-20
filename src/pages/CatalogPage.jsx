import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import React from 'react';

const CatalogPage = () => {
  return (
    <>
      <Filters />
      <Catalog />
    </>
  );
};

export default CatalogPage;
