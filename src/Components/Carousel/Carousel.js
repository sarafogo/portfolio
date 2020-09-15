import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from '../../Images/sara1.png';
import coding from '../../Images/coding.png';
import image3 from '../../Images/sara-2.png';

const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: coding,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
