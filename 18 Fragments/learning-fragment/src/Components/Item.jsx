import styles from "./Item.module.css"

const Item = (props) => {
    // let {foodItems} = props;
  return (
  <li className={`${styles.kgitem} list-group-item`}>
    <span className={styles.kgspan}>
        {props.foodItems}
    </span>
  </li>
  );
};

export default Item;
