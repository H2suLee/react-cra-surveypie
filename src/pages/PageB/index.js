import { Link } from 'react-router-dom';

function PageB() {
  return (
    <>
      <div>B</div>
      <div>
        <Link to="/">to PageB</Link>
      </div>
    </>
  );
}
export default PageB;
