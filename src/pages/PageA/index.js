import { Link } from 'react-router-dom';

function PageA() {
  return (
    <>
      <div>A</div>
      <div>
        <Link to="/2">to PageB</Link>
      </div>
    </>
  );
}
export default PageA;
