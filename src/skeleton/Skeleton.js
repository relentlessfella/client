import React from 'react';
import ContentLoader from 'react-content-loader';

export const CollectionSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={700}
    viewBox="0 0 1000 700"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}>
    <rect x="1" y="6" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="55" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="104" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="153" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="202" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="251" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="300" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="349" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="398" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="447" rx="4" ry="4" width="1000" height="40" />
    <rect x="1" y="560" rx="4" ry="4" width="100" height="30" />
    <rect x="105" y="560" rx="4" ry="4" width="790" height="30" />
    <rect x="900" y="560" rx="4" ry="4" width="100" height="30" />
  </ContentLoader>
);

export const BookSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={700}
    viewBox="0 0 1000 700"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}>
    <rect x="50" y="6" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="55" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="104" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="153" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="202" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="251" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="300" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="349" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="398" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="447" rx="4" ry="4" width="900" height="40" />
    <rect x="50" y="560" rx="4" ry="4" width="50" height="30" />
    <rect x="105" y="560" rx="4" ry="4" width="845" height="30" />
    <rect x="50" y="600" rx="4" ry="4" width="100" height="30" />
    <rect x="105" y="600" rx="4" ry="4" width="845" height="30" />
    <rect x="850" y="640" rx="4" ry="4" width="100" height="30" />
  </ContentLoader>
);
