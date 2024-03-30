import Icons from '../../../images/icons/sprite.svg';

export const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + '#' + id}></use>
    </svg>
  );
};
