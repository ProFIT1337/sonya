import React from 'react';
import styles from './NoResults.module.scss';

import { ReactComponent as SadIcon } from '../../../../img/sadSearch.svg';
import InStock from '../../../elements/InStock/InStock';

const NoResults = () => {
  return (
    <div>
      <div className={styles.counter}>По Вашему запросу ничего не найдено.</div>
      <div className={styles.image}>
        <SadIcon />
      </div>
      <div className={styles.more}>
        <InStock />
      </div>
    </div>
  );
};

export default NoResults;
