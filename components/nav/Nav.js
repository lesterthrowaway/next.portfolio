import styles from './nav.module.scss';
import { Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Nav = () => {
  return (
    <Flex justify='space-between' align='center' className={styles.container}>
      <div className={styles.left}>
        <a href="top" target='_blank'>Stefan Parenta</a>
      </div>
      <div className={styles.right}>
        <Button w='60%'>
          Toggle Theme
        </Button>
        <Link href="/works">
          <a>Works</a>
        </Link>
      </div>
    </Flex>
  )
}

export default Nav;
