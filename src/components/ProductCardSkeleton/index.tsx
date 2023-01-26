import Skeleton from 'react-loading-skeleton';
import { CardContainer, ImgContainer, TitlePriceContainer } from './style';


const CardSkeleton = () => (
  <CardContainer>
    <ImgContainer>
      <Skeleton width={140} height={120} />
    </ImgContainer>
    <TitlePriceContainer>
      <Skeleton width={100} height={50} baseColor='#a19e9e' />
      <Skeleton width={75} height={30} baseColor='#373737' />
    </TitlePriceContainer>
    <Skeleton height={40} />
    <Skeleton width='120%' height={40} baseColor='#0F52BA' style={{ translate: '-15px' }} />
  </CardContainer>
);

export default CardSkeleton;
