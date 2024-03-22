import CamperCard from 'components/CamperCard/CamperCard';
import { useCampers } from 'hooks/useCampers';
import css from './Catalog.module.css';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const Catalog = ({ loadMore }) => {
  // const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const campers = useCampers();

  const openModal = () => {
    setOpenDetailsModal(!openDetailsModal);
  };

  // const cards = campers.length;

  // if (!Number.isInteger(cards / 4)) console.log(isLoadMoreDisabled);

  return (
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {campers.length > 0 &&
          campers.map(camper => <CamperCard key={camper._id} data={camper} />)}
      </ul>
      {campers.length > 0 && (
        <Button
          className={css.loadmore_btn}
          onClick={loadMore}
          // disabled={isLoadMoreDisabled}
        >
          Load more
        </Button>
      )}
      <Button className={css.loadmore_btn} onClick={openModal}>
        Open modal
      </Button>
      {openDetailsModal && (
        <Modal openModal={openModal}>
          <p>Привіт!</p>
          {/* <AddColumn closeModal={openModal} /> */}
        </Modal>
      )}
    </section>
  );
};

export default Catalog;
