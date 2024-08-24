import HookForm from './HookForm';
import './Lesson6.scss';
import Trandition from './Tradition';
import TraditionalForm from './TraditionalForm';
const Lesson6 = (props) => {
  return (
    <div className="lesson6-container">
      <TraditionalForm />
      {/* <HookForm /> */}
      <Trandition />
    </div>
  );
};

export default Lesson6;
