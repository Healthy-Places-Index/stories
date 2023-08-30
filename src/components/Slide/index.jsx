import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { Dropdown, Icon } from 'semantic-ui-react';

import ItemTypes from './ItemTypes';

import styles from './Slide.module.css';

const Slide = ({
  id,
  title,
  index,
  color,
  moveCard,
  handler,
  duplicate,
  newSlide,
  removeSlide,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.SLIDE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.SLIDE,
      id,
      index,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity }}
      role="button"
      tabIndex={index}
      className={`ui segment ${styles.slide} ${color}`}
      onClick={() => handler(id)}
      onKeyPress={() => handler(id)}
    >
      <Dropdown button icon="ellipsis horizontal" className={styles.duplicate}>
        <Dropdown.Menu direction="left">
          <Dropdown.Item onClick={() => newSlide(id)}>
            <Icon name="plus square outline" />
            New Slide
          </Dropdown.Item>
          <Dropdown.Item onClick={() => duplicate(id)}>
            <Icon name="copy outline" />
            Duplicate Slide
          </Dropdown.Item>
          <Dropdown.Item onClick={() => removeSlide(id)}>
            <Icon name="trash alternate outline" />
            Delete Slide
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={styles.slideTitle}>{title}</div>
      <div className={styles.slideNumber}>{index}</div>
    </div>
  );
};

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  index: PropTypes.number.isRequired,
  color: PropTypes.string,
  moveCard: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
  duplicate: PropTypes.func.isRequired,
  newSlide: PropTypes.func.isRequired,
  removeSlide: PropTypes.func.isRequired,
};

Slide.defaultProps = {
  title: '',
  color: '',
};

export default Slide;
