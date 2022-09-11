import styles from '~/styles/components/SampleComponent.module.scss';

export const SampleComponent = ({ text }) => {
  return <p className={styles.root}>{text}</p>;
};
