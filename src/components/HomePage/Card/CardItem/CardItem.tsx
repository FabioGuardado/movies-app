import React from 'react';
import CardItemProps from '../../../../types/CardItemProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem: React.FunctionComponent<CardItemProps> = ({
  itemIcon,
  data,
}) => {
  return (
    <div className="my-1">
      <span className="text-base mr-2">
        <FontAwesomeIcon icon={itemIcon} />
      </span>
      <span className="text-sm">{data}</span>
    </div>
  );
};

export default CardItem;
