import DefaultLayout from "../../layout/DefaultLayout";
import styles from "./style.module.css";
import classNames from "classnames";
const HomePage = () => {

  return (
    <DefaultLayout>
      <div className={classNames(styles.testing, "text-2xl justify-center pt-36 flex text-primary font-medium")}>
        This is the HomePage
      </div>
    </DefaultLayout>
  );
};
export default HomePage;
